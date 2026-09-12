# Irfan Ali — DevOps Portfolio

Modern **glassmorphism** DevOps engineer portfolio. Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion** — featuring an animated **CI/CD pipeline monitor** hero visual, aurora gradient background, magnetic buttons, and frosted-glass surfaces throughout.

## Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite 7**
- **Tailwind CSS v4** (CSS-first config via `@theme` + `@tailwindcss/postcss`)
- **Framer Motion** — animations, scroll effects, spring cursor glow
- **Lucide React** — icons
- **React Icons (Simple Icons / Font Awesome)** — brand & tool icons
- **Lenis** — smooth scrolling

## Getting Started

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Docker

```bash
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080)

Or build manually:

```bash
docker build -t irfan-devops-portfolio .
docker run -p 8080:80 irfan-devops-portfolio
```

## Customize

- **Resume**: `public/IrfanAliResume.pdf`
- **Content**: Edit `src/data/portfolio.ts` for personal info, skills, certifications, stats, projects, and the pipeline visual data.
- **Contact form**: Uses [Web3Forms](https://web3forms.com). Set your access key via `VITE_WEB3FORMS_ACCESS_KEY` (see `.env.example`). **Never commit your real key** — it is read only from the environment.
- **Design system**: `src/index.css` holds the glass utilities, gradient text, aurora keyframes, and theme tokens.

## Deploy

### Cloudflare Pages (recommended)

Auto-deploys on every push to `main` via `.github/workflows/deploy-cloudflare-pages.yml`.

One-time setup:

1. Create a Cloudflare API token → **My Profile → API Tokens → Create Token**, template
   "**Edit Cloudflare Workers**" (this covers Pages) or custom with
   `Cloudflare Pages: Edit` permission.
2. On GitHub → repo → **Settings → Secrets and variables → Actions**:
   - `CLOUDFLARE_API_TOKEN` — the token from step 1
   - `CLOUDFLARE_ACCOUNT_ID` — find it in Cloudflare dashboard URL / Your profile
3. Push to `main`. The workflow builds and deploys to
   `https://irfan-portfolio.pages.dev`.

Optional: add a custom domain in Cloudflare Pages → the project → Custom domains.
A `wrangler.toml` is included (`pages_build_output_dir = "dist"`).

Cloudflare Pages automatically serves hash-named assets with
`Cache-Control: max-age=31536000, immutable` and brotli compression.

### GitHub Pages

The `.github/workflows/deploy-github-pages.yml` workflow still deploys to
`https://irfanjat.github.io/portfolio/` while you migrate. To stop it, delete that file.

```bash
npm run build:gh-pages
```

Static hosts: deploy the `dist` folder to Vercel, Netlify, S3+CloudFront, or any static host.

## Sections

- Hero — animated CI/CD pipeline monitor + rotating role titles + floating tool chips
- About — glass bio + animated stat cards
- Skills — glass tool category cards
- Projects — glass project cards with gradient edges
- Certifications, Education
- Contact form (Web3Forms) + social links