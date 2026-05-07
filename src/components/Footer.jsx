import { siteConfig } from "../config/siteConfig.js";

export default function Footer() {
  return (
    <footer className="footer">
      <strong>{siteConfig.name}</strong>

      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
        <a href="#privacidade">Privacidade</a>
        <a href="#termos">Termos</a>
      </nav>
    </footer>
  );
}
