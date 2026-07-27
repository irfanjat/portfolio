export const personal = {
  name: 'Irfan Ali',
  role: 'DevOps Engineer | Cloud & Platform Engineer',
  tagline:
    'Building scalable cloud infrastructure and automated delivery systems.',
  subtagline:
    'DevOps Engineer focused on Kubernetes, Terraform, GitOps, and AWS.',
  phone: '03153711489',
  email: 'irfanali.cloud@gmail.com',
  linkedin: 'https://linkedin.com/in/irfanjat',
  github: 'https://github.com/irfanjat',
  location: 'Pakistan',
  availability: 'Open to full-time, hybrid, on-site & remote roles',
  availabilityDetail:
    'DevOps, Cloud & Platform Engineering — flexible on location and work arrangement.',
}

export const contactForm = {
  web3formsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '0aa0ba6b-9d3d-4054-b870-caa6263644fb',
  successRedirect: 'https://irfanjat.github.io/portfolio/?sent=1#contact',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export const skillCategories = [
  {
    title: 'CI/CD & GitOps',
    color: 'blue',
    skills: [
      { name: 'GitHub Actions', level: 90 },
      { name: 'ArgoCD', level: 88 },
      { name: 'Jenkins', level: 75 },
    ],
  },
  {
    title: 'Containers & Orchestration',
    color: 'orange',
    skills: [
      { name: 'Docker', level: 92 },
      { name: 'Kubernetes', level: 88 },
      { name: 'Helm', level: 85 },
    ],
  },
  {
    title: 'Infrastructure as Code',
    color: 'green',
    skills: [
      { name: 'Terraform', level: 90 },
      { name: 'Ansible', level: 85 },
    ],
  },
  {
    title: 'Cloud & AWS',
    color: 'blue',
    skills: [
      { name: 'VPC', level: 90 },
      { name: 'EC2', level: 88 },
      { name: 'EKS', level: 85 },
      { name: 'S3', level: 90 },
      { name: 'IAM', level: 88 },
      { name: 'RDS', level: 84 },
    ],
    extra: [
      { name: 'Lambda', level: 82 },
      { name: 'ALB', level: 85 },
      { name: 'ECS', level: 85 },
      { name: 'ECR', level: 84 },
      { name: 'Auto Scaling', level: 86 },
      { name: 'CloudWatch', level: 85 },
      { name: 'DynamoDB', level: 80 },
      { name: 'CloudFormation', level: 78 },
      { name: 'CodeBuild', level: 76 },
      { name: 'CodeCommit', level: 74 },
      { name: 'CodeDeploy', level: 75 },
      { name: 'SNS', level: 78 },
      { name: 'SQS', level: 80 },
      { name: 'Secrets Manager', level: 82 },
      { name: 'EventBridge', level: 78 },
      { name: 'AWS Config', level: 76 },
      { name: 'NAT Gateway', level: 82 },
      { name: 'Internet Gateway', level: 85 },
    ],
  },
  {
    title: 'Monitoring & Scripting',
    color: 'red',
    skills: [
      { name: 'Prometheus', level: 88 },
      { name: 'Grafana', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Bash', level: 88 },
    ],
  },
]

export const projects = [
  {
    id: 'costguard',
    title: 'CostGuard — AWS Cost Optimization Platform',
    description:
      'Serverless AWS cost monitoring platform with anomaly detection, orphaned resource scanning, and Slack notifications — fully deployed via Terraform.',
    tech: ['Python', 'AWS Lambda', 'Terraform', 'DynamoDB', 'Slack API', 'GitHub Actions'],
    metrics: [
      { label: 'Detection', value: 'Z-Score', sub: 'anomaly analysis' },
      { label: 'Resources', value: 'Scanned', sub: 'EC2, EBS, EIPs' },
      { label: 'Deploy', value: 'IaC', sub: 'Terraform + CI/CD' },
    ],
    achievements: [
      'Statistical anomaly detection using z-score analysis on daily spend',
      'Scans EC2, EBS, EIPs for orphaned resources',
      'Slack notifications with actionable cost reports',
      'Full IaC deployment with Terraform and GitHub Actions CI/CD',
    ],
    diagram: 'aws' as const,
    github: 'https://github.com/irfanjat/costguard',
    demo: 'https://github.com/irfanjat/costguard',
  },
  {
    id: 'gitops',
    title: 'End-to-End GitOps CI/CD Pipeline',
    description:
      'Production-style GitOps pipeline with automated builds, SHA-tagged images, Helm deployments, and ArgoCD self-healing on Kubernetes.',
    tech: ['GitHub Actions', 'ArgoCD', 'Kubernetes', 'Docker', 'Helm', 'Python'],
    metrics: [
      { label: 'Deploy Time', value: '-80%', sub: 'reduction' },
      { label: 'Downtime', value: '0', sub: 'zero-downtime' },
      { label: 'Sync', value: 'GitOps', sub: 'self-healing' },
    ],
    achievements: [
      'Reduced deployment time by 80%',
      'Automated CI/CD pipeline with SHA-tagged images',
      'GitOps architecture with ArgoCD self-healing',
      'Zero-downtime rolling deployments',
    ],
    diagram: 'gitops' as const,
    github: 'https://github.com/irfanjat/gitops-cicd-pipeline',
    demo: 'https://github.com/irfanjat/gitops-cicd-pipeline',
  },
  {
    id: 'guardrails',
    title: 'Policy Guardrails Engine — IaC Security',
    description:
      'Policy-as-code guardrail engine enforcing security on Terraform and Kubernetes manifests in CI with automated PR comments.',
    tech: ['OPA/Rego', 'Kyverno', 'Conftest', 'Terraform', 'Kubernetes', 'GitHub Actions'],
    metrics: [
      { label: 'Rego Policies', value: '8', sub: 'Terraform rules' },
      { label: 'Kyverno', value: '3', sub: 'K8s policies' },
      { label: 'PR Comments', value: 'Auto', sub: 'violation details' },
    ],
    achievements: [
      '8 Rego policies covering S3, security groups, encryption, secrets',
      'Kyverno policies for K8s pod security (no root, no privileged)',
      'Automated PR comments with violation details and fix guidance',
    ],
    diagram: 'aws' as const,
    github: 'https://github.com/irfanjat/Guardrails',
    demo: 'https://github.com/irfanjat/Guardrails',
  },
  {
    id: 'terraform-aws',
    title: 'Production Multi-Tier AWS Infrastructure',
    description:
      'Modular Terraform IaC provisioning a secure, multi-AZ AWS stack with remote state, encryption, and least-privilege IAM.',
    tech: ['Terraform', 'VPC', 'EC2', 'ALB', 'Auto Scaling', 'RDS', 'S3', 'DynamoDB'],
    metrics: [
      { label: 'Resources', value: '24', sub: 'provisioned' },
      { label: 'Architecture', value: 'Multi-AZ', sub: 'high availability' },
      { label: 'Security', value: 'Encrypted', sub: 'least privilege' },
    ],
    achievements: [
      'Provisioned 24 AWS resources with modular Terraform',
      'Multi-AZ architecture for high availability',
      'Remote state locking with encryption at rest',
      'Least-privilege IAM policies throughout',
    ],
    diagram: 'aws' as const,
    github: 'https://github.com/irfanjat/terraform-aws-infra',
    demo: 'https://github.com/irfanjat/terraform-aws-infra',
  },
]

export const certifications = [
  {
    title: 'IBM Introduction to DevOps Engineering Professional Certificate',
    issuer: 'IBM',
    badge: 'IBM',
    verified: true,
    link: 'https://coursera.org/verify/PANSLSFPOV59',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    badge: 'AWS',
    verified: true,
    link: 'https://coursera.org/verify/VJOL7N4FHGNV',
  },
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services',
    badge: 'AWS',
    verified: true,
    link: 'https://coursera.org/verify/JHTNQ3MFH2D2',
  },
  {
    title: 'OCI Foundation Associate',
    issuer: 'Oracle Cloud Infrastructure',
    badge: 'OCI',
    verified: true,
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1BEEF1CBBEAE05D6DD59D53B668355A20ADBC563F691C84B03315E27A745FD49',
  },
]

export const stats = [
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Projects Shipped', value: 12, suffix: '' },
  { label: 'Tools Mastered', value: 25, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '' },
]

export const pipelineStages = [
  { id: 'code', label: 'Code Push', icon: 'GitCommit', color: 'blue', desc: 'Feature branch → PR → main' },
  { id: 'build', label: 'Build & Test', icon: 'FlaskConical', color: 'orange', desc: 'Unit tests, lint, image build' },
  { id: 'docker', label: 'Dockerize', icon: 'Box', color: 'blue', desc: 'SHA-tagged container images' },
  { id: 'scan', label: 'Security Scan', icon: 'Shield', color: 'green', desc: 'Trivy, Snyk, SBOM' },
  { id: 'deploy', label: 'ArgoCD Deploy', icon: 'Rocket', color: 'orange', desc: 'GitOps sync to K8s cluster' },
  { id: 'monitor', label: 'Monitor', icon: 'Activity', color: 'red', desc: 'Prometheus + Grafana alerts' },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Sindh (SULC), Jamshoro, Pakistan',
  graduation: 'Expected Graduation: 2027',
}

export const resume = {
  title: 'Irfan Ali — DevOps Engineer',
  description:
    'A summary of my experience, skills, certifications, and project highlights in DevOps, cloud infrastructure, and platform engineering.',
  fileName: 'IrfanAliResume.pdf',
  downloadName: 'IrfanAli-Resume.pdf',
  updated: 'July 2026',
}

export interface MoreProject {
  id: string
  title: string
  tech: string[]
  github: string
  xyz: {
    accomplished: string
    byDoing: string
    resultedIn: string
  }
  highlights: string[]
  architecture?: string
  flowSteps?: { label: string; color: string }[]
}

export const moreProjects: MoreProject[] = [
  {
    id: 'devsecops',
    title: 'DevSecOps CI/CD Pipeline with Security Gates',
    tech: ['GitHub Actions', 'Docker', 'Trivy', 'Bandit', 'OPA/Conftest', 'ArgoCD', 'Kubernetes'],
    github: 'https://github.com/irfanjat/devsecops-app',
    xyz: {
      accomplished: 'Built an end-to-end DevSecOps pipeline with security scanning at every CI/CD stage',
      byDoing:
        'Integrated hadolint, yamllint, pytest, Bandit SAST, Trivy container scanning, OPA/Conftest K8s policy checks, and ArgoCD GitOps deployment into a single GitHub Actions workflow',
      resultedIn:
        'Zero CVEs reach production — vulnerable builds blocked at build time, K8s manifests validated before deployment, and full audit trail via SARIF reports',
    },
    highlights: [
      'Trivy blocks vulnerable images (Critical/HIGH CVEs) at build time',
      'OPA/Conftest enforces 6 K8s security policies before deploy',
      'ArgoCD GitOps with SHA-tagged immutable deployments',
    ],
    architecture: 'Lint → Test → Bandit SAST → Trivy Scan → Conftest Policy → ArgoCD Deploy',
    flowSteps: [
      { label: 'Lint', color: 'blue' },
      { label: 'Test', color: 'orange' },
      { label: 'Bandit', color: 'yellow' },
      { label: 'Trivy', color: 'green' },
      { label: 'Policy', color: 'red' },
      { label: 'Deploy', color: 'blue' },
    ],
  },
  {
    id: 'observability',
    title: 'Kubernetes Observability Stack',
    tech: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'Helm', 'Kubernetes'],
    github: 'https://github.com/irfanjat/k8s-observability',
    xyz: {
      accomplished: 'Built a full-stack Kubernetes monitoring and alerting platform',
      byDoing:
        'Deployed Prometheus with 14 scrape targets, Grafana dashboards, Loki for log aggregation, and Alertmanager for alert routing — all via Helm charts',
      resultedIn:
        'Complete visibility into cluster health with live dashboards, log streaming, and real-time alerting',
    },
    highlights: [
      '14 Prometheus scrape targets with ServiceMonitors',
      'Live Grafana dashboards with custom panels',
      'Loki log streaming with label-based queries',
      'Alertmanager routes to Slack and Email',
    ],
    architecture: 'Prometheus → Grafana + Loki → Alertmanager → Slack/Email',
    flowSteps: [
      { label: 'Prometheus', color: 'blue' },
      { label: 'Grafana', color: 'orange' },
      { label: 'Loki', color: 'green' },
      { label: 'Alertmanager', color: 'red' },
      { label: 'Slack', color: 'yellow' },
    ],
  },
  {
    id: 'eks-kubernetes',
    title: 'Kubernetes End-to-End Deployment on AWS EKS',
    tech: ['Amazon EKS', 'ALB Ingress', 'kubectl', 'eksctl', 'Helm', 'Docker'],
    github: 'https://github.com/irfanjat/aws-eks-kubernetes-project',
    xyz: {
      accomplished: 'Ran a complete Kubernetes deployment lifecycle on AWS EKS with external traffic routing',
      byDoing:
        'Provisioned EKS with eksctl, installed AWS Load Balancer Controller via Helm, and deployed Deployment, ClusterIP Service, and ALB Ingress with health probes',
      resultedIn:
        'Containerized app exposed via internet-facing ALB with rolling updates, namespace isolation, and pod-level health checks',
    },
    highlights: [
      '2x t3.medium managed node group in us-east-1',
      'ALB controller with OIDC IAM service account',
      'RollingUpdate strategy with liveness & readiness probes',
    ],
    architecture: 'Internet → ALB → Ingress → Service → Pods → Container',
    flowSteps: [
      { label: 'Internet', color: 'blue' },
      { label: 'ALB', color: 'orange' },
      { label: 'Ingress', color: 'green' },
      { label: 'Service', color: 'yellow' },
      { label: 'Pods', color: 'red' },
    ],
  },
  {
    id: 'github-actions-docker',
    title: 'CI/CD Pipeline with GitHub Actions & Docker',
    tech: ['GitHub Actions', 'Docker', 'Node.js', 'Docker Hub'],
    github: 'https://github.com/irfanjat/node-cicd-docker',
    xyz: {
      accomplished: 'Built a fully automated CI/CD pipeline for a Dockerized Node.js application',
      byDoing:
        'Configured GitHub Actions to checkout code, run tests on Node 18, build the Docker image, and push to Docker Hub on every push to main',
      resultedIn:
        'Hands-free deployments with images published to Docker Hub — no manual build or push steps required',
    },
    highlights: [
      'Automated build, test, and push on every main branch push',
      'Docker Hub integration via GitHub Secrets',
      'Multi-stage workflow with ubuntu-latest runners',
    ],
    architecture: 'Push → GitHub Actions → npm test → docker build → Docker Hub',
    flowSteps: [
      { label: 'Git Push', color: 'blue' },
      { label: 'GitHub Actions', color: 'orange' },
      { label: 'npm test', color: 'green' },
      { label: 'docker build', color: 'yellow' },
      { label: 'Docker Hub', color: 'red' },
    ],
  },
  {
    id: 'flask-jenkins-aws',
    title: 'Two-Tier Flask App — Jenkins CI/CD on AWS EC2',
    tech: ['Python Flask', 'Jenkins', 'Docker', 'AWS EC2', 'GitHub'],
    github: 'https://github.com/irfanjat/project-two-tier-flask-app',
    xyz: {
      accomplished: 'Deployed a two-tier Flask web application with zero-touch CI/CD on AWS',
      byDoing:
        'Set up Jenkins on EC2 to watch the main branch, build a Docker image, stop old containers, and run the new app mapped to port 80',
      resultedIn:
        'Every git push auto-deploys the app — publicly accessible at the EC2 public IP in any browser',
    },
    highlights: [
      'Jenkins webhook triggers on every main push',
      'Docker container runs on port 80 → Flask 5000',
      'Security groups configured for SSH, HTTP, and Jenkins',
    ],
    architecture: 'Developer → GitHub → Jenkins → Docker Build → EC2 → Browser',
    flowSteps: [
      { label: 'Git Push', color: 'blue' },
      { label: 'Jenkins', color: 'orange' },
      { label: 'Docker Build', color: 'yellow' },
      { label: 'EC2 Deploy', color: 'green' },
      { label: 'Browser', color: 'red' },
    ],
  },
  {
    id: 's3-terraform-static',
    title: 'Static Website on AWS S3 with Terraform',
    tech: ['Terraform', 'AWS S3', 'IAM', 'HTML', 'CSS'],
    github: 'https://github.com/irfanjat/terraform-aws-s3-static-website',
    xyz: {
      accomplished: 'Hosted a static website on AWS S3 entirely through Infrastructure as Code',
      byDoing:
        'Wrote Terraform modules to create the bucket, enable static hosting, apply public-read policy, and upload HTML/CSS with correct Content-Type metadata',
      resultedIn:
        'One-command deploy and destroy — live website at the S3 website endpoint with zero manual AWS console steps',
    },
    highlights: [
      'terraform init → plan → apply workflow',
      'S3 bucket policy for controlled public access',
      'Outputs website URL automatically',
    ],
    architecture: 'Terraform → S3 Bucket → Static Hosting → Policy → Files → Live URL',
    flowSteps: [
      { label: 'Terraform', color: 'orange' },
      { label: 'S3 Bucket', color: 'yellow' },
      { label: 'Static Hosting', color: 'green' },
      { label: 'Policy', color: 'red' },
      { label: 'Live URL', color: 'blue' },
    ],
  },
  {
    id: 'docker-compose-mongo',
    title: 'Docker Compose Multi-Container Stack',
    tech: ['Docker Compose', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/irfanjat/Docker-compose-app',
    xyz: {
      accomplished: 'Orchestrated a production-style multi-container application locally',
      byDoing:
        'Defined Node.js Express and MongoDB services in docker-compose.yml with named volumes and internal DNS networking',
      resultedIn:
        'Reproducible stack at localhost:3000 with database persistence across container restarts',
    },
    highlights: [
      'Service-to-service communication via Docker DNS',
      'Named volume for MongoDB data persistence',
      'Single YAML file defines the entire stack',
    ],
    architecture: 'docker compose up → Express :3000 ↔ mongo (volume)',
    flowSteps: [
      { label: 'docker compose', color: 'blue' },
      { label: 'Express', color: 'orange' },
      { label: 'MongoDB', color: 'green' },
      { label: 'Volume', color: 'yellow' },
      { label: ':3000', color: 'red' },
    ],
  },
  {
    id: 'static-web-app',
    title: 'Static Web App with Docker & CI/CD',
    tech: ['HTML', 'CSS', 'JavaScript', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/Static-web-app',
    xyz: {
      accomplished: 'Containerized a static web application with full CI/CD automation',
      byDoing:
        'Built a responsive static site with HTML, CSS, and JS, containerized it with Docker (Nginx), and configured GitHub Actions for automated build and deployment',
      resultedIn:
        'One-command deployment via Docker with automated CI/CD — push to main triggers build and deploy',
    },
    highlights: [
      'Dockerized with Nginx for production serving',
      'CI/CD pipeline with automated builds',
      'Clean, responsive design with interactive JS',
    ],
    architecture: 'Code Push → GitHub Actions → Docker Build → Deploy',
    flowSteps: [
      { label: 'Code Push', color: 'blue' },
      { label: 'CI/CD', color: 'orange' },
      { label: 'Docker', color: 'green' },
      { label: 'Deploy', color: 'yellow' },
    ],
  },
]
