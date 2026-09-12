# Irfan Ali — DevOps & Cloud Engineer Portfolio

> 🌐 Live: <https://irfanali.pages.dev>

Modern **glassmorphism** portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion** — featuring an animated **CI/CD pipeline monitor** hero, aurora gradient background, magnetic buttons, rotating role titles, and frosted-glass surfaces throughout.

## Features

- 🌌 Animated aurora background with film grain + cursor spotlight (touch-device aware)
- 🚀 Hero with a live CI/CD pipeline monitor, floating tool chips & rotating roles
- 🧊 True glassmorphism: frosted panels, gradient borders, holographic hover
- ♿ `content-visibility` + reduced-blur on mobile for fast scrolling
- ⚡ Self-hosted variable fonts, immutable asset caching, brotli compression

## Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite 6**
- **Tailwind CSS v4** (CSS-first config via `@theme` + `@tailwindcss/postcss`)
- **Framer Motion** — animations, scroll effects, spring cursor glow
- **@fontsource-variable** — self-hosted Inter, Sora, JetBrains Mono
- **Lucide React** + **React Icons** — icons & tool brands
- **Lenis** — smooth scrolling

## Getting Started

```bash
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & preview

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Docker

```bash
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080)

Or manually:

```bash
docker build -t irfan-devops-portfolio .
docker run -p 8080:80 irfan-devops-portfolio
```

## Customize

- **Content** — edit `src/data/portfolio.ts`: personal info, roles, skills, stats, certifications, projects, and the hero pipeline/tool-chip data.
- **Design system** — `src/index.css`: theme tokens, glass utilities, gradient text, aurora keyframes.
- **Resume** — replace `public/IrfanAliResume.pdf`.
- **Contact form** — uses [Web3Forms](https://web3forms.com). Set your own key via `VITE_WEB3FORMS_ACCESS_KEY` (see `.env.example`) — **never commit your real key**.

## Deploy — Cloudflare Pages (GitHub Actions)

Auto-deploys on every push to `main` via `.github/workflows/deploy-cloudflare-pages.yml` → **<https://irfanali.pages.dev>**.

Set up once (both secrets already set for this repo):

1. **API token** — Cloudflare → **My Profile → API Tokens → Create Custom Token** with one permission: `Account → Cloudflare Pages → Edit`.
2. **Repo secrets** — GitHub → repo → **Settings → Secrets and variables → Actions**:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID` (the hex ID from `dash.cloudflare.com/<id>`)
3. Push to `main` — the workflow builds `dist` and deploys it.

### Caching & security headers

`public/_headers` is bundled into the build and makes Cloudflare serve hash-named assets with:

```
/assets/*         → Cache-Control: public, max-age=31536000, immutable
all responses     → X-Content-Type-Options: nosniff, Referrer-Policy
```

### Custom domain (optional)

Workers & Pages → **irfanali** → **Custom domains** → add your domain. Cloudflare handles DNS + HTTPS automatically. Then update `canonical`/`og:url`/`og:image` in `index.html`.

### Other static hosts

Deploy `dist/` to Vercel, Netlify, S3 + CloudFront, or any static host:

```bash
npm run build
```

## Sections

- **Hero** — CI/CD pipeline monitor + rotating roles + tool chips
- **About** — glass bio + animated stat cards
- **Skills** — glass tool-category cards
- **Projects** — glass cards with gradient edges
- **Certifications** / **Education**
- **Contact** — Web3Forms form + social links

## Acknowledgements

- Icons: [Simple Icons](https://simpleicons.org/) / [Font Awesome](https://fontawesome.com/)
- Fonts: [Inter](https://rsms.me/inter/), [Sora](https://fonts.google.com/specimen/Sora), [JetBrains Mono](https://www.jetbrains.com/lp/mono/)