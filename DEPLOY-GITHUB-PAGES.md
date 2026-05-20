# Deploy to GitHub Pages

Your site will be live at:

**https://irfanjat.github.io/portfolio/**

(Your repo is `portfolio` — URL path must match the repo name.)

---

## Step 1 — Push code to GitHub

```bash
cd /home/irfan/irfan-devops-portfolio

git add .
git commit -m "Add DevOps portfolio with GitHub Pages deployment"
git branch -M main

# Create repo on GitHub (if not created):
# https://github.com/new → name: irfan-devops-portfolio

git remote add origin https://github.com/irfanjat/irfan-devops-portfolio.git
git push -u origin main
```

If `origin` already exists:

```bash
git push origin main
```

---

## Step 2 — Enable GitHub Pages (fixes 404 deploy error)

1. Open **https://github.com/irfanjat/portfolio/settings/pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (NOT “Deploy from a branch”)
3. If you only see “Deploy from a branch”, click **GitHub Actions** in the source dropdown first
4. Repo must be **Public** (free GitHub Pages on private repos requires a paid plan)

If deploy still fails:
- **Settings** → **Environments** → **github-pages** → remove approval rules (or approve the pending deployment in **Actions**)
- **Settings** → **Actions** → **General** → Workflow permissions → **Read and write permissions**

---

## Step 3 — Wait for deployment

1. Go to **Actions** tab  
2. Open the workflow **Deploy to GitHub Pages**  
3. When it turns green ✅, your site is live  

URL shown in: **Settings → Pages** or the workflow **deploy** job output.

---

## Step 4 — Test

- Homepage loads  
- **Download Resume** works  
- **Contact form** — submit once; activate FormSubmit via email  
- All **GitHub links** open correctly  

---

## Local preview (GitHub Pages paths)

```bash
npm run build:gh-pages
npm run preview
```

Open the URL shown (paths use `/irfan-devops-portfolio/` base).

---

## Troubleshooting

| Problem | Fix |
|--------|-----|
| Blank page / no CSS | Repo name must match `VITE_BASE_PATH` in workflow (`/${{ repo.name }}/`) |
| 404 on refresh | Portfolio uses `#` links — navigate via menu, not direct sub-URLs |
| Resume 404 | Rebuild after `public/resume.pdf` exists |
| Workflow fails | Check **Actions** log; run `npm run build:gh-pages` locally first |

---

## Custom domain (optional)

**Settings → Pages → Custom domain** → add your domain and DNS records.
