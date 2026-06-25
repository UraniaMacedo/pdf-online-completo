export const siteConfig = {
  name: "PDF AGORA",
  domain: "pdfagora.com.br",
  siteUrl: "https://www.pdfagora.com.br",
  contactEmail: "macedourania@gmail.com",

  freePlanPdfPageLimit: 3,

  adsensePublisherId: "ca-pub-5046960619406551",
  adsTxtPublisherId: "pub-5046960619406551",

  // IDs dos blocos manuais criados no AdSense.
  // Enquanto estiverem vazios, o app mantém os espaços reservados e usa o script de Anúncios Automáticos do AdSense no index.html.
  adSlots: {
    top: "",
    afterTool: "",
    content: ""
  },

  premiumCheckoutUrl: "https://buy.stripe.com/7sYaEQ1iW9tu2sV84I00000",
  premiumMonthlyCheckoutUrl: "https://buy.stripe.com/7sYaEQ1iW9tu2sV84I00000",

  // Coloque aqui o link anual quando criar no Stripe.
  // Enquanto estiver vazio, o botão anual usa o checkout principal.
  premiumAnnualCheckoutUrl: "",

  premiumMonthlyPrice: "R$ 1,99",
  premiumAnnualPrice: "R$ 23,88"
};
