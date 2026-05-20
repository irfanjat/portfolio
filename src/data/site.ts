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

/** Contact form — get free key at https://web3forms.com (enter your email, copy Access Key) */
export const contactForm = {
  web3formsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'd1a99476-3741-4533-9ca2-f1f11b11bad3',
  /** Where users return after FormSubmit redirect fallback */
  successRedirect: 'https://irfanjat.github.io/portfolio/?sent=1#contact',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'More', href: '#more-projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const terminalCommands = [
  { cmd: 'kubectl get pods', output: 'NAME          READY   STATUS    RESTARTS   AGE\napi-deploy    3/3     Running   0          2d\nworker-deploy 2/2     Running   0          2d' },
  { cmd: 'terraform apply', output: 'Apply complete! Resources: 24 added, 0 changed, 0 destroyed.' },
  { cmd: 'docker build -t app:v1.2.3 .', output: 'Successfully built & tagged app:v1.2.3' },
  { cmd: 'argocd app sync gitops-pipeline', output: 'Sync status: Synced | Health: Healthy' },
]

export const aboutHighlights = [
  { title: 'Self-Taught Journey', desc: 'Built expertise through hands-on labs and production-style portfolio projects.' },
  { title: 'Real Projects', desc: 'End-to-end GitOps pipelines, AWS Terraform stacks, and K8s observability.' },
  { title: 'Automation Mindset', desc: 'Infrastructure as code, CI/CD, and repeatable delivery workflows.' },
  { title: 'Cloud-Native Stack', desc: 'Kubernetes, Helm, ArgoCD, Prometheus, Grafana, and AWS.' },
  { title: 'Scalable Systems', desc: 'Multi-tier architectures, auto scaling, and zero-downtime deployments.' },
  { title: 'Certified & Growing', desc: 'IBM & AWS certified; pursuing BS in Computer Science.' },
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
    title: 'Cloud � AWS',
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
    ],
  },
  {
    title: 'Version Control',
    color: 'emerald',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'GHCR', level: 85 },
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
]

export const journey = [
  { year: '2025', title: 'Started Self-Learning DevOps', desc: 'Began structured learning path in Linux, cloud, and automation.' },
  { year: '2025', title: 'Linux & Git Foundations', desc: 'Mastered shell workflows, version control, and collaborative development.' },
  { year: '2025', title: 'Docker Projects', desc: 'Containerized applications and built multi-stage production images.' },
  { year: '2025', title: 'Kubernetes Deep Dive', desc: 'Deployed workloads, Helm charts, and cluster operations.' },
  { year: '2025', title: 'CI/CD Pipelines', desc: 'Built GitHub Actions workflows and GitOps with ArgoCD.' },
  { year: '2025', title: 'Terraform & AWS', desc: 'Provisioned multi-tier infrastructure with modular IaC.' },
  { year: '2025', title: 'Observability Stack', desc: 'Deployed Prometheus, Grafana, Loki, and alerting on K8s.' },
  { year: '2026', title: 'DevOps Career Launch', desc: 'Actively pursuing full-time, hybrid, and remote platform engineering opportunities.' },
]

export const certifications = [
  {
    title: 'IBM DevOps and Software Engineering Professional Certificate',
    issuer: 'IBM',
    badge: 'IBM',
    verified: true,
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    badge: 'AWS',
    verified: true,
  },
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services',
    badge: 'AWS',
    verified: true,
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Sindh (SULC), Jamshoro, Pakistan',
  graduation: 'Expected Graduation: 2027',
}

export const stats = [
  { label: 'Months Experience', value: 8, suffix: '+' },
  { label: 'GitHub Repositories', value: 20, suffix: '+' },
  { label: 'AWS Resources (IaC)', value: 24, suffix: '' },
  { label: 'Certifications', value: 3, suffix: '' },
]
