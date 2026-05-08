import { siteConfig } from "../config/siteConfig.js";
import UserMenu from "./UserMenu.jsx";

export default function Header({ session, onOpenAuth, onSignOut }) {
  return (
    <header className="hero">
      <nav className="topbar">
        <strong>{siteConfig.name}</strong>

        <div className="topbar-links">
          <a href="#ferramentas">Ferramentas</a>
          <a href="#planos">Premium</a>
          <a href="#faq">FAQ</a>
        </div>

        <UserMenu
          session={session}
          onOpenAuth={onOpenAuth}
          onSignOut={onSignOut}
        />
      </nav>

      <div className="badge">Ferramentas PDF Online</div>

      <h1>Ferramentas gratuitas para editar PDF online</h1>

      <p>
        Junte, divida, comprima, converta, organize e assine PDFs diretamente
        no navegador, sem instalar programas.
      </p>
    </header>
  );
}