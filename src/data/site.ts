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
  { cmd: 'kubectl get pods', output: 'NAME          READY   STATUS    RESTARTS   AGE\napi-deploy    3/3     Running   0          2d\nworker-deploy 2/2     Running   0          2d' },
  { cmd: 'terraform apply', output: 'Apply complete! Resources: 24 added, 0 changed, 0 destroyed.' },
  { cmd: 'docker build -t app:v1.2.3 .', output: 'Successfully built & tagged app:v1.2.3' },
  { cmd: 'argocd app sync gitops-pipeline', output: 'Sync status: Synced | Health: Healthy' },
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
      { name: 'Remote State', level: 88 },
      { name: 'AWS Provider', level: 87 },
    ],
  },
  {
    title: 'Cloud & AWS',
    color: 'cyan',
    skills: [
      { name: 'VPC', level: 90 },
      { name: 'EC2', level: 88 },
      { name: 'ALB', level: 85 },
      { name: 'Auto Scaling', level: 86 },
      { name: 'RDS', level: 84 },
      { name: 'S3', level: 90 },
      { name: 'IAM', level: 88 },
      { name: 'DynamoDB', level: 80 },
      { name: 'CloudWatch', level: 85 },
    ],
  },
  {
    title: 'Monitoring & Observability',
    color: 'rose',
    skills: [
      { name: 'Prometheus', level: 88 },
      { name: 'Grafana', level: 90 },
      { name: 'Loki', level: 85 },
      { name: 'Alertmanager', level: 82 },
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
      { name: 'Server Hardening', level: 82 },
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
      { name: 'PostgreSQL', level: 78 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    title: 'Version Control',
    color: 'emerald',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'GHCR', level: 85 },
      { name: 'GitFlow', level: 82 },
      { name: 'Conventional Commits', level: 88 },
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
  },
  {
    id: 'db-operator',
    title: 'Kubernetes PostgreSQL Operator — DB Operator',
    description:
      'Custom Kubernetes operator built with Go + controller-runtime for automated PostgreSQL cluster management with S3 backups and Prometheus monitoring.',
    tech: ['Go', 'controller-runtime', 'Kubernetes', 'PostgreSQL', 'StatefulSet', 'S3', 'Prometheus', 'Helm'],
    metrics: [
      { label: 'Framework', value: 'Go', sub: 'controller-runtime' },
      { label: 'Backups', value: 'Auto', sub: 'S3 retention' },
      { label: 'Deploy', value: 'GitOps', sub: 'Helm + ArgoCD' },
    ],
    achievements: [
      'Built custom K8s operator using Go + controller-runtime framework',
      'Extended Kubernetes API with custom PostgresCluster CRDs',
      'Automated PostgreSQL cluster management with StatefulSets and PVCs',
      'Integrated automated S3 backups with configurable retention policy',
      'Added Prometheus metrics and alerting for operational visibility',
      'GitOps-ready with Helm chart and ArgoCD application manifests',
    ],
    diagram: 'db-operator' as const,
    github: 'https://github.com/irfanjat/db-operator',
  },
  {
    id: 'costguard',
    title: 'CostGuard — AWS Cost Optimization Platform',
    description:
      'Serverless AWS cost optimization platform with anomaly detection, orphaned resource scanning, and Slack alerting, all deployed with Terraform.',
    tech: ['Python', 'AWS Lambda', 'Terraform', 'DynamoDB', 'Cost Explorer', 'EventBridge', 'Slack'],
    metrics: [
      { label: 'Detection', value: 'Z-Score', sub: 'anomaly algorithm' },
      { label: 'Resources', value: 'Orphaned', sub: 'EBS, EIP, snapshots' },
      { label: 'Deploy', value: 'IaC', sub: 'Terraform' },
    ],
    achievements: [
      'Built serverless cost optimization platform with AWS Lambda',
      'Implemented z-score anomaly detection for spend pattern analysis',
      'Scans for orphaned resources — unattached EBS, unused EIPs, stale snapshots',
      'Sends rich Slack reports with cost summary and remediation buttons',
      'Stores run history in DynamoDB for trend analysis',
      'Full infrastructure as code with Terraform (Lambda, IAM, EventBridge)',
    ],
    diagram: 'costguard' as const,
    github: 'https://github.com/irfanjat/costguard',
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
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Sindh (SULC), Jamshoro, Pakistan',
  graduation: 'Expected Graduation: 2027',
}