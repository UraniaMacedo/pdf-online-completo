import { siteConfig } from "../config/siteConfig.js";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer" style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
      <strong>{siteConfig.name}</strong>
      <p style={{ fontSize: '14px', color: '#888', margin: '10px 0' }}>
        © {currentYear} {siteConfig.name} - Ferramentas de PDF Profissionais.
      </p>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
        <a href="#privacidade">Privacidade</a>
        <a href="#termos">Termos</a>
      </nav>
      <small>Contato: {siteConfig.contactEmail}</small>
    </footer>
  );
}
