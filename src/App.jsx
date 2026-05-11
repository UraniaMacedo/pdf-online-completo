import { useEffect, useState } from "react";
// Importação de componentes - Verifique se os nomes dos arquivos estão idênticos na pasta components
import Header from "./components/Header.jsx";
import ToolCards from "./components/ToolCards.jsx";
import ToolWorkspace from "./components/ToolWorkspace.jsx";
import AdSlot from "./components/AdSlot.jsx";
import HowToUse from "./components/HowToUse.jsx";
import Faq from "./components/Faq.jsx";
import PremiumSection from "./components/PremiumSection.jsx";
import LegalPages from "./components/LegalPages.jsx"; // FUNDAMENTAL PARA O ADSENSE
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal.jsx";

import { tools } from "./data/tools.js";
import { supabase } from "./lib/supabaseClient.js";

export default function App() {
  const [session, setSession] = useState(null);
  const [authModal, setAuthModal] = useState(null);
  const [currentTool, setCurrentTool] = useState("juntar-pdf");

  // Monitoramento da Sessão (Login)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <main className="page">
      {/* 1. Cabeçalho: Essencial para navegação do bot do AdSense */}
      <Header 
        session={session} 
        onOpenAuth={setAuthModal} 
        onSignOut={handleSignOut} 
      />

      {/* 2. Área de Trabalho: Onde a ferramenta funciona */}
      <div className="container" style={{ minHeight: '60vh', padding: '20px' }}>
        <ToolWorkspace toolId={currentTool} session={session} />
      </div>

      {/* 3. Grade de Ferramentas (Cards): O Google precisa ver conteúdo/funcionalidade */}
      <section id="ferramentas">
        <ToolCards onSelectTool={setCurrentTool} />
      </section>

      {/* 4. Slot de Anúncios: Onde o AdSense vai aparecer após aprovado */}
      <AdSlot />

      {/* 5. Seção Premium: Aquela que você enviou antes */}
      <PremiumSection session={session} onOpenAuth={setAuthModal} />

      {/* 6. Conteúdo de SEO e Instruções: Fundamental para o AdSense entender o valor do site */}
      <HowToUse />
      
      {/* 7. FAQ: Ajuda na autoridade do domínio */}
      <Faq />

      {/* 8. Páginas Legais: SEM ISSO O ADSENSE REJEITA SEMPRE (Privacidade, Termos) */}
      <LegalPages />

      <Footer />

      {/* Modais de Autenticação */}
      {authModal && (
        <AuthModal 
          type={authModal} 
          onClose={() => setAuthModal(null)} 
        />
      )}
    </main>
  );
}