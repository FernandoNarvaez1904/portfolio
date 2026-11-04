# Diego Romero Portfolio

Personal portfolio built with Next.js App Router, React, TypeScript, and MDX.

## Development

Requires Node.js 20.9+ and pnpm.

```sh
pnpm install
pnpm dev
```

Content lives in `docs/`; images are served from `public/img/`.
The portfolio preserves the existing `/docs/*` URLs.

## Verification

```sh
pnpm typecheck
pnpm build
```

## Cloudflare Pages

Next.js generates a static site in `out/`. Configure Pages with build command
`pnpm build` and output directory `out` (previously `build`).

```sh
pnpm preview
pnpm deploy
```

`pnpm deploy` publishes using the authenticated Wrangler account and selected
Pages project. The production domain is https://diegoromero.dev.
