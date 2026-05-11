import { siteConfig } from "../config/siteConfig.js";

export default function LegalPages() {
  return (
    <section className="legal-grid">
      <article id="sobre">
        <h2>Sobre o {siteConfig.name}</h2>
        <p>
          O {siteConfig.name} é uma plataforma multi-ferramentas dedicada à gestão e edição de documentos digitais. 
          Nossa missão é democratizar o acesso a ferramentas de produtividade de alto nível, permitindo que estudantes, 
          profissionais liberais e empresas gerenciem seus fluxos de trabalho em PDF de forma totalmente online, 
          rápida e segura, sem a necessidade de instalação de softwares pesados ou licenças caras.
        </p>
      </article>

      <article id="contato">
        <h2>Suporte e Contato</h2>
        <p>
          Valorizamos o feedback de nossos usuários. Se você encontrar qualquer problema técnico, tiver sugestões de 
          melhoria ou desejar informações sobre parcerias e planos empresariais, nossa equipe está à disposição. 
          Entre em contato diretamente pelo e-mail oficial: 
          <strong> {siteConfig.contactEmail}</strong>. Respondemos em até 24 horas úteis.
        </p>
      </article>

      <article id="privacidade">
        <h2>Política de Privacidade</h2>
        <p>
          A sua privacidade é nossa prioridade. Todos os arquivos enviados para o {siteConfig.name} são processados 
          via criptografia SSL e removidos automaticamente de nossos servidores após a conclusão da tarefa. 
          Não visualizamos, compartilhamos ou armazenamos o conteúdo dos seus documentos.
        </p>
        <p>
          <strong>Cookies e Publicidade:</strong> Este site utiliza o Google AdSense para veicular anúncios. 
          O Google utiliza cookies para exibir anúncios baseados em visitas anteriores do usuário. Você pode 
          desativar a publicidade personalizada acessando as Configurações de Anúncios do Google.
        </p>
      </article>

      <article id="termos">
        <h2>Termos de Serviço</h2>
        <p>
          Ao utilizar o {siteConfig.name}, você concorda em cumprir estes termos. O serviço é fornecido "como está", 
          como uma ferramenta de auxílio à produtividade. O usuário retém todos os direitos de propriedade intelectual 
          sobre seus arquivos. Não nos responsabilizamos por perdas de dados decorrentes de falhas de conexão ou 
          uso indevido das ferramentas. É proibido o uso da plataforma para processar arquivos que contenham 
          conteúdo ilícito ou que violem direitos de terceiros.
        </p>
      </article>
    </section>
  );
}