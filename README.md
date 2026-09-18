# Template Web

Template React/Vite para novos projetos web, baseado na organização visual e técnica do Business Hub Web.

## Desenvolvimento

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

Configure `VITE_API_URL` em um arquivo `.env`. Sem uma URL configurada, o login local usa `admin` / `admin` para permitir a avaliação visual do template.

## Estrutura

- `src/app`: composição da aplicação.
- `src/routes`: rotas públicas e protegidas.
- `src/layouts`: shell, sidebar, topbar e navegação.
- `src/components`: componentes de UI, formulários, feedback e dados.
- `src/shared`: API, autenticação, eventos e infraestrutura compartilhada.
- `src/features`: páginas e lógica organizada por funcionalidade.
- `src/styles`: tokens e estilos globais.
