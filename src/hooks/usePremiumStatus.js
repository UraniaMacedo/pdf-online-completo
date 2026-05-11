import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

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

      const { data, error } = await supabase
        .from("user_subscriptions")
        .select("is_premium, plan, premium_until")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (!isActive) return;

      if (error) {
        console.error(error);
        setPremiumStatus({
          loading: false,
          isPremium: false,
          plan: "free",
          premiumUntil: null
        });
        return;
      }

      const premiumUntil = data?.premium_until ? new Date(data.premium_until) : null;
      const isStillValid = !premiumUntil || premiumUntil > new Date();

      setPremiumStatus({
        loading: false,
        isPremium: Boolean(data?.is_premium) && isStillValid,
        plan: data?.plan || "free",
        premiumUntil: data?.premium_until || null
      });
    }

    loadPremiumStatus();

    return () => {
      isActive = false;
    };
  }, [session]);

  return premiumStatus;
}