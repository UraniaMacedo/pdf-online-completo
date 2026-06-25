import { useState } from "react";
import FileDropzone from "../components/FileDropzone.jsx";
import FileList from "../components/FileList.jsx";
import DownloadResult from "../components/DownloadResult.jsx";
import { createDownloadUrl, filterPdfFiles, parsePageOrder } from "../utils/fileHelpers.js";
import { getPdfPageCount, organizePdfPages } from "../utils/pdfTools.js";
import { guardGeneratedPdfPageLimit, guardPdfPageLimit } from "../utils/freeLimit.js";

export default function OrganizePdfTool({ premiumStatus, onUpgradeRequired }) {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [pageOrder, setPageOrder] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleFiles(selectedFiles) {
    const pdfFiles = filterPdfFiles(selectedFiles);

    if (pdfFiles.length === 0) {
      alert("Envie um arquivo PDF.");
      return;
    }

    const selectedFile = pdfFiles[0];
    setFile(selectedFile);
    setDownloadUrl("");

    try {
      const count = await getPdfPageCount(selectedFile);

      const canUseFile = guardGeneratedPdfPageLimit({
        pageCount: count,
        premiumStatus,
        onUpgradeRequired,
        toolName: "Organizar PDF"
      });

      if (!canUseFile) {
        setFile(null);
        setPageCount(null);
        setPageOrder("");
        return;
      }

      setPageCount(count);
      setPageOrder(Array.from({ length: count }, (_, index) => index + 1).join(","));
    } catch (error) {
      console.error(error);
      alert("Erro ao ler as páginas do PDF.");
    }
  }

  async function processFile() {
    if (!file || !pageCount) {
      alert("Envie um PDF para organizar.");
      return;
    }

    try {
      setLoading(true);

      const canProcess = await guardPdfPageLimit({
        files: [file],
        premiumStatus,
        onUpgradeRequired,
        toolName: "Organizar PDF"
      });

      if (!canProcess) return;

      const pages = parsePageOrder(pageOrder, pageCount);
      const blob = await organizePdfPages(file, pages);
      setDownloadUrl(createDownloadUrl(blob));
    } catch (error) {
      console.error(error);
      alert(error.message || "Erro ao organizar o PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FileDropzone
        title="Envie o PDF que deseja organizar"
        subtitle="depois informe a sequência das páginas"
        accept="application/pdf"
        multiple={false}
        onFilesSelected={handleFiles}
      />

      <FileList files={file ? [file] : []} onRemove={() => {
        setFile(null);
        setPageCount(null);
        setPageOrder("");
      }} />

      {pageCount && (
        <div className="output-name">
          <label>Sequência das páginas</label>
          <input
            value={pageOrder}
            onChange={(event) => setPageOrder(event.target.value)}
            placeholder="Exemplo: 1,3,2 ou 1-5"
          />
          <small>Este PDF tem {pageCount} página(s). Use vírgulas para ordenar. Exemplo: 1,3,2.</small>
        </div>
      )}

      <button className="primary-button" onClick={processFile} disabled={loading}>
        {loading ? "Organizando..." : "Organizar PDF agora"}
      </button>

      <DownloadResult url={downloadUrl} fileName="pdf-organizado.pdf" label="Baixar PDF organizado" />
    </>
  );
}
