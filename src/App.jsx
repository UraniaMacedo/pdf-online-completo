import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ToolCards from "./components/ToolCards.jsx";
import ToolWorkspace from "./components/ToolWorkspace.jsx";
import AdSlot from "./components/AdSlot.jsx";
import HowToUse from "./components/HowToUse.jsx";
import Faq from "./components/Faq.jsx";
import PremiumSection from "./components/PremiumSection.jsx";
import LegalPages from "./components/LegalPages.jsx";
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal.jsx";
import { tools } from "./data/tools.js";
import { supabase } from "./lib/supabaseClient.js";

export default function App() {
  const [session, setSession] = useState(null);
  const [authModal, setAuthModal] = useState(null);
  const [currentTool, setCurrentTool] = useState("juntar-pdf");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <main className="page">
      <Header session={session} onOpenAuth={setAuthModal} onSignOut={() => supabase.auth.signOut()} />
      
      <div className="container" style={{ minHeight: '50vh', padding: '20px' }}>
        <ToolWorkspace toolId={currentTool} session={session} />
      </div>

      {/* OS CARDS QUE VOCÊ PRECISA PARA O ADSENSE */}
      <ToolCards onSelectTool={setCurrentTool} />
      
      <AdSlot />
      
      {/* A SEÇÃO PREMIUM */}
      <PremiumSection session={session} onOpenAuth={setAuthModal} />
      
      {/* CONTEÚDO PARA APROVAÇÃO */}
      <HowToUse />
      <Faq />
      <LegalPages /> {/* Aqui estão suas políticas e termos */}
      
      <Footer />

      {authModal && <AuthModal type={authModal} onClose={() => setAuthModal(null)} />}
    </main>
  );
}