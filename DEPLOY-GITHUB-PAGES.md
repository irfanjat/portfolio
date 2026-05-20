# Deploy to GitHub Pages

Your site will be live at:

**https://irfanjat.github.io/irfan-devops-portfolio/**

(Replace `irfan-devops-portfolio` if your GitHub repo has a different name.)

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

## Step 2 — Enable GitHub Pages

1. Open your repo on GitHub  
2. Go to **Settings** → **Pages**  
3. Under **Build and deployment** → **Source**, select **GitHub Actions**  
4. Save (no branch selection needed — the workflow handles it)

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
