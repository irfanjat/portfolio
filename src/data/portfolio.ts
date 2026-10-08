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
  { label: 'Path', href: '#path' },
  { label: 'Certs', href: '#certifications' },
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

export const stats = [
  { label: 'Years Experience', value: 1, suffix: '+', accent: 'var(--color-green-400)', glow: 'rgba(57,211,83,0.35)' },
  { label: 'Projects Shipped', value: 12, suffix: '+', accent: 'var(--color-cyan-400)', glow: 'rgba(88,166,255,0.35)' },
  { label: 'Cloud Platforms', value: 1, suffix: '', accent: 'var(--color-amber-300)', glow: 'rgba(227,179,65,0.35)' },
  { label: 'Certifications', value: 4, suffix: '', accent: 'var(--color-violet-400)', glow: 'rgba(188,140,255,0.35)' },
]

export const aboutChips = [
  'IaC-Driven',
  'Shift-Left Security',
  'GitOps Mindset',
  'Observability First',
]

export interface SkillCategory {
  title: string
  accent: string
  items: { label: string; detail: string }[]
}

export const skills: SkillCategory[] = [
  {
    title: 'CI/CD & GitOps',
    accent: 'var(--color-violet-400)',
    items: [
      { label: 'GitHub Actions', detail: 'Automated build, test and deploy workflows' },
      { label: 'Jenkins', detail: 'Multistage CI pipelines' },
      { label: 'ArgoCD', detail: 'Git-based continuous delivery to Kubernetes' },
    ],
  },
  {
    title: 'Containers & Orchestration',
    accent: 'var(--color-cyan-400)',
    items: [
      { label: 'Docker', detail: 'Image builds, registries and Compose environments' },
      { label: 'Docker Compose', detail: 'Local multi-container setups' },
      { label: 'Kubernetes', detail: 'Deployments, services, ingress and scaling' },
    ],
  },
  {
    title: 'Infrastructure as Code',
    accent: 'var(--color-amber-300)',
    items: [
      { label: 'Terraform', detail: 'Modular infrastructure with remote state' },
      { label: 'Ansible', detail: 'Server configuration and provisioning' },
    ],
  },
  {
    title: 'Cloud Platforms (AWS)',
    accent: 'var(--color-orange-400)',
    items: [
      { label: 'EC2', detail: 'Compute instances and launch templates' },
      { label: 'VPC', detail: 'Networking, subnets, NAT and security groups' },
      { label: 'ELB', detail: 'Application load balancers' },
      { label: 'Auto Scaling', detail: 'Scaling groups and health-based replacement' },
      { label: 'S3', detail: 'Object storage and static hosting' },
      { label: 'RDS', detail: 'Managed databases' },
      { label: 'CloudWatch', detail: 'Metrics, logs and alarms' },
      { label: 'Route 53', detail: 'DNS management' },
      { label: 'EKS', detail: 'Managed Kubernetes clusters' },
      { label: 'Lambda', detail: 'Event-driven serverless functions' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    accent: 'var(--color-green-400)',
    items: [
      { label: 'Prometheus', detail: 'Metrics collection and alert rules' },
      { label: 'Grafana', detail: 'Dashboards for metrics and logs' },
    ],
  },
  {
    title: 'Systems & Networking',
    accent: 'var(--color-cyan-400)',
    items: [
      { label: 'Linux', detail: 'Day-to-day server administration' },
      { label: 'DNS', detail: 'Name resolution and record management' },
      { label: 'HTTPS/TLS', detail: 'Certificates and encrypted traffic' },
      { label: 'SSH', detail: 'Secure remote access' },
      { label: 'Bash', detail: 'Operations scripting' },
      { label: 'Python', detail: 'Automation scripts and tooling' },
      { label: 'Nginx', detail: 'Reverse proxy and static serving' },
      { label: 'Apache', detail: 'Web server configuration' },
    ],
  },
  {
    title: 'Linux SysAdmin',
    accent: 'var(--color-violet-400)',
    items: [
      { label: 'Firewalls', detail: 'iptables / ufw rules' },
      { label: 'Cron Jobs', detail: 'Scheduled tasks' },
      { label: 'LVM', detail: 'Logical volume management' },
      { label: 'Systemd', detail: 'Service and unit management' },
      { label: 'rsync', detail: 'File backups and sync' },
      { label: 'Process Management', detail: 'Monitoring and tuning running services' },
    ],
  },
]

export type RoadmapState = 'LEARNED' | 'BUILDING' | 'PRACTICING' | 'PROJECT'

export interface RoadmapNode {
  step: number
  title: string
  domain: string
  state: RoadmapState
  summary: string
  tech: string[]
  links?: { label: string; href: string }[]
}

export const roadmap: RoadmapNode[] = [
  {
    step: 1,
    title: 'Foundations',
    domain: 'Computer Science · Networking',
    state: 'LEARNED',
    summary:
      'How the internet works, HTTP/DNS/TLS, Git workflows and the computer science basics everything else builds on.',
    tech: ['Git', 'Networking', 'Linux basics'],
  },
  {
    step: 2,
    title: 'Linux & Administration',
    domain: 'Servers · Bash',
    state: 'PRACTICING',
    summary:
      'Server work: permissions, systemd, processes, cron, SSH, firewalls and shell scripting for everyday tasks.',
    tech: ['Bash', 'systemd', 'SSH', 'LVM', 'UFW/iptables'],
  },
  {
    step: 3,
    title: 'Containers',
    domain: 'Docker · Image Lifecycle',
    state: 'LEARNED',
    summary:
      'Building images, multi-stage builds, registries, Compose for local environments and container runtimes.',
    tech: ['Docker', 'Docker Compose'],
  },
  {
    step: 4,
    title: 'Cloud Foundations',
    domain: 'AWS Core Services',
    state: 'LEARNED',
    summary:
      'VPC, EC2, S3, IAM, RDS — and the habits that go with them: least privilege and encryption by default.',
    tech: ['EC2', 'VPC', 'S3', 'IAM', 'RDS'],
  },
  {
    step: 5,
    title: 'Infrastructure as Code',
    domain: 'Terraform · Ansible',
    state: 'PRACTICING',
    summary:
      'Declarative infrastructure: modular Terraform with remote state, plan/apply workflows, and Ansible for configuration.',
    tech: ['Terraform', 'Ansible', 'DynamoDB locks'],
    links: [{ label: 'terraform-aws-infra', href: 'https://github.com/irfanjat/terraform-aws-infra' }],
  },
  {
    step: 6,
    title: 'CI/CD Pipelines',
    domain: 'Automation · Delivery',
    state: 'PRACTICING',
    summary:
      'Automating build, test and deploy — GitHub Actions day to day, plus quality gates that catch bad code early.',
    tech: ['GitHub Actions', 'Jenkins', 'Quality gates'],
  },
  {
    step: 7,
    title: 'Kubernetes',
    domain: 'Orchestration · EKS',
    state: 'BUILDING',
    summary:
      'Moving workloads from Compose to a cluster: pods, services, ingress, controllers and rolling updates.',
    tech: ['Kubernetes', 'EKS', 'Ingress', 'HPA'],
  },
  {
    step: 8,
    title: 'GitOps',
    domain: 'ArgoCD · Config-as-Code',
    state: 'BUILDING',
    summary:
      'Git as the source of truth: ArgoCD keeps the cluster in sync with the repo, and rollbacks are just git reverts.',
    tech: ['ArgoCD', 'Manifest repos'],
    links: [{ label: 'gitops repo', href: 'https://github.com/irfanjat/gitops-cicd-pipeline' }],
  },
  {
    step: 9,
    title: 'Observability',
    domain: 'Metrics · Logs · Dashboards',
    state: 'BUILDING',
    summary:
      'Collecting metrics and logs, writing alert rules, and building dashboards that make issues visible early.',
    tech: ['Prometheus', 'Grafana'],
  },
  {
    step: 10,
    title: 'Production & Security',
    domain: 'SRE · Guardrails',
    state: 'PROJECT',
    summary:
      'Capacity planning, recovery, least-privilege and policy-as-code — the layer that keeps production stable.',
    tech: ['OPA/Rego', 'Kyverno', 'SLO thinking'],
    links: [{ label: 'guardrails repo', href: 'https://github.com/irfanjat/Guardrails' }],
  },
]

export interface Project {
  id: string
  tag: string
  category: 'CI/CD · GitOps' | 'Infrastructure as Code' | 'Observability' | 'Cloud Cost' | 'Security'
  title: string
  subtitle: string
  problem: string
  result: string
  tech: string[]
  github: string
  extraLinks?: { label: string; href: string }[]
  architecture: { node: string; detail: string }[]
  lessons: string[]
}

export const projects: Project[] = [
  {
    id: 'gitops',
    tag: 'CI/CD · GitOps',
    category: 'CI/CD · GitOps',
    title: 'GitOps Delivery Pipeline',
    subtitle: 'End-to-End GitOps CI/CD',
    problem:
      'Manual deployments meant untested releases, unverified images and configuration drift between environments.',
    result:
      'Push to main triggers the full chain — build, tests, container scan, image tagging and ArgoCD sync. The cluster always matches the repo, and rollbacks are a git revert.',
    tech: ['GitHub Actions', 'Docker', 'ArgoCD', 'Kubernetes', 'Helm', 'Python'],
    github: 'https://github.com/irfanjat/gitops-cicd-pipeline',
    extraLinks: [{ label: 'config repo', href: 'https://github.com/irfanjat/gitops-cicd-pipeline-config' }],
    architecture: [
      { node: 'Git push → main', detail: 'The single deploy trigger — everything after it is automated.' },
      { node: 'CI — GitHub Actions', detail: 'Build, unit tests, container scan, SHA-tagged image.' },
      { node: 'Image registry', detail: 'Immutable, digest-pinned artifacts per commit.' },
      { node: 'CD — ArgoCD sync', detail: 'Pulls updated manifests and reconciles the cluster with git.' },
      { node: 'Kubernetes', detail: 'Rolling rollout with health checks; drift is corrected automatically.' },
    ],
    lessons: [
      'Git keeps history and rollback simple — the repo is the record of every deploy.',
      'Pinning images by digest verifies what was built is what runs.',
      'ArgoCD surfaces drift instead of letting it accumulate unnoticed.',
    ],
  },
  {
    id: 'terraform-aws',
    tag: 'Infrastructure as Code',
    category: 'Infrastructure as Code',
    title: 'AWS Multi-Tier Infra',
    subtitle: 'Production-Style Multi-Tier AWS Infrastructure',
    problem:
      'Console-built infrastructure cannot be reviewed, versioned or rebuilt — nobody knows the real state.',
    result:
      'One terraform apply provisions a multi-AZ environment: networking, compute, load balancing and databases with encryption and least-privilege IAM enabled by default.',
    tech: ['Terraform', 'VPC', 'EC2', 'ALB', 'Auto Scaling', 'RDS', 'S3', 'DynamoDB'],
    github: 'https://github.com/irfanjat/terraform-aws-infra',
    architecture: [
      { node: 'Terraform apply', detail: 'State in S3 with DynamoDB locking for safe concurrent runs.' },
      { node: 'VPC · multi-AZ', detail: 'Public/private subnets, NAT gateways, security groups.' },
      { node: 'ALB → ASG', detail: 'Load-balanced, auto-scaling compute behind one endpoint.' },
      { node: 'RDS · S3 · DynamoDB', detail: 'Encrypted data stores with a minimal IAM surface.' },
      { node: 'CloudWatch', detail: 'Alarms and dashboards covering the stack.' },
    ],
    lessons: [
      'Remote state with locking makes infrastructure workable as a team.',
      'Modules keep the configuration readable as the stack grows.',
      'Security defaults (encryption, restricted IAM) should not be opt-in.',
    ],
  },
  {
    id: 'observability',
    tag: 'Observability',
    category: 'Observability',
    title: 'Kubernetes Observability Stack',
    subtitle: 'Metrics, Logs & Dashboards on Kubernetes',
    problem:
      'A cluster without telemetry is a black box — PVC fills, crashes and slow endpoints go unnoticed until users report them.',
    result:
      'Cluster-wide metrics and logs in one place: resource dashboards, alert rules and log queries that make troubleshooting faster.',
    tech: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Kubernetes', 'Helm'],
    github: 'https://github.com/irfanjat/k8s-observability',
    architecture: [
      { node: 'Kubernetes cluster', detail: 'Every workload reports metrics and emits logs.' },
      { node: 'Prometheus', detail: 'ServiceMonitor scraping with alerting rules.' },
      { node: 'Grafana', detail: 'Dashboards for nodes, pods and core services.' },
      { node: 'Loki + Promtail', detail: 'Cluster-wide log collection and querying.' },
    ],
    lessons: [
      'Dashboards are useful only when measuring something real.',
      'An alert without a next step creates noise, not reliability.',
    ],
  },
  {
    id: 'costguard',
    tag: 'Cost Optimization',
    category: 'Cloud Cost',
    title: 'CostGuard',
    subtitle: 'AWS Cost Optimization Platform',
    problem:
      'Cloud spend leaks through forgotten volumes, idle instances and unattached addresses — usually discovered on the invoice.',
    result:
      'Scheduled Lambda scans detect orphaned and under-utilised resources, store the findings in DynamoDB and post notifications to Slack.',
    tech: ['Python', 'AWS Lambda', 'Terraform', 'DynamoDB', 'Slack API', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/costguard',
    architecture: [
      { node: 'CloudWatch Events', detail: 'Schedule triggers for regular cost scans.' },
      { node: 'Lambda (boto3)', detail: 'Scans for orphaned volumes, idle resources and neglect.' },
      { node: 'DynamoDB', detail: 'Stores findings for history and trend checks.' },
      { node: 'Slack webhook', detail: 'Notifications when waste is detected.' },
    ],
    lessons: [
      'Serverless fits well for a watchdog that should run on a schedule for very little cost.',
      'Automated reports beat manual spreadsheets for catching waste early.',
    ],
  },
  {
    id: 'guardrails',
    tag: 'Security · Policy-as-Code',
    category: 'Security',
    title: 'Policy Guardrails',
    subtitle: 'IaC Security Guardrails Engine',
    problem:
      'Security rules written in documentation are never enforced — misconfigurations pass review and reach production manifests.',
    result:
      'OPA/Rego policies run as a merge gate: risky Terraform plans and Kubernetes manifests are rejected with an automated comment explaining the violation.',
    tech: ['OPA/Rego', 'Kyverno', 'Conftest', 'Terraform', 'Kubernetes', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/Guardrails',
    architecture: [
      { node: 'Pull request', detail: 'Every infra/k8s change enters the pipeline.' },
      { node: 'Conftest · Terraform', detail: 'Rego policy checks against the planned changes.' },
      { node: 'Kyverno · Kubernetes', detail: 'Validation against cluster admission policies.' },
      { node: 'Merge gate', detail: 'Violations block the merge with an explanatory comment.' },
    ],
    lessons: [
      'Policies stored as code are reviewable and versioned like everything else.',
      'Automated checks are applied consistently on every change.',
    ],
  },
]

export interface Credential {
  title: string
  issuer: string
  kind: 'Credential' | 'Training'
  link: string
}

export const credentials: Credential[] = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
    kind: 'Credential',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1BEEF1CBBEAE05D6DD59D53B668355A20ADBC563F691C84B03315E27A745FD49',
  },
  {
    title: 'IBM Introduction to DevOps',
    issuer: 'IBM · Coursera',
    kind: 'Training',
    link: 'https://coursera.org/verify/PANSLSFPOV59',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services · Coursera',
    kind: 'Training',
    link: 'https://coursera.org/verify/VJOL7N4FHGNV',
  },
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services · Coursera',
    kind: 'Training',
    link: 'https://coursera.org/verify/JHTNQ3MFH2D2',
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Sindh (SULC), Jamshoro, Pakistan',
  graduation: 'Expected graduation 2027',
}