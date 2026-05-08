import { siteConfig } from "../config/siteConfig.js";

export default function PremiumSection() {
  return (
    <section className="premium-section" id="planos">
      <div className="premium-copy">
        <span className="badge">Plano Premium</span>

        <h2>Mais liberdade para usar o PDF AGORA</h2>

        <p>
          O PDF AGORA pode ser usado gratuitamente com anúncios. O plano Premium
          será ideal para quem precisa editar arquivos maiores, usar as
          ferramentas com mais frequência e navegar sem anúncios.
        </p>

        <div className="premium-warning">
          O plano Premium está sendo preparado. Em breve, usuários poderão usar
          mais recursos, com menos limites e sem anúncios.
        </div>
      </div>

      <div className="plans-grid">
        <div className="plan-card free-plan">
          <span className="plan-label">Gratuito</span>
          <h3>Plano Grátis</h3>
          <strong>R$ 0</strong>
          <p>Para quem precisa resolver tarefas rápidas com PDF.</p>

          <ul>
            <li>Ferramentas básicas de PDF</li>
            <li>Juntar, dividir e converter arquivos</li>
            <li>Compressão segura e forte</li>
            <li>Uso com anúncios</li>
            <li>Ideal para uso ocasional</li>
          </ul>

          <a className="secondary-button" href="#ferramentas">
            Usar grátis
          </a>
        </div>

        <div className="plan-card premium-plan">
          <span className="plan-label highlight">Premium</span>
          <h3>Plano Premium</h3>
          <strong>Em breve</strong>
          <p>Para quem usa PDF com frequência e quer mais praticidade.</p>

          <ul>
            <li>Sem anúncios</li>
            <li>Arquivos maiores</li>
            <li>Mais usos por dia</li>
            <li>Conversões em lote</li>
            <li>Recursos avançados</li>
          </ul>

          {siteConfig.premiumCheckoutUrl ? (
            <a
              className="primary-button small"
              href={siteConfig.premiumCheckoutUrl}
              target="_blank"
              rel="noreferrer"
            >
              Assinar Premium
            </a>
          ) : (
            <button className="primary-button small" disabled>
              Em breve
            </button>
          )}
        </div>
      </div>
    </section>
  );
}