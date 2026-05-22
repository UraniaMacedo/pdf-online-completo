export default function Faq() {
  return (
    <section className="content-section" id="faq" style={{ paddingTop: '20px' }}>
      <h2>Perguntas frequentes e Suporte Técnico</h2>
      <p style={{ marginBottom: '24px', color: '#666', lineHeight: '1.6' }}>
        Tem dúvidas sobre o funcionamento do ecossistema PDF AGORA? Reunimos abaixo um guia detalhado com as principais respostas técnicas sobre privacidade de dados, compatibilidade, custos de utilização e validade documental para garantir total transparência no uso da nossa plataforma.
      </p>

      <details style={{ marginBottom: '15px', padding: '10px', background: '#f1f5f9', borderRadius: '8px' }}>
        <summary style={{ fontWeight: '600', cursor: 'pointer', padding: '5px' }}>Os meus arquivos confidenciais são enviados para algum servidor externo?</summary>
        <p style={{ padding: '10px', color: '#334155', lineHeight: '1.6' }}>
          Não. A arquitetura de desenvolvimento do PDF AGORA foi projetada focando na privacidade e soberania dos dados do usuário. Diferente das plataformas tradicionais do mercado, as operações de leitura, compressão, junção e divisão dos arquivos estruturados ocorrem localmente dentro da sandbox do seu próprio navegador de internet. Esse método elimina o upload forçado de volumes pesados para servidores centrais, economiza significativamente o seu consumo de dados de internet, assegura conformidade com boas práticas de proteção de dados e impede que terceiros interceptem suas informações pessoais.
        </p>
      </details>

      <details style={{ marginBottom: '15px', padding: '10px', background: '#f1f5f9', borderRadius: '8px' }}>
        <summary style={{ fontWeight: '600', cursor: 'pointer', padding: '5px' }}>Necessito instalar algum executável ou extensão no meu sistema operacional?</summary>
        <p style={{ padding: '10px', color: '#334155', lineHeight: '1.6' }}>
          Não há necessidade de instalar nenhum tipo de programa de instalação (.exe, .dmg) ou extensões de terceiros no seu ecossistema de trabalho. O PDF AGORA opera de ponta a ponta como uma aplicação web moderna (PWA) compatível com os principais navegadores estáveis do mercado, como Google Chrome, Mozilla Firefox, Microsoft Edge e Safari. Você só precisa de uma conexão simples à internet para acessar a URL pública e gerenciar seus documentos com agilidade, seja usando um computador convencional, notebook ou dispositivo móvel (smartphone e tablet).
        </p>
      </details>

      <details style={{ marginBottom: '15px', padding: '10px', background: '#f1f5f9', borderRadius: '8px' }}>
        <summary style={{ fontWeight: '600', cursor: 'pointer', padding: '5px' }}>O site PDF AGORA é totalmente gratuito para o público geral?</summary>
        <p style={{ padding: '10px', color: '#334155', lineHeight: '1.6' }}>
          Sim, o site oferece um modelo de negócios sustentável focado em acessibilidade democrática. Todas as ferramentas essenciais de edição de PDF estão disponíveis para uso gratuito, sendo financiadas exibindo anúncios publicitários nativos fornecidos pelo programa do Google AdSense. Para profissionais autônomos, escritórios jurídicos ou empresas que demandam fluxos contínuos de alta demanda, disponibilizamos um plano de assinatura Premium de baixo custo. A ativação do plano remove 100% dos blocos de anúncios publicitários da tela e estende os limites de processamento simultâneo do sistema.
        </p>
      </details>

      <details style={{ marginBottom: '15px', padding: '10px', background: '#f1f5f9', borderRadius: '8px' }}>
        <summary style={{ fontWeight: '600', cursor: 'pointer', padding: '5px' }}>A função de assinatura visual em arquivos PDF possui validade jurídica formal?</summary>
        <p style={{ padding: '10px', color: '#334155', lineHeight: '1.6' }}>
          A nossa ferramenta de assinatura foi desenvolvida para aplicar uma rubrica ou assinatura visual de alta definição sobre a camada do documento, servindo perfeitamente para validações de recebidos, marcações contratuais internas ou fluxos administrativos ágeis. É importante destacar que esse recurso atua como uma assinatura eletrônica simples e de identificação visual, não substituindo, portanto, os mecanismos de assinaturas digitais qualificadas que utilizam certificados criptografados oficiais (como o padrão ICP-Brasil ou chaves token e-CPF/e-CNPJ).
        </p>
      </details>
    </section>
  );
}
