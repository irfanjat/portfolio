# Irfan Ali — DevOps & Cloud Engineer Portfolio

Live site: **<https://irfanjat.online>**

A dark, terminal-inspired single-page portfolio focused on DevOps, cloud infrastructure and platform engineering. Built with React 19, TypeScript and Vite, with a hand-written CSS design system.

## Highlights

- Responsive single-page layout with a fixed navigation, scroll spy and mobile menu
- Terminal-style hero with rotating role titles, portrait and availability status
- Content-driven sections for about, skills, experience, certifications, projects, notes, FAQ and contact
- Scroll-reveal animations with `prefers-reduced-motion` support
- Accessible landmarks, keyboard navigation, visible focus states and skip link
- SEO metadata, JSON-LD, sitemap, Open Graph image, custom 404 page and CSP/HSTS security headers
- Web3Forms contact form with mailto fallback
- Automatic deployment to Cloudflare Pages through GitHub Actions

## Sections

1. Hero
2. About and statistics
3. Technical skills
4. Experience and education
5. Certifications and courses
6. Projects
7. Engineering notes
8. FAQ
9. Contact

## Stack

- **React 19** and **TypeScript**
- **Vite 6**
- **Tailwind CSS v4** reset plus a custom CSS design system
- **Lucide React** icons
- **Web3Forms** for the contact form
- **GitHub Actions** and **Cloudflare Pages** for deployment

## Getting Started

```bash
npm ci
cp .env.example .env
npm run dev
```

Open <http://localhost:5173>.

The contact form works with the configured public Web3Forms key. To use your own form, set `VITE_WEB3FORMS_ACCESS_KEY` in `.env` and restrict the key to your domain in the Web3Forms dashboard.

## Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Project Structure

```text
src/
  components/
    layout/          Navbar and footer
    sections/        Page sections
  data/
    portfolio.ts     All site content and links
  hooks/             Active section, reveal and typewriter hooks
  index.css          Design tokens, layout and responsive styles
public/
  404.html           Custom not-found page
  404.css            Not-found page styles
  favicon.svg        Site icon
  og-image.png       Social preview image
  pic.jpg            Portrait fallback
  pic-*.avif         Responsive AVIF portrait variants
  pic-*.webp         Responsive WebP portrait variants
  IrfanAliResume.pdf Resume download
  robots.txt         Crawler rules
  sitemap.xml        Sitemap
```

## Customization

- **Content:** edit `src/data/portfolio.ts` for personal details, roles, stats, skills, projects, credentials, experience, notes and FAQ entries.
- **Design:** edit `src/index.css` for colors, typography, spacing, layout and responsive behavior.
- **Assets:** replace files in `public/` for the portrait, resume, social image and favicon.
- **Metadata:** update canonical, Open Graph, Twitter and JSON-LD URLs in `index.html` if the domain changes.
- **Contact form:** set `VITE_WEB3FORMS_ACCESS_KEY` in `.env` or update the form key in `src/data/portfolio.ts`.

## Docker

```bash
docker compose up --build
```

Open <http://localhost:8080>.

Or manually:

```bash
docker build -t irfan-devops-portfolio .
docker run -p 8080:80 irfan-devops-portfolio
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy-cloudflare-pages.yml`, which builds the site and deploys `dist/` to the `irfanali` Cloudflare Pages project.

Required repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The custom domain is managed through Cloudflare:

- `https://irfanjat.online`
- `https://www.irfanjat.online`

`public/_headers` configures security headers at the edge, including a CSP with a SHA-256 allowance for the inline JSON-LD block. If the JSON-LD or inline script changes, recompute that hash.

## Acknowledgements

- Fonts: [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Icons: [Lucide](https://lucide.dev/)
