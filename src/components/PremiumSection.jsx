import { siteConfig } from "../config/siteConfig.js";

export default function PremiumSection() {
  return (
    <section className="premium-section" id="planos">
      <div>
        <span className="badge">Plano Premium</span>
        <h2>Use sem anúncios e com mais liberdade</h2>
        <p>
          O Premium pode liberar arquivos maiores, uso ilimitado, ausência de
          anúncios e recursos avançados. A primeira versão pode ficar focada em
          anúncios e ativar o pagamento depois.
        </p>
      </div>

      <div className="price-card">
        <h3>Premium</h3>
        <strong>Em breve</strong>
        <ul>
          <li>Sem anúncios</li>
          <li>Mais limite de uso</li>
          <li>Arquivos maiores</li>
          <li>Ferramentas avançadas</li>
        </ul>

        {siteConfig.premiumCheckoutUrl ? (
          <a className="primary-button small" href={siteConfig.premiumCheckoutUrl}>
            Assinar Premium
          </a>
        ) : (
          <button className="primary-button small" disabled>
            Assinatura em breve
          </button>
        )}
      </div>
    </section>
  );
}
