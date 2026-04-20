# 🚀 Irfan Ali — DevOps Portfolio

> Automated GitHub Actions pipeline that builds, tests, and pushes a Dockerized portfolio site to Docker Hub on every push to `main` .

![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/Container-Docker_Hub-2496ED?style=flat-square&logo=docker&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-00ff88?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## 📌 What This Pipeline Does

On every `git push` to the `main` branch, the pipeline automatically:

1. **Checks out** the latest source code
2. **Builds** the Docker image locally to catch build errors early
3. **Logs in** to Docker Hub using repository secrets
4. **Tags** the image with both `latest` and the short commit SHA
5. **Pushes** the versioned image to `irfanjat/myportfolio` on Docker Hub

---

## 🔁 Pipeline Flow

```
git push → main
     │
     ▼
GitHub Actions Triggered
     │
     ├─── Checkout Code          (actions/checkout@v4)
     │
     ├─── Build Docker Image     (local validation)
     │
     ├─── Login to Docker Hub    (docker/login-action@v3)
     │
     └─── Build & Push Image     (docker/build-push-action@v5)
               ├── Tag: latest
               └── Tag: sha-<commit>
```

---

## ⚙️ Workflow File

> **File:** `.github/workflows/main.yml`

```yaml
name: CI-CD Pipeline

on:
  push:
    branches: [main]

jobs:
  build-and-push:
    name: Build, Test & Push Docker Image
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Build Docker image (validation)
        run: docker build -t myportfolio:test .

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and Push Docker Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            irfanjat/myportfolio:latest
            irfanjat/myportfolio:sha-${{ github.sha }}
```

---

## 🔄 What Changed from v1

| | Old Pipeline | Updated Pipeline |
|---|---|---|
| **Checkout action** | `actions/checkout@v3` | `actions/checkout@v4` |
| **Push action** | `mr-smithers-excellent/docker-build-push@v4` | `docker/build-push-action@v5` (official) |
| **Docker login** | Baked into push action | Separate `docker/login-action@v3` step |
| **Image tagging** | `latest` only | `latest` + `sha-<commit>` for traceability |
| **Build validation** | Combined with push | Separate step — catches errors before pushing |

---

## 🔐 Required Secrets

Set these in your GitHub repository under **Settings → Secrets and variables → Actions**:

| Secret | Description |
|--------|-------------|
| `DOCKER_USERNAME` | Your Docker Hub username |
| `DOCKER_PASSWORD` | Your Docker Hub access token (not plain password) |

> **Tip:** Generate a Docker Hub access token at hub.docker.com → Account Settings → Security. Never use your plain password.

---

## 📦 Docker Hub

The built image is published to:

```
docker pull irfanjat/myportfolio:latest
docker pull irfanjat/myportfolio:sha-<commit-hash>
```

Each commit gets its own tagged image, so you can always roll back to any previous version.

---

## 🗂️ Repository Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── ci-cd.yml       ← Pipeline definition
├── index.html              ← Portfolio site (resume PDF embedded as base64)
├── Dockerfile              ← nginx:alpine container, ~23 MB
```

---

## 🚀 Related Projects

| Project | Description |
|---------|-------------|
| [Portfolio Site](https://github.com/irfanjat/portfolio) | The site this pipeline deploys |
| [GitOps CI/CD Pipeline](https://github.com/irfanjat/gitops-cicd-pipeline) | Full GitOps workflow with ArgoCD + Kubernetes |
| [Terraform AWS Infra](https://github.com/irfanjat/terraform-aws-infra) | 3-tier AWS infrastructure with Terraform |
| [K8s Observability Stack](https://github.com/irfanjat/k8s-observability) | Prometheus + Grafana + Loki stack |

---

## 👤 Author

**Irfan Ali** — DevOps Engineer  
📧 irfanaliijat@gmail.com  
🔗 [linkedin.com/in/irfanjat](https://linkedin.com/in/irfanjat)  
🐙 [github.com/irfanjat](https://github.com/irfanjat)

---

## 📄 License

MIT — free to use as a reference or template.  
If this helped you, a ⭐ on the repo is always appreciated.
