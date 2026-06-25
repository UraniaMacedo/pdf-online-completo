import MergePdfTool from "../tools/MergePdfTool.jsx";
import SplitPdfTool from "../tools/SplitPdfTool.jsx";
import CompressPdfTool from "../tools/CompressPdfTool.jsx";
import ImageToPdfTool from "../tools/ImageToPdfTool.jsx";
import OrganizePdfTool from "../tools/OrganizePdfTool.jsx";
import SignPdfTool from "../tools/SignPdfTool.jsx";

const toolComponents = {
  "juntar-pdf": MergePdfTool,
  "dividir-pdf": SplitPdfTool,
  "comprimir-pdf": CompressPdfTool,
  "imagem-para-pdf": ImageToPdfTool,
  "organizar-pdf": OrganizePdfTool,
  "assinar-pdf": SignPdfTool
};

export default function ToolWorkspace({ tool, premiumStatus, onUpgradeRequired }) {
  const SelectedTool = toolComponents[tool.id] || MergePdfTool;

  return (
    <section className="upload-box">
      <div className="tool-heading">
        <div>
          <span>{tool.icon}</span>
          <h2>{tool.seoTitle}</h2>
          <p>{tool.seoDescription}</p>
        </div>
      </div>

      <SelectedTool
        premiumStatus={premiumStatus}
        onUpgradeRequired={onUpgradeRequired}
      />
    </section>
  );
}
