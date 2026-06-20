import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import ToolCards from "./components/ToolCards.jsx";
import ToolWorkspace from "./components/ToolWorkspace.jsx";
import AdSlot from "./components/AdSlot.jsx";
import HowToUse from "./components/HowToUse.jsx";
import Faq from "./components/Faq.jsx";
import LegalPages from "./components/LegalPages.jsx";
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal.jsx";
import { getToolById, tools } from "./data/tools.js";
import { supabase } from "./lib/supabaseClient.js";
import { usePremiumStatus } from "./hooks/usePremiumStatus.js";

// IMPORTANTE: deixe como false para o sistema respeitar usuários premium.
// Se precisar forçar anúncios durante revisão do Google, altere para true.
const ADSENSE_REVIEW_MODE = false;

// Depois que criar blocos de anúncio no AdSense, coloque os IDs aqui.
// Exemplo: top: "1234567890"
// Se você usar apenas Anúncios Automáticos, pode deixar vazio.
const AD_SLOTS = {
  top: "",
  afterTool: "",
  content: ""
};

const SITE_URL = "https://www.pdfagora.com.br";

const SPECIAL_PAGES = {
  planos: {
    title: "Planos PDF AGORA | Assinatura mensal e anual",
    description:
      "Conheça os planos do PDF AGORA. Use ferramentas PDF grátis com anúncios ou assine o Plano PRO mensal ou anual para remover anúncios.",
    canonicalPath: "/planos",
    sectionId: "planos"
  }
};

function getCurrentPath() {
  if (typeof window === "undefined") return "";

  return window.location.pathname.replace(/^\/+|\/+$/g, "");
}

function getInitialRoute() {
  const path = getCurrentPath();

  if (SPECIAL_PAGES[path]) {
    return {
      activeToolId: "juntar-pdf",
      activePageId: path
    };
  }

  if (tools.some((tool) => tool.id === path)) {
    return {
      activeToolId: path,
      activePageId: null
    };
  }

  return {
    activeToolId: "juntar-pdf",
    activePageId: null
  };
}

export default function App() {
  const [route, setRoute] = useState(getInitialRoute);
  const [session, setSession] = useState(null);
  const [authModal, setAuthModal] = useState(null);

  const activeToolId = route.activeToolId;
  const activePageId = route.activePageId;

  const activeTool = useMemo(() => getToolById(activeToolId), [activeToolId]);
  const premiumStatus = usePremiumStatus(session);
  const isPremium = premiumStatus.isPremium;

  const canShowAds = ADSENSE_REVIEW_MODE || !isPremium;

  useEffect(() => {
    if (!activeTool) return;

    const specialPage = activePageId ? SPECIAL_PAGES[activePageId] : null;

    const pageTitle = specialPage
      ? specialPage.title
      : `${activeTool.seoTitle} | PDF AGORA`;

    const pageDescription = specialPage
      ? specialPage.description
      : activeTool.seoDescription;

    const canonicalUrl = specialPage
      ? `${SITE_URL}${specialPage.canonicalPath}`
      : `${SITE_URL}/${activeToolId === "juntar-pdf" ? "" : activeToolId}`;

    document.title = pageTitle;

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", pageDescription);
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [activeTool, activeToolId, activePageId]);

  useEffect(() => {
    const specialPage = activePageId ? SPECIAL_PAGES[activePageId] : null;
    if (!specialPage) return;

    setTimeout(() => {
      document.getElementById(specialPage.sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 150);
  }, [activePageId]);

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

  useEffect(() => {
    function handlePopState() {
      setRoute(getInitialRoute());
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  function handleSelectTool(toolId) {
    const nextUrl = toolId === "juntar-pdf" ? "/" : `/${toolId}`;

    setRoute({
      activeToolId: toolId,
      activePageId: null
    });

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

      {canShowAds && (
        <AdSlot
          label="Banner Superior"
          slot={AD_SLOTS.top}
        />
      )}

      <ToolCards
        tools={tools}
        activeToolId={activeToolId}
        onSelectTool={handleSelectTool}
      />

      <ToolWorkspace tool={activeTool} />

      {canShowAds && (
        <AdSlot
          label="Anúncio após a ferramenta"
          slot={AD_SLOTS.afterTool}
        />
      )}

      <HowToUse />

      {canShowAds && (
        <AdSlot
          label="Anúncio no conteúdo"
          slot={AD_SLOTS.content}
        />
      )}

      <Faq />

      <LegalPages
        session={session}
        onOpenAuth={setAuthModal}
      />

      <Footer />

      {authModal && (
        <AuthModal
          initialMode={authModal}
          onClose={() => setAuthModal(null)}
        />
      )}
    </main>
  );
}