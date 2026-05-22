import { useEffect, useState } from "react";

export default function LegalPages({ session, onOpenAuth }) {
  const updatedAt = "22/05/2026";
  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/7sYaEQ1iW9tu2sV84I00000";

  function handlePremiumClick() {
    if (!session) {
      if (typeof onOpenAuth === "function") {
        onOpenAuth("login");
      }
      return;
    }
    window.location.href = STRIPE_PAYMENT_LINK;
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
      text: "Reduza drasticamente o peso digital (tamanho em megabytes) de seus arquivos através de algoritmos que otimizam imagens e removem metadados desnecessários. Facilita o envio em portais governamentais, e-mails e plataformas com limites estritos de upload."
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
      text: "Execute todas as operações administrativas e de edição diretamente pelo navegador de internet. Nossa aplicação elimina riscos de segurança associados ao download de executáveis e garante compatibilidade instantânea com qualquer sistema operacional."
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

        {/* SOBRE */}
        <section id="sobre" style={styles.section}>
          <span style={styles.badge}>PDF AGORA</span>
          <h2 style={styles.title}>Sobre o PDF AGORA</h2>
          <p style={styles.paragraph}>
            O PDF AGORA é uma plataforma tecnológica de utilidade pública desenvolvida para simplificar e democratizar o manuseio, a edição e a otimização de arquivos no formato PDF (Portable Document Format). O propósito fundamental do ecossistema é oferecer ferramentas ágeis, intuitivas e totalmente funcionais para estudantes que organizam trabalhos acadêmicos, profissionais que gerenciam fluxos de contratos, empresas em fase de digitalização, além de professores, servidores públicos e trabalhadores autônomos.
          </p>
          <p style={styles.paragraph}>
            Nossa plataforma elimina os gargalos tradicionais do mercado de softwares de escritório, fornecendo uma interface leve e direta focada na resolução de demandas imediatas do cotidiano operacional, tais como a unificação sequencial de páginas, fragmentação de arquivos extensos, compressão de peso digital para adequação a limites de upload e preparação de insumos para canais de distribuição eletrônica.
          </p>
          <p style={styles.paragraph}>
            Adotamos uma postura de absoluta transparência e conformidade com as diretrizes globais de navegação. Esta página concentra todas as informações institucionais, políticas regulatórias de privacidade, termos legais de prestação de serviços e canais diretos de suporte, assegurando que o usuário navegue com total clareza quanto aos mecanismos de monetização, tratamento de metadados e segurança de sua navegação.
          </p>

          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Praticidade Operacional</h3>
              <p>Módulos utilitários otimizados detalhadamente para resolver demandas recorrentes de documentos em poucos cliques, sem telas de carregamento complexas.</p>
            </div>
            <div style={styles.card}>
              <h3>Acesso Direto e Seguro</h3>
              <p>Execução baseada estritamente no ecossistema do navegador web, dispensando instalações de pacotes complementares ou softwares pesados no sistema operacional.</p>
            </div>
            <div style={styles.card}>
              <h3>Conteúdo de Valor Claro</h3>
              <p>Informações completas e detalhadas a respeito da usabilidade, políticas de veiculação de anúncios, gestão de privacidade e conformidade técnica institucional.</p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" style={styles.section}>
          <h2 style={styles.title}>Como funciona o Processamento de Dados</h2>
          <p style={styles.paragraph}>
            O funcionamento do PDF AGORA baseia-se na otimização de rotinas de scripts executados na camada do cliente. Diferente de sistemas obsoletos que exigem uploads demorados, nossa estrutura foi projetada para ler as propriedades estruturais do arquivo PDF e aplicar as modificações de forma ágil. Compreender o fluxo de etapas garante um aproveitamento seguro e eficiente da ferramenta.
          </p>
          <div style={styles.steps}>
            <div style={styles.step}>
              <strong>1. Seleção Parametrizada do Módulo</strong>
              <p>O usuário navega pela interface e escolhe a ferramenta específica adequada ao seu objetivo (Juntar, Dividir ou Comprimir). Cada ferramenta carrega em memória os parâmetros lógicos necessários para processar o arquivo.</p>
            </div>
            <div style={styles.step}>
              <strong>2. Upload e Leitura Estrutural</strong>
              <p>Ao arrastar o documento para a área demarcada, o sistema realiza a leitura imediata da árvore de objetos do PDF (páginas, fontes, imagens e metadados). O usuário tem controle visual completo para validar se inseriu o arquivo correto.</p>
            </div>
            <div style={styles.step}>
              <strong>3. Execução da Ação Local</strong>
              <p>A aplicação manipula a estrutura do documento conforme a função ativada, reordenando páginas, aplicando compressão de imagens ou convertendo formatos gráficos. Todo o fluxo é monitorado para evitar corrupção de dados.</p>
            </div>
            <div style={styles.step}>
              <strong>4. Homologação e Download</strong>
              <p>O arquivo final processado é encapsulado e disponibilizado para download imediato. Recomendamos que o usuário faça a abertura e conferência visual prévia do documento gerado antes de utilizá-lo em canais oficiais ou profissionais.</p>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" style={styles.section}>
          <span style={styles.badge}>Conta PRO</span>
          <h2 style={styles.title}>Planos de Assinatura e Sustentabilidade</h2>
          <p style={styles.paragraph}>
            Para manter a plataforma PDF AGORA ativa, segura e constantemente atualizada, adotamos um modelo híbrido de monetização. O site pode ser utilizado de forma 100% gratuita pela comunidade, modalidade esta que é viabilizada através da exibição programática de anúncios publicitários. Para usuários recorrentes e corporativos que demandam maior produtividade, oferecemos o Plano PRO.
          </p>
          <div style={styles.planGrid}>
            <div style={styles.planCard}>
              <h3>Plano Grátis</h3>
              <div style={styles.freePrice}>R$ 0</div>
              <ul style={styles.list}>
                <li>Acesso irrestrito às ferramentas essenciais do ecossistema</li>
                <li>Exibição integrada de anúncios publicitários gerados por parceiros</li>
                <li>Ideal para demandas esporádicas e tarefas rápidas de escritório</li>
                <li>Processamento executado diretamente no navegador do usuário</li>
              </ul>
            </div>

            <div style={styles.proCard}>
              <span style={styles.popular}>POPULAR</span>
              <h3>Plano PRO</h3>
              <div style={styles.proPrice}>
                R$ 1,99 <span style={styles.month}>/mês</span>
              </div>
              <ul style={styles.list}>
                <li>Remoção integral de 100% dos blocos de anúncios do Google</li>
                <li>Interface e navegação totalmente limpas e focadas na produtividade</li>
                <li>Identificação simplificada da conta do usuário através do e-mail</li>
                <li>Suporte prioritário e preparação para novos recursos em desenvolvimento</li>
              </ul>
              <p style={styles.smallText}>
                O processo de adesão é feito de forma transparente. Basta realizar a autenticação e prosseguir para o ambiente de checkout blindado operado pela operadora internacional Stripe.
              </p>
              <button type="button" onClick={handlePremiumClick} style={styles.proButton}>
                Assinar Plano PRO com Stripe
              </button>
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section id="recursos" style={styles.section}>
          <h2 style={styles.title}>Recursos Disponíveis e Detalhamento Técnico</h2>
          <p style={styles.paragraph}>
            Cada ferramenta disponível no PDF AGORA passa por testes rigorosos de compatibilidade de formatos. Nosso objetivo é garantir que a estrutura nativa dos seus arquivos seja respeitada, mitigando falhas comuns como perda de links internos, quebra de fontes personalizadas e desconfiguração de margens de impressão.
          </p>
          <div style={styles.featureGrid}>
            {tools.map((item) => (
              <div key={item.title} style={styles.featureCard}>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", fontWeight: "700" }}>{item.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "#4a5568" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEGURANÇA */}
        <section id="seguranca" style={styles.section}>
          <h2 style={styles.title}>Segurança, Governança e Responsabilidade Legal</h2>
          <p style={styles.paragraph}>
            A governança de dados é tratada com seriedade no PDF AGORA. Orientamos nossa base de usuários a adotar uma conduta preventiva e de avaliação prévia sobre a natureza dos arquivos manipulados. Embora nossa arquitetura promova o processamento na camada local do cliente para reforçar a segurança, o usuário deve agir com prudência ao lidar com volumes massivos de informações restritas.
          </p>
          <p style={styles.paragraph}>
            Documentações contendo dados pessoais altamente sensíveis (como registros médicos, prontuários, segredos industriais, credenciais de acesso, dados bancários explícitos ou processos judiciais sob segredo de justiça) demandam cautela redobrada. O usuário assume a responsabilidade civil e jurídica integral de certificar-se de que possui os direitos autorais, consentimentos explícitos ou autorizações institucionais para realizar a importação, modificação e exportação de tais arquivos em ambientes digitais web.
          </p>
          <div style={styles.notice}>
            <strong>Cláusula de Isenção de Responsabilidade:</strong> O PDF AGORA atua como um fornecedor de ferramentas de tecnologia de processamento passivo. Não realizamos auditoria sobre o teor dos arquivos e eximimo-nos de qualquer responsabilidade decorrente de erros de digitação, falhas na conferência de resultados ou compartilhamento indevido de documentos feito por iniciativa do usuário.
          </div>
        </section>

        {/* PRIVACIDADE - CRÍTICO PARA O ADSENSE */}
        <section id="privacidade" style={styles.section}>
          <h2 style={styles.title}>Política de Privacidade Global</h2>
          <p style={styles.paragraph}>
            Esta Política de Privacidade descreve formalmente as práticas adotadas pelo PDF AGORA em relação à coleta, tratamento, armazenamento e proteção de informações geradas durante a navegação em nosso domínio. Estamos comprometidos em resguardar o sigilo dos usuários através do cumprimento estrito de normas de proteção de dados e diretrizes de transparência publicitária digital.
          </p>

          <h3 style={styles.subtitle}>1. Coleta Automatizada de Dados Técnicos</h3>
          <p style={styles.paragraph}>
            Durante o tráfego regular pelas nossas páginas, podemos registrar de maneira automatizada logs técnicos que incluem o histórico de páginas internas acessadas, carimbos de data e horário dos eventos, modelo e versão do navegador web utilizado, resolução de tela, tipo de dispositivo (desktop ou mobile) e o endereço IP aproximado para fins de geolocalização e segurança do servidor contra acessos maliciosos. Quando houver o cadastro voluntário nas ferramentas de Conta PRO, coletamos o e-mail para autenticação de acesso através do Supabase.
          </p>

          <h3 style={styles.subtitle}>2. Finalidade do Tratamento de Informações</h3>
          <p style={styles.paragraph}>
            Os dados técnicos coletados servem exclusivamente para finalidades de monitoramento operacional, correção de bugs no código fonte, otimização de performance do Next.js, prevenção de ataques de negação de serviço (DDoS), validação de sessões autenticadas e compilação de estatísticas agregadas e anônimas sobre o volume de uso das ferramentas disponíveis.
          </p>

          <h3 style={styles.subtitle}>3. Tratamento de Arquivos e Metadados</h3>
          <p style={styles.paragraph}>
            Os arquivos PDF enviados para processamento pelas ferramentas são tratados de forma estritamente temporária e utilitária para a execução da ação comandada. O PDF AGORA declara formalmente que não realiza comércio, cessão, rastreamento de conteúdo, indexação ou venda de qualquer documento, arquivo ou informação privada de propriedade dos usuários que utilizam o site.
          </p>

          <h3 style={styles.subtitle}>4. Compartilhamento de Dados com Fornecedores e Anúncios</h3>
          <p style={styles.paragraph}>
            Nós não vendemos dados cadastrais ou e-mails de usuários. Compartilhamos dados operacionais estritamente necessários com nossos provedores de infraestrutura técnica sob contratos de confidencialidade (Supabase para gestão de banco de dados e autenticação, e Stripe para processamento de transações financeiras criptografadas). 
          </p>
          <p style={styles.paragraph}>
            Ademais, este site exibe anúncios programáticos através do programa de parceiros **Google AdSense**. O Google e seus parceiros usam cookies para veicular anúncios direcionados com base nas visitas anteriores do usuário a este ou a outros endereços da internet. O usuário pode gerenciar ou desativar os anúncios personalizados visitando a página oficial de <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" style={{color: "#7b8b45", fontWeight: "bold"}}>Configurações de anúncios do Google</a>.
          </p>

          <h3 style={styles.subtitle}>5. Direitos Legais do Titular dos Dados</h3>
          <p style={styles.paragraph}>
            Em conformidade com legislações de proteção de dados, garantimos aos usuários o direito de solicitar a confirmação da existência de tratamento de dados, o acesso completo aos dados guardados associados ao seu e-mail, a correção de cadastros incompletos ou a exclusão definitiva de sua conta de usuário de nossa base a qualquer momento, mediante solicitação formal por e-mail.
          </p>
          <p style={styles.smallText}>Última atualização oficial desta política: {updatedAt}</p>
        </section>

        {/* COOKIES - OBLIGATÓRIO ADSENSE */}
        <section id="cookies" style={styles.section}>
          <h2 style={styles.title}>Política de Cookies e Tecnologias de Rastreamento</h2>
          <p style={styles.paragraph}>
            Cookies são pequenos arquivos de texto estruturados que um site armazena no diretório do seu navegador quando você realiza uma visita. Eles desempenham um papel vital na prestação de serviços digitais, permitindo a retenção de preferências de layout, autenticação de usuários logados, análise de tráfego de rede e personalização de campanhas publicitárias.
          </p>
          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Cookies Técnicos Essenciais</h3>
              <p>Arquivos mandatórios para a manutenção da segurança, controle de sessões autenticadas do Supabase e validação de tokens de segurança.</p>
            </div>
            <div style={styles.card}>
              <h3>Cookies Analíticos</h3>
              <p>Utilizados para mapear os fluxos de navegação agregada, tempo de retenção em cada seção e taxa de erros nas ferramentas.</p>
            </div>
            <div style={styles.card}>
              <h3>Cookies de Publicidade (Google)</h3>
              <p>Ativados pelo ecossistema do Google AdSense para mapear perfis demográficos anônimos e exibir anúncios compatíveis com seus interesses comerciais.</p>
            </div>
          </div>
          <p style={styles.paragraph}>
            O usuário detém controle total sobre os cookies instalados em sua máquina. É possível configurar seu navegador de internet para recusar a gravação de cookies, excluir arquivos antigos ou alertar quando um cookie for disparado. Alertamos que a desativação integral de todos os cookies pode indisponibilizar recursos de login e persistência de dados no PDF AGORA.
          </p>
        </section>

        {/* TERMOS DE USO */}
        <section id="termos" style={styles.section}>
          <h2 style={styles.title}>Termos de Uso e Condições de Serviço</h2>
          <p style={styles.paragraph}>
            Ao acessar, navegar ou utilizar qualquer ferramenta contida no domínio do PDF AGORA, o usuário declara estar ciente e manifesta sua concordância integral e irrestrita com as obrigações, termos e condições estabelecidas neste instrumento contratual de uso de software.
          </p>
          <h3 style={styles.subtitle}>1. Licença de Uso Autorizada</h3>
          <p style={styles.paragraph}>
            Concede-se ao usuário uma licença de acesso temporária, revogável, não exclusiva e não transferível para utilizar as ferramentas de edição de arquivos PDF para finalidades estritamente lícitas e permitidas. É autorizado o processamento de documentos próprios, arquivos de domínio público ou documentos de terceiros para os quais o usuário possua mandato de representação ou autorização prévia por escrito.
          </p>
          <h3 style={styles.subtitle}>2. Práticas e Condutas Vedadas</h3>
          <p style={styles.paragraph}>
            É expressamente proibido utilizar a infraestrutura técnica do PDF AGORA para a execução de atos fraudulentos, lavagem de dados, transmissão de arquivos contendo códigos maliciosos (vírus, malwares, trojans), violação deliberada de direitos autorais e de propriedade intelectual de terceiros, ataques cibernéticos contra servidores parceiros ou tentativas de manipulação artificial dos cliques nos blocos de anúncios publicitários.
          </p>
          <h3 style={styles.subtitle}>3. Disponibilidade Tecnológica do Serviço</h3>
          <p style={styles.paragraph}>
            Nosso empenho técnico está direcionado a manter o ecossistema online continuamente estável. No entanto, o usuário declara compreender que a plataforma é fornecida no estado em que se encontra, podendo apresentar instabilidades temporárias de conexão, manutenções emergenciais de código, falhas na rede de distribuição ou limitações de processamento que fogem ao controle direto da administração.
          </p>
        </section>

        {/* TRANSPARÊNCIA */}
        <section id="transparencia" style={styles.section}>
          <h2 style={styles.title}>Política de Transparência Publicitária</h2>
          <p style={styles.paragraph}>
            Em estrito cumprimento às diretrizes de qualidade do Google AdSense, o PDF AGORA mantém um compromisso ético de separação clara entre conteúdos publicitários e layouts funcionais. Declaramos que nenhum bloco de anúncios ou banners automatizados será posicionado de maneira a induzir o usuário a um clique acidental.
          </p>
          <p style={styles.paragraph}>
            Todos os anúncios integrados ao sistema serão claramente identificados por rótulos ou estarão visivelmente apartados de botões de ações operacionais como "Download", "Enviar Arquivo" ou "Avançar". A receita de publicidade gerada pelos usuários gratuitos financia diretamente os custos de servidores e o desenvolvimento de novas melhorias, mantendo o ecossistema sustentável para a internet.
          </p>
        </section>

        {/* FAQ INSTITUCIONAL */}
        <section id="faq-institucional" style={styles.section}>
          <h2 style={styles.title}>Perguntas Frequentes (FAQ Institucional)</h2>
          <div style={styles.faqItem}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>Como a plataforma PDF AGORA monetiza e mantém o serviço gratuito?</h3>
            <p style={{ color: "#4a5568", marginTop: "6px" }}>
              Nós operamos sob um modelo sustentável de veiculação de mídia display em parceria com o Google AdSense. Os anúncios exibidos geram receitas por impressões e interações legítimas, permitindo que os custos operacionais de hospedagem sejam quitados sem repassar cobranças para os usuários da versão gratuita.
            </p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>Existe alguma obrigatoriedade de instalação de programas adicionais?</h3>
            <p style={{ color: "#4a5568", marginTop: "6px" }}>
              Não há qualquer exigência. A proposta central do PDF AGORA é a acessibilidade via nuvem e navegador web (Web-Based App). Todas as lógicas de junção, fragmentação e compressão rodam utilizando a engine nativa do navegador de internet do usuário.
            </p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>As ferramentas do site podem ser aplicadas em rotinas profissionais e corporativas?</h3>
            <p style={{ color: "#4a5568", marginTop: "6px" }}>
              Sim, o sistema está plenamente homologado para o uso profissional em escritórios, agências e comércio em geral, desde que respeitados os termos contratuais de uso lícito e que os arquivos importados estejam em conformidade com as autorizações de posse de dados da empresa.
            </p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>O PDF AGORA realiza o armazenamento ou venda do conteúdo dos documentos?</h3>
            <p style={{ color: "#4a5568", marginTop: "6px" }}>
              Não realizamos arquivamento permanente nem comercializamos arquivos. O processamento técnico é volátil e restrito ao período de execução do comando de download do arquivo. Garantimos o sigilo comercial e corporativo dos seus metadados.
            </p>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" style={styles.section}>
          <h2 style={styles.title}>Canais de Atendimento e Contato Oficial</h2>
          <p style={styles.paragraph}>
            Para o esclarecimento de dúvidas técnicas residuais a respeito do ecossistema do PDF AGORA, solicitações de suporte à Conta PRO, exercício de direitos de titulares de dados pessoais ou reporte de falhas operacionais na interface, entre em contato diretamente com nossa equipe de governança corporativa através do canal eletrônico unificado:
          </p>
          <p style={styles.contactEmail}>
            <a href="mailto:macedourania@gmail.com" style={{ color: "#7b8b45", textDecoration: "none" }}>
              macedourania@gmail.com
            </a>
          </p>
          <p style={styles.smallText}>
            Para garantir agilidade e eficácia em seu atendimento, solicitamos a gentileza de descrever o motivo central do contato com clareza no assunto do e-mail, incluindo capturas de tela quando se tratar de bugs de layout.
          </p>
        </section>
      </div>
    </section>
  );
}

// OS STYLES CONTINUAM EXATAMENTE IGUAIS AOS SEUS ABAIXO
const styles = {
  wrapper: { padding: "70px 20px", backgroundColor: "#f8f6f1", color: "#1f2933" },
  container: { maxWidth: "1180px", margin: "0 auto" },
  nav: { display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "20px", padding: "18px", marginBottom: "28px" },
  navLink: { color: "#52616b", textDecoration: "none", fontWeight: "700", fontSize: "0.95rem" },
  section: { backgroundColor: "#ffffff", borderRadius: "26px", padding: "42px 30px", marginBottom: "28px", boxShadow: "0 16px 38px rgba(0,0,0,0.05)" },
  badge: { display: "inline-block", backgroundColor: "#eef2e0", color: "#607236", borderRadius: "999px", padding: "7px 14px", fontSize: "0.78rem", fontWeight: "800", marginBottom: "12px" },
  title: { fontSize: "2rem", lineHeight: "1.2", margin: "0 0 18px" },
  subtitle: { fontSize: "1.22rem", marginTop: "28px", marginBottom: "10px", fontWeight: "700" },
  paragraph: { fontSize: "1rem", lineHeight: "1.8", color: "#3d4b53", marginBottom: "16px" },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginTop: "24px" },
  card: { border: "1px solid #e5e7eb", borderRadius: "18px", padding: "22px", backgroundColor: "#f8f6f1" },
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px", marginTop: "24px" },
  featureCard: { border: "1px solid #e5e7eb", borderRadius: "18px", padding: "24px", backgroundColor: "#ffffff" },
  steps: { display: "grid", gap: "16px", marginTop: "20px" },
  step: { borderLeft: "5px solid #7b8b45", backgroundColor: "#f8f6f1", borderRadius: "14px", padding: "18px 20px", lineHeight: "1.7" },
  notice: { marginTop: "20px", backgroundColor: "#fff8e5", border: "1px solid #f2d58a", borderRadius: "16px", padding: "18px", lineHeight: "1.7" },
  planGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "26px" },
  planCard: { border: "1px solid #e5e7eb", borderRadius: "20px", padding: "28px", backgroundColor: "#ffffff" },
  proCard: { border: "2px solid #7b8b45", borderRadius: "20px", padding: "28px", backgroundColor: "#ffffff", position: "relative" },
  popular: { position: "absolute", top: "-14px", right: "22px", backgroundColor: "#7b8b45", color: "#ffffff", borderRadius: "999px", padding: "6px 14px", fontSize: "0.78rem", fontWeight: "800" },
  freePrice: { fontSize: "1.8rem", fontWeight: "800", marginBottom: "16px" },
  proPrice: { fontSize: "1.9rem", color: "#7b8b45", fontWeight: "900", marginBottom: "16px" },
  month: { fontSize: "0.9rem", color: "#52616b", fontWeight: "400" },
  list: { lineHeight: "1.9", paddingLeft: "20px", color: "#3d4b53" },
  smallText: { color: "#52616b", fontSize: "0.95rem", lineHeight: "1.7", marginTop: "18px" },
  proButton: { width: "100%", marginTop: "18px", padding: "14px 18px", border: "none", borderRadius: "14px", backgroundColor: "#7b8b45", color: "#ffffff", fontWeight: "800", fontSize: "1rem", cursor: "pointer" },
  faqItem: { borderBottom: "1px solid #e5e7eb", padding: "16px 0", lineHeight: "1.7" },
  contactEmail: { fontSize: "1.15rem", fontWeight: "800" }
};