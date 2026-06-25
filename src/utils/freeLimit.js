import { siteConfig } from "../config/siteConfig.js";
import { getPdfPageCount } from "./pdfTools.js";

export const FREE_PDF_PAGE_LIMIT = Number(siteConfig.freePlanPdfPageLimit || 3);

export function isPremiumUser(premiumStatus) {
  return Boolean(premiumStatus?.isPremium);
}

function buildUpgradeDetails({ totalPages, filesCount, toolName }) {
  return {
    limit: FREE_PDF_PAGE_LIMIT,
    totalPages,
    filesCount,
    toolName
  };
}

export async function guardPdfPageLimit({
  files,
  premiumStatus,
  onUpgradeRequired,
  toolName = "esta ferramenta"
}) {
  if (isPremiumUser(premiumStatus)) {
    return true;
  }

  const pdfFiles = Array.from(files || []).filter(Boolean);
  if (pdfFiles.length === 0) {
    return true;
  }

  let totalPages = 0;

  for (const file of pdfFiles) {
    totalPages += await getPdfPageCount(file);

    if (totalPages > FREE_PDF_PAGE_LIMIT) {
      onUpgradeRequired?.(
        buildUpgradeDetails({
          totalPages,
          filesCount: pdfFiles.length,
          toolName
        })
      );

      return false;
    }
  }

  return true;
}

export function guardGeneratedPdfPageLimit({
  pageCount,
  premiumStatus,
  onUpgradeRequired,
  toolName = "esta ferramenta"
}) {
  if (isPremiumUser(premiumStatus)) {
    return true;
  }

  const totalPages = Number(pageCount || 0);

  if (totalPages > FREE_PDF_PAGE_LIMIT) {
    onUpgradeRequired?.(
      buildUpgradeDetails({
        totalPages,
        filesCount: totalPages,
        toolName
      })
    );

    return false;
  }

  return true;
}
