# Deploy Portfolio Publicly

Your site is a static Vite build (`dist/`). Easiest options: **Vercel** (recommended) or **Netlify**.

---

## Option 1: Vercel (Recommended — ~5 minutes)

### Step 1 — Push code to GitHub

```bash
cd /home/irfan/irfan-devops-portfolio

git add .
git commit -m "Add DevOps portfolio website"
git branch -M main

# Create repo on GitHub: https://github.com/new
# Name: irfan-devops-portfolio (or any name)

git remote add origin https://github.com/irfanjat/irfan-devops-portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com) → Sign up with **GitHub**
2. Click **Add New Project** → Import `irfan-devops-portfolio`
3. Settings (auto-detected):
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**

You get a live URL like: `https://irfan-devops-portfolio.vercel.app`

### Step 3 — Custom domain (optional)

Vercel → Project → **Settings** → **Domains** → add your domain.

### Step 4 — Update resume & LinkedIn

Add your live URL to:
- `resume/IrfanAli_DevOps_Resume.html` (header)
- LinkedIn profile → **Website** field
- GitHub profile → **Website**

---

## Option 2: Netlify

1. Push to GitHub (same as above)
2. [https://app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Build: `npm run build` · Publish: `dist`
4. Deploy

---

## Option 3: GitHub Pages

Add to `vite.config.ts`:

```ts
export default defineConfig({
  base: '/irfan-devops-portfolio/', // your repo name
  plugins: [react()],
})
```

Create `.github/workflows/deploy.yml` (or use gh-pages branch).

URL: `https://irfanjat.github.io/irfan-devops-portfolio/`

---

## Option 4: Docker (VPS / any cloud)

```bash
docker compose up --build -d
```

Expose port 80 behind a reverse proxy (Nginx/Caddy) with HTTPS (Let's Encrypt).

---

## After deploy — checklist

- [ ] Test **Download Resume** (`/resume.pdf`)
- [ ] Test **Contact form** — submit once; confirm email via FormSubmit activation link
- [ ] Test all **GitHub project links**
- [ ] Add portfolio URL to resume PDF and LinkedIn

---

## FormSubmit (contact form)

First submission from your live site triggers an activation email to **irfanali.cloud@gmail.com**. Click the link once — then the form works for all visitors.
