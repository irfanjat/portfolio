export const personal = {
  name: 'Irfan Ali',
  firstName: 'Irfan',
  lastName: 'Ali',
  initials: 'IA',
  role: 'DevOps & Cloud Engineer',
  roles: ['DevOps Engineer', 'Cloud Engineer', 'Platform Engineer', 'Infrastructure Engineer'],
  tagline:
    'I build reproducible cloud infrastructure and automated delivery pipelines, with a focus on reliability, observability and security.',
  phone: '03153711489',
  phoneIntl: '+923153711489',
  email: 'irfanali.cloud@gmail.com',
  linkedin: 'https://linkedin.com/in/irfanjat',
  github: 'https://github.com/irfanjat',
  resume: '/IrfanAliResume.pdf',
  location: 'Karachi, Pakistan',
  availability: 'Open to opportunities',
  availabilityDetail: 'Full-time · Remote, hybrid or on-site',
}

export const contactForm = {
  web3formsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '0aa0ba6b-9d3d-4054-b870-caa6263644fb',
}

export const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'certs', href: '#certifications' },
  { label: 'projects', href: '#projects' },
  { label: 'notes', href: '#notes' },
  { label: 'contact', href: '#contact' },
]

export const stats = [
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Shipped' },
  { value: 10, suffix: '+', label: 'AWS Services' },
  { value: '∞', suffix: '', label: 'Commands Run' },
]

export interface SkillCategory {
  title: string
  icon: string
  tags: string[]
}

export const skills: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    icon: '☁️',
    tags: [
      'AWS',
      'EC2',
      'VPC',
      'ALB',
      'Auto Scaling',
      'S3',
      'IAM',
      'RDS',
      'Lambda',
      'DynamoDB',
      'Route 53',
      'CloudWatch',
    ],
  },
  {
    title: 'IaC & Automation',
    icon: '🧱',
    tags: ['Terraform', 'HCL', 'CloudFormation basics', 'Bash', 'Python', 'Go'],
  },
  {
    title: 'Containers & Orchestration',
    icon: '📦',
    tags: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'kind', 'kubectl'],
  },
  {
    title: 'CI/CD & GitOps',
    icon: '🚀',
    tags: ['GitHub Actions', 'Argo CD', 'Git', 'GHCR', 'Rolling updates', 'Trunk-based flow'],
  },
  {
    title: 'Observability',
    icon: '📊',
    tags: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Alertmanager', 'Node Exporter'],
  },
  {
    title: 'Systems & Networking',
    icon: '🖥️',
    tags: ['Linux', 'Nginx', 'Caddy', 'DNS', 'HTTPS/TLS', 'SSH', 'TCP/IP', 'coturn', 'WebRTC'],
  },
]

export interface Project {
  id: string
  icon: string
  name: string
  description: string
  tags: string[]
  repo: string
  extra?: { label: string; href: string }[]
  live?: string
}

export const projects: Project[] = [
  {
    id: 'fizzshare',
    icon: '🔐',
    name: 'FizzShare — WebRTC File Sharing',
    description:
      'Browser-to-browser encrypted file transfer over WebRTC data channels, so file bytes never touch the server. Shipped on AWS with Docker Compose, coturn, Caddy and Terraform, plus an ICE inspector and Prometheus metrics.',
    tags: ['TypeScript', 'WebRTC', 'Docker', 'Terraform', 'Prometheus'],
    repo: 'https://github.com/irfanjat/fizzshare',
  },
  {
    id: 'gitops',
    icon: '🚀',
    name: 'End-to-End GitOps CI/CD Pipeline',
    description:
      'Push-to-deploy releases with GitHub Actions and Argo CD. Every commit produces an immutable, SHA-tagged image; Argo CD reconciles the cluster from git with drift detection, pruning and self-healing.',
    tags: ['GitHub Actions', 'Argo CD', 'Kubernetes', 'Helm', 'Docker'],
    repo: 'https://github.com/irfanjat/gitops-cicd-pipeline',
    extra: [
      { label: 'config repo', href: 'https://github.com/irfanjat/gitops-cicd-pipeline-config' },
    ],
  },
  {
    id: 'db-operator',
    icon: '🧩',
    name: 'DB Operator — PostgreSQL on Kubernetes',
    description:
      'A Kubernetes operator written in Go with controller-runtime. It manages PostgreSQL clusters through custom resources, extending the Kubernetes API and adding automated S3 backups, monitoring and Helm packaging.',
    tags: ['Go', 'CRDs', 'controller-runtime', 'Helm', 'Argo CD'],
    repo: 'https://github.com/irfanjat/db-operator',
  },
  {
    id: 'terraform-aws',
    icon: '🏗️',
    name: 'Multi-Tier AWS Infrastructure',
    description:
      'A 24-resource Terraform environment across two availability zones: VPC, public and private subnets, ALB, Auto Scaling, and RDS with automated failover. State lives in S3 with DynamoDB locking.',
    tags: ['Terraform', 'VPC', 'ALB', 'Auto Scaling', 'RDS', 'IAM'],
    repo: 'https://github.com/irfanjat/terraform-aws-infra',
  },
  {
    id: 'observability',
    icon: '📈',
    name: 'Kubernetes Observability Stack',
    description:
      'Cluster-wide metrics and logs with Prometheus, Grafana, Loki and Promtail. ServiceMonitor-based discovery, a six-panel resource dashboard and alert rules that point to a clear next step.',
    tags: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Kubernetes'],
    repo: 'https://github.com/irfanjat/k8s-observability',
  },
  {
    id: 'costguard',
    icon: '💸',
    name: 'CostGuard — AWS Cost Watchdog',
    description:
      'A scheduled serverless scanner that finds orphaned volumes, idle instances and unattached addresses. Findings are stored in DynamoDB for history and pushed to Slack so waste is fixed early.',
    tags: ['Python', 'Lambda', 'DynamoDB', 'Terraform', 'Slack API'],
    repo: 'https://github.com/irfanjat/costguard',
  },
]

export interface Credential {
  title: string
  issuer: string
  kind: 'Certification' | 'Course'
  icon: string
  link: string
}

export const credentials: Credential[] = [
  {
    title: 'OCI 2025 Certified Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
    kind: 'Certification',
    icon: '🏅',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1BEEF1CBBEAE05D6DD59D53B668355A20ADBC563F691C84B03315E27A745FD49',
  },
  {
    title: 'Introduction to DevOps',
    issuer: 'IBM · Coursera',
    kind: 'Course',
    icon: '⚙️',
    link: 'https://coursera.org/verify/PANSLSFPOV59',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services · Coursera',
    kind: 'Course',
    icon: '☁️',
    link: 'https://coursera.org/verify/VJOL7N4FHGNV',
  },
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services · Coursera',
    kind: 'Course',
    icon: '🛠️',
    link: 'https://coursera.org/verify/JHTNQ3MFH2D2',
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Sindh (SULC), Jamshoro, Pakistan',
  graduation: 'Expected graduation 2027',
}

export interface ExperienceItem {
  role: string
  org: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Independent DevOps & Cloud Projects',
    org: 'Self-directed · Remote',
    period: '2025 — Present',
    points: [
      'Design and ship end-to-end projects across AWS, Kubernetes and CI/CD, documenting architecture, trade-offs and evidence for each one.',
      'Built a two-repository GitOps pipeline with GitHub Actions and Argo CD, including immutable SHA-tagged images and automated reconciliation.',
      'Provisioned a multi-AZ AWS environment in Terraform with remote state, least-privilege IAM, load balancing and a private database tier.',
      'Deployed Prometheus, Grafana, Loki and Promtail on Kubernetes with dashboards and alert rules, and automated AWS cost reporting with Lambda.',
    ],
  },
  {
    role: 'BSc Computer Science',
    org: 'University of Sindh (SULC), Jamshoro',
    period: 'Expected 2027',
    points: [
      'Studying operating systems, computer networks, databases and data structures alongside cloud and platform engineering practice.',
      'Applying coursework in hands-on labs: Linux administration, networking fundamentals and containerised deployments.',
    ],
  },
  {
    role: 'Certifications & Technical Training',
    org: 'Oracle · IBM · AWS',
    period: '2025 — 2026',
    points: [
      'Earned the OCI 2025 Certified Foundations Associate credential.',
      'Completed IBM Introduction to DevOps and two AWS cloud essentials courses on Coursera.',
      'Continuing self-directed study toward Kubernetes and platform engineering depth.',
    ],
  },
]

export interface Note {
  title: string
  date: string
  readTime: string
  summary: string
  tags: string[]
  body: { heading?: string; paragraphs?: string[]; bullets?: string[]; code?: string }[]
}

export const notes: Note[] = [
  {
    title: 'Terraform state belongs in a bucket, not in your repository',
    date: '2026',
    readTime: '4 min read',
    summary:
      'Local state works until a second person runs apply. A versioned S3 backend with DynamoDB locking turns infrastructure changes into something a team can review safely.',
    tags: ['Terraform', 'AWS', 'State'],
    body: [
      {
        paragraphs: [
          'Local state is the default and the fastest way to lose track of what Terraform owns. Two engineers running apply at the same time can corrupt the file, and a laptop refresh can erase the only record of a live environment.',
          'The fix is small: a versioned S3 bucket, a DynamoDB table for locks, and a backend block every configuration points at.',
        ],
      },
      {
        code: `terraform {
  backend "s3" {
    bucket         = "acme-tf-state"
    key            = "prod/network/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "acme-tf-locks"
    encrypt        = true
  }
}`,
      },
      {
        heading: 'What actually matters',
        bullets: [
          'Bucket versioning on, so a bad apply can be rolled back to the previous state object.',
          'A lock table, so concurrent applies fail fast instead of interleaving writes.',
          'Blocked public access and encryption at rest — state often contains sensitive values.',
          'One key per environment and layer, not one giant shared state.',
        ],
      },
      {
        paragraphs: [
          'The trade-off is bootstrapping: the bucket and lock table must exist before Terraform can use them. Create them once, with a small separate configuration or the console, and keep that setup documented.',
          'State is shared infrastructure. Treat it with the same care as the environment it describes.',
        ],
      },
    ],
  },
  {
    title: 'What Argo CD self-heal actually does',
    date: '2026',
    readTime: '3 min read',
    summary:
      'Self-heal is not a deployment trick — it is a reconciliation loop. Knowing when it helps and when it hides a problem matters more than turning it on.',
    tags: ['Argo CD', 'GitOps', 'Kubernetes'],
    body: [
      {
        paragraphs: [
          'Argo CD continuously compares live cluster resources with the desired manifests in git. With self-heal enabled, a difference is not just reported — it is corrected. Delete a deployment by hand and it comes back on the next sync.',
          'That behaviour is valuable for drift caused by accident. It is less valuable when the drift is caused by something you do not understand yet.',
        ],
      },
      {
        heading: 'The practical rules',
        bullets: [
          'Enable automated sync with pruning only after the manifests are the real source of truth.',
          'Keep health checks meaningful — a synced resource is not necessarily a healthy one.',
          'Watch for hot loops: if a controller keeps changing a field, reconciliation will keep reverting it.',
          'Use sync waves for ordering, not for hiding dependencies that should be explicit.',
        ],
      },
      {
        paragraphs: [
          'Self-heal rewards teams that deploy through git. If urgent fixes still happen with kubectl, the cluster and the repository will fight each other, and the resulting alerts are noise rather than safety.',
          'The feature is a guardrail. The workflow around it is what makes the platform reliable.',
        ],
      },
    ],
  },
]

export const faq = [
  {
    question: 'What kind of roles are you looking for?',
    answer:
      'Entry-level DevOps, cloud and platform engineering roles where I can own infrastructure as code, CI/CD and observability. I am open to full-time roles in Pakistan or remote teams, and comfortable with hybrid or on-site arrangements.',
  },
  {
    question: 'Are your projects professional or personal?',
    answer:
      'They are self-directed projects built to production-shaped standards, not enterprise employment. I designed, provisioned and documented each one end to end, and the repositories include the actual Terraform, workflows and manifests I wrote.',
  },
  {
    question: 'What is your strongest area?',
    answer:
      'AWS infrastructure with Terraform, followed by GitOps delivery on Kubernetes. I am most comfortable when a change can be reviewed in a pull request, applied repeatably and observed after rollout.',
  },
  {
    question: 'Do you hold a certification?',
    answer:
      'Yes — OCI 2025 Certified Foundations Associate. I have also completed IBM Introduction to DevOps and two AWS cloud essentials courses, and I am continuing toward deeper Kubernetes and platform engineering work.',
  },
  {
    question: 'How quickly can you start, and how do I reach you?',
    answer:
      'I am available immediately and reply to messages within 24 hours. Email irfanali.cloud@gmail.com or connect on LinkedIn — both are linked below.',
  },
]
