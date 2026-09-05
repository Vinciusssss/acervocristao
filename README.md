# Acervo 100 Livros Cristãos — Landing Page

Landing page de vendas para o produto **Acervo 100 Livros Cristãos** (100 e-books em PDF,
entrega digital imediata). Site estático, sem build — HTML, CSS e JS puros.

## Estrutura

```
index.html          página principal (todas as seções da oferta)
privacidade.html     política de privacidade (stub — preencher conteúdo real)
termos.html          termos de uso (stub — preencher conteúdo real)
styles.css           estilos (mobile-first)
script.js            configuração central + interações (CTA, contador, ano do rodapé)
assets/              favicon, mockup do produto e imagem de compartilhamento (OG)
```

## Antes de publicar

1. **Checkout**: edite `CHECKOUT_URL` no topo de `script.js`. Todos os botões CTA usam esse
   valor automaticamente.
2. **Domínio real**: em `index.html`, substitua toda ocorrência exata de
   `https://www.acervo100livroscristaos.com.br` (canonical, `og:url`, `og:image`, JSON-LD)
   pelo domínio real do site.
3. **Bônus**: preencha ou remova a seção de bônus, conforme o que for oferecido de fato.
4. **Urgência**: `PROMO_END` em `script.js` deve ser a data/hora real de encerramento da
   promoção — não usar uma data falsa.
5. **Tracking**: preencha `META_PIXEL_ID` e `GTM_ID` em `script.js` e cole os snippets oficiais
   nos comentários `[PLACEHOLDER]` do `<head>`/`<body>` de `index.html`.
6. Preencha os demais campos marcados como `[PLACEHOLDER]` (parcelamento e textos de
   privacidade/termos).

## Rodar localmente

Qualquer servidor estático funciona, por exemplo:

```bash
npx serve .
```

## Deploy

Site 100% estático — funciona direto na Vercel ou Netlify sem configuração de build
(publish directory: raiz do projeto).
