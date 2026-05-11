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
// Importação que faltava para o site não ficar branco:
import { usePremiumStatus } from "./hooks/usePremiumStatus.js";

const ADSENSE_REVIEW_MODE = false;

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
  
  // Agora o sistema reconhece estas linhas:
  const premiumStatus = usePremiumStatus(session);
  const isPremium = premiumStatus?.isPremium || false;

  const canShowAds = !isPremium;

  useEffect(() => {
    document.title = `${activeTool.seoTitle} | PDF AGORA`;
    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", activeTool.seoDescription);
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://www.pdfagora.com.br/${activeToolId === 'juntar-pdf' ? '' : activeToolId}`);
  }, [activeTool, activeToolId]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  function handleSelectTool(toolId) {
    setActiveToolId(toolId);
    const nextUrl = toolId === "juntar-pdf" ? "/" : `/${toolId}`;
    window.history.pushState({}, "", nextUrl);
    setTimeout(() => {
      document.querySelector(".upload-box")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 50);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <main className="page">
      <Header
        session={session}
        premiumStatus={premiumStatus}
        onOpenAuth={setAuthModal}
        onSignOut={handleSignOut}
      />

      {authModal && (
        <AuthModal
          initialMode={authModal}
          onClose={() => setAuthModal(null)}
        />
      )}

      {canShowAds && <AdSlot label="Banner Superior" />}

      <ToolCards
        tools={tools}
        activeToolId={activeToolId}
        onSelectTool={handleSelectTool}
      />

      <ToolWorkspace tool={activeTool} />

      <HowToUse />

      {canShowAds && <AdSlot label="Anúncio Meio de Página" />}

      <Faq />

      {/* Chamada corrigida para o componente que limpamos antes */}
      <PremiumSection
        session={session}
        onOpenAuth={setAuthModal}
      />

      <LegalPages />

      <Footer />
    </main>
  );
}