# Irfan Ali ù DevOps Portfolio

Premium, dark-themed DevOps engineer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v3** (PostCSS ù no native binding issues)
- **Framer Motion** ù animations & counters
- **Lucide React** ù icons

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

- **Resume**: `public/resume.pdf` (Irfan Ali DevOps resume)
- **Content**: Edit `src/data/site.ts` for personal info, projects, and skills.
- **More projects**: Edit `src/data/moreProjects.ts` (XYZ format descriptions).
- **Contact form**: Uses [FormSubmit](https://formsubmit.co) ó confirm your email on first submission.
- **GitHub links**: Update project repo URLs in `Projects.tsx` and `moreProjects.ts`.

## Deploy

Deploy the `dist` folder to Vercel, Netlify, GitHub Pages, or any static host.

```bash
npm run build
```

## Sections

- Hero with animated terminal
- About, Skills, Projects (with architecture diagrams)
- Journey timeline, Certifications, Education
- Contact form (mailto) + floating social icons
