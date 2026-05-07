export default function DownloadResult({ url, fileName, label = "Baixar arquivo" }) {
  if (!url) return null;

  return (
    <a className="download-button" href={url} download={fileName}>
      {label}
    </a>
  );
}
