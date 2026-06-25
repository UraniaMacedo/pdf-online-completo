# PDF AGORA — ajustes finais de monetização

Projeto React/Vite com ferramentas PDF online, AdSense, Stripe, Supabase e limite Free/Premium.

## O que foi ajustado

- Limite do plano grátis: usuários gratuitos só processam PDFs de até 3 páginas.
- Modal de vendas Premium: ao ultrapassar o limite, o app bloqueia o processamento e abre o modal com botão direto para o checkout Stripe.
- Botões Premium: planos apontam para os links configurados em `src/config/siteConfig.js`.
- AdSense: Publisher ID centralizado em `siteConfig.js`; script já está no `index.html`; `ads.txt` já está em `public/ads.txt`.
- Premium via Stripe: o hook de Premium agora consulta a tabela `premium_subscriptions`, que é a mesma gravada pelo webhook Stripe.
- `.gitignore` corrigido e `.env.example` criado sem chaves reais.

## Arquivos principais

- `src/config/siteConfig.js`: domínio, e-mail, limite Free, AdSense, slots de anúncio e links Stripe.
- `src/utils/freeLimit.js`: regra central do limite de 3 páginas.
- `src/components/UpgradeModal.jsx`: modal de bloqueio/venda Premium.
- `src/components/AdSlot.jsx`: componente de bloco de anúncio.
- `src/hooks/usePremiumStatus.js`: leitura de assinatura Premium no Supabase.
- `api/stripe-webhook.js`: webhook Stripe que grava assinatura Premium no Supabase.
- `supabase_premium_subscriptions.sql`: SQL para criar tabela e política de leitura segura no Supabase.

## Configuração do limite grátis

Edite em `src/config/siteConfig.js`:

```js
freePlanPdfPageLimit: 3
```

## Configuração do Stripe

Edite em `src/config/siteConfig.js`:

```js
premiumCheckoutUrl: "https://buy.stripe.com/...",
premiumMonthlyCheckoutUrl: "https://buy.stripe.com/...",
premiumAnnualCheckoutUrl: ""
```

Na Vercel, configure estas variáveis de ambiente:

```bash
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Não coloque chaves secretas no código do front-end.

## Configuração do Supabase Premium

Execute o arquivo abaixo no SQL Editor do Supabase:

```txt
supabase_premium_subscriptions.sql
```

O usuário logado só poderá ler a assinatura vinculada ao próprio e-mail.

## Configuração do AdSense

O Publisher ID fica em `src/config/siteConfig.js`:

```js
adsensePublisherId: "ca-pub-5046960619406551"
```

O arquivo `public/ads.txt` já contém:

```txt
google.com, pub-5046960619406551, DIRECT, f08c47fec0942fa0
```

Depois que criar blocos manuais no AdSense, preencha:

```js
adSlots: {
  top: "ID_DO_SLOT_SUPERIOR",
  afterTool: "ID_DO_SLOT_APOS_FERRAMENTA",
  content: "ID_DO_SLOT_CONTEUDO"
}
```

Enquanto os slots estiverem vazios, o app mantém os espaços reservados e usa o script de Anúncios Automáticos no `index.html`.

## Como rodar no computador

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal, normalmente:

```bash
http://localhost:5173/
```

## Como gerar versão final

```bash
npm run build
```

## Como publicar na Vercel

1. Suba o projeto para o GitHub.
2. Entre na Vercel.
3. Clique em **Add New Project**.
4. Escolha o repositório.
5. Framework: **Vite**.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Cadastre as variáveis de ambiente.
9. Faça o deploy.
