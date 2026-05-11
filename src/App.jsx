import { useEffect, useMemo, useState } from "react";
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
import { getToolById, tools } from "./data/tools.js";
import { supabase } from "./lib/supabaseClient.js";

function getInitialToolId() {
  if (typeof window === "undefined") return "juntar-pdf";
  const path = window.location.pathname.replace("/", "");
  return tools.some((tool) => tool.id === path) ? path : "juntar-pdf";
}

export default function App() {
  const [activeToolId, setActiveToolId] = useState(getInitialToolId);
  const [session, setSession] = useState(null);
  const [authModal, setAuthModal] = useState(null);

  const activeTool = useMemo(() => getToolById(activeToolId), [activeToolId]);

  useEffect(() => {
    document.title = `${activeTool.seoTitle} | PDF AGORA`;
    const description = document.querySelector("meta[name='description']");
    if (description) description.setAttribute("content", activeTool.seoDescription);
  }, [activeTool]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <main className="page">
      <Header
        session={session}
        onOpenAuth={setAuthModal}
        onSignOut={handleSignOut}
      />

      {authModal && (
        <AuthModal
          initialMode={authModal}
          onClose={() => setAuthModal(null)}
        />
      )}

      <AdSlot label="Banner Superior" />

      <ToolCards
        tools={tools}
        activeToolId={activeToolId}
        onSelectTool={(id) => {
          setActiveToolId(id);
          window.history.pushState({}, "", id === "juntar-pdf" ? "/" : `/${id}`);
        }}
      />

      <ToolWorkspace tool={activeTool} />
      <HowToUse />
      <AdSlot label="Anúncio Meio de Página" />
      <Faq />

      <PremiumSection
        session={session}
        onOpenAuth={setAuthModal}
      />

      <LegalPages />
      <Footer />
    </main>
  );
}