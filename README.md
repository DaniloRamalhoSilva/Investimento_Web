# Investimento Web

Interface React/Vite do produto de investimentos e da landing page pública do Sentinela.

## Desenvolvimento

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

Configure `VITE_API_URL` em um arquivo `.env`. Sem uma URL configurada, o login local usa `admin` / `admin` para permitir a avaliação visual do template.

## CI/CD

O workflow `.github/workflows/ci.yml` valida lint, tipos e build, publica a
imagem `ghcr.io/daniloramalhosilva/investimento-web:sha-<commit>` e, quando a
variável `PRODUCTION_DEPLOY_ENABLED=true`, implanta a imagem no Environment
`production`.

O deploy usa o alvo `investimento-web` do script central da infraestrutura e
valida `https://investimento.web.technologyrs.com.br/` depois da atualização.

## Estrutura

- `src/app`: composição da aplicação.
- `src/routes`: rotas públicas e protegidas.
- `src/layouts`: shell, sidebar, topbar e navegação.
- `src/components`: componentes de UI, formulários, feedback e dados.
- `src/shared`: API, autenticação, eventos e infraestrutura compartilhada.
- `src/features`: páginas e lógica organizada por funcionalidade.
- `src/styles`: tokens e estilos globais.
