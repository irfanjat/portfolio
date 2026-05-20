# IRFAN ALI

**DevOps Engineer | Cloud & Platform Engineer**

Jamshoro, Pakistan (Open to Remote) · +92 315 3711489 · irfanali.cloud@gmail.com  
[linkedin.com/in/irfanjat](https://linkedin.com/in/irfanjat) · [github.com/irfanjat](https://github.com/irfanjat) · [irfanjat.github.io/portfolio](https://irfanjat.github.io/portfolio/)

---

## PROFESSIONAL SUMMARY

DevOps Engineer with **8+ months** of hands-on experience designing production-style cloud infrastructure, **GitOps CI/CD** pipelines, and **Kubernetes** observability stacks. Built **8+ end-to-end projects** across **Terraform on AWS**, **GitHub Actions**, **ArgoCD**, **Jenkins**, **EKS**, and **Prometheus/Grafana**—with **20+ public GitHub repositories**. Holds **IBM** and **AWS** certifications; pursuing **BS Computer Science**. Seeking remote **DevOps**, **Cloud**, or **Platform Engineer** roles.

---

## TECHNICAL SKILLS

| **CI/CD & GitOps** | GitHub Actions, ArgoCD, Jenkins |
| **Containers & Orchestration** | Docker, Docker Compose, Kubernetes, Helm, eksctl |
| **Infrastructure as Code** | Terraform (modules, remote state, workspaces), AWS Provider |
| **Cloud — AWS** | VPC, EC2, ALB, Auto Scaling, EKS, RDS, S3, IAM, DynamoDB, CloudWatch |
| **Observability** | Prometheus, Grafana, Loki, Alertmanager, PrometheusRule CRDs |
| **Languages & Tools** | Python, Bash, Linux, Git, GitHub, GHCR, kubectl |

---

## PROJECTS

### End-to-End GitOps CI/CD Pipeline
*GitHub Actions · ArgoCD · Kubernetes · Docker · Helm · Python* · [github.com/irfanjat/gitops-cicd-pipeline](https://github.com/irfanjat/gitops-cicd-pipeline)

- Reduced deployment time **80%** (10 min → 2 min) by architecting a two-repo GitOps pipeline: GitHub Actions runs test → build → push → config-update; ArgoCD syncs new image SHAs to Kubernetes with rolling updates.
- Achieved **zero-downtime** releases and **100% traceability** via Git commit SHA image tags and readiness probes on `/health` before traffic shift.
- Eliminated configuration drift with ArgoCD **selfHeal** and **prune**, reverting out-of-band `kubectl` changes to Git-defined state automatically.

### Production Multi-Tier AWS Infrastructure — Terraform IaC
*Terraform · VPC · EC2 · ALB · Auto Scaling · RDS PostgreSQL · S3 · DynamoDB* · [github.com/irfanjat/terraform-aws-infra](https://github.com/irfanjat/terraform-aws-infra)

- Provisioned **24 AWS resources** (VPC, 2-AZ subnets, ALB, EC2 ASG 1–3 instances, RDS PostgreSQL) from zero with modular Terraform—no manual console setup.
- Enabled safe team collaboration with **S3 remote state**, **DynamoDB locking**, AES-256 encryption, and versioning—zero concurrent-apply conflicts.
- Enforced **least-privilege** security groups across 3 tiers: ALB (80 from internet) → EC2 (from ALB only) → RDS (5432 from EC2, encrypted, not public).
- Improved reusability via **5 Terraform modules** (vpc, security_groups, alb, ec2, rds) with isolated variables/outputs.

### Kubernetes Observability Stack
*Prometheus · Grafana · Loki · Alertmanager · Helm · Kubernetes* · [github.com/irfanjat/k8s-observability](https://github.com/irfanjat/k8s-observability)

- Deployed full-stack observability across **14 Prometheus scrape targets** in under 35 minutes using kube-prometheus-stack and loki-stack via Helm.
- Reduced **MTTD** with **3 PrometheusRule** CRDs (pod restarts, unavailability, memory)—version-controlled, auto-reloaded by Prometheus Operator.
- Built a **6-panel Grafana dashboard** with live Loki log streaming, CPU/memory metrics, and node gauges—no `kubectl logs` dependency for routine debugging.

### Additional Projects (20+ repositories on GitHub)
| Project | Stack | Repository |
|---------|-------|------------|
| Node.js CI/CD + Docker Hub | GitHub Actions, Docker | [node-cicd-docker](https://github.com/irfanjat/node-cicd-docker) |
| Flask App — Jenkins CI/CD on EC2 | Flask, Jenkins, Docker, AWS | [project-two-tier-flask-app](https://github.com/irfanjat/project-two-tier-flask-app) |
| Kubernetes on AWS EKS + ALB Ingress | EKS, eksctl, Helm, ALB | [aws-eks-kubernetes-project](https://github.com/irfanjat/aws-eks-kubernetes-project) |
| Static Website on S3 — Terraform | Terraform, S3, IAM | [terraform-aws-s3-static-website](https://github.com/irfanjat/terraform-aws-s3-static-website) |
| Docker Compose Multi-Container App | Docker Compose, Node.js, MongoDB | [Docker-compose-app](https://github.com/irfanjat/Docker-compose-app) |

---

## CERTIFICATIONS

- **IBM DevOps and Software Engineering Professional Certificate** — IBM / Coursera  
- **AWS Cloud Practitioner Essentials** — AWS / Coursera  
- **AWS Cloud Technical Essentials** — AWS / Coursera  

---

## EDUCATION

**Bachelor of Science in Computer Science** — University of Sindh (SULC), Jamshoro, Pakistan · Expected **2027**
