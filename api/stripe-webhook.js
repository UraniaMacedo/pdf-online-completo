const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Variável de ambiente ausente: ${name}`);
  }

  return value;
}

const stripe = new Stripe(getRequiredEnv("STRIPE_SECRET_KEY"));

const supabaseAdmin = createClient(
  getRequiredEnv("SUPABASE_URL"),
  getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY")
);

async function readRawBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks);
}

function getPlanFromSession(session) {
  if (session.metadata && session.metadata.plan) {
    return session.metadata.plan;
  }

  const amountTotal = session.amount_total || 0;

  if (amountTotal >= 2000) {
    return "annual";
  }

  return "monthly";
}

function getPremiumStatusFromStripeStatus(stripeStatus) {
  const activeStatuses = ["active", "trialing"];

  if (activeStatuses.includes(stripeStatus)) {
    return "active";
  }

  if (stripeStatus === "canceled") {
    return "canceled";
  }

  if (stripeStatus === "past_due") {
    return "past_due";
  }

  if (stripeStatus === "unpaid") {
    return "unpaid";
  }

  return stripeStatus || "unknown";
}

async function savePremiumSubscription(session) {
  const email = session.customer_details?.email || session.customer_email;

  if (!email) {
    console.warn("Checkout aprovado, mas sem e-mail:", session.id);
    return;
  }

  const plan = getPlanFromSession(session);

  const stripeCustomerId =
    typeof session.customer === "string" ? session.customer : null;

  const stripeSubscriptionId =
    typeof session.subscription === "string" ? session.subscription : null;

  const { error } = await supabaseAdmin
    .from("premium_subscriptions")
    .upsert(
      {
        email: email.toLowerCase(),
        status: "active",
        plan,
        stripe_customer_id: stripeCustomerId,
        stripe_subscription_id: stripeSubscriptionId,
        stripe_checkout_session_id: session.id,
        updated_at: new Date().toISOString()
      },
      {
        onConflict: "email"
      }
    );

  if (error) {
    throw error;
  }

  console.log("Assinatura premium salva:", {
    email: email.toLowerCase(),
    plan,
    checkoutSessionId: session.id
  });
}

async function updateSubscription(subscription) {
  const stripeCustomerId =
    typeof subscription.customer === "string" ? subscription.customer : null;

  if (!stripeCustomerId) {
    console.warn("Assinatura sem customer:", subscription.id);
    return;
  }

  const status = getPremiumStatusFromStripeStatus(subscription.status);

  const currentPeriodEnd = subscription.current_period_end
    ? new Date(subscription.current_period_end * 1000).toISOString()
    : null;

  const { error } = await supabaseAdmin
    .from("premium_subscriptions")
    .update({
      status,
      stripe_subscription_id: subscription.id,
      current_period_end: currentPeriodEnd,
      updated_at: new Date().toISOString()
    })
    .eq("stripe_customer_id", stripeCustomerId);

  if (error) {
    throw error;
  }

  console.log("Assinatura premium atualizada:", {
    stripeCustomerId,
    stripeSubscriptionId: subscription.id,
    status
  });
}

async function cancelSubscription(subscription) {
  const stripeCustomerId =
    typeof subscription.customer === "string" ? subscription.customer : null;

  if (!stripeCustomerId) {
    console.warn("Cancelamento sem customer:", subscription.id);
    return;
  }

  const { error } = await supabaseAdmin
    .from("premium_subscriptions")
    .update({
      status: "canceled",
      stripe_subscription_id: subscription.id,
      updated_at: new Date().toISOString()
    })
    .eq("stripe_customer_id", stripeCustomerId);

  if (error) {
    throw error;
  }

  console.log("Assinatura premium cancelada:", {
    stripeCustomerId,
    stripeSubscriptionId: subscription.id
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const signature = req.headers["stripe-signature"];

  if (!signature) {
    return res.status(400).json({
      error: "Missing Stripe signature"
    });
  }

  let event;

  try {
    const rawBody = await readRawBody(req);

    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      getRequiredEnv("STRIPE_WEBHOOK_SECRET")
    );
  } catch (error) {
    console.error("Erro ao validar assinatura do Stripe:", error.message);

    return res.status(400).json({
      error: "Invalid Stripe signature"
    });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        await savePremiumSubscription(event.data.object);
        break;
      }

      case "customer.subscription.created": {
        await updateSubscription(event.data.object);
        break;
      }

      case "customer.subscription.updated": {
        await updateSubscription(event.data.object);
        break;
      }

      case "customer.subscription.deleted": {
        await cancelSubscription(event.data.object);
        break;
      }

      default: {
        console.log("Evento Stripe ignorado:", event.type);
      }
    }

    return res.status(200).json({
      received: true
    });
  } catch (error) {
    console.error("Erro ao processar webhook:", error);

    return res.status(500).json({
      error: "Webhook processing failed"
    });
  }
};