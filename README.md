# 🚀 Irfan Ali — DevOps Portfolio

> Personal portfolio website for a Junior DevOps Engineer — built with vanilla HTML/CSS/JS,
> containerized with Docker + nginx, and self-hosted on AWS EC2.

**🌐 Live:** [http://16.171.142.13/](http://16.171.142.13/)

---

## Badges

![Status](https://img.shields.io/badge/Status-Live-00ff88?style=flat-square)
![Host](https://img.shields.io/badge/Host-AWS_EC2-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Docker](https://img.shields.io/badge/Container-nginx:alpine-2496ED?style=flat-square&logo=docker&logoColor=white)
![HTML](https://img.shields.io/badge/Built_with-HTML%2FCSS%2FJS-E34F26?style=flat-square&logo=html5&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## Overview

This is my personal portfolio website showcasing my DevOps projects, skills, and background.
Built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools —
containerized with Docker using an nginx:alpine base image, and deployed on AWS EC2 (Ubuntu 24.04).

The entire site including the resume PDF lives in a single `index.html` file.
The PDF is embedded as a base64 data URI so the download button always works — no missing file paths.

---

## Live Infrastructure

```
Browser
    │  HTTP / HTTPS
    ▼
AWS EC2 — t2.micro (Ubuntu 24.04)
  IP: 16.171.142.13
    │
    ▼
Docker Container: portfolio
  Image: nginx:alpine
  Port mapping: 80 → 80
  Restart policy: unless-stopped
    │
    ▼
nginx serves index.html
```

---

## Repository Structure

```
portfolio/
├── index.html          ← Entire portfolio (resume PDF embedded inside as base64)
├── Dockerfile          ← nginx:alpine container, ~23 MB final image
```

---

## Portfolio Sections

| # | Section | What It Shows |
|---|---------|---------------|
| 01 | **Hero** | Name, animated typing titles, live terminal widget, stats |
| 02 | **About** | Background, honest bio, how I got into DevOps (Aug 2025) |
| 03 | **Skills** | 8 categorized grids — AWS, CI/CD, Kubernetes, IaC, observability, Linux, scripting |
| 04 | **Tools** | Animated dual-row icon marquee of every tool I work with |
| 05 | **Projects** | 4 main projects with architecture diagrams, highlights, GitHub links + 6 mini-projects |
| 06 | **Experience** | Self-directed DevOps lab (Aug 2025 – Present) + CS degree |
| 07 | **Certifications** | AWS CCP · Python IBM · GitHub Actions Duke University |
| 08 | **Contact** | Work email · Personal email · Phone · LinkedIn · GitHub · Resume download |

---

## Projects Featured

### 1. End-to-End GitOps CI/CD Pipeline
**Repo:** [github.com/irfanjat/gitops-cicd-pipeline](https://github.com/irfanjat/gitops-cicd-pipeline)

Production-grade GitOps workflow — a single `git push` triggers automated tests, Docker image build,
GHCR push, and ArgoCD sync to Kubernetes. Deployment time cut from 15 min to under 2 min.
Two-repo pattern: app source repo + config repo as single source of truth.

**Stack:** GitHub Actions · ArgoCD · Kubernetes · Docker · GHCR · Flask · pytest · Helm

---

### 2. Multi-Tier AWS Infrastructure with Terraform
**Repo:** [github.com/irfanjat/terraform-aws-infra](https://github.com/irfanjat/terraform-aws-infra)

Production-grade 3-tier AWS architecture using 5 reusable Terraform modules — VPC, ALB, EC2 Auto
Scaling Group, RDS PostgreSQL across 2 AZs. S3 remote state + DynamoDB locking for team safety.
24 resources deployable from zero in under 10 minutes.

**Stack:** Terraform · AWS VPC · EC2 ASG · RDS PostgreSQL · ALB · S3 · CloudWatch · DynamoDB

---

### 3. Kubernetes Observability Stack
**Repo:** [github.com/irfanjat/k8s-observability](https://github.com/irfanjat/k8s-observability)

Full observability stack deployed via Helm — 14 active Prometheus scrape targets, custom 6-panel
Grafana dashboard (CPU, memory, restarts, live logs via Loki), and 3 PrometheusRule CRDs covering
pod crashes, availability drops, and memory threshold breaches.

**Stack:** Prometheus · Grafana · Loki · Alertmanager · Promtail · Helm · Kubernetes

---

### 4. Kubernetes Deployment on AWS EKS
**Repo:** [github.com/irfanjat/aws-eks-kubernetes-project](https://github.com/irfanjat/aws-eks-kubernetes-project)

End-to-end EKS deployment — cluster provisioning with eksctl, IAM OIDC setup, AWS Load Balancer
Controller via Helm, ALB IP-mode routing directly to pod IPs, zero-downtime rolling updates
with readiness/liveness probes. Documented 4 real operational issues encountered and fixed.

**Stack:** AWS EKS · ALB Controller · eksctl · Kubernetes · Helm · IAM/OIDC · Docker

---

## Tech Stack (Portfolio Site Itself)

| Tool | Role |
|------|------|
| HTML5 / CSS3 | Structure and all styling — zero CSS frameworks |
| Vanilla JavaScript | Typing animation · scroll reveal · active nav highlight · form handler |
| JetBrains Mono | Terminal-style monospace font (Google Fonts) |
| Syne | Display/heading font (Google Fonts) |
| Devicons CDN | Tool icons in the animated showcase section |
| Docker (nginx:alpine) | Production container — ~23 MB final image |
| AWS EC2 t2.micro | Self-hosted on Ubuntu 24.04, EU North region |

---

## Design Highlights

- **Dark terminal theme** — CSS grid background, `#00ff88` neon green accent, monospace throughout
- **Hero terminal widget** — animated widget showing real `kubectl` / `terraform` / `argocd` output
- **Dual-row tool marquee** — rows scroll in opposite directions, pause on hover with glow effect
- **Scroll reveal** — `IntersectionObserver` drives CSS fade-in animations, no external library
- **Single file deployment** — the entire portfolio including resume PDF (base64) in one HTML file
- **No build pipeline** — open the file directly, it works. No npm, no webpack, no dependencies

---

## Run Locally

```bash
# Clone the repo
git clone https://github.com/irfanjat/portfolio.git
cd portfolio

# Option 1 — open directly in browser (quickest)
open index.html

# Option 2 — Python dev server (avoids CORS quirks)
python3 -m http.server 8080
# → http://localhost:8080

# Option 3 — Docker (identical to production)
docker build -t portfolio .
docker run -p 8080:80 portfolio
# → http://localhost:8080
```

---

## Docker

### Build the image

```bash
docker build -t portfolio:latest .
```

### Run in production

```bash
docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 80:80 \
  portfolio:latest
```

### Useful commands

```bash
# Check container is running
docker ps

# View nginx logs
docker logs portfolio

# Stop and remove
docker stop portfolio && docker rm portfolio

# Update after editing index.html
docker stop portfolio && docker rm portfolio
docker build -t portfolio:latest .
docker run -d --name portfolio --restart unless-stopped -p 80:80 portfolio:latest
```

### Dockerfile overview

```dockerfile
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY index.html  /usr/share/nginx/html/index.html
COPY nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## EC2 Deployment (Quick Reference)

```bash
# 1. Upload files from local machine
scp -i your-key.pem index.html Dockerfile nginx.conf \
    ubuntu@16.171.142.13:~/portfolio/

# 2. SSH into server
ssh -i your-key.pem ubuntu@16.171.142.13

# 3. Install Docker (first time only)
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker ubuntu
newgrp docker

# 4. Build and run
cd ~/portfolio
docker build -t portfolio:latest .
docker run -d --name portfolio --restart unless-stopped -p 80:80 portfolio:latest

# 5. Verify
curl http://localhost
```

For the full setup guide including free domain + Cloudflare HTTPS + server hardening → see [`DEPLOY.md`](./DEPLOY.md)

---

## Server Security

| Measure | Details |
|---------|---------|
| SSH password auth | Disabled — key-pair only |
| Root login | Disabled |
| UFW firewall | Only ports 22, 80, 443 open |
| fail2ban | Blocks SSH brute force attempts |
| Auto security updates | `unattended-upgrades` enabled |
| Container restart | `--restart unless-stopped` survives reboots |
| nginx headers | X-Frame-Options · X-Content-Type-Options · X-XSS-Protection |

---

## Certifications

| Certificate | Issuer | Completed |
|-------------|--------|-----------|
| AWS Cloud Practitioner Essentials | Amazon Web Services / Coursera | Nov 2025 |
| Python for Data Science, AI & Dev | IBM / Coursera | Dec 2025 |
| Introduction to GitHub Actions | Duke University / Coursera | Dec 2025 |

---

## Contact

| | |
|-|-|
| **Work Email** | irfanaliijat@gmail.com |
| **Personal Email** | jatirfan110@gmail.com |
| **Phone / WhatsApp** | +92-315-371-1489 |
| **LinkedIn** | [linkedin.com/in/irfanjat](https://linkedin.com/in/irfanjat) |
| **GitHub** | [github.com/irfanjat](https://github.com/irfanjat) |
| **Portfolio** | [http://16.171.142.13](http://16.171.142.13) |
| **Location** | Karachi, Pakistan |
| **Availability** | Remote · Onsite · Hybrid · Contract |

---

## License

MIT — free to use as a reference or template.
If this helped you, a ⭐ on the repo is always appreciated.

---

*Built and self-hosted by Irfan Ali — CS student building production-grade DevOps infrastructure.*
