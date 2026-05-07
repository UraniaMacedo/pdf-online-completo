export function filterPdfFiles(selectedFiles) {
  return Array.from(selectedFiles || []).filter(
    (file) => file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")
  );
}

export function filterImageFiles(selectedFiles) {
  return Array.from(selectedFiles || []).filter((file) => {
    const name = file.name.toLowerCase();
    return (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      name.endsWith(".jpg") ||
      name.endsWith(".jpeg") ||
      name.endsWith(".png")
    );
  });
}

export function formatFileSize(sizeInBytes) {
  return `${(sizeInBytes / 1024 / 1024).toFixed(2)} MB`;
}

export function createDownloadUrl(blob) {
  return URL.createObjectURL(blob);
}

export function cleanFileName(name, fallback) {
  const value = String(name || "").trim();
  if (!value) return fallback;
  return value.toLowerCase().endsWith(".pdf") || value.toLowerCase().endsWith(".zip")
    ? value
    : `${value}.pdf`;
}

export function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

export function parsePageOrder(input, totalPages) {
  const value = String(input || "").trim();
  if (!value) {
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  const pages = [];
  const parts = value.split(",").map((part) => part.trim()).filter(Boolean);

  for (const part of parts) {
    if (part.includes("-")) {
      const [startRaw, endRaw] = part.split("-");
      const start = Number(startRaw);
      const end = Number(endRaw);

      if (!Number.isInteger(start) || !Number.isInteger(end)) {
        throw new Error("Sequência inválida.");
      }

      const step = start <= end ? 1 : -1;

      for (let page = start; step > 0 ? page <= end : page >= end; page += step) {
        if (page < 1 || page > totalPages) {
          throw new Error(`A página ${page} não existe neste PDF.`);
        }

        pages.push(page - 1);
      }
    } else {
      const page = Number(part);

      if (!Number.isInteger(page) || page < 1 || page > totalPages) {
        throw new Error(`A página ${part} não existe neste PDF.`);
      }

      pages.push(page - 1);
    }
  }

  return pages;
}
