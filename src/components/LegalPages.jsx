export default function LegalPages() {
  const updatedAt = "12/05/2026";

  const tools = [
    {
      title: "Juntar PDF",
      text: "Una dois ou mais arquivos PDF em um único documento, facilitando o envio, arquivamento e organização."
    },
    {
      title: "Dividir PDF",
      text: "Separe páginas específicas de um PDF para compartilhar apenas o que for necessário."
    },
    {
      title: "Comprimir PDF",
      text: "Reduza o tamanho de arquivos PDF para facilitar envio por e-mail, formulários e plataformas digitais."
    },
    {
      title: "Converter arquivos",
      text: "Prepare documentos em formatos mais adequados para leitura, envio ou armazenamento."
    },
    {
      title: "Organizar documentos",
      text: "Mantenha seus arquivos mais claros, leves e fáceis de localizar no dia a dia."
    },
    {
      title: "Uso online",
      text: "Acesse as ferramentas diretamente pelo navegador, sem instalação de programas pesados."
    }
  ];

  return (
    <section id="informacoes" style={styles.wrapper}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <a href="#sobre" style={styles.navLink}>Sobre</a>
          <a href="#recursos" style={styles.navLink}>Recursos</a>
          <a href="#planos" style={styles.navLink}>Planos</a>
          <a href="#privacidade" style={styles.navLink}>Privacidade</a>
          <a href="#cookies" style={styles.navLink}>Cookies</a>
          <a href="#termos" style={styles.navLink}>Termos</a>
          <a href="#contato" style={styles.navLink}>Contato</a>
        </nav>

        <section id="sobre" style={styles.section}>
          <span style={styles.badge}>PDF AGORA</span>
          <h2 style={styles.title}>Sobre o PDF AGORA</h2>

          <p style={styles.paragraph}>
            O PDF AGORA é uma plataforma online criada para facilitar tarefas
            comuns com documentos PDF. O objetivo é oferecer ferramentas simples,
            rápidas e acessíveis para estudantes, profissionais, empresas,
            professores, autônomos e qualquer pessoa que precise organizar
            documentos digitais.
          </p>

          <p style={styles.paragraph}>
            A plataforma foi desenvolvida para ajudar em tarefas do dia a dia,
            como juntar arquivos, dividir documentos, reduzir tamanho de PDFs e
            preparar materiais para envio, impressão, estudo, trabalho ou
            armazenamento.
          </p>

          <p style={styles.paragraph}>
            Nosso foco é oferecer uma experiência clara, com navegação simples,
            informações transparentes, conteúdo útil e páginas institucionais
            completas para orientar o usuário sobre funcionamento, privacidade,
            cookies, termos de uso e contato.
          </p>

          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Praticidade</h3>
              <p>Ferramentas organizadas para resolver tarefas comuns com PDF.</p>
            </div>

            <div style={styles.card}>
              <h3>Acesso direto</h3>
              <p>Uso pelo navegador, sem necessidade de instalar programas extras.</p>
            </div>

            <div style={styles.card}>
              <h3>Conteúdo claro</h3>
              <p>Informações sobre uso, segurança, anúncios, privacidade e contato.</p>
            </div>
          </div>
        </section>

        <section id="recursos" style={styles.section}>
          <h2 style={styles.title}>Recursos disponíveis</h2>

          <p style={styles.paragraph}>
            O PDF AGORA reúne ferramentas úteis para quem trabalha com documentos
            digitais. A ideia é tornar o processo mais simples para usuários que
            precisam preparar arquivos para envio, organização ou compartilhamento.
          </p>

          <div style={styles.featureGrid}>
            {tools.map((item) => (
              <div key={item.title} style={styles.featureCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" style={styles.section}>
          <h2 style={styles.title}>Como funciona</h2>

          <div style={styles.steps}>
            <div style={styles.step}>
              <strong>1. Escolha a ferramenta</strong>
              <p>Selecione a opção desejada de acordo com o que deseja fazer com o arquivo PDF.</p>
            </div>

            <div style={styles.step}>
              <strong>2. Envie o documento</strong>
              <p>Adicione o arquivo que será utilizado e confira se selecionou o documento correto.</p>
            </div>

            <div style={styles.step}>
              <strong>3. Execute a ação</strong>
              <p>Use a ferramenta para gerar o resultado desejado de forma simples e objetiva.</p>
            </div>

            <div style={styles.step}>
              <strong>4. Confira o resultado</strong>
              <p>Antes de compartilhar ou armazenar o arquivo final, revise o documento gerado.</p>
            </div>
          </div>
        </section>

        <section id="seguranca" style={styles.section}>
          <h2 style={styles.title}>Segurança e responsabilidade</h2>

          <p style={styles.paragraph}>
            O PDF AGORA busca oferecer uma experiência segura, clara e confiável.
            Ainda assim, o usuário deve avaliar o tipo de documento que envia e
            evitar o uso de arquivos extremamente sensíveis quando não houver
            necessidade.
          </p>

          <p style={styles.paragraph}>
            Documentos com dados pessoais, informações bancárias, contratos,
            documentos oficiais, prontuários, processos ou informações sigilosas
            devem ser tratados com cuidado. O usuário é responsável por verificar
            se possui autorização para usar, editar ou compartilhar os arquivos.
          </p>

          <div style={styles.notice}>
            <strong>Recomendação:</strong> sempre confira o arquivo final antes
            de enviar para terceiros, clientes, empresas, órgãos públicos ou
            instituições de ensino.
          </div>
        </section>

        <section id="planos" style={styles.section}>
          <span style={styles.badge}>Conta PRO</span>
          <h2 style={styles.title}>Planos do PDF AGORA</h2>

          <p style={styles.paragraph}>
            O PDF AGORA pode ser utilizado gratuitamente com anúncios. Também
            existe a opção de Conta PRO para usuários que desejam uma experiência
            mais limpa, sem anúncios na conta.
          </p>

          <div style={styles.planGrid}>
            <div style={styles.planCard}>
              <h3>Plano Grátis</h3>
              <div style={styles.freePrice}>0€</div>
              <ul style={styles.list}>
                <li>Acesso às ferramentas principais</li>
                <li>Uso com exibição de anúncios</li>
                <li>Ideal para tarefas rápidas</li>
                <li>Funciona direto no navegador</li>
              </ul>
            </div>

            <div style={styles.proCard}>
              <span style={styles.popular}>POPULAR</span>
              <h3>Plano PRO</h3>
              <div style={styles.proPrice}>
                1,99€ <span style={styles.month}>/mês</span>
              </div>
              <ul style={styles.list}>
                <li>Experiência sem anúncios na conta PRO</li>
                <li>Navegação mais limpa</li>
                <li>Conta identificada por e-mail</li>
                <li>Preparado para novos recursos premium</li>
              </ul>
              <p style={styles.smallText}>
                A ativação da Conta PRO pode ser solicitada pelo canal oficial
                de contato durante esta fase inicial.
              </p>
            </div>
          </div>
        </section>

        <section id="privacidade" style={styles.section}>
          <h2 style={styles.title}>Política de Privacidade</h2>

          <p style={styles.paragraph}>
            A privacidade dos usuários é importante para o PDF AGORA. Esta
            política explica como informações podem ser tratadas durante o uso
            do site, incluindo dados técnicos de navegação, recursos de conta,
            anúncios e funcionamento das ferramentas.
          </p>

          <h3 style={styles.subtitle}>Informações que podemos coletar</h3>
          <p style={styles.paragraph}>
            Podemos coletar informações técnicas, como páginas acessadas, data e
            horário de acesso, tipo de navegador, dispositivo utilizado, endereço
            IP aproximado e interações básicas com a plataforma. Quando o usuário
            utiliza recursos de conta, podemos tratar o e-mail informado para
            identificação e acesso.
          </p>

          <h3 style={styles.subtitle}>Como usamos as informações</h3>
          <p style={styles.paragraph}>
            As informações podem ser usadas para manter o funcionamento do site,
            melhorar a experiência do usuário, entender quais ferramentas são
            mais utilizadas, prevenir abusos, corrigir falhas e permitir recursos
            de conta ou assinatura.
          </p>

          <h3 style={styles.subtitle}>Arquivos enviados</h3>
          <p style={styles.paragraph}>
            Os arquivos enviados às ferramentas são utilizados para executar a
            ação solicitada pelo usuário. O PDF AGORA não vende documentos,
            arquivos ou conteúdos enviados pelos usuários.
          </p>

          <h3 style={styles.subtitle}>Publicidade e terceiros</h3>
          <p style={styles.paragraph}>
            Terceiros, incluindo o Google, podem usar cookies para veicular
            anúncios com base em visitas anteriores do usuário a este site ou a
            outros sites. Esses cookies ajudam a exibir anúncios mais relevantes
            e medir a efetividade da publicidade.
          </p>

          <p style={styles.paragraph}>
            O usuário pode desativar a personalização de anúncios acessando as
            configurações de anúncios do Google em{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noreferrer"
            >
              Configurações de anúncios
            </a>
            .
          </p>

          <h3 style={styles.subtitle}>Direitos do usuário</h3>
          <p style={styles.paragraph}>
            O usuário pode entrar em contato para solicitar informações sobre
            privacidade, correção de dados, remoção de dados relacionados à conta
            ou esclarecimentos sobre o uso da plataforma.
          </p>

          <p style={styles.smallText}>Última atualização: {updatedAt}</p>
        </section>

        <section id="cookies" style={styles.section}>
          <h2 style={styles.title}>Política de Cookies</h2>

          <p style={styles.paragraph}>
            Cookies são pequenos arquivos armazenados no navegador do usuário.
            Eles ajudam sites a lembrar preferências, manter sessões, melhorar a
            navegação, medir acessos e exibir anúncios.
          </p>

          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Cookies essenciais</h3>
              <p>Necessários para funcionamento básico do site e navegação.</p>
            </div>

            <div style={styles.card}>
              <h3>Cookies de análise</h3>
              <p>Ajudam a entender o uso das páginas e melhorar a experiência.</p>
            </div>

            <div style={styles.card}>
              <h3>Cookies de publicidade</h3>
              <p>Podem ser usados por parceiros, incluindo o Google, para anúncios.</p>
            </div>
          </div>

          <p style={styles.paragraph}>
            O usuário pode gerenciar, limitar ou bloquear cookies diretamente
            nas configurações do navegador. O bloqueio de determinados cookies
            pode afetar algumas funcionalidades do site.
          </p>
        </section>

        <section id="termos" style={styles.section}>
          <h2 style={styles.title}>Termos de Uso</h2>

          <p style={styles.paragraph}>
            Ao acessar e utilizar o PDF AGORA, o usuário concorda em usar a
            plataforma de forma legal, responsável e respeitando estes termos.
          </p>

          <h3 style={styles.subtitle}>Uso permitido</h3>
          <p style={styles.paragraph}>
            O usuário pode utilizar o site para organizar, converter, comprimir
            ou preparar documentos próprios, documentos públicos ou arquivos para
            os quais possua autorização de uso.
          </p>

          <h3 style={styles.subtitle}>Uso não permitido</h3>
          <p style={styles.paragraph}>
            Não é permitido utilizar o PDF AGORA para atividades ilegais, envio
            de arquivos maliciosos, violação de direitos autorais, fraude,
            tentativa de prejudicar o funcionamento do site ou manipulação de
            anúncios.
          </p>

          <h3 style={styles.subtitle}>Responsabilidade do usuário</h3>
          <p style={styles.paragraph}>
            O usuário é responsável pelos arquivos que envia, pelo conteúdo dos
            documentos e pela conferência do resultado final. O PDF AGORA não se
            responsabiliza por uso indevido de documentos, erros de conferência
            ou compartilhamento inadequado de arquivos pelo usuário.
          </p>

          <h3 style={styles.subtitle}>Disponibilidade</h3>
          <p style={styles.paragraph}>
            Buscamos manter o site disponível e funcional, mas podem ocorrer
            instabilidades, manutenções, falhas técnicas ou limitações
            temporárias.
          </p>
        </section>

        <section id="transparencia" style={styles.section}>
          <h2 style={styles.title}>Transparência sobre anúncios</h2>

          <p style={styles.paragraph}>
            O PDF AGORA pode exibir anúncios para manter parte do funcionamento
            gratuito da plataforma. Os espaços publicitários devem aparecer de
            forma separada do conteúdo principal, sem serem confundidos com
            botões de download, ferramentas ou ações principais do site.
          </p>

          <p style={styles.paragraph}>
            A presença de anúncios ajuda a manter o acesso gratuito às
            ferramentas, enquanto a Conta PRO oferece uma experiência sem
            anúncios para usuários que preferem navegação mais limpa.
          </p>
        </section>

        <section id="faq-institucional" style={styles.section}>
          <h2 style={styles.title}>Perguntas frequentes</h2>

          <div style={styles.faqItem}>
            <h3>O PDF AGORA é gratuito?</h3>
            <p>
              Sim. O site possui uso gratuito com anúncios. Também existe a
              Conta PRO, voltada para quem deseja uma experiência sem anúncios.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3>Preciso instalar algum programa?</h3>
            <p>
              Não. A proposta do PDF AGORA é oferecer ferramentas acessíveis pelo
              navegador.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3>Posso usar para documentos de trabalho?</h3>
            <p>
              Sim, desde que você tenha autorização para usar e processar os
              documentos. Sempre revise o resultado final antes de enviar.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3>O site vende meus arquivos?</h3>
            <p>
              Não. O PDF AGORA não vende documentos ou arquivos enviados pelos
              usuários.
            </p>
          </div>
        </section>

        <section id="contato" style={styles.section}>
          <h2 style={styles.title}>Contato</h2>

          <p style={styles.paragraph}>
            Para dúvidas sobre o PDF AGORA, suporte, privacidade, termos de uso,
            solicitação relacionada a dados ou ativação da Conta PRO, entre em
            contato pelo e-mail oficial:
          </p>

          <p style={styles.contactEmail}>
            <a href="mailto:contato@pdfagora.com.br">
              contato@pdfagora.com.br
            </a>
          </p>

          <p style={styles.smallText}>
            Ao entrar em contato, descreva o motivo da solicitação com clareza
            para facilitar o atendimento.
          </p>
        </section>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: "70px 20px",
    backgroundColor: "#f8f6f1",
    color: "#1f2933"
  },
  container: {
    maxWidth: "1180px",
    margin: "0 auto"
  },
  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "18px",
    marginBottom: "28px"
  },
  navLink: {
    color: "#52616b",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "0.95rem"
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: "26px",
    padding: "42px 30px",
    marginBottom: "28px",
    boxShadow: "0 16px 38px rgba(0,0,0,0.05)"
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#eef2e0",
    color: "#607236",
    borderRadius: "999px",
    padding: "7px 14px",
    fontSize: "0.78rem",
    fontWeight: "800",
    marginBottom: "12px"
  },
  title: {
    fontSize: "2rem",
    lineHeight: "1.2",
    margin: "0 0 18px"
  },
  subtitle: {
    fontSize: "1.22rem",
    marginTop: "28px",
    marginBottom: "10px"
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.8",
    color: "#3d4b53",
    marginBottom: "16px"
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    marginTop: "24px"
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "22px",
    backgroundColor: "#f8f6f1"
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "18px",
    marginTop: "24px"
  },
  featureCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "24px",
    backgroundColor: "#ffffff"
  },
  steps: {
    display: "grid",
    gap: "16px",
    marginTop: "20px"
  },
  step: {
    borderLeft: "5px solid #7b8b45",
    backgroundColor: "#f8f6f1",
    borderRadius: "14px",
    padding: "18px 20px",
    lineHeight: "1.7"
  },
  notice: {
    marginTop: "20px",
    backgroundColor: "#fff8e5",
    border: "1px solid #f2d58a",
    borderRadius: "16px",
    padding: "18px",
    lineHeight: "1.7"
  },
  planGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginTop: "26px"
  },
  planCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "28px",
    backgroundColor: "#ffffff"
  },
  proCard: {
    border: "2px solid #7b8b45",
    borderRadius: "20px",
    padding: "28px",
    backgroundColor: "#ffffff",
    position: "relative"
  },
  popular: {
    position: "absolute",
    top: "-14px",
    right: "22px",
    backgroundColor: "#7b8b45",
    color: "#ffffff",
    borderRadius: "999px",
    padding: "6px 14px",
    fontSize: "0.78rem",
    fontWeight: "800"
  },
  freePrice: {
    fontSize: "1.8rem",
    fontWeight: "800",
    marginBottom: "16px"
  },
  proPrice: {
    fontSize: "1.9rem",
    color: "#7b8b45",
    fontWeight: "900",
    marginBottom: "16px"
  },
  month: {
    fontSize: "0.9rem",
    color: "#52616b",
    fontWeight: "400"
  },
  list: {
    lineHeight: "1.9",
    paddingLeft: "20px",
    color: "#3d4b53"
  },
  smallText: {
    color: "#52616b",
    fontSize: "0.95rem",
    lineHeight: "1.7",
    marginTop: "18px"
  },
  faqItem: {
    borderBottom: "1px solid #e5e7eb",
    padding: "16px 0",
    lineHeight: "1.7"
  },
  contactEmail: {
    fontSize: "1.15rem",
    fontWeight: "800"
  }
};