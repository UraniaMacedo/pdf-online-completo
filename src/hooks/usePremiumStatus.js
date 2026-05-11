export default function PremiumSection({ session, premiumStatus, onOpenAuth }) {
  
  const handleCheckout = () => {
    if (!session) {
      onOpenAuth('signup'); 
      return;
    }
    window.location.href = "https://buy.stripe.com/7sYaEQ1iW9tu2sV84I00000";
  };

  return (
    <section id="planos" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', borderRadius: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', color: '#333' }}>Conta PRO - PDF AGORA</h2>
        <p style={{ color: '#666' }}>A solução profissional para os teus documentos.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        
        {/* Card Free */}
        <div style={{ display: 'flex', flexDirection: 'column', background: '#fff', padding: '30px', borderRadius: '15px', width: '280px', border: '1px solid #ddd' }}>
          <h3>Plano Grátis</h3>
          <div style={{ fontSize: '1.5rem', margin: '15px 0' }}>0€</div>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555', marginBottom: '20px' }}>
            <li>✓ Ferramentas base</li>
            <li>✓ Até 10MB</li>
            <li>⚠ Com publicidade</li>
          </ul>
          <button 
            style={{ width: '100%', padding: '12px', marginTop: 'auto', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f1f1f1', color: '#666', fontWeight: 'bold' }}
            disabled
          >
            Plano Atual
          </button>
        </div>

        {/* Card Premium */}
        <div style={{ display: 'flex', flexDirection: 'column', background: '#fff', padding: '30px', borderRadius: '15px', width: '300px', border: '2px solid #7b8b45', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', right: '15px', background: '#7b8b45', color: '#fff', padding: '2px 12px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 'bold' }}>POPULAR</div>
          <h3>Plano PRO</h3>
          <div style={{ fontSize: '1.5rem', margin: '15px 0', color: '#7b8b45', fontWeight: 'bold' }}>1,99€ <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'normal' }}>/mês</span></div>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', lineHeight: '2', marginBottom: '20px' }}>
            <li>✓ <strong>Sem anúncios</strong></li>
            <li>✓ Arquivos até 100MB</li>
            <li>✓ Velocidade prioritária</li>
            <li>✓ Suporte em Português</li>
          </ul>
          <button 
            onClick={handleCheckout}
            style={{ width: '100%', padding: '12px', marginTop: 'auto', borderRadius: '8px', border: 'none', backgroundColor: '#7b8b45', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Aderir ao PRO
          </button>
        </div>

      </div>
    </section>
  );
}
