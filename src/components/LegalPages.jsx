import React from 'react';

export default function LegalPages() {
  return (
    <section id="legal" style={{ padding: '40px 20px', backgroundColor: '#fff', color: '#333', fontSize: '0.9rem', lineHeight: '1.6' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #eee', paddingTop: '40px' }}>
        
        <div id="politica-privacidade" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#7b8b45' }}>Política de Privacidade</h2>
          <p>O <strong>PDF AGORA</strong> valoriza a sua privacidade. Esta política descreve como tratamos seus dados:</p>
          <ul>
            <li><strong>Arquivos:</strong> Os arquivos enviados para processamento são armazenados temporariamente em nossos servidores apenas pelo tempo necessário para a conversão e são excluídos automaticamente após o download ou em até 1 hora.</li>
            <li><strong>Cookies:</strong> Utilizamos cookies para melhorar a experiência do usuário e para fins de análise através do Google Analytics e Google AdSense.</li>
            <li><strong>Segurança:</strong> Utilizamos conexões seguras (HTTPS) para garantir que seus documentos sejam transferidos com criptografia.</li>
          </ul>
        </div>

        <div id="termos-uso" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#7b8b45' }}>Termos de Uso</h2>
          <p>Ao utilizar o PDF AGORA, você concorda com os seguintes termos:</p>
          <ul>
            <li>O serviço é fornecido "como está", sem garantias explícitas de disponibilidade ininterrupta.</li>
            <li>É proibido utilizar a plataforma para processar arquivos com conteúdo ilegal, malicioso ou que infrinja direitos autorais.</li>
            <li>O limite de tamanho para usuários gratuitos é de 10MB por arquivo.</li>
          </ul>
        </div>

        <div id="sobre" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#7b8b45' }}>Sobre o PDF AGORA</h2>
          <p>
            O PDF AGORA é uma ferramenta profissional desenvolvida para facilitar a gestão de documentos digitais. 
            Nossa missão é oferecer agilidade e segurança para usuários que precisam juntar, dividir ou converter arquivos PDF de forma gratuita e eficiente.
          </p>
        </div>

        <div style={{ textAlign: 'center', color: '#999', fontSize: '0.8rem' }}>
          <p>© 2026 PDF AGORA - Todos os direitos reservados.</p>
          <p>Contato: macedourania@gmail.com</p>
        </div>
      </div>
    </section>
  );
}