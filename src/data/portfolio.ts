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
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#toolbox' },
  { label: 'Path', href: '#path' },
  { label: 'About', href: '#about' },
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

export const hero = {
  statementHead: 'I make deployments',
  statementAccent: 'boring.',
  statementSub:
    'Cloud-native infrastructure, Kubernetes platforms and self-healing pipelines — engineered to be automated, observable and reliably uneventful.',
}

export const stats = [
  { label: 'Years Experience', value: 1, suffix: '+', accent: '#39d353' },
  { label: 'Projects Shipped', value: 12, suffix: '+', accent: '#58a6ff' },
  { label: 'Cloud Platforms', value: 1, suffix: '', accent: '#e3b341' },
  { label: 'Certifications', value: 4, suffix: '', accent: '#bc8cff' },
]

export const aboutChips = [
  'Terraform IaC',
  'GitOps Mindset',
  'Kubernetes',
  'Observability First',
  'Automation Bias',
  'AWS',
]

export const workflowStages = [
  { name: 'Code', tech: 'Python · Bash', accent: '#f78166' },
  { name: 'Version Control', tech: 'Git · GitHub', accent: '#e3b341' },
  { name: 'Build', tech: 'GitHub Actions · Docker', accent: '#39d353' },
  { name: 'Test', tech: 'pytest · CI gates', accent: '#58a6ff' },
  { name: 'Containerize', tech: 'Docker · Compose', accent: '#bc8cff' },
  { name: 'Deploy', tech: 'ArgoCD · Helm · AWS', accent: '#39d353' },
  { name: 'Observe', tech: 'Prometheus · Grafana', accent: '#f78166' },
  { name: 'Improve', tech: 'GitOps feedback loop', accent: '#58a6ff' },
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
      'How the internet works, HTTP/DNS/TLS, Git workflows, data structures and the basics I build everything on.',
    tech: ['Git', 'Networking', 'Linux basics'],
  },
  {
    step: 2,
    title: 'Linux & Administration',
    domain: 'Servers · Bash',
    state: 'PRACTICING',
    summary:
      'Everyday server work: permissions, systemd, processes, cron, SSH, firewalls and shell scripting that gets things done.',
    tech: ['Bash', 'systemd', 'SSH', 'LVM', 'UFW/iptables'],
  },
  {
    step: 3,
    title: 'Containers',
    domain: 'Docker · Image Lifecycle',
    state: 'LEARNED',
    summary:
      'Building lean images, multi-stage builds, registries, Compose for local environments and container runtimes.',
    tech: ['Docker', 'Docker Compose', 'Podman'],
  },
  {
    step: 4,
    title: 'Cloud Foundations',
    domain: 'AWS Core Services',
    state: 'LEARNED',
    summary:
      'VPC design, EC2, S3, IAM, RDS — and the "least privilege + encryption by default" mindset that goes with them.',
    tech: ['EC2', 'VPC', 'S3', 'IAM', 'RDS'],
  },
  {
    step: 5,
    title: 'Infrastructure as Code',
    domain: 'Terraform · Ansible',
    state: 'PRACTICING',
    summary:
      'Declarative infrastructure: modular Terraform with remote state, plan/apply workflows, and Ansible for config management.',
    tech: ['Terraform', 'Ansible', 'DynamoDB locks'],
    links: [{ label: 'terraform-aws-infra', href: 'https://github.com/irfanjat/terraform-aws-infra' }],
  },
  {
    step: 6,
    title: 'CI/CD Pipelines',
    domain: 'Automation · Delivery',
    state: 'PRACTICING',
    summary:
      'Automating build, test and deploy. GitHub Actions day-to-day, Jenkins pipelines, and quality gates that block bad code.',
    tech: ['GitHub Actions', 'Jenkins', 'Quality gates'],
  },
  {
    step: 7,
    title: 'Kubernetes',
    domain: 'Orchestration · EKS',
    state: 'BUILDING',
    summary:
      'Moving workloads from Compose to a cluster: pods, services, ingress, controllers, rolling updates and cluster upgrades.',
    tech: ['Kubernetes', 'EKS', 'Ingress', 'HPA'],
  },
  {
    step: 8,
    title: 'GitOps',
    domain: 'ArgoCD · Config-as-Code',
    state: 'BUILDING',
    summary:
      "The repo is the source of truth. ArgoCD reconciles the cluster with git — drift gets healed, rollbacks get reverts.",
    tech: ['ArgoCD', 'Manifest repos', 'Self-healing'],
    links: [{ label: 'gitops repo', href: 'https://github.com/irfanjat/gitops-cicd-pipeline' }],
  },
  {
    step: 9,
    title: 'Observability',
    domain: 'Metrics · Logs · Dashboards',
    state: 'BUILDING',
    summary:
      'Collecting metrics and logs, wiring alerts, and building dashboards that answer questions before anyone asks them.',
    tech: ['Prometheus', 'Grafana', 'Loki'],
  },
  {
    step: 10,
    title: 'Production & Security',
    domain: 'SRE · Guardrails',
    state: 'PROJECT',
    summary:
      'Capacity, recovery, least-privilege and policy-as-code — the discipline that keeps production boring.',
    tech: ['OPA/Rego', 'Kyverno', 'SLO thinking'],
    links: [{ label: 'guardrails repo', href: 'https://github.com/irfanjat/Guardrails' }],
  },
]

export interface ToolboxCategory {
  title: string
  accent: string
  items: { label: string; detail: string }[]
}

export const toolbox: ToolboxCategory[] = [
  {
    title: 'Cloud Platforms',
    accent: '#f78166',
    items: [
      { label: 'AWS', detail: 'EC2, VPC, S3, RDS, IAM, Lambda, EKS, Route 53, CloudWatch' },
      { label: 'Auto Scaling', detail: 'ASGs + ELB for resilient, elastic workloads' },
      { label: 'CloudWatch', detail: 'Metrics, dashboards and alarm-driven operations' },
    ],
  },
  {
    title: 'Containers',
    accent: '#58a6ff',
    items: [
      { label: 'Docker', detail: 'Multi-stage images, Compose, registries and caching' },
      { label: 'Podman', detail: 'Rootless container workflows' },
    ],
  },
  {
    title: 'Orchestration',
    accent: '#bc8cff',
    items: [
      { label: 'Kubernetes', detail: 'Pods, services, ingress, controllers, rolling updates' },
      { label: 'EKS', detail: 'Managed control planes and node groups' },
    ],
  },
  {
    title: 'Infrastructure as Code',
    accent: '#e3b341',
    items: [
      { label: 'Terraform', detail: 'Modular multi-provider IaC with remote state + locking' },
      { label: 'Ansible', detail: 'Config management and provisioning' },
    ],
  },
  {
    title: 'CI/CD · GitOps',
    accent: '#39d353',
    items: [
      { label: 'GitHub Actions', detail: 'Workflows for build, test, scan and deploy' },
      { label: 'GitLab CI', detail: 'Branch pipelines and multi-stage builds' },
      { label: 'ArgoCD', detail: 'Git-sync deployments with automatic drift healing' },
    ],
  },
  {
    title: 'Observability',
    accent: '#f78166',
    items: [
      { label: 'Prometheus', detail: 'Metrics collection, queries and alerting rules' },
      { label: 'Grafana', detail: 'Dashboards and unified metric views' },
      { label: 'Loki', detail: 'Log aggregation with Promtail agents' },
    ],
  },
  {
    title: 'Languages & Scripting',
    accent: '#58a6ff',
    items: [
      { label: 'Python', detail: 'Scripts, automation and Lambda functions' },
      { label: 'Bash', detail: 'Ops scripting and shell automation' },
    ],
  },
  {
    title: 'Systems & Networking',
    accent: '#bc8cff',
    items: [
      { label: 'Linux', detail: 'Administration, systemd, permissions, LVM, cron' },
      { label: 'Networking', detail: 'DNS, HTTPS/TLS, SSH and reverse proxies (Nginx/Apache)' },
    ],
  },
]

export interface Project {
  id: string
  category: 'CI/CD · GitOps' | 'Infrastructure as Code' | 'Observability' | 'Cloud Cost' | 'Security'
  label: string
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
    category: 'CI/CD · GitOps',
    label: 'production-style',
    title: 'GitOps Delivery Pipeline',
    subtitle:
      'A codebase that deploys itself: every push to main builds, scans, tests, ships and syncs to the cluster automatically.',
    problem:
      'Manual deployments caused untested releases, unverified images and configuration drift between environments.',
    result:
      'The repo became the source of truth. Push to main triggers the whole chain — the cluster converges itself and drift is healed automatically.',
    tech: ['GitHub Actions', 'Docker', 'ArgoCD', 'Kubernetes', 'Helm', 'Python'],
    github: 'https://github.com/irfanjat/gitops-cicd-pipeline',
    extraLinks: [{ label: 'config repo', href: 'https://github.com/irfanjat/gitops-cicd-pipeline-config' }],
    architecture: [
      { node: 'Git push → main', detail: 'The single deploy trigger. Everything else is automated.' },
      { node: 'CI — GitHub Actions', detail: 'Build, unit tests, container scan and SHA-tagged image.' },
      { node: 'Image registry', detail: 'Immutable, digest-pinned artifacts for every commit.' },
      { node: 'CD — ArgoCD sync', detail: 'Pulls updated manifests and reconciles the cluster with git.' },
      { node: 'Kubernetes', detail: 'Rolling rollout, health checks, auto self-heal on drift.' },
    ],
    lessons: [
      'GitOps turns rollbacks into git revert — the whole platform is version-controlled.',
      'Pinning images by digest closes the "built vs deployed" verification gap.',
      'Self-healing surfaces drift instantly instead of letting it sit in the shadows.',
    ],
  },
  {
    id: 'terraform-aws',
    category: 'Infrastructure as Code',
    label: 'modular · secure',
    title: 'AWS Multi-Tier Platform',
    subtitle:
      'A production-shaped AWS stack described as code — networking, compute, storage and databases from a single apply.',
    problem:
      'Clicking through the AWS console creates infrastructure nobody can review, version or rebuild.',
    result:
      'A repeatable, reviewable platform: one terraform apply provisions a multi-AZ environment with encryption and least-privilege IAM out of the box.',
    tech: ['Terraform', 'VPC', 'EC2', 'ALB', 'Auto Scaling', 'RDS', 'S3', 'DynamoDB'],
    github: 'https://github.com/irfanjat/terraform-aws-infra',
    architecture: [
      { node: 'Terraform apply', detail: 'State lives in S3 with DynamoDB locking for safe team runs.' },
      { node: 'VPC · multi-AZ', detail: 'Public/private subnets, NAT gateways, security groups.' },
      { node: 'ALB → ASG', detail: 'Load-balanced, auto-scaling compute behind one endpoint.' },
      { node: 'RDS · S3 · DynamoDB', detail: 'Encrypted data stores with minimal IAM surface.' },
      { node: 'CloudWatch', detail: 'Alarms and dashboards covering the whole stack.' },
    ],
    lessons: [
      'Remote state + locking makes infra a team sport without the merge conflicts.',
      'Planning in modules keeps the stack writable as it grows.',
      'Defaults matter: encryption and restricted IAM should never be opt-in.',
    ],
  },
  {
    id: 'observability',
    category: 'Observability',
    label: 'instrumented',
    title: 'Kubernetes Observability Stack',
    subtitle:
      'Prometheus, Grafana, Loki and Promtail deployed to the cluster so workloads are measurable instead of mysterious.',
    problem:
      'A Kubernetes cluster without telemetry is a black box — PVC fills, crashes and slow endpoints go unnoticed until users complain.',
    result:
      'Cluster-wide metrics and logs in one place: resource dashboards, alert rules and a log query path that cuts troubleshooting time.',
    tech: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Kubernetes', 'Helm'],
    github: 'https://github.com/irfanjat/k8s-observability',
    architecture: [
      { node: 'Kubernetes cluster', detail: 'Every workload reports metrics and emits logs.' },
      { node: 'Prometheus', detail: 'ServiceMonitor scraping with alerting rules.' },
      { node: 'Grafana', detail: 'Dashboards for nodes, pods and core services.' },
      { node: 'Loki + Promtail', detail: 'Cluster-wide log collection and querying.' },
    ],
    lessons: [
      'Dashboards only earn trust when you measure something real against them.',
      'Alerts that fire without a runbook create noise, not reliability.',
    ],
  },
  {
    id: 'costguard',
    category: 'Cloud Cost',
    label: 'serverless · automated',
    title: 'CostGuard',
    subtitle:
      'A serverless cost watchdog that hunts down orphaned and under-utilised AWS resources before they inflate the bill.',
    problem:
      'Cloud spend quietly leaks through forgotten volumes, idle instances and unattached addresses — nobody notices until the invoice.',
    result:
      'Scheduled Lambda scans flag waste, post findings to Slack and write them to DynamoDB, turning cost math into a conversation instead of a surprise.',
    tech: ['Python', 'AWS Lambda', 'Terraform', 'DynamoDB', 'Slack API', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/costguard',
    architecture: [
      { node: 'CloudWatch Events', detail: 'Schedule triggers for daily cost scans.' },
      { node: 'Lambda (boto3)', detail: 'Scans for orphaned volumes, idle resources and neglect.' },
      { node: 'DynamoDB', detail: 'Stores findings for history and trend analysis.' },
      { node: 'Slack webhook', detail: 'Push notifications before money leaks.' },
    ],
    lessons: [
      'Serverless is the right tool when a watchdog should run forever for pennies.',
      'Automated nudges beat monthly spreadsheets every time.',
    ],
  },
  {
    id: 'guardrails',
    category: 'Security',
    label: 'policy-as-code',
    title: 'Policy Guardrails',
    subtitle:
      'A policy engine that reviews Terraform and Kubernetes definitions in CI and blocks the insecure ones before merge.',
    problem:
      'Security rules written in a wiki do nothing — misconfigurations slip through code review and land in production manifests.',
    result:
      'OPA/Rego policies enforced as a merge gate: risky Terraform plans and Kubernetes manifests get rejected with a comment explaining why.',
    tech: ['OPA/Rego', 'Kyverno', 'Conftest', 'Terraform', 'Kubernetes', 'GitHub Actions'],
    github: 'https://github.com/irfanjat/Guardrails',
    architecture: [
      { node: 'Pull request', detail: 'Every infra/k8s change enters the pipeline.' },
      { node: 'Conftest · Terraform', detail: 'Rego policy checks against the HCL plan.' },
      { node: 'Kyverno · K8s', detail: 'Validation against cluster admission policies.' },
      { node: 'Merge gate', detail: 'Violations block the merge with an automated comment.' },
    ],
    lessons: [
      'Policy-as-code makes security reviewable — the policies are part of the repo.',
      'Automated comments beat a stern code review, consistently.',
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

export interface GithubRepo {
  name: string
  description: string
  language: string
  href: string
}

export const githubRepos: GithubRepo[] = [
  {
    name: 'gitops-cicd-pipeline',
    description: 'End-to-end GitOps delivery: CI builds, SHA-tagged images, ArgoCD cluster sync.',
    language: 'HCL',
    href: 'https://github.com/irfanjat/gitops-cicd-pipeline',
  },
  {
    name: 'terraform-aws-infra',
    description: 'Modular, multi-AZ AWS platform with remote state, encryption and least-privilege IAM.',
    language: 'HCL',
    href: 'https://github.com/irfanjat/terraform-aws-infra',
  },
  {
    name: 'k8s-observability',
    description: 'Prometheus, Grafana, Loki and Promtail running on Kubernetes.',
    language: 'YAML',
    href: 'https://github.com/irfanjat/k8s-observability',
  },
  {
    name: 'costguard',
    description: 'Serverless AWS cost watchdog — scans, reports and alerts on waste.',
    language: 'Python',
    href: 'https://github.com/irfanjat/costguard',
  },
  {
    name: 'Guardrails',
    description: 'Policy-as-code engine: OPA/Rego + Kyverno gates for Terraform and K8s.',
    language: 'Rego',
    href: 'https://github.com/irfanjat/Guardrails',
  },
  {
    name: 'gitops-cicd-pipeline-config',
    description: 'The GitOps source-of-truth repo ArgoCD reconciles against.',
    language: 'YAML',
    href: 'https://github.com/irfanjat/gitops-cicd-pipeline-config',
  },
]

export interface StatusRow {
  label: string
  state: 'operational' | 'building'
  detail: string
}

export const systemStatus: StatusRow[] = [
  { label: 'portfolio', state: 'operational', detail: 'auto-deployed on every push via GitHub Actions + Cloudflare Pages' },
  { label: 'ci/cd pipeline', state: 'operational', detail: 'build, test and deploy automated end-to-end' },
  { label: 'infrastructure', state: 'operational', detail: 'Terraform, multi-AZ, encryption and least privilege by default' },
  { label: 'observability', state: 'operational', detail: 'Prometheus · Grafana · Loki on Kubernetes' },
  { label: 'learning path', state: 'building', detail: 'next stop: production readiness & security hardening' },
]

export const statusDisclaimer =
  'Visual dashboard for a learning portfolio — it represents the projects and workflow here, not a live production fleet.'

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Sindh (SULC), Jamshoro, Pakistan',
  graduation: 'Expected graduation 2027',
}