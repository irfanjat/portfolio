# Resume Analysis — Irfan Ali (DevOps Engineer)

## What Was Already Strong

- **Impact-driven bullets** with metrics (80% deploy reduction, 24 resources, 14 scrape targets, 35 min setup)
- **Technical depth** — shows real understanding (ArgoCD selfHeal, DynamoDB state lock, SG chaining, PrometheusRule CRDs)
- **Correct DevOps keywords** for ATS: Terraform, Kubernetes, GitHub Actions, ArgoCD, Prometheus, Helm
- **Certifications** from IBM and AWS add credibility for entry-level cloud roles
- **Project-first layout** — right approach when you have portfolio work but no formal DevOps job title yet

---

## Issues Found & Fixes Applied

| Issue | Why it matters | Fix |
|-------|----------------|-----|
| Said **"4 portfolio projects"** | Under-sells 20+ repos; inconsistent with GitHub | Updated to **8+ projects, 20+ repositories** |
| **No job title** under name | Recruiters scan in 6 seconds | Added **DevOps Engineer \| Cloud & Platform Engineer** |
| **No location / remote** | Remote employers filter by timezone | Added **Pakistan (Open to Remote)** |
| **Phone without country code** | International recruiters can't call | **+92 315 3711489** |
| **No GitHub links** on projects | Hiring managers want 1-click proof | Added repo URL per featured project + table for others |
| **Missing Linux, eksctl, EKS, Docker Compose** | Common ATS search terms | Added to skills |
| **5 other projects invisible** | Strong work hidden | **Additional Projects** table with all 5 repos |
| **Bullets too long** (some 3+ lines) | Hard to skim; ATS may truncate | Tightened to 1–2 lines each |
| Special bullet `▸` character | Some ATS parsers break on Unicode | Standard `-` bullets |
| **No portfolio mention** | Missed branding opportunity | GitHub 20+ repos in header |
| PDF page-break artifacts | Looks unprofessional | Clean HTML → PDF pipeline |
| Certs/education order | Minor | Certs before Education (certs matter more for DevOps hiring) |

---

## What You Should Still Do

1. **Export PDF** from `resume/IrfanAli_DevOps_Resume.html` (browser → Print → Save as PDF) or run pandoc command below.
2. **Add portfolio URL** once deployed (e.g. `your-domain.dev` or Netlify link) in the header.
3. **LinkedIn** — mirror the same summary and top 3 projects.
4. **AWS Certified Cloud Practitioner** (exam) — you have the courses; the official badge helps significantly.
5. **Keep resume to 1 page** for first applications; use 2 pages only if adding internship/work experience later.

---

## Generate PDF

```bash
# Option A: Browser — open HTML, Ctrl+P → Save as PDF
xdg-open resume/IrfanAli_DevOps_Resume.html

# Option B: Pandoc (plain styling)
pandoc resume/IrfanAli_DevOps_Resume.md -o resume/IrfanAli_DevOps_Resume.pdf --pdf-engine=pdflatex -V geometry:margin=0.75in
```

Copy final PDF to portfolio:

```bash
cp resume/IrfanAli_DevOps_Resume.pdf public/resume.pdf
cp resume/IrfanAli_DevOps_Resume.pdf ~/Downloads/IrfanAliDevOpsResume.pdf
```
