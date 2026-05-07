import { useState } from "react";
import FileDropzone from "../components/FileDropzone.jsx";
import FileList from "../components/FileList.jsx";
import DownloadResult from "../components/DownloadResult.jsx";
import { createDownloadUrl, filterPdfFiles } from "../utils/fileHelpers.js";
import { splitPdfIntoPages } from "../utils/pdfTools.js";

export default function SplitPdfTool() {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFiles(selectedFiles) {
    const pdfFiles = filterPdfFiles(selectedFiles);

    if (pdfFiles.length === 0) {
      alert("Envie um arquivo PDF.");
      return;
    }

    setFile(pdfFiles[0]);
    setDownloadUrl("");
    setTotalPages(null);
  }

  async function processFile() {
    if (!file) {
      alert("Envie um PDF para dividir.");
      return;
    }

    try {
      setLoading(true);
      const result = await splitPdfIntoPages(file);
      setTotalPages(result.totalPages);
      setDownloadUrl(createDownloadUrl(result.blob));
    } catch (error) {
      console.error(error);
      alert("Erro ao dividir o PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FileDropzone
        title="Envie o PDF que deseja dividir"
        subtitle="o resultado será um arquivo ZIP com uma página por PDF"
        accept="application/pdf"
        multiple={false}
        onFilesSelected={handleFiles}
      />

      <FileList files={file ? [file] : []} onRemove={() => setFile(null)} />

      <button className="primary-button" onClick={processFile} disabled={loading}>
        {loading ? "Dividindo PDF..." : "Dividir PDF agora"}
      </button>

      {totalPages && <p className="success-note">PDF dividido em {totalPages} página(s).</p>}

      <DownloadResult url={downloadUrl} fileName="pdf-dividido.zip" label="Baixar ZIP com páginas" />
    </>
  );
}
