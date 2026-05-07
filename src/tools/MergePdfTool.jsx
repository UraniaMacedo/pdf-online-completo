import { useState } from "react";
import FileDropzone from "../components/FileDropzone.jsx";
import FileList from "../components/FileList.jsx";
import DownloadResult from "../components/DownloadResult.jsx";
import { createDownloadUrl, filterPdfFiles } from "../utils/fileHelpers.js";
import { mergePdfFiles } from "../utils/pdfTools.js";

export default function MergePdfTool() {
  const [files, setFiles] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [fileName, setFileName] = useState("pdf-juntado.pdf");
  const [loading, setLoading] = useState(false);

  function handleFiles(selectedFiles) {
    const pdfFiles = filterPdfFiles(selectedFiles);

    if (pdfFiles.length === 0) {
      alert("Envie apenas arquivos PDF.");
      return;
    }

    setFiles((prev) => [...prev, ...pdfFiles]);
    setDownloadUrl("");
  }

  function removeFile(index) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setDownloadUrl("");
  }

  function moveFile(index, direction) {
    const newFiles = [...files];
    const targetIndex = index + direction;

    if (targetIndex < 0 || targetIndex >= newFiles.length) return;

    [newFiles[index], newFiles[targetIndex]] = [
      newFiles[targetIndex],
      newFiles[index]
    ];

    setFiles(newFiles);
    setDownloadUrl("");
  }

  async function processFiles() {
    if (files.length < 2) {
      alert("Envie pelo menos 2 PDFs para juntar.");
      return;
    }

    try {
      setLoading(true);
      const blob = await mergePdfFiles(files);
      setDownloadUrl(createDownloadUrl(blob));
    } catch (error) {
      console.error(error);
      alert("Erro ao juntar os PDFs. Verifique se os arquivos não estão protegidos ou corrompidos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FileDropzone
        title="Arraste seus PDFs aqui"
        subtitle="ou clique para selecionar dois ou mais arquivos"
        accept="application/pdf"
        multiple
        onFilesSelected={handleFiles}
      />

      <FileList files={files} onRemove={removeFile} onMove={moveFile} />

      <div className="output-name">
        <label>Nome do arquivo final</label>
        <input value={fileName} onChange={(event) => setFileName(event.target.value)} />
      </div>

      <button className="primary-button" onClick={processFiles} disabled={loading}>
        {loading ? "Juntando PDFs..." : "Juntar PDF agora"}
      </button>

      <DownloadResult url={downloadUrl} fileName={fileName} label="Baixar PDF final" />
    </>
  );
}
