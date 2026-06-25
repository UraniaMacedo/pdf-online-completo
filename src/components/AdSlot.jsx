import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/siteConfig.js";

const ADSENSE_CLIENT = siteConfig.adsensePublisherId;

function isLocalhost() {
  if (typeof window === "undefined") return true;

  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
}

export default function AdSlot({
  label = "Espaço reservado para anúncio",
  slot = "",
  format = "auto",
  responsive = true
}) {
  const adRef = useRef(null);
  const [hasAdError, setHasAdError] = useState(false);

  const canRenderAdsense =
    Boolean(ADSENSE_CLIENT) &&
    Boolean(slot) &&
    typeof window !== "undefined" &&
    !isLocalhost();

  useEffect(() => {
    if (!canRenderAdsense || !adRef.current) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      setHasAdError(true);
      console.warn("AdSense não carregou neste bloco:", error);
    }
  }, [canRenderAdsense, slot]);

  if (!canRenderAdsense || hasAdError) {
    return (
      <div className="ad-slot" aria-label={label}>
        <span>{label}</span>
        <small>
          Google AdSense será ativado depois da aprovação ou após configurar o
          ID do bloco de anúncio.
        </small>
      </div>
    );
  }

  return (
    <div className="ad-slot" aria-label={label}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
