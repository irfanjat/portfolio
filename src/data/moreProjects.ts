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
      { label: 'Git Push', color: 'cyan' },
      { label: 'GitHub Actions', color: 'violet' },
      { label: 'npm test', color: 'emerald' },
      { label: 'docker build', color: 'amber' },
      { label: 'Docker Hub', color: 'rose' },
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
      { label: 'Git Push', color: 'cyan' },
      { label: 'Jenkins', color: 'violet' },
      { label: 'Docker Build', color: 'amber' },
      { label: 'EC2 Deploy', color: 'emerald' },
      { label: 'Browser', color: 'rose' },
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
      '2× t3.medium managed node group in us-east-1',
      'ALB controller with OIDC IAM service account',
      'RollingUpdate strategy with liveness & readiness probes',
    ],
    architecture: 'Internet → ALB → Ingress → Service → Pods → Container',
    flowSteps: [
      { label: 'Internet', color: 'cyan' },
      { label: 'ALB', color: 'violet' },
      { label: 'Ingress', color: 'emerald' },
      { label: 'Service', color: 'amber' },
      { label: 'Pods', color: 'rose' },
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
      { label: 'Terraform', color: 'violet' },
      { label: 'S3 Bucket', color: 'amber' },
      { label: 'Static Hosting', color: 'emerald' },
      { label: 'Policy', color: 'rose' },
      { label: 'Live URL', color: 'cyan' },
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
      { label: 'docker compose', color: 'cyan' },
      { label: 'Express', color: 'violet' },
      { label: 'MongoDB', color: 'emerald' },
      { label: 'Volume', color: 'amber' },
      { label: ':3000', color: 'rose' },
    ],
  },
]
