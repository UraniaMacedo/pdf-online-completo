import { siteConfig } from "../config/siteConfig.js";

export default function Header() {
  return (
    <header className="hero">
      <nav className="topbar">
        <strong>{siteConfig.name}</strong>

        <div>
          <a href="#ferramentas">Ferramentas</a>
          <a href="#planos">Premium</a>
          <a href="#faq">FAQ</a>
        </div>
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
