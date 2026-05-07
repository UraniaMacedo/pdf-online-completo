import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import JSZip from "jszip";

export async function mergePdfFiles(files) {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer, {
      ignoreEncryption: true
    });

    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedBytes = await mergedPdf.save({ useObjectStreams: true });

  return new Blob([mergedBytes], {
    type: "application/pdf"
  });
}

export async function splitPdfIntoPages(file) {
  const arrayBuffer = await file.arrayBuffer();
  const sourcePdf = await PDFDocument.load(arrayBuffer, {
    ignoreEncryption: true
  });

  const zip = new JSZip();
  const totalPages = sourcePdf.getPageCount();

  for (let index = 0; index < totalPages; index++) {
    const newPdf = await PDFDocument.create();
    const [page] = await newPdf.copyPages(sourcePdf, [index]);
    newPdf.addPage(page);

    const bytes = await newPdf.save({ useObjectStreams: true });
    zip.file(`pagina-${index + 1}.pdf`, bytes);
  }

  const zipBlob = await zip.generateAsync({ type: "blob" });
  return { blob: zipBlob, totalPages };
}

export async function imageFilesToPdf(files) {
  const pdfDoc = await PDFDocument.create();

  for (const file of files) {
    const bytes = await file.arrayBuffer();

    let embeddedImage;

    if (file.type === "image/png" || file.name.toLowerCase().endsWith(".png")) {
      embeddedImage = await pdfDoc.embedPng(bytes);
    } else {
      embeddedImage = await pdfDoc.embedJpg(bytes);
    }

    const page = pdfDoc.addPage([595.28, 841.89]);
    const margin = 36;

    const availableWidth = page.getWidth() - margin * 2;
    const availableHeight = page.getHeight() - margin * 2;

    const scale = Math.min(
      availableWidth / embeddedImage.width,
      availableHeight / embeddedImage.height
    );

    const width = embeddedImage.width * scale;
    const height = embeddedImage.height * scale;

    page.drawImage(embeddedImage, {
      x: (page.getWidth() - width) / 2,
      y: (page.getHeight() - height) / 2,
      width,
      height
    });
  }

  const pdfBytes = await pdfDoc.save({ useObjectStreams: true });

  return new Blob([pdfBytes], {
    type: "application/pdf"
  });
}

export async function compressPdfLight(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer, {
    ignoreEncryption: true
  });

  const bytes = await pdf.save({
    useObjectStreams: true,
    addDefaultPage: false
  });

  return new Blob([bytes], {
    type: "application/pdf"
  });
}

export async function getPdfPageCount(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer, {
    ignoreEncryption: true
  });

  return pdf.getPageCount();
}

export async function organizePdfPages(file, pageIndexes) {
  const arrayBuffer = await file.arrayBuffer();
  const sourcePdf = await PDFDocument.load(arrayBuffer, {
    ignoreEncryption: true
  });

  const newPdf = await PDFDocument.create();
  const copiedPages = await newPdf.copyPages(sourcePdf, pageIndexes);

  copiedPages.forEach((page) => newPdf.addPage(page));

  const bytes = await newPdf.save({ useObjectStreams: true });

  return new Blob([bytes], {
    type: "application/pdf"
  });
}

export async function signPdfWithText(file, options) {
  const {
    signatureText,
    pageNumber,
    position,
    fontSize
  } = options;

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer, {
    ignoreEncryption: true
  });

  const pages = pdf.getPages();
  const pageIndex = Math.max(0, Math.min(Number(pageNumber || 1) - 1, pages.length - 1));
  const page = pages[pageIndex];

  const font = await pdf.embedFont(StandardFonts.HelveticaOblique);
  const size = Number(fontSize || 28);

  const text = String(signatureText || "").trim();
  const textWidth = font.widthOfTextAtSize(text, size);

  const width = page.getWidth();
  const height = page.getHeight();

  let x = 48;
  let y = 70;

  if (position === "bottom-center") {
    x = (width - textWidth) / 2;
    y = 70;
  }

  if (position === "bottom-right") {
    x = width - textWidth - 48;
    y = 70;
  }

  if (position === "top-left") {
    x = 48;
    y = height - 90;
  }

  if (position === "top-center") {
    x = (width - textWidth) / 2;
    y = height - 90;
  }

  if (position === "top-right") {
    x = width - textWidth - 48;
    y = height - 90;
  }

  page.drawText(text, {
    x,
    y,
    size,
    font,
    color: rgb(0.12, 0.12, 0.12)
  });

  const bytes = await pdf.save({ useObjectStreams: true });

  return new Blob([bytes], {
    type: "application/pdf"
  });
}
