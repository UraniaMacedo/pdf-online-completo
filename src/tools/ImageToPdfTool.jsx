import { useState } from "react";
import FileDropzone from "../components/FileDropzone.jsx";
import FileList from "../components/FileList.jsx";
import DownloadResult from "../components/DownloadResult.jsx";
import { createDownloadUrl, filterImageFiles } from "../utils/fileHelpers.js";
import { imageFilesToPdf } from "../utils/pdfTools.js";

export default function ImageToPdfTool() {
  const [files, setFiles] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [fileName, setFileName] = useState("imagens-convertidas.pdf");
  const [loading, setLoading] = useState(false);

  function handleFiles(selectedFiles) {
    const imageFiles = filterImageFiles(selectedFiles);

    if (imageFiles.length === 0) {
      alert("Envie imagens JPG ou PNG.");
      return;
    }

    setFiles((prev) => [...prev, ...imageFiles]);
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
    if (files.length === 0) {
      alert("Envie pelo menos uma imagem.");
      return;
    }

    try {
      setLoading(true);
      const blob = await imageFilesToPdf(files);
      setDownloadUrl(createDownloadUrl(blob));
    } catch (error) {
      console.error(error);
      alert("Erro ao converter imagens para PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FileDropzone
        title="Arraste suas imagens aqui"
        subtitle="JPG ou PNG. Cada imagem será uma página do PDF."
        accept="image/jpeg,image/png"
        multiple
        onFilesSelected={handleFiles}
      />

      <FileList files={files} onRemove={removeFile} onMove={moveFile} />

      <div className="output-name">
        <label>Nome do arquivo final</label>
        <input value={fileName} onChange={(event) => setFileName(event.target.value)} />
      </div>

      <button className="primary-button" onClick={processFiles} disabled={loading}>
        {loading ? "Convertendo..." : "Converter imagem para PDF"}
      </button>

      <DownloadResult url={downloadUrl} fileName={fileName} label="Baixar PDF" />
    </>
  );
}
