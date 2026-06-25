import { useState } from "react";
import FileDropzone from "../components/FileDropzone.jsx";
import FileList from "../components/FileList.jsx";
import DownloadResult from "../components/DownloadResult.jsx";
import {
  createDownloadUrl,
  filterPdfFiles,
  formatFileSize
} from "../utils/fileHelpers.js";
import { compressPdfLight, compressPdfStrong } from "../utils/pdfTools.js";
import { guardPdfPageLimit } from "../utils/freeLimit.js";

const strongCompressionOptions = {
  forte: {
    label: "Forte",
    scale: 0.75,
    quality: 0.42
  },
  medio: {
    label: "Equilibrada",
    scale: 0.9,
    quality: 0.55
  },
  leve: {
    label: "Leve",
    scale: 1,
    quality: 0.68
  }
};

export default function CompressPdfTool({ premiumStatus, onUpgradeRequired }) {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [resultSize, setResultSize] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [mode, setMode] = useState("segura");
  const [strongLevel, setStrongLevel] = useState("forte");
  const [loading, setLoading] = useState(false);

  function resetResult() {
    setDownloadUrl("");
    setResultSize(null);
    setStatusMessage("");
  }

  function handleFiles(selectedFiles) {
    const pdfFiles = filterPdfFiles(selectedFiles);

    if (pdfFiles.length === 0) {
      alert("Envie um arquivo PDF.");
      return;
    }

    setFile(pdfFiles[0]);
    resetResult();
  }

  async function processFile() {
    if (!file) {
      alert("Envie um PDF para comprimir.");
      return;
    }

    try {
      setLoading(true);
      resetResult();

      const canProcess = await guardPdfPageLimit({
        files: [file],
        premiumStatus,
        onUpgradeRequired,
        toolName: "Comprimir PDF"
      });

      if (!canProcess) return;

      let blob;

      if (mode === "segura") {
        blob = await compressPdfLight(file);
      } else {
        const selectedOption = strongCompressionOptions[strongLevel];

        blob = await compressPdfStrong(file, {
          scale: selectedOption.scale,
          quality: selectedOption.quality
        });
      }

      setResultSize(blob.size);

      if (blob.size < file.size) {
        const reduction = ((1 - blob.size / file.size) * 100).toFixed(1);

        setStatusMessage(
          `PDF comprimido com sucesso. Redução aproximada de ${reduction}%.`
        );

        setDownloadUrl(createDownloadUrl(blob));
        return;
      }

      if (mode === "segura") {
        setStatusMessage(
          "A compressão segura não conseguiu reduzir este PDF. O arquivo já pode estar otimizado. Para tentar reduzir mais, selecione a compressão forte."
        );
      } else {
        setStatusMessage(
          "Mesmo com compressão forte, este PDF não ficou menor. Isso pode acontecer em arquivos muito simples, já otimizados ou com pouca imagem."
        );
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao comprimir o PDF. Tente outro arquivo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="notice">
        Escolha entre compressão segura, que preserva melhor o PDF original, ou compressão forte, que reduz mais, mas pode transformar páginas em imagem.
      </div>

      <FileDropzone
        title="Envie o PDF que deseja comprimir"
        subtitle="escolha o modo de compressão antes de gerar o arquivo"
        accept="application/pdf"
        multiple={false}
        onFilesSelected={handleFiles}
      />

      <FileList
        files={file ? [file] : []}
        onRemove={() => {
          setFile(null);
          resetResult();
        }}
      />

      <div className="compression-options">
        <label className={mode === "segura" ? "compression-card selected" : "compression-card"}>
          <input
            type="radio"
            name="compressionMode"
            value="segura"
            checked={mode === "segura"}
            onChange={() => {
              setMode("segura");
              resetResult();
            }}
          />

          <strong>Compressão segura</strong>
          <span>
            Tenta reduzir mantendo melhor a estrutura original do PDF. Recomendada para documentos com texto.
          </span>
        </label>

        <label className={mode === "forte" ? "compression-card selected" : "compression-card"}>
          <input
            type="radio"
            name="compressionMode"
            value="forte"
            checked={mode === "forte"}
            onChange={() => {
              setMode("forte");
              resetResult();
            }}
          />

          <strong>Compressão forte</strong>
          <span>
            Reduz mais, ideal para PDFs escaneados ou com imagens. O texto pode deixar de ser selecionável.
          </span>
        </label>
      </div>

      {mode === "forte" && (
        <div className="output-name">
          <label>Nível da compressão forte</label>
          <select
            value={strongLevel}
            onChange={(event) => {
              setStrongLevel(event.target.value);
              resetResult();
            }}
          >
            <option value="forte">Forte — menor tamanho</option>
            <option value="medio">Equilibrada — qualidade média</option>
            <option value="leve">Leve — melhor qualidade</option>
          </select>
          <small>
            Quanto mais forte a compressão, menor o arquivo e menor a qualidade visual.
          </small>
        </div>
      )}

      <button className="primary-button" onClick={processFile} disabled={loading}>
        {loading ? "Comprimindo PDF..." : "Comprimir PDF agora"}
      </button>

      {resultSize && file && (
        <p className="success-note">
          Tamanho original: {formatFileSize(file.size)} · Resultado: {formatFileSize(resultSize)}
        </p>
      )}

      {statusMessage && (
        <p className={downloadUrl ? "success-note" : "notice"}>
          {statusMessage}
        </p>
      )}

      <DownloadResult
        url={downloadUrl}
        fileName="pdf-comprimido.pdf"
        label="Baixar PDF comprimido"
      />
    </>
  );
}