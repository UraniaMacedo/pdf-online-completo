import { siteConfig } from "../config/siteConfig.js";

export default function PremiumSection({ session, premiumStatus, onOpenAuth }) {
  const checkoutUrl = siteConfig.premiumCheckoutUrl;
  const annualCheckoutUrl = siteConfig.premiumAnnualCheckoutUrl || checkoutUrl;

  return (
    <section className="premium-section" id="planos">
      <div className="premium-copy">
        <span className="badge">Plano Premium</span>

        <h2>Mais liberdade para usar o PDF AGORA</h2>

        <p>
          Use o PDF AGORA gratuitamente com PDFs de até {siteConfig.freePlanPdfPageLimit} páginas ou ative o Premium para processar PDFs maiores, remover anúncios da conta e ter acesso prioritário aos novos recursos da plataforma.
        </p>

        {premiumStatus?.isPremium ? (
          <div className="premium-warning">
            Seu plano Premium está ativo. Os espaços de anúncio ficam ocultos enquanto você estiver conectado nesta conta.
          </div>
        ) : (
          <div className="premium-warning">
            Para reconhecimento automático, use no checkout o mesmo e-mail usado na sua conta do PDF AGORA.
          </div>
        )}
      </div>

      <div className="plans-grid">
        <div className="plan-card free-plan">
          <span className="plan-label">Gratuito</span>

          <h3>Plano Grátis</h3>

          <strong>R$ 0</strong>

          <p>Para quem precisa resolver tarefas rápidas com PDF.</p>

          <ul>
            <li>Processamento de PDFs de até {siteConfig.freePlanPdfPageLimit} páginas</li>
            <li>Juntar, dividir, comprimir, organizar, assinar e converter</li>
            <li>Uso com banners de anúncio</li>
            <li>Ideal para uso ocasional</li>
          </ul>

          <a className="secondary-button" href="#ferramentas">
            Usar grátis
          </a>
        </div>

        <div className="plan-card premium-plan">
          <span className="plan-label highlight">Premium</span>

          <h3>Plano Premium</h3>

          <strong>{siteConfig.premiumAnnualPrice}/ano</strong>

          <p>Para quem usa PDF com frequência e quer mais praticidade.</p>

          <ul>
            <li>Processamento de PDFs maiores</li>
            <li>Sem anúncios ao entrar na conta Premium</li>
            <li>Acesso prioritário a novos recursos</li>
            <li>Conta identificada por e-mail</li>
          </ul>

          {premiumStatus?.isPremium ? (
            <button className="primary-button small" disabled>
              Premium ativo
            </button>
          ) : checkoutUrl ? (
            <a
              className="primary-button small"
              href={annualCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Assinar Premium
            </a>
          ) : session?.user ? (
            <a
              className="primary-button small"
              href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Ativação Premium PDF AGORA")}`}
            >
              Solicitar ativação
            </a>
          ) : (
            <button
              className="primary-button small"
              onClick={() => onOpenAuth("signup")}
            >
              Criar conta Premium
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
