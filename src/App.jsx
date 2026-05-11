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
import { usePremiumStatus } from "./hooks/usePremiumStatus.js";


// IMPORTANTE: Deixe como false para o Google ver os espa�os de an�ncios ativos durante a an�lise
const ADSENSE_REVIEW_MODE = false;

function getInitialToolId() {
  const path = window.location.pathname.replace("/", "");
  return tools.some((tool) => tool.id === path) ? path : "juntar-pdf";
}

export default function App() {
  const [activeToolId, setActiveToolId] = useState(getInitialToolId);
  const [session, setSession] = useState(null);
  const [authModal, setAuthModal] = useState(null);

  const activeTool = useMemo(() => getToolById(activeToolId), [activeToolId]);
  const premiumStatus = usePremiumStatus(session);
  const isPremium = premiumStatus.isPremium;

  // Se n�o for premium, mostra an�ncios para o Google validar o invent�rio
  const canShowAds = !isPremium;

  useEffect(() => {
    // Atualiza o t�tulo e Meta Tags para SEO profissional
    document.title = `${activeTool.seoTitle} | PDF AGORA`;
    
    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", activeTool.seoDescription);
    }

    // Adiciona canonical link para evitar conte�do duplicado na an�lise
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

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
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

    // Scroll suave para a ferramenta
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

      {/* An�ncio Topo para mostrar ao Google que o site � monetizado */}
      {canShowAds && <AdSlot label="Banner Superior" />}

      <ToolCards
        tools={tools}
        activeToolId={activeToolId}
        onSelectTool={handleSelectTool}
      />

      <ToolWorkspace tool={activeTool} />

      {/* Conte�do de alto valor para o AdSense ler */}
      <HowToUse />

      {canShowAds && <AdSlot label="An�ncio Meio de P�gina" />}

      <Faq />

      <PremiumSection
        session={session}
        premiumStatus={premiumStatus}
        onOpenAuth={setAuthModal}
      />

      <LegalPages />

      <Footer />
    </main>
  );
}
