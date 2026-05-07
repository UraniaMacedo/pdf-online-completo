import { useState } from "react";
import FileDropzone from "../components/FileDropzone.jsx";
import FileList from "../components/FileList.jsx";
import DownloadResult from "../components/DownloadResult.jsx";
import { createDownloadUrl, filterPdfFiles } from "../utils/fileHelpers.js";
import { signPdfWithText } from "../utils/pdfTools.js";

export default function SignPdfTool() {
  const [file, setFile] = useState(null);
  const [signatureText, setSignatureText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [position, setPosition] = useState("bottom-right");
  const [fontSize, setFontSize] = useState(28);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFiles(selectedFiles) {
    const pdfFiles = filterPdfFiles(selectedFiles);

    if (pdfFiles.length === 0) {
      alert("Envie um arquivo PDF.");
      return;
    }

    setFile(pdfFiles[0]);
    setDownloadUrl("");
  }

  async function processFile() {
    if (!file) {
      alert("Envie um PDF para assinar.");
      return;
    }

    if (!signatureText.trim()) {
      alert("Digite o texto da assinatura.");
      return;
    }

    try {
      setLoading(true);
      const blob = await signPdfWithText(file, {
        signatureText,
        pageNumber,
        position,
        fontSize
      });

      setDownloadUrl(createDownloadUrl(blob));
    } catch (error) {
      console.error(error);
      alert("Erro ao assinar o PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="notice">
        Esta ferramenta adiciona uma assinatura visual. Ela não substitui certificado digital.
      </div>

      <FileDropzone
        title="Envie o PDF que deseja assinar"
        subtitle="depois digite a assinatura visual"
        accept="application/pdf"
        multiple={false}
        onFilesSelected={handleFiles}
      />

      <FileList files={file ? [file] : []} onRemove={() => setFile(null)} />

      <div className="form-grid">
        <label>
          Texto da assinatura
          <input
            value={signatureText}
            onChange={(event) => setSignatureText(event.target.value)}
            placeholder="Exemplo: João Silva"
          />
        </label>

        <label>
          Página
          <input
            type="number"
            min="1"
            value={pageNumber}
            onChange={(event) => setPageNumber(event.target.value)}
          />
        </label>

        <label>
          Tamanho
          <input
            type="number"
            min="12"
            max="72"
            value={fontSize}
            onChange={(event) => setFontSize(event.target.value)}
          />
        </label>

        <label>
          Posição
          <select value={position} onChange={(event) => setPosition(event.target.value)}>
            <option value="bottom-right">Inferior direita</option>
            <option value="bottom-center">Inferior centro</option>
            <option value="bottom-left">Inferior esquerda</option>
            <option value="top-right">Superior direita</option>
            <option value="top-center">Superior centro</option>
            <option value="top-left">Superior esquerda</option>
          </select>
        </label>
      </div>

      <button className="primary-button" onClick={processFile} disabled={loading}>
        {loading ? "Assinando PDF..." : "Assinar PDF agora"}
      </button>

      <DownloadResult url={downloadUrl} fileName="pdf-assinado.pdf" label="Baixar PDF assinado" />
    </>
  );
}
