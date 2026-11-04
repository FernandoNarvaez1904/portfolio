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

## Contact form

The homepage submits to the Pages Function at `/api/contact`, which calls the
private `portfolio-contact` Worker through the `CONTACT` service binding.
The Worker verifies Turnstile on the server (including hostname and action),
limits submission attempts, and sends email only to `dfrn2003@gmail.com`.
The visitor's address is set as Reply-To. Messages are not stored in a database.

The Worker and Turnstile widget belong to the dfrn2003 Cloudflare login,
account `5e35bc173f144491322f1b581a218c5b`. Deploy Worker changes before Pages:

```sh
pnpm exec wrangler deploy --config workers/contact/wrangler.jsonc
node --test workers/contact/handler.test.mjs
```

The `TURNSTILE_SECRET` Worker secret is managed in Cloudflare; never commit it.
The public widget key is in `src/lib/contact-config.ts`. The widget is restricted
to the production domain, so localhost and preview deployments cannot submit.

## Languages

English pages keep their original URLs. Spanish pages use `/es/`, with matching
`/es/docs/*` routes. The header language switch opens the same page in the other
language. Both versions render the correct HTML language and alternate-language
metadata, and are included in the sitemap.

Shared interface translations live in `src/lib/i18n.ts`; Spanish page content
lives in `docs/es/`. The downloadable CV remains the original English PDF.
