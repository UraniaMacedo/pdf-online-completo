import { siteConfig } from "../config/siteConfig.js";

export default function UpgradeModal({ details, session, onClose, onOpenAuth }) {
  const limit = details?.limit || siteConfig.freePlanPdfPageLimit || 3;
  const totalPages = details?.totalPages;
  const toolName = details?.toolName || "esta ferramenta";
  const checkoutUrl = siteConfig.premiumCheckoutUrl;

  return (
    <div className="auth-overlay" role="dialog" aria-modal="true">
      <div className="auth-modal upgrade-modal">
        <button className="auth-close" onClick={onClose} aria-label="Fechar">
          ×
        </button>

        <span className="badge">Limite do plano grátis</span>

        <h2>Este PDF precisa do Premium</h2>

        <p>
          No plano grátis, você pode processar PDFs de até {limit} páginas.
          {totalPages ? ` O arquivo selecionado tem ${totalPages} páginas no total.` : ""}
        </p>

        <div className="upgrade-benefits">
          <strong>Com o Premium, você libera:</strong>
          <ul>
            <li>Processamento de PDFs maiores em {toolName}</li>
            <li>Navegação sem banners de anúncio ao entrar na conta Premium</li>
            <li>Acesso prioritário aos próximos recursos da plataforma</li>
          </ul>
        </div>

        {checkoutUrl ? (
          <a
            className="primary-button"
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Assinar Premium agora
          </a>
        ) : (
          <a
            className="primary-button"
            href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Ativação Premium PDF AGORA")}`}
          >
            Solicitar ativação Premium
          </a>
        )}

        {!session?.user && (
          <button
            className="auth-switch"
            onClick={() => {
              onClose();
              onOpenAuth?.("signup");
            }}
          >
            Criar conta antes de assinar
          </button>
        )}

        <small className="upgrade-note">
          Use no checkout o mesmo e-mail da sua conta no PDF AGORA para o sistema reconhecer o Premium automaticamente.
        </small>
      </div>
    </div>
  );
}
