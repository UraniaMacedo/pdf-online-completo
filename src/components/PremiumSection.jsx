import { siteConfig } from "../config/siteConfig.js";

export default function PremiumSection({ session, premiumStatus, onOpenAuth }) {
  const contactSubject = encodeURIComponent("Ativação do Plano Premium - PDF AGORA");
  const contactBody = encodeURIComponent(
    session?.user?.email
      ? `Olá, quero ativar o Plano Premium do PDF AGORA.\n\nE-mail da minha conta: ${session.user.email}`
      : "Olá, quero ativar o Plano Premium do PDF AGORA."
  );

  const contactUrl = `mailto:${siteConfig.contactEmail}?subject=${contactSubject}&body=${contactBody}`;

  return (
    <section className="premium-section" id="planos">
      <div className="premium-copy">
        <span className="badge">Plano Premium</span>

        <h2>Mais liberdade para usar o PDF AGORA</h2>

        <p>
          Use o PDF AGORA gratuitamente ou ative o Premium para navegar sem
          anúncios e ter acesso prioritário aos novos recursos da plataforma.
        </p>

        {premiumStatus?.isPremium ? (
          <div className="premium-warning">
            Seu plano Premium está ativo. Os espaços de anúncio ficam ocultos
            enquanto você estiver conectado nesta conta.
          </div>
        ) : (
          <div className="premium-warning">
            O Premium está disponível para contas cadastradas. Nesta fase
            inicial, a ativação é feita por solicitação de contato.
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

          <strong>R$ 40/ano</strong>

          <p>Para quem usa PDF com frequência e quer mais praticidade.</p>

          <ul>
            <li>Sem anúncios ao entrar na conta Premium</li>
            <li>Acesso prioritário a novos recursos</li>
            <li>Preparado para arquivos maiores</li>
            <li>Preparado para conversões em lote</li>
            <li>Conta identificada por e-mail</li>
          </ul>

          {premiumStatus?.isPremium ? (
            <button className="primary-button small" disabled>
              Premium ativo
            </button>
          ) : session?.user ? (
            <a className="primary-button small" href={contactUrl}>
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