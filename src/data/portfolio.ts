export const availability = 'Open to work · Remote, hybrid or on-site (PKT, UTC+5)'

export const personal = {
  name: 'Irfan Ali',
  firstName: 'Irfan',
  lastName: 'Ali',
  initials: 'IA',
  role: 'DevOps & Cloud Engineer',
  roles: ['DevOps Engineer', 'Cloud Engineer', 'Platform Engineer', 'Infrastructure Engineer'],
  tagline:
    'I build reproducible cloud infrastructure and automated delivery pipelines, with a focus on reliability, observability and security.',
  email: 'irfanali.cloud@gmail.com',
  linkedin: 'https://linkedin.com/in/irfanjat',
  github: 'https://github.com/irfanjat',
  portfolioRepo: 'https://github.com/irfanjat/portfolio',
  resume: '/IrfanAliResume.pdf',
  location: 'Karachi, Pakistan',
  availability,
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
  { value: 1, suffix: '+', label: 'years building' },
  {
    value: 20,
    suffix: '+',
    label: 'public repos',
    href: 'https://github.com/irfanjat',
  },
  { value: 10, suffix: '+', label: 'AWS services' },
]

export interface SkillCategory {
  title: string
  tags: string[]
}

export const skills: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
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
    tags: ['Terraform', 'HCL', 'CloudFormation basics', 'Bash', 'Python', 'Go'],
  },
  {
    title: 'Containers & Orchestration',
    tags: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'kind', 'kubectl'],
  },
  {
    title: 'CI/CD & GitOps',
    tags: ['GitHub Actions', 'Argo CD', 'Git', 'GHCR', 'Rolling updates', 'Trunk-based flow'],
  },
  {
    title: 'Observability',
    tags: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Alertmanager', 'Node Exporter'],
  },
  {
    title: 'Systems & Networking',
    tags: ['Linux', 'Nginx', 'Caddy', 'DNS', 'HTTPS/TLS', 'SSH', 'TCP/IP', 'coturn', 'WebRTC'],
  },
]

export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  repo: string
  evidence: string[]
  extra?: { label: string; href: string }[]
  live?: string
}

export const projects: Project[] = [
  {
    id: 'db-operator',
    name: 'DB Operator — PostgreSQL on Kubernetes',
    description:
      'A Kubernetes operator written in Go with controller-runtime. It manages PostgreSQL clusters through custom resources, extending the Kubernetes API and adding automated S3 backups, monitoring and Helm packaging.',
    tags: ['Go', 'CRDs', 'controller-runtime', 'Helm', 'Argo CD'],
    repo: 'https://github.com/irfanjat/db-operator',
    evidence: ['CRD + controller · S3 backups · Helm + Argo CD'],
  },
  {
    id: 'fizzshare',
    name: 'FizzShare — WebRTC File Sharing',
    description:
      'Browser-to-browser encrypted file transfer over WebRTC. File bytes are never stored on the server; transfers go peer-to-peer, with an encrypted TURN relay when NAT traversal fails. Deployed on AWS with Docker Compose, coturn, Caddy and Terraform, plus ICE diagnostics and Prometheus metrics.',
    tags: ['TypeScript', 'WebRTC', 'Docker', 'Terraform', 'Prometheus'],
    repo: 'https://github.com/irfanjat/fizzshare',
    evidence: [
      '16/16 client tests · 28/28 server tests',
      'Headless Chrome E2E · SHA-256 integrity check',
    ],
  },
  {
    id: 'gitops',
    name: 'End-to-End GitOps CI/CD Pipeline',
    description:
      'Push-to-deploy releases with GitHub Actions and Argo CD. Each successful build is tagged with the commit SHA and deployed by digest; Argo CD reconciles the cluster from git with drift detection, pruning and self-healing.',
    tags: ['GitHub Actions', 'Argo CD', 'Kubernetes', 'Helm', 'Docker'],
    repo: 'https://github.com/irfanjat/gitops-cicd-pipeline',
    evidence: ['0 manual deploy steps · ~2 min push-to-live · commit SHA in every manifest'],
    extra: [
      { label: 'config repo', href: 'https://github.com/irfanjat/gitops-cicd-pipeline-config' },
    ],
  },
  {
    id: 'terraform-aws',
    name: 'Multi-Tier AWS Infrastructure',
    description:
      'A 24-resource Terraform environment across two availability zones: VPC, public and private subnets, ALB, Auto Scaling, and RDS with automated failover. State lives in S3 with DynamoDB locking.',
    tags: ['Terraform', 'VPC', 'ALB', 'Auto Scaling', 'RDS', 'IAM'],
    repo: 'https://github.com/irfanjat/terraform-aws-infra',
    evidence: ['24 resources across 2 AZs'],
  },
  {
    id: 'observability',
    name: 'Kubernetes Observability Stack',
    description:
      'Cluster-wide metrics and logs with Prometheus, Grafana, Loki and Promtail. ServiceMonitor-based discovery and 3 PrometheusRule alerts for restarts, availability and memory, plus a 6-panel Grafana dashboard.',
    tags: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Kubernetes'],
    repo: 'https://github.com/irfanjat/k8s-observability',
    evidence: ['3 PrometheusRule alerts · 6-panel Grafana dashboard · 14 scrape targets'],
  },
  {
    id: 'guardrails',
    name: 'Policy Guardrails Engine',
    description:
      'Policy-as-code guardrails for Terraform and Kubernetes, using OPA/Conftest and Kyverno in GitHub Actions. Non-compliant pull requests fail CI and receive an automatic review comment.',
    tags: ['OPA', 'Conftest', 'Kyverno', 'GitHub Actions', 'Policy as Code'],
    repo: 'https://github.com/irfanjat/Guardrails',
    evidence: ['8 policies · Terraform and Kubernetes · CI pull-request enforcement'],
  },
  {
    id: 'costguard',
    name: 'CostGuard — AWS Cost Watchdog',
    description:
      'A scheduled serverless scanner that tracks daily AWS spend, flags anomalies and finds orphaned resources. Findings are stored in DynamoDB and delivered to Slack with suggested fixes.',
    tags: ['Python', 'Lambda', 'DynamoDB', 'Terraform', 'Slack API'],
    repo: 'https://github.com/irfanjat/costguard',
    evidence: ['6-hour schedule · Slack reports · DynamoDB history'],
  },
]

export interface Credential {
  title: string
  issuer: string
  kind: 'Certification' | 'Course'
  link: string
}

export const credentials: Credential[] = [
  {
    title: 'OCI 2025 Certified Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
    kind: 'Certification',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1BEEF1CBBEAE05D6DD59D53B668355A20ADBC563F691C84B03315E27A745FD49',
  },
  {
    title: 'Introduction to DevOps',
    issuer: 'IBM · Coursera',
    kind: 'Course',
    link: 'https://coursera.org/verify/PANSLSFPOV59',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services · Coursera',
    kind: 'Course',
    link: 'https://coursera.org/verify/VJOL7N4FHGNV',
  },
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services · Coursera',
    kind: 'Course',
    link: 'https://coursera.org/verify/JHTNQ3MFH2D2',
  },
]

export const education = {
  degree: 'BSc in Computer Science',
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
      'Built a two-repository GitOps pipeline with GitHub Actions and Argo CD, using commit-SHA image tags and digest-based deployment with automated reconciliation.',
      'Provisioned a multi-AZ AWS environment in Terraform with remote state, least-privilege IAM, load balancing and a private database tier.',
      'Deployed Prometheus, Grafana, Loki and Promtail on Kubernetes with 3 PrometheusRule alerts and a 6-panel dashboard.',
      'Automated AWS cost and orphaned-resource reporting with a scheduled Lambda, DynamoDB history and Slack alerts.',
    ],
  },
  {
    role: 'BSc in Computer Science',
    org: 'University of Sindh (SULC), Jamshoro',
    period: 'Expected 2027',
    points: [
      'Studying operating systems, computer networks, databases and data structures alongside cloud and platform engineering practice.',
      'Applying coursework in hands-on labs: Linux administration, networking fundamentals and containerized deployments.',
    ],
  },
  {
    role: 'Certifications & Technical Training',
    org: 'Oracle · IBM · AWS',
    period: '2025 — 2026',
    points: [
      'Earned the OCI 2025 Certified Foundations Associate credential.',
      'Completed IBM Introduction to DevOps and two AWS cloud essentials courses on Coursera.',
      'Current focus: Kubernetes platform engineering through the DB Operator and observability projects.',
    ],
  },
]

export interface Note {
  slug: string
  title: string
  date: string
  readTime: string
  summary: string
  tags: string[]
  relatedProject: string
  body: { heading?: string; paragraphs?: string[]; bullets?: string[]; code?: string }[]
}

export const notes: Note[] = [
  {
    slug: 'terraform-state-remote-backend',
    title: 'Terraform state belongs in a bucket, not in your repository',
    date: 'Oct 2026',
    readTime: '4 min read',
    summary:
      'Local state works until a second person runs apply. A versioned S3 backend with DynamoDB locking turns infrastructure changes into something a team can review safely.',
    tags: ['Terraform', 'AWS', 'State'],
    relatedProject: 'terraform-aws',
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
    slug: 'argo-cd-self-heal',
    title: 'What Argo CD self-heal actually does',
    date: 'Oct 2026',
    readTime: '3 min read',
    summary:
      'Self-heal is not a deployment trick — it is a reconciliation loop. Knowing when it helps and when it hides a problem matters more than turning it on.',
    tags: ['Argo CD', 'GitOps', 'Kubernetes'],
    relatedProject: 'gitops',
    body: [
      {
        paragraphs: [
          'Argo CD continuously compares live cluster resources with the desired manifests in git. With self-heal enabled, a difference is not just reported — it is corrected. Delete a deployment by hand and it comes back on the next sync.',
          'That behavior is valuable for drift caused by accident. It is less valuable when the drift is caused by something you do not understand yet.',
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
      'Entry-level DevOps, cloud and platform engineering roles where I can own infrastructure as code, CI/CD and observability. I am also open to internships and collaborative project work.',
  },
  {
    question: 'How were these projects built?',
    answer:
      'They are self-directed projects built with production-style practices: remote state, least privilege, CI/CD and monitoring. Each repository includes the architecture, setup steps and verification, not just screenshots.',
  },
  {
    question: 'What is your strongest area?',
    answer:
      'AWS infrastructure with Terraform, followed by GitOps delivery on Kubernetes. I am most comfortable when a change can be reviewed in a pull request, applied repeatably and observed after rollout.',
  },
  {
    question: 'Do you hold a certification?',
    answer:
      'Yes — OCI 2025 Certified Foundations Associate. I have also completed IBM Introduction to DevOps and two AWS cloud essentials courses.',
  },
  {
    question: 'How quickly can you start, and how do I reach you?',
    answer:
      'Available for full-time roles and internships — happy to discuss start dates. Email irfanali.cloud@gmail.com or connect on LinkedIn; both are linked in the Contact section.',
  },
]
