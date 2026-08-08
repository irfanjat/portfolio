# Irfan Ali — DevOps Portfolio

Premium dark-themed DevOps engineer portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion** — featuring an interactive **3D infrastructure constellation** built with **React Three Fiber**.

## Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite 6**
- **Tailwind CSS v3** (PostCSS — no native binding issues)
- **Framer Motion** — animations & scroll effects
- **React Three Fiber** + **drei** — 3D hero scene & starfield background
- **Lucide React** — icons
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
- **Content**: Edit `src/data/portfolio.ts` for personal info, skills, certifications, stats, and projects.
- **Contact form**: Uses [Web3Forms](https://web3forms.com). Set your access key via `VITE_WEB3FORMS_ACCESS_KEY` (see `.env.example`). **Never commit your real key** — it is read only from the environment.
- **3D scene**: `src/components/hero/HeroScene.tsx` (constellation network) and `src/components/effects/Background3D.tsx` (starfield).

## Deploy

Deploy the `dist` folder to Vercel, Netlify, GitHub Pages, or any static host.

```bash
npm run build
```

## Sections

- Hero — interactive 3D infrastructure network + terminal visual (fallback on mobile)
- About, Skills, Projects
- Certifications, Education
- Contact form (Web3Forms) + social links
