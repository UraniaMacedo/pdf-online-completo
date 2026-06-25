import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

function isActivePremiumSubscription(subscription) {
  if (!subscription) return false;

  const activeStatuses = ["active", "trialing"];
  const status = String(subscription.status || "").toLowerCase();

  if (!activeStatuses.includes(status)) {
    return false;
  }

  const periodEnd = subscription.current_period_end
    ? new Date(subscription.current_period_end)
    : null;

  return !periodEnd || periodEnd > new Date();
}

function isActiveLegacyPremium(row) {
  if (!row?.is_premium) return false;

  const premiumUntil = row?.premium_until ? new Date(row.premium_until) : null;
  return !premiumUntil || premiumUntil > new Date();
}

export function usePremiumStatus(session) {
  const [premiumStatus, setPremiumStatus] = useState({
    loading: false,
    isPremium: false,
    plan: "free",
    premiumUntil: null
  });

  useEffect(() => {
    let isActive = true;

    async function loadPremiumStatus() {
      if (!session?.user) {
        setPremiumStatus({
          loading: false,
          isPremium: false,
          plan: "free",
          premiumUntil: null
        });
        return;
      }

      setPremiumStatus((current) => ({
        ...current,
        loading: true
      }));

      const userEmail = session.user.email?.toLowerCase();

      const { data: stripeSubscription, error: stripeError } = await supabase
        .from("premium_subscriptions")
        .select("status, plan, current_period_end")
        .eq("email", userEmail)
        .maybeSingle();

      if (!isActive) return;

      if (!stripeError && stripeSubscription) {
        const isPremium = isActivePremiumSubscription(stripeSubscription);

        setPremiumStatus({
          loading: false,
          isPremium,
          plan: isPremium ? stripeSubscription.plan || "premium" : "free",
          premiumUntil: stripeSubscription.current_period_end || null
        });

        return;
      }

      if (stripeError) {
        console.warn("Não foi possível consultar premium_subscriptions:", stripeError);
      }

      const { data: legacySubscription, error: legacyError } = await supabase
        .from("user_subscriptions")
        .select("is_premium, plan, premium_until")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (!isActive) return;

      if (legacyError) {
        console.warn("Não foi possível consultar user_subscriptions:", legacyError);
        setPremiumStatus({
          loading: false,
          isPremium: false,
          plan: "free",
          premiumUntil: null
        });
        return;
      }

      const isPremium = isActiveLegacyPremium(legacySubscription);

      setPremiumStatus({
        loading: false,
        isPremium,
        plan: isPremium ? legacySubscription?.plan || "premium" : "free",
        premiumUntil: legacySubscription?.premium_until || null
      });
    }

    loadPremiumStatus();

    return () => {
      isActive = false;
    };
  }, [session]);

  return premiumStatus;
}
