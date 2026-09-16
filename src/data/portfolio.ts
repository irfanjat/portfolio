export const personal = {
  name: 'Irfan Ali',
  firstName: 'Irfan',
  lastName: 'Ali',
  initials: 'IA',
  role: 'DevOps & Cloud Engineer',
  roles: ['DevOps Engineer', 'Cloud Engineer', 'Platform Engineer', 'SRE-Minded'],
  tagline:
    'I design cloud-native infrastructure, automate delivery pipelines, and keep production platforms reliable, observable, and secure.',
  phone: '03153711489',
  email: 'irfanali.cloud@gmail.com',
  linkedin: 'https://linkedin.com/in/irfanjat',
  github: 'https://github.com/irfanjat',
  whatsapp: 'https://wa.me/923153711489',
  resume: '/IrfanAliResume.pdf',
  location: 'Pakistan',
  availability: 'Open to DevOps, Cloud & Platform Engineering roles',
  availabilityDetail:
    'Full-time, hybrid, on-site & remote — flexible on location and work arrangement.',
}

export const contactForm = {
  web3formsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '0aa0ba6b-9d3d-4054-b870-caa6263644fb',
  successRedirect: 'https://irfanali.pages.dev/?sent=1#contact',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const toolChips = [
  { label: 'Docker', icon: 'docker' },
  { label: 'Kubernetes', icon: 'k8s' },
  { label: 'Terraform', icon: 'terraform' },
  { label: 'AWS', icon: 'aws' },
  { label: 'ArgoCD', icon: 'argocd' },
  { label: 'GitHub Actions', icon: 'actions' },
  { label: 'Prometheus', icon: 'prometheus' },
  { label: 'Grafana', icon: 'grafana' },
]

export const skillCategories = [
  {
    title: 'CI/CD & GitOps',
    accent: 'violet',
    skills: ['Jenkins', 'GitHub Actions', 'ArgoCD', 'GitLab CI'],
  },
  {
    title: 'Containers & Orchestration',
    accent: 'cyan',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
  },
  {
    title: 'Infrastructure as Code',
    accent: 'fuchsia',
    skills: ['Terraform', 'Ansible', 'CloudFormation'],
  },
  {
    title: 'Cloud Platforms',
    accent: 'amber',
    skills: ['EC2', 'VPC', 'ELB', 'Auto Scaling', 'S3', 'RDS', 'CloudWatch', 'Route 53', 'EKS', 'Lambda'],
  },
  {
    title: 'Monitoring & Observability',
    accent: 'emerald',
    skills: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager'],
  },
  {
    title: 'Systems & Networking',
    accent: 'indigo',
    skills: ['Linux', 'DNS', 'HTTPS/TLS', 'SSH', 'Bash', 'Python', 'Nginx', 'Apache'],
  },
  {
    title: 'System Design',
    accent: 'sky',
    skills: ['Microservices', 'REST & gRPC', 'Caching', 'CDNs', 'Load Balancers', 'Databases', 'Servers'],
  },
  {
    title: 'Linux SysAdmin',
    accent: 'rose',
    skills: ['Firewalls', 'Cron Jobs', 'SSH', 'LVM', 'Systemd', 'UFW/iptables', 'rsync', 'Process Management'],
  },
]

export const certifications = [
  {
    title: 'IBM Introduction to DevOps Engineering',
    issuer: 'IBM',
    link: 'https://coursera.org/verify/PANSLSFPOV59',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    link: 'https://coursera.org/verify/VJOL7N4FHGNV',
  },
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services',
    link: 'https://coursera.org/verify/JHTNQ3MFH2D2',
  },
  {
    title: 'OCI Foundation Associate',
    issuer: 'Oracle Cloud Infrastructure',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1BEEF1CBBEAE05D6DD59D53B668355A20ADBC563F691C84B03315E27A745FD49',
  },
]

export const stats = [
  { label: 'Years Experience', value: 1, suffix: '+', glow: 'rgba(139,92,246,0.35)' },
  { label: 'Projects Shipped', value: 12, suffix: '+', glow: 'rgba(34,211,238,0.35)' },
  { label: 'Cloud Platforms', value: 1, suffix: '', glow: 'rgba(232,121,249,0.35)' },
  { label: 'Certifications', value: 4, suffix: '', glow: 'rgba(251,191,36,0.35)' },
]

export const projects = [
  {
    id: 'costguard',
    tag: 'Cost Optimization',
    title: 'CostGuard',
    subtitle: 'AWS Cost Optimization Platform',
    description:
      'Serverless AWS cost monitoring platform with anomaly detection, orphaned resource scanning, and Slack notifications — fully deployed via Terraform.',
    tech: ['Python', 'AWS Lambda', 'Terraform', 'DynamoDB', 'Slack API', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/costguard',
  },
  {
    id: 'gitops',
    tag: 'GitOps · CI/CD',
    title: 'GitOps Pipeline',
    subtitle: 'End-to-End GitOps CI/CD',
    description:
      'Production-style GitOps pipeline with automated builds, SHA-tagged images, Helm deployments, and ArgoCD self-healing on Kubernetes.',
    tech: ['GitHub Actions', 'ArgoCD', 'Kubernetes', 'Docker', 'Helm', 'Python'],
    github: 'https://github.com/irfanjat/gitops-cicd-pipeline',
  },
  {
    id: 'guardrails',
    tag: 'Security · Policy-as-Code',
    title: 'Policy Guardrails',
    subtitle: 'IaC Security Guardrails Engine',
    description:
      'Policy-as-code guardrail engine enforcing security on Terraform and Kubernetes manifests in CI with automated PR comments.',
    tech: ['OPA/Rego', 'Kyverno', 'Conftest', 'Terraform', 'Kubernetes', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/Guardrails',
  },
  {
    id: 'terraform-aws',
    tag: 'Infrastructure as Code',
    title: 'AWS Multi-Tier Infra',
    subtitle: 'Production Multi-Tier AWS Infrastructure',
    description:
      'Modular Terraform IaC provisioning a secure, multi-AZ AWS stack with remote state, encryption, and least-privilege IAM.',
    tech: ['Terraform', 'VPC', 'EC2', 'ALB', 'Auto Scaling', 'RDS', 'S3', 'DynamoDB'],
    github: 'https://github.com/irfanjat/terraform-aws-infra',
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Sindh (SULC), Jamshoro, Pakistan',
  graduation: 'Expected Graduation: 2027',
}