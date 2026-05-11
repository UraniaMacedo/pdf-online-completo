export default function PremiumSection({ session, onOpenAuth }) {
  const handleCheckout = () => {
    if (!session) {
      onOpenAuth('signup');
      return;
    }
    window.location.href = "https://buy.stripe.com/7sYaEQ1iW9tu2sV84I00000";
  };

  return (
    <section id="planos" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', color: '#333' }}>Planos PDF AGORA</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        
        {/* Card Grátis */}
        <div style={{ display: 'flex', flexDirection: 'column', background: '#fff', padding: '25px', borderRadius: '15px', width: '280px', border: '1px solid #ddd' }}>
          <h3>Grátis</h3>
          <div style={{ fontSize: '1.5rem', margin: '15px 0' }}>0€</div>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', flexGrow: 1 }}>
            <li>✓ Ferramentas base</li>
            <li>✓ Até 10MB</li>
            <li>⚠ Com anúncios</li>
          </ul>
          <button style={{ width: '100%', padding: '10px', marginTop: '20px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#eee', cursor: 'not-allowed' }} disabled>
            Plano Atual
          </button>
        </div>

        {/* Card PRO */}
        <div style={{ display: 'flex', flexDirection: 'column', background: '#fff', padding: '25px', borderRadius: '15px', width: '280px', border: '2px solid #7b8b45' }}>
          <h3 style={{ color: '#7b8b45' }}>PRO</h3>
          <div style={{ fontSize: '1.5rem', margin: '15px 0' }}>1,99€ <span style={{ fontSize: '0.8rem' }}>/mês</span></div>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', flexGrow: 1 }}>
            <li>✓ <strong>Sem anúncios</strong></li>
            <li>✓ Até 100MB</li>
            <li>✓ Prioridade total</li>
          </ul>
          <button 
            onClick={handleCheckout}
            style={{ width: '100%', padding: '10px', marginTop: '20px', borderRadius: '8px', border: 'none', backgroundColor: '#7b8b45', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Assinar PRO
          </button>
        </div>

      </div>
    </section>
  );
}