export const personal = {
  name: 'Irfan Ali',
  role: 'DevOps Engineer | Cloud & Platform Engineer',
  tagline:
    'Building scalable cloud infrastructure and automated delivery systems.',
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
  { label: 'Certs', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const skillCategories = [
  {
    title: 'CI/CD & GitOps',
    skills: ['Jenkins', 'GitHub Actions', 'ArgoCD', 'GitLab CI'],
  },
  {
    title: 'Containers & Orchestration',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
  },
  {
    title: 'Infrastructure as Code',
    skills: ['Terraform', 'Ansible', 'CloudFormation'],
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS EC2', 'AWS VPC', 'AWS ELB', 'Auto Scaling', 'S3', 'RDS', 'CloudWatch', 'Route 53', 'EKS', 'Lambda'],
  },
  {
    title: 'Monitoring & Observability',
    skills: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager'],
  },
  {
    title: 'Systems & Networking',
    skills: ['Linux', 'DNS', 'HTTPS/TLS', 'SSH', 'Bash', 'Python', 'Nginx', 'Apache'],
  },
  {
    title: 'System Design',
    skills: ['Microservices', 'REST & gRPC', 'Caching', 'CDNs', 'Load Balancers', 'Databases', 'Servers'],
  },
  {
    title: 'Linux SysAdmin',
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
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Projects Shipped', value: 12, suffix: '+' },
  { label: 'Cloud Platforms', value: 1, suffix: '' },
  { label: 'Certifications', value: 4, suffix: '' },
]

export const projects = [
  {
    id: 'costguard',
    title: 'CostGuard — AWS Cost Optimization Platform',
    description:
      'Serverless AWS cost monitoring platform with anomaly detection, orphaned resource scanning, and Slack notifications — fully deployed via Terraform.',
    tech: ['Python', 'AWS Lambda', 'Terraform', 'DynamoDB', 'Slack API', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/costguard',
  },
  {
    id: 'gitops',
    title: 'End-to-End GitOps CI/CD Pipeline',
    description:
      'Production-style GitOps pipeline with automated builds, SHA-tagged images, Helm deployments, and ArgoCD self-healing on Kubernetes.',
    tech: ['GitHub Actions', 'ArgoCD', 'Kubernetes', 'Docker', 'Helm', 'Python'],
    github: 'https://github.com/irfanjat/gitops-cicd-pipeline',
  },
  {
    id: 'guardrails',
    title: 'Policy Guardrails Engine — IaC Security',
    description:
      'Policy-as-code guardrail engine enforcing security on Terraform and Kubernetes manifests in CI with automated PR comments.',
    tech: ['OPA/Rego', 'Kyverno', 'Conftest', 'Terraform', 'Kubernetes', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/Guardrails',
  },
  {
    id: 'terraform-aws',
    title: 'Production Multi-Tier AWS Infrastructure',
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
