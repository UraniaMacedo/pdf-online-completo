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
import { getToolById, tools } from "./data/tools.js";

function getInitialToolId() {
  const path = window.location.pathname.replace("/", "");
  return tools.some((tool) => tool.id === path) ? path : "juntar-pdf";
}

export default function App() {
  const [activeToolId, setActiveToolId] = useState(getInitialToolId);

  const activeTool = useMemo(() => getToolById(activeToolId), [activeToolId]);

  useEffect(() => {
    document.title = `${activeTool.seoTitle} | PDF Online`;
    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", activeTool.seoDescription);
    }
  }, [activeTool]);

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

  return (
    <main className="page">
      <Header />

      <AdSlot label="Anúncio superior" />

      <ToolCards
        tools={tools}
        activeToolId={activeToolId}
        onSelectTool={handleSelectTool}
      />

      <ToolWorkspace tool={activeTool} />

      <AdSlot label="Anúncio após a ferramenta" />

      <HowToUse />

      <Faq />

      <AdSlot label="Anúncio no conteúdo" />

      <PremiumSection />

      <LegalPages />

      <Footer />
    </main>
  );
}
