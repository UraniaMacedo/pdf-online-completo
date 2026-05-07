import { siteConfig } from "../config/siteConfig.js";

export default function LegalPages() {
  return (
    <section className="legal-grid">
      <article id="sobre">
        <h2>Sobre</h2>
        <p>
          O {siteConfig.name} oferece ferramentas simples para editar arquivos
          PDF online. O objetivo é ajudar estudantes, profissionais e empresas a
          resolver tarefas rápidas sem instalar programas.
        </p>
      </article>

      <article id="contato">
        <h2>Contato</h2>
        <p>
          Para dúvidas, sugestões ou solicitações, entre em contato pelo e-mail:
          <strong> {siteConfig.contactEmail}</strong>.
        </p>
      </article>

      <article id="privacidade">
        <h2>Política de Privacidade</h2>
        <p>
          As operações principais são realizadas no navegador. Podemos usar
          cookies e tecnologias de terceiros para anúncios, estatísticas e
          melhoria da experiência. Ao usar o site, o usuário concorda com essas
          práticas.
        </p>
      </article>

      <article id="termos">
        <h2>Termos de Uso</h2>
        <p>
          O usuário é responsável pelos arquivos que utiliza nas ferramentas. O
          serviço é fornecido como ferramenta auxiliar e não garante adequação
          para todos os fins legais, técnicos ou profissionais.
        </p>
      </article>
    </section>
  );
}
