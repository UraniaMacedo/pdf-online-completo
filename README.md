# PDF Online Completo

Projeto profissional de ferramentas para PDF online com experiência em uma tela, cards de ferramentas, anúncios preparados, página premium, páginas legais e estrutura pronta para publicar.

## Ferramentas incluídas

- Juntar PDF
- Dividir PDF
- Comprimir PDF leve
- Imagem para PDF
- Organizar PDF
- Assinar PDF visualmente

## Monetização

- Espaços preparados para Google AdSense
- Página de plano Premium
- Estrutura preparada para remover anúncios no futuro para usuário Premium

## Como rodar no computador

```bash
npm install
npm run dev
```

Abra o link que aparecer no terminal, normalmente:

```bash
http://localhost:5173/
```

## Como gerar versão final

```bash
npm run build
```

## Como publicar na Vercel

1. Suba a pasta para o GitHub.
2. Entre na Vercel.
3. Clique em Add New Project.
4. Escolha o repositório.
5. Framework: Vite.
6. Build Command: npm run build.
7. Output Directory: dist.
8. Clique em Deploy.

## Importante sobre AdSense

Antes de solicitar AdSense, personalize:

- `public/ads.txt`
- `public/sitemap.xml`
- Política de Privacidade
- Termos de Uso
- Página de contato
- Nome do domínio no arquivo `src/config/siteConfig.js`

Depois da aprovação no AdSense, substitua os blocos de anúncio em `src/components/AdSlot.jsx` pelo código real fornecido pelo Google.
