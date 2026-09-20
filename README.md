# Sentinela Landing Page

Landing page pública e independente do Sentinela, construída com React e Vite. Este
projeto não contém autenticação, dashboard ou menus do sistema principal.

## Desenvolvimento

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

Configure `VITE_API_URL` em um arquivo `.env`. O formulário envia `nome`, `email` e
`whatsapp` para `POST /api/v1/waitlist`; não existe confirmação simulada.

## CI/CD

O workflow `.github/workflows/ci.yml` valida lint, tipos e build, publica a
imagem `ghcr.io/daniloramalhosilva/investimento-web:sha-<commit>` e, quando a
variável `PRODUCTION_DEPLOY_ENABLED=true`, implanta a imagem no Environment
`production`.

O deploy usa o alvo `investimento-web` do script central da infraestrutura e
valida `https://investimento.web.technologyrs.com.br/` depois da atualização.

## Estrutura

- `src/app`: composição mínima da aplicação.
- `src/features/sentinela`: landing page, estilos, analytics e integração da lista de espera.
- `src/assets/sentinela`: imagens usadas pela landing page.
- `src/styles`: reset global mínimo.
- `Doc`: especificação e referências visuais da landing page.
