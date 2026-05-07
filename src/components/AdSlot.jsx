export default function AdSlot({ label = "Espaço reservado para anúncio" }) {
  return (
    <div className="ad-slot" aria-label={label}>
      <span>{label}</span>
      <small>Google AdSense será ativado depois da aprovação.</small>
    </div>
  );
}
