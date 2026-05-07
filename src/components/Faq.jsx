export default function Faq() {
  return (
    <section className="content-section" id="faq">
      <h2>Perguntas frequentes</h2>

      <details>
        <summary>Meus arquivos são enviados para algum servidor?</summary>
        <p>
          Nesta versão, as operações principais são feitas no próprio navegador.
          Isso torna o uso mais rápido e reduz a necessidade de enviar arquivos
          para um servidor.
        </p>
      </details>

      <details>
        <summary>Preciso instalar algum programa?</summary>
        <p>Não. As ferramentas funcionam diretamente pelo navegador.</p>
      </details>

      <details>
        <summary>O site é gratuito?</summary>
        <p>
          Sim. A proposta inicial é oferecer uso gratuito com anúncios. Um plano
          Premium pode ser ativado depois para remover anúncios e liberar recursos
          avançados.
        </p>
      </details>

      <details>
        <summary>A assinatura no PDF tem validade jurídica?</summary>
        <p>
          A ferramenta adiciona uma assinatura visual ao documento. Ela não
          substitui assinatura digital certificada ICP-Brasil ou outro certificado
          digital oficial.
        </p>
      </details>
    </section>
  );
}
