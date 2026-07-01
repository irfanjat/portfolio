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
  availabilityDetail: 'DevOps, Cloud & Platform Engineering — flexible on location and work arrangement.',
}

export const contactForm = {
  web3formsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '0aa0ba6b-9d3d-4054-b870-caa6263644fb',
  successRedirect: 'https://irfanjat.github.io/portfolio/?sent=1#contact',
}

export const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const terminalCommands = [
  { cmd: 'cat about-irfan.txt', output: '╔══════════════════════════════════════╗\n║  DevOps Engineer                     ║\n║  Cloud & Platform Engineer           ║\n║  Location: Pakistan                  ║\n║  Open to: Full-time · Hybrid · Remote║\n╚══════════════════════════════════════╝' },
  { cmd: 'ls -la skills/', output: 'drwxr-xr-x  irfan  devops  512  Jun  2026 .\ndrwxr-xr-x  irfan  devops  512  Jun  2026 ..\n-rw-r--r--  irfan  devops  128  Jun  2026  kubernetes.conf\n-rw-r--r--  irfan  devops  96   Jun  2026  docker.conf\n-rw-r--r--  irfan  devops  112  Jun  2026  terraform.conf\n-rw-r--r--  irfan  devops  88   Jun  2026  aws.conf\n-rw-r--r--  irfan  devops  72   Jun  2026  ci-cd.conf\n-rw-r--r--  irfan  devops  64   Jun  2026  gitops.conf\n-rw-r--r--  irfan  devops  80   Jun  2026  python.conf\n-rw-r--r--  irfan  devops  56   Jun  2026  prometheus.conf' },
  { cmd: 'curl -s https://api.github.com/users/irfanjat | jq .', output: '{\n  "login": "irfanjat",\n  "name": "Irfan Ali",\n  "public_repos": 9,\n  "followers": 0,\n  "following": 0,\n  "bio": "DevOps Engineer",\n  "location": "Pakistan",\n  "company": null,\n  "blog": "",\n  "twitter_username": null\n}' },
  { cmd: 'cat experience.log', output: '┌──────────────────────────────────────────────────┐\n│  PROJECT                      STATUS    METRIC    │\n├──────────────────────────────────────────────────┤\n│  GitOps CI/CD Pipeline       ● Active   80% faster│\n│  Terraform AWS Infra         ● Active   24 resources│\n│  K8s Observability Stack     ● Active   14 targets │\n│  CostGuard (AWS Cost)        ● Active   Lambda     │\n│  DevSecOps Pipeline          ● Active   6 stages   │\n│  Policy Guardrails           ● Active   8 policies │\n└──────────────────────────────────────────────────┘' },
  { cmd: './contact.sh', output: '┌─────────────────────────────────────┐\n│  CONTACT                          │\n├─────────────────────────────────────┤\n│  Email:  irfanali.cloud@gmail.com  │\n│  GitHub: github.com/irfanjat       │\n│  LinkedIn: linkedin.com/in/irfanjat│\n│  Phone:  +92 315 3711489          │\n└─────────────────────────────────────┘' },
  { cmd: 'systemctl status portfolio', output: '● portfolio.service — Irfan Ali DevOps Portfolio\n   Loaded: loaded (/etc/systemd/system/portfolio.service; enabled)\n   Active: ● active (running) since Mon 2026-06-22 00:00:00 UTC\n   Status: "Ready for opportunities"\n   Deploy: Rolling update via ArgoCD\n    Tasks: 9 projects · 25+ tools · 4 certifications\n   Memory: Always optimizing\n   Uptime: Building since 2024' },
]

export const skillCategories = [
  {
    title: 'CI/CD & GitOps',
    color: 'cyan',
    skills: [
      { name: 'GitHub Actions', level: 90 },
      { name: 'ArgoCD', level: 88 },
      { name: 'Jenkins', level: 75 },
    ],
  },
  {
    title: 'Containers & Orchestration',
    color: 'violet',
    skills: [
      { name: 'Docker', level: 92 },
      { name: 'Kubernetes', level: 88 },
      { name: 'Helm', level: 85 },
    ],
  },
  {
    title: 'Infrastructure as Code',
    color: 'emerald',
    skills: [
      { name: 'Terraform', level: 90 },
      { name: 'Ansible', level: 85 },
    ],
  },
  {
    title: 'Cloud & AWS',
    color: 'cyan',
    groups: [
      {
        label: 'Compute',
        skills: [
          { name: 'EC2', level: 88, usecase: 'Virtual servers for applications' },
          { name: 'ECS', level: 85, usecase: 'Container orchestration service' },
          { name: 'EKS', level: 85, usecase: 'Managed Kubernetes clusters' },
          { name: 'Auto Scaling', level: 86, usecase: 'Dynamic capacity management' },
          { name: 'Lambda', level: 82, usecase: 'Serverless compute functions' },
        ],
      },
      {
        label: 'Networking & Delivery',
        skills: [
          { name: 'VPC', level: 90, usecase: 'Isolated cloud network' },
          { name: 'ALB', level: 85, usecase: 'Application load balancing' },
          { name: 'Route53', level: 83, usecase: 'DNS & domain management' },
        ],
      },
      {
        label: 'Storage & Database',
        skills: [
          { name: 'S3', level: 90, usecase: 'Object storage & backups' },
          { name: 'RDS', level: 84, usecase: 'Managed relational databases' },
          { name: 'DynamoDB', level: 80, usecase: 'NoSQL key-value store' },
          { name: 'ECR', level: 84, usecase: 'Container image registry' },
        ],
      },
      {
        label: 'Security & Monitoring',
        skills: [
          { name: 'IAM', level: 88, usecase: 'Access & identity management' },
          { name: 'CloudWatch', level: 85, usecase: 'Monitoring & observability' },
        ],
      },
    ],
  },
  {
    title: 'Monitoring & Observability',
    color: 'rose',
    skills: [
      { name: 'Prometheus', level: 88 },
      { name: 'Grafana', level: 90 },
    ],
  },
  {
    title: 'Languages & Scripting',
    color: 'violet',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Bash', level: 88 },
      { name: 'YAML', level: 90 },
      { name: 'JSON', level: 88 },
      { name: 'HCL', level: 85 },
    ],
  },
  {
    title: 'Linux & System Admin',
    color: 'rose',
    skills: [
      { name: 'SSH', level: 90 },
      { name: 'Firewall (UFW)', level: 85 },
      { name: 'Cron Jobs', level: 88 },
      { name: 'Systemd', level: 85 },
      { name: 'Log Management', level: 80 },
    ],
  },
  {
    title: 'Web Servers & Databases',
    color: 'cyan',
    skills: [
      { name: 'Nginx', level: 85 },
      { name: 'Apache', level: 80 },
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    title: 'Version Control',
    color: 'emerald',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
    ],
  },
]

export const projects = [
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
      'Automated CI/CD pipeline',
      'GitOps architecture with ArgoCD',
      'Zero-downtime deployments',
      'Docker image SHA tagging',
      'ArgoCD self-healing enabled',
    ],
    diagram: 'gitops' as const,
    github: 'https://github.com/irfanjat/gitops-cicd-pipeline',
    demo: 'https://github.com/irfanjat/gitops-cicd-pipeline',
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
      'Provisioned 24 AWS resources',
      'Multi-AZ architecture',
      'Terraform modular architecture',
      'Remote state locking',
      'Encrypted infrastructure',
      'Least-privilege security',
    ],
    diagram: 'aws' as const,
    github: 'https://github.com/irfanjat/terraform-aws-infra',
    demo: 'https://github.com/irfanjat/terraform-aws-infra',
  },
  {
    id: 'observability',
    title: 'Kubernetes Observability Stack',
    description:
      'Full-stack monitoring with Prometheus metrics, Grafana dashboards, Loki log aggregation, and Alertmanager routing.',
    tech: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'Helm', 'Kubernetes'],
    metrics: [
      { label: 'Scrape Targets', value: '14', sub: 'Prometheus' },
      { label: 'Logs', value: 'Live', sub: 'Loki streaming' },
      { label: 'Alerts', value: 'Real-time', sub: 'Alertmanager' },
    ],
    achievements: [
      'Full-stack observability',
      '14 Prometheus scrape targets',
      'Live Loki log streaming',
      'Real-time Grafana dashboards',
      'Alerting system configured',
      'Kubernetes-native monitoring',
    ],
    diagram: 'k8s-monitor' as const,
    github: 'https://github.com/irfanjat/k8s-observability',
    demo: 'https://github.com/irfanjat/k8s-observability',
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
  { id: 'code', label: 'Code Push', icon: 'GitCommit', color: 'cyan', desc: 'Feature branch → PR → main' },
  { id: 'build', label: 'Build & Test', icon: 'FlaskConical', color: 'violet', desc: 'Unit tests, lint, image build' },
  { id: 'docker', label: 'Dockerize', icon: 'Box', color: 'cyan', desc: 'SHA-tagged container images' },
  { id: 'scan', label: 'Security Scan', icon: 'Shield', color: 'emerald', desc: 'Trivy, Snyk, SBOM' },
  { id: 'deploy', label: 'ArgoCD Deploy', icon: 'Rocket', color: 'violet', desc: 'GitOps sync to K8s cluster' },
  { id: 'monitor', label: 'Monitor', icon: 'Activity', color: 'rose', desc: 'Prometheus + Grafana alerts' },
]

export const experience = [
  {
    id: 'flyrank',
    role: 'Backend AI Engineer - Intern',
    company: 'FlyRank AI',
    period: 'Jun 2026 - Present · 1 mo',
    location: 'Badin, Sindh, Pakistan · Remote',
    description:
      'Currently interning at FlyRank AI as an AI intern, focusing on Backend AI Engineering.',
    logo: '🤖',
  },
  {
    id: 'devalpha',
    role: 'DevOps Engineer - Intern',
    company: 'DevAlpha',
    period: 'Jun 2026 - Present · 1 mo',
    location: 'Bengaluru, Karnataka, India · Remote',
    description:
      'Selected for 1-month virtual internship program at DevAlpha Technologies, Bengaluru. Building practical skills in DevOps workflows, automation, and deployment pipelines. Completing assigned projects and tasks to strengthen technical & professional skills.',
    logo: '⚙️',
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Sindh (SULC), Jamshoro, Pakistan',
  graduation: 'Expected Graduation: 2027',
}