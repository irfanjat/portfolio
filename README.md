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

Deploy the `dist` folder to Vercel, Netlify, GitHub Pages, or any static host.

```bash
npm run build
```

For GitHub Pages under `/portfolio/`:

```bash
npm run build:gh-pages
```

## Sections

- Hero — animated CI/CD pipeline monitor + rotating role titles + floating tool chips
- About — glass bio + animated stat cards
- Skills — glass tool category cards
- Projects — glass project cards with gradient edges
- Certifications, Education
- Contact form (Web3Forms) + social links