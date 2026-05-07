import { useState } from "react";
import FileDropzone from "../components/FileDropzone.jsx";
import FileList from "../components/FileList.jsx";
import DownloadResult from "../components/DownloadResult.jsx";
import { createDownloadUrl, filterPdfFiles, formatFileSize } from "../utils/fileHelpers.js";
import { compressPdfLight } from "../utils/pdfTools.js";

export default function CompressPdfTool() {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [resultSize, setResultSize] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFiles(selectedFiles) {
    const pdfFiles = filterPdfFiles(selectedFiles);

    if (pdfFiles.length === 0) {
      alert("Envie um arquivo PDF.");
      return;
    }

    setFile(pdfFiles[0]);
    setDownloadUrl("");
    setResultSize(null);
  }

  async function processFile() {
    if (!file) {
      alert("Envie um PDF para comprimir.");
      return;
    }

    try {
      setLoading(true);
      const blob = await compressPdfLight(file);
      setResultSize(blob.size);
      setDownloadUrl(createDownloadUrl(blob));
    } catch (error) {
      console.error(error);
      alert("Erro ao comprimir o PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="notice">
        Esta é uma compressão leve. PDFs com muitas imagens podem precisar de uma compressão avançada em servidor em uma versão futura.
      </div>

      <FileDropzone
        title="Envie o PDF que deseja comprimir"
        subtitle="a ferramenta tentará otimizar o arquivo no navegador"
        accept="application/pdf"
        multiple={false}
        onFilesSelected={handleFiles}
      />

      <FileList files={file ? [file] : []} onRemove={() => setFile(null)} />

      <button className="primary-button" onClick={processFile} disabled={loading}>
        {loading ? "Comprimindo PDF..." : "Comprimir PDF agora"}
      </button>

      {resultSize && (
        <p className="success-note">
          Tamanho original: {formatFileSize(file.size)} · Resultado: {formatFileSize(resultSize)}
        </p>
      )}

      <DownloadResult url={downloadUrl} fileName="pdf-comprimido.pdf" label="Baixar PDF comprimido" />
    </>
  );
}
