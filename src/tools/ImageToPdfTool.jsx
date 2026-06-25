import { useState } from "react";
import FileDropzone from "../components/FileDropzone.jsx";
import FileList from "../components/FileList.jsx";
import DownloadResult from "../components/DownloadResult.jsx";
import { createDownloadUrl, filterImageFiles } from "../utils/fileHelpers.js";
import { imageFilesToPdf } from "../utils/pdfTools.js";
import { guardGeneratedPdfPageLimit } from "../utils/freeLimit.js";

export default function ImageToPdfTool({ premiumStatus, onUpgradeRequired }) {
  const [files, setFiles] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [fileName, setFileName] = useState("imagens-convertidas.pdf");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  function clearResult() {
    setDownloadUrl("");
    setStatusMessage("");
    setStatusType("");
  }

  function getStatusStyle() {
    const baseStyle = {
      margin: "16px 0",
      padding: "14px 16px",
      borderRadius: "14px",
      fontSize: "0.95rem",
      fontWeight: "700",
      lineHeight: "1.5"
    };

    if (statusType === "success") {
      return {
        ...baseStyle,
        background: "#ecfdf3",
        color: "#166534",
        border: "1px solid #bbf7d0"
      };
    }

    if (statusType === "error") {
      return {
        ...baseStyle,
        background: "#fef2f2",
        color: "#991b1b",
        border: "1px solid #fecaca"
      };
    }

    return {
      ...baseStyle,
      background: "#eff6ff",
      color: "#1d4ed8",
      border: "1px solid #bfdbfe"
    };
  }

  function handleFiles(selectedFiles) {
    const imageFiles = filterImageFiles(selectedFiles);

    if (imageFiles.length === 0) {
      setStatusType("error");
      setStatusMessage("Envie imagens válidas nos formatos JPG ou PNG.");
      return;
    }

    setFiles((prev) => [...prev, ...imageFiles]);
    clearResult();
  }

  function removeFile(index) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    clearResult();
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
    clearResult();
  }

  async function processFiles() {
    if (files.length === 0) {
      setStatusType("error");
      setStatusMessage("Envie pelo menos uma imagem antes de converter.");
      return;
    }

    try {
      setLoading(true);
      setDownloadUrl("");
      setStatusType("info");
      setStatusMessage("Convertendo suas imagens para PDF...");

      const canProcess = guardGeneratedPdfPageLimit({
        pageCount: files.length,
        premiumStatus,
        onUpgradeRequired,
        toolName: "Imagem para PDF"
      });

      if (!canProcess) {
        setStatusMessage("");
        setStatusType("");
        return;
      }

      const blob = await imageFilesToPdf(files);
      const url = createDownloadUrl(blob);

      setDownloadUrl(url);
      setStatusType("success");
      setStatusMessage(
        "Conversão realizada com sucesso! Seu PDF está pronto para download."
      );
    } catch (error) {
      console.error(error);
      setDownloadUrl("");
      setStatusType("error");
      setStatusMessage(
        "Não foi possível converter as imagens. Verifique os arquivos selecionados e tente novamente."
      );
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
        <input
          value={fileName}
          onChange={(event) => setFileName(event.target.value)}
          placeholder="imagens-convertidas.pdf"
        />
      </div>

      {statusMessage && (
        <div style={getStatusStyle()}>
          {statusMessage}
        </div>
      )}

      <button
        className="primary-button"
        onClick={processFiles}
        disabled={loading}
      >
        {loading ? "Convertendo..." : "Converter imagem para PDF"}
      </button>

      {downloadUrl && (
        <DownloadResult
          url={downloadUrl}
          fileName={fileName}
          label="Baixar PDF"
        />
      )}
    </>
  );
}