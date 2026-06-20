import { siteConfig } from "../config/siteConfig.js";

export default function LegalPages() {
  const updatedAt = "19/06/2026";

  const STRIPE_MONTHLY_PAYMENT_LINK =
    "https://buy.stripe.com/7sYaEQ1iW9tu2sV84I00000";

  // Cole aqui o link do produto anual quando criar no Stripe.
  // Enquanto estiver vazio, o botão anual abre o e-mail de contato.
  const STRIPE_ANNUAL_PAYMENT_LINK = "";

  function handlePremiumClick(planType = "monthly") {
    const paymentLink =
      planType === "annual"
        ? STRIPE_ANNUAL_PAYMENT_LINK
        : STRIPE_MONTHLY_PAYMENT_LINK;

    if (!paymentLink) {
      const subject = encodeURIComponent("Assinatura anual PDF AGORA");
      const body = encodeURIComponent(
        "Olá, tenho interesse no Plano PRO Anual do PDF AGORA. Gostaria de receber o link de pagamento."
      );

      window.location.href =
        "mailto:" +
        siteConfig.contactEmail +
        "?subject=" +
        subject +
        "&body=" +
        body;

      return;
    }

    window.location.href = paymentLink;
  }

  const tools = [
    {
      title: "Juntar PDF Online",
      text: "Unifique múltiplos relatórios, contratos ou apostilas em um único arquivo de forma sequencial organizada. Nosso sistema processa a junção mantendo a paginação original, as fontes incorporadas e a disposição dos elementos gráficos sem distorções."
    },
    {
      title: "Dividir PDF de Forma Precisa",
      text: "Extraia intervalos específicos de páginas ou separe folhas isoladas de documentos volumosos. Ideal para isolar capítulos de livros, separar contracheques ou extrair anexos específicos para compartilhamento direcionado e seguro."
    },
    {
      title: "Comprimir PDF Otimizado",
      text: "Reduza drasticamente o peso digital de seus arquivos através de algoritmos que otimizam imagens e removem metadados desnecessários. Facilita o envio em portais governamentais, e-mails e plataformas com limites estritos de upload."
    },
    {
      title: "Conversão Inteligente de Arquivos",
      text: "Transforme formatos de imagem comuns como JPG e PNG em arquivos PDF perfeitamente encapsulados e alinhados. O conversor preserva as proporções visuais e prepara o arquivo final para armazenamento digital corporativo ou acadêmico."
    },
    {
      title: "Organização e Praticidade Documental",
      text: "Gerencie e ordene seus fluxos de documentos diários sem complexidade. Otimize a estrutura dos seus arquivos para que eles fiquem leves, fáceis de indexar, rápidos de carregar em dispositivos móveis e organizados no seu armazenamento."
    },
    {
      title: "Acesso Web sem Instalações",
      text: "Execute todas as operações administrativas e de edição diretamente pelo navegador de internet. Nossa aplicação elimina riscos associados ao download de executáveis e garante compatibilidade instantânea com qualquer sistema operacional."
    }
  ];

  return (
    <section id="informacoes" style={styles.wrapper}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <a href="#sobre" style={styles.navLink}>Sobre</a>
          <a href="#como-funciona" style={styles.navLink}>Como funciona</a>
          <a href="#planos" style={styles.navLink}>Planos Premium</a>
          <a href="#recursos" style={styles.navLink}>Recursos</a>
          <a href="#seguranca" style={styles.navLink}>Segurança</a>
          <a href="#privacidade" style={styles.navLink}>Privacidade</a>
          <a href="#cookies" style={styles.navLink}>Cookies</a>
          <a href="#termos" style={styles.navLink}>Termos</a>
          <a href="#transparencia" style={styles.navLink}>Transparência</a>
          <a href="#faq-institucional" style={styles.navLink}>Perguntas frequentes</a>
          <a href="#contato" style={styles.navLink}>Contato</a>
        </nav>

        <section id="sobre" style={styles.section}>
          <span style={styles.badge}>PDF AGORA</span>
          <h2 style={styles.title}>Sobre o PDF AGORA</h2>

          <p style={styles.paragraph}>
            O PDF AGORA é uma plataforma tecnológica de utilidade pública
            desenvolvida para simplificar e democratizar o manuseio, a edição e
            a otimização de arquivos no formato PDF. O propósito fundamental do
            ecossistema é oferecer ferramentas ágeis, intuitivas e funcionais
            para estudantes, profissionais, empresas, professores, servidores
            públicos e trabalhadores autônomos.
          </p>

          <p style={styles.paragraph}>
            Nossa plataforma elimina gargalos tradicionais do mercado de
            softwares de escritório, fornecendo uma interface leve e direta
            focada na resolução de demandas imediatas do cotidiano operacional,
            como unificação de páginas, fragmentação de arquivos, compressão de
            documentos e preparação de arquivos para distribuição eletrônica.
          </p>

          <p style={styles.paragraph}>
            Adotamos uma postura de transparência e conformidade com boas
            práticas de navegação, privacidade e publicidade digital. Esta
            página concentra informações institucionais, política de
            privacidade, política de cookies, termos legais de uso e canais
            diretos de suporte.
          </p>

          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Praticidade Operacional</h3>
              <p>
                Módulos utilitários otimizados para resolver demandas
                recorrentes de documentos em poucos cliques.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Acesso Direto e Seguro</h3>
              <p>
                Execução baseada no navegador web, dispensando instalações de
                pacotes complementares ou softwares pesados.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Conteúdo de Valor Claro</h3>
              <p>
                Informações completas a respeito de usabilidade, políticas de
                anúncios, privacidade e conformidade institucional.
              </p>
            </div>
          </div>
        </section>

        <section id="como-funciona" style={styles.section}>
          <h2 style={styles.title}>Como funciona o Processamento de Dados</h2>

          <p style={styles.paragraph}>
            O funcionamento do PDF AGORA baseia-se em rotinas executadas na
            camada do navegador. A estrutura foi projetada para ler propriedades
            do arquivo PDF e aplicar modificações de forma ágil.
          </p>

          <div style={styles.steps}>
            <div style={styles.step}>
              <strong>1. Seleção do Módulo</strong>
              <p>
                O usuário escolhe a ferramenta adequada ao seu objetivo, como
                juntar, dividir, comprimir, organizar, converter imagem para PDF
                ou assinar documentos.
              </p>
            </div>

            <div style={styles.step}>
              <strong>2. Upload e Leitura Estrutural</strong>
              <p>
                Ao selecionar ou arrastar o documento, o sistema realiza a
                leitura inicial da estrutura do PDF, como páginas, fontes,
                imagens e metadados disponíveis.
              </p>
            </div>

            <div style={styles.step}>
              <strong>3. Execução da Ação</strong>
              <p>
                A aplicação manipula a estrutura do documento conforme a função
                ativada, reordenando páginas, aplicando compressão, convertendo
                imagens ou preparando o documento para download.
              </p>
            </div>

            <div style={styles.step}>
              <strong>4. Conferência e Download</strong>
              <p>
                O arquivo final processado é disponibilizado para download.
                Recomendamos que o usuário confira o documento gerado antes de
                utilizá-lo em canais oficiais ou profissionais.
              </p>
            </div>
          </div>
        </section>

        <section id="planos" style={styles.section}>
          <span style={styles.badge}>Conta PRO</span>
          <h2 style={styles.title}>Planos de Assinatura e Sustentabilidade</h2>

          <p style={styles.paragraph}>
            Para manter a plataforma PDF AGORA ativa, segura e constantemente
            atualizada, adotamos um modelo híbrido de monetização. O site pode
            ser utilizado gratuitamente com exibição de anúncios publicitários.
            Para usuários recorrentes que desejam navegação mais limpa,
            oferecemos planos de assinatura PRO.
          </p>

          <div style={styles.planGrid}>
            <div style={styles.planCard}>
              <h3>Plano Grátis</h3>
              <div style={styles.freePrice}>R$ 0</div>

              <ul style={styles.list}>
                <li>Acesso às ferramentas essenciais do ecossistema</li>
                <li>Exibição integrada de anúncios publicitários</li>
                <li>Ideal para demandas esporádicas e tarefas rápidas</li>
                <li>Processamento executado diretamente no navegador</li>
              </ul>
            </div>

            <div style={styles.proCard}>
              <span style={styles.popular}>MENSAL</span>
              <h3>Plano PRO Mensal</h3>

              <div style={styles.proPrice}>
                R$ 1,99 <span style={styles.month}>/mês</span>
              </div>

              <ul style={styles.list}>
                <li>Remoção dos blocos de anúncios do Google</li>
                <li>Interface mais limpa e focada na produtividade</li>
                <li>Pagamento seguro pelo Stripe</li>
                <li>Ideal para uso individual recorrente</li>
              </ul>

              <p style={styles.smallText}>
                O plano mensal é indicado para quem utiliza ferramentas PDF com
                frequência e prefere pagar um valor reduzido mês a mês. O e-mail
                usado no pagamento será utilizado para identificar o acesso PRO.
              </p>

              <button
                type="button"
                onClick={() => handlePremiumClick("monthly")}
                style={styles.proButton}
              >
                Assinar Plano PRO Mensal
              </button>
            </div>

            <div style={styles.proCard}>
              <span style={styles.popular}>ANUAL</span>
              <h3>Plano PRO Anual</h3>

              <div style={styles.proPrice}>
                R$ 23,88 <span style={styles.month}>/ano</span>
              </div>

              <ul style={styles.list}>
                <li>Remoção dos blocos de anúncios durante o período contratado</li>
                <li>Pagamento anual simplificado</li>
                <li>Mais praticidade para usuários frequentes</li>
                <li>Preparado para novos recursos premium</li>
              </ul>

              <p style={styles.smallText}>
                O plano anual é indicado para quem pretende usar o PDF AGORA
                durante todo o ano com navegação mais limpa e acesso PRO
                contínuo.
              </p>

              <button
                type="button"
                onClick={() => handlePremiumClick("annual")}
                style={styles.proButton}
              >
                Assinar Plano PRO Anual
              </button>
            </div>
          </div>
        </section>

        <section id="recursos" style={styles.section}>
          <h2 style={styles.title}>Recursos Disponíveis e Detalhamento Técnico</h2>

          <p style={styles.paragraph}>
            Cada ferramenta disponível no PDF AGORA foi pensada para resolver
            tarefas comuns com arquivos PDF, respeitando a estrutura original
            dos documentos sempre que possível.
          </p>

          <div style={styles.featureGrid}>
            {tools.map((item) => (
              <div key={item.title} style={styles.featureCard}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    marginBottom: "8px",
                    fontWeight: "700"
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: "1.6",
                    color: "#4a5568"
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="seguranca" style={styles.section}>
          <h2 style={styles.title}>Segurança, Governança e Responsabilidade Legal</h2>

          <p style={styles.paragraph}>
            A governança de dados é tratada com seriedade no PDF AGORA.
            Orientamos os usuários a avaliar previamente a natureza dos arquivos
            manipulados. O usuário deve agir com prudência ao lidar com
            documentos sensíveis, confidenciais ou restritos.
          </p>

          <p style={styles.paragraph}>
            Documentações contendo dados pessoais sensíveis, registros médicos,
            segredos industriais, credenciais de acesso, dados bancários ou
            processos sob segredo de justiça demandam cautela redobrada.
          </p>

          <div style={styles.notice}>
            <strong>Cláusula de Isenção de Responsabilidade:</strong> O PDF
            AGORA atua como fornecedor de ferramentas tecnológicas de
            processamento documental. Não realizamos auditoria sobre o teor dos
            arquivos e não nos responsabilizamos por uso indevido feito por
            iniciativa do usuário.
          </div>
        </section>

        <section id="privacidade" style={styles.section}>
          <h2 style={styles.title}>Política de Privacidade</h2>

          <p style={styles.paragraph}>
            Esta Política de Privacidade descreve as práticas adotadas pelo PDF
            AGORA em relação à coleta, tratamento, armazenamento e proteção de
            informações geradas durante a navegação em nosso domínio.
          </p>

          <h3 style={styles.subtitle}>1. Coleta Automatizada de Dados Técnicos</h3>

          <p style={styles.paragraph}>
            Durante o tráfego regular pelas páginas, podemos registrar
            informações técnicas como páginas acessadas, data e horário de
            acesso, versão do navegador, tipo de dispositivo, resolução de tela,
            endereço IP aproximado e eventos básicos de uso. Quando houver
            assinatura da Conta PRO, podemos utilizar o e-mail informado no
            pagamento para identificar o acesso premium.
          </p>

          <h3 style={styles.subtitle}>2. Finalidade do Tratamento de Informações</h3>

          <p style={styles.paragraph}>
            Os dados técnicos coletados servem para monitoramento operacional,
            correção de bugs, otimização de performance da aplicação web,
            prevenção de ataques, segurança da plataforma e estatísticas
            agregadas sobre o uso das ferramentas.
          </p>

          <h3 style={styles.subtitle}>3. Tratamento de Arquivos e Metadados</h3>

          <p style={styles.paragraph}>
            Os arquivos enviados para processamento são utilizados para executar
            a ação solicitada pelo usuário, como juntar, dividir, comprimir,
            organizar, converter ou assinar documentos. O PDF AGORA não vende
            documentos, não comercializa arquivos enviados e não utiliza o
            conteúdo dos documentos para venda de dados pessoais.
          </p>

          <h3 style={styles.subtitle}>4. Compartilhamento de Dados com Fornecedores e Anúncios</h3>

          <p style={styles.paragraph}>
            Não vendemos dados cadastrais ou e-mails de usuários. Podemos
            compartilhar dados operacionais necessários com provedores de
            infraestrutura, pagamentos e segurança, incluindo o Stripe para
            processamento de pagamentos.
          </p>

          <p style={styles.paragraph}>
            Este site pode exibir anúncios programáticos através do programa de
            parceiros <strong>Google AdSense</strong>. O Google e seus parceiros
            podem usar cookies para veicular anúncios com base nas visitas
            anteriores do usuário a este ou a outros endereços da internet. O
            usuário pode gerenciar ou desativar anúncios personalizados visitando
            a página oficial de{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#7b8b45", fontWeight: "bold" }}
            >
              Configurações de anúncios do Google
            </a>
            .
          </p>

          <h3 style={styles.subtitle}>5. Direitos Legais do Titular dos Dados</h3>

          <p style={styles.paragraph}>
            O usuário pode solicitar informações sobre dados associados ao seu
            pagamento, correção de cadastro, exclusão de dados ou esclarecimentos
            sobre tratamento de dados pessoais entrando em contato pelo e-mail
            oficial informado nesta página.
          </p>

          <p style={styles.smallText}>
            Última atualização oficial desta política: {updatedAt}
          </p>
        </section>

        <section id="cookies" style={styles.section}>
          <h2 style={styles.title}>Política de Cookies e Tecnologias de Rastreamento</h2>

          <p style={styles.paragraph}>
            Cookies são pequenos arquivos de texto que um site pode armazenar no
            navegador do usuário. Eles podem auxiliar em segurança, preferências
            de navegação, análise de desempenho, pagamentos e exibição de
            publicidade.
          </p>

          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Cookies Técnicos Essenciais</h3>
              <p>
                Podem ser utilizados para manter segurança, funcionamento básico
                da plataforma e processamento de pagamentos.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Cookies de Medição</h3>
              <p>
                Podem ser utilizados para compreender fluxos de navegação
                agregada, desempenho das páginas, taxa de erros nas ferramentas
                e melhorias gerais da experiência do usuário.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Cookies de Publicidade</h3>
              <p>
                Podem ser utilizados pelo Google AdSense e parceiros para exibir
                anúncios, medir desempenho publicitário e melhorar a relevância
                das campanhas exibidas.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            O usuário pode configurar o navegador para bloquear cookies, excluir
            cookies antigos ou emitir alertas quando cookies forem armazenados.
            A desativação integral de cookies pode afetar recursos de pagamento,
            autenticação futura e preferências da plataforma.
          </p>
        </section>

        <section id="termos" style={styles.section}>
          <h2 style={styles.title}>Termos de Uso e Condições de Serviço</h2>

          <p style={styles.paragraph}>
            Ao acessar, navegar ou utilizar qualquer ferramenta contida no
            domínio do PDF AGORA, o usuário declara estar ciente e concorda com
            as obrigações, termos e condições estabelecidas nesta página.
          </p>

          <h3 style={styles.subtitle}>1. Licença de Uso Autorizada</h3>

          <p style={styles.paragraph}>
            Concede-se ao usuário uma licença de acesso temporária, revogável,
            não exclusiva e não transferível para utilizar as ferramentas de
            edição de arquivos PDF para finalidades lícitas.
          </p>

          <h3 style={styles.subtitle}>2. Práticas e Condutas Vedadas</h3>

          <p style={styles.paragraph}>
            É proibido utilizar a infraestrutura do PDF AGORA para atos
            fraudulentos, transmissão de arquivos maliciosos, violação de
            direitos autorais, ataques contra servidores, tentativas de
            manipulação artificial de anúncios ou qualquer prática que viole
            leis aplicáveis.
          </p>

          <h3 style={styles.subtitle}>3. Disponibilidade Tecnológica do Serviço</h3>

          <p style={styles.paragraph}>
            Nosso empenho técnico está direcionado a manter o ecossistema online
            estável. No entanto, o usuário compreende que a plataforma pode
            apresentar instabilidades temporárias, manutenções emergenciais,
            falhas de conexão ou limitações de processamento.
          </p>
        </section>

        <section id="transparencia" style={styles.section}>
          <h2 style={styles.title}>Política de Transparência Publicitária</h2>

          <p style={styles.paragraph}>
            O PDF AGORA mantém separação clara entre conteúdo funcional,
            ferramentas de edição e espaços publicitários. Nenhum bloco de
            anúncio deve ser posicionado de maneira a induzir cliques acidentais
            ou confundir anúncios com botões de ação.
          </p>

          <p style={styles.paragraph}>
            Os anúncios exibidos para usuários gratuitos ajudam a financiar
            hospedagem, manutenção, melhorias técnicas e desenvolvimento de
            novos recursos. Usuários assinantes do Plano PRO contam com remoção
            dos blocos de anúncio durante o período ativo da assinatura.
          </p>
        </section>

        <section id="faq-institucional" style={styles.section}>
          <h2 style={styles.title}>Perguntas Frequentes (FAQ Institucional)</h2>

          <div style={styles.faqItem}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>
              Como a plataforma PDF AGORA monetiza e mantém o serviço gratuito?
            </h3>
            <p style={{ color: "#4a5568", marginTop: "6px" }}>
              O PDF AGORA pode operar com anúncios para usuários gratuitos e
              planos PRO para quem deseja remover anúncios. A receita ajuda a
              manter hospedagem, manutenção técnica e evolução da plataforma.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>
              Existe obrigatoriedade de instalação de programas adicionais?
            </h3>
            <p style={{ color: "#4a5568", marginTop: "6px" }}>
              Não. A proposta central do PDF AGORA é o uso direto pelo navegador
              web. As ferramentas foram projetadas para reduzir dependência de
              softwares pesados e instalações locais.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>
              As ferramentas podem ser aplicadas em rotinas profissionais?
            </h3>
            <p style={{ color: "#4a5568", marginTop: "6px" }}>
              Sim, desde que o usuário respeite os termos de uso, possua
              autorização para manipular os documentos e confira os arquivos
              finais antes de utilizá-los em rotinas oficiais, corporativas ou
              administrativas.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>
              O PDF AGORA realiza venda do conteúdo dos documentos?
            </h3>
            <p style={{ color: "#4a5568", marginTop: "6px" }}>
              Não. O PDF AGORA não vende documentos enviados pelos usuários e
              não comercializa o conteúdo dos arquivos processados nas
              ferramentas.
            </p>
          </div>
        </section>

        <section id="contato" style={styles.section}>
          <h2 style={styles.title}>Canais de Atendimento e Contato Oficial</h2>

          <p style={styles.paragraph}>
            Para dúvidas técnicas, suporte à Conta PRO, solicitações relacionadas
            a privacidade, exercício de direitos de titulares de dados ou reporte
            de falhas operacionais, entre em contato pelo canal eletrônico
            oficial:
          </p>

          <p style={styles.contactEmail}>
            <a
              href={"mailto:" + siteConfig.contactEmail}
              style={{ color: "#7b8b45", textDecoration: "none" }}
            >
              {siteConfig.contactEmail}
            </a>
          </p>

          <p style={styles.smallText}>
            Para agilizar o atendimento, descreva o motivo do contato com
            clareza no assunto do e-mail e inclua capturas de tela quando se
            tratar de bugs de layout ou funcionamento.
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
    marginBottom: "10px",
    fontWeight: "700"
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
  proButton: {
    width: "100%",
    marginTop: "18px",
    padding: "14px 18px",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#7b8b45",
    color: "#ffffff",
    fontWeight: "800",
    fontSize: "1rem",
    cursor: "pointer"
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