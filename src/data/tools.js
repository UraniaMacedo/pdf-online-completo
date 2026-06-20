export const tools = [
  {
    id: "juntar-pdf",
    title: "Juntar PDF",
    shortTitle: "Juntar",
    description: "Una vários arquivos PDF em um único documento.",
    icon: "📄",
    seoTitle: "Juntar PDF online grátis",
    seoDescription:
      "Junte dois ou mais arquivos PDF em um único documento diretamente no navegador, sem instalar programas."
  },
  {
    id: "dividir-pdf",
    title: "Dividir PDF",
    shortTitle: "Dividir",
    description: "Separe páginas de um PDF e baixe em ZIP.",
    icon: "✂️",
    seoTitle: "Dividir PDF online grátis",
    seoDescription:
      "Separe páginas de um arquivo PDF online e baixe os documentos divididos em poucos cliques."
  },
  {
    id: "comprimir-pdf",
    title: "Comprimir PDF",
    shortTitle: "Comprimir",
    description: "Otimize o PDF para tentar reduzir o tamanho.",
    icon: "🗜️",
    seoTitle: "Comprimir PDF online grátis",
    seoDescription:
      "Comprima arquivos PDF online para tentar reduzir o tamanho do documento sem instalar programas."
  },
  {
    id: "imagem-para-pdf",
    title: "Imagem para PDF",
    shortTitle: "Imagem",
    description: "Transforme imagens JPG e PNG em PDF.",
    icon: "🖼️",
    seoTitle: "Imagem para PDF online grátis",
    seoDescription:
      "Converta imagens JPG e PNG em PDF diretamente no navegador de forma simples e rápida."
  },
  {
    id: "organizar-pdf",
    title: "Organizar PDF",
    shortTitle: "Organizar",
    description: "Reordene páginas do PDF informando a sequência.",
    icon: "🔢",
    seoTitle: "Organizar PDF online grátis",
    seoDescription:
      "Organize e reordene páginas de um PDF online de forma simples, rápida e sem instalar programas."
  },
  {
    id: "assinar-pdf",
    title: "Assinar PDF",
    shortTitle: "Assinar",
    description: "Adicione uma assinatura visual ao PDF.",
    icon: "✍️",
    seoTitle: "Assinar PDF online grátis",
    seoDescription:
      "Insira uma assinatura visual em arquivos PDF diretamente no navegador, sem instalar programas."
  }
];

export function getToolById(id) {
  return tools.find((tool) => tool.id === id) || tools[0];
}