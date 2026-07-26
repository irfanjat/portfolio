import { motion } from 'framer-motion'

type DiagramType = 'gitops' | 'aws' | 'k8s-monitor'

interface ArchitectureDiagramProps {
  type: DiagramType
}

function Node({ label, color, delay, sub }: { label: string; color: string; delay?: number; sub?: string }) {
  const colors: Record<string, string> = {
    blue: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    orange: 'border-orange-500/30 bg-orange-500/10 text-orange-300',
    green: 'border-green-500/30 bg-green-500/10 text-green-300',
    yellow: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300',
    red: 'border-red-500/30 bg-red-500/10 text-red-300',
    slate: 'border-slate-600/40 bg-slate-800/50 text-slate-300',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay ?? 0, duration: 0.35 }}
      className={`rounded-lg border px-3 py-2 text-center text-xs font-medium ${colors[color] ?? colors.slate}`}
    >
      {label}
      {sub && <div className="mt-0.5 text-[9px] font-normal text-white/30">{sub}</div>}
    </motion.div>
  )
}

function Arrow() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-4 bg-gradient-to-r from-transparent to-slate-600/60" />
      <span className="text-[8px] text-slate-600">▶</span>
    </div>
  )
}

function GitOpsDiagram() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 font-mono text-[10px]">
      <div className="mb-4 text-center text-[11px] font-semibold text-blue-400/80">GitOps Pipeline</div>
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <Node label="GitHub" color="slate" delay={0} />
        <Arrow />
        <Node label="Actions" color="blue" delay={0.1} />
        <Arrow />
        <Node label="Docker" color="blue" delay={0.2} />
        <Arrow />
        <Node label="Helm" color="orange" delay={0.3} />
      </div>
      <div className="my-3 flex justify-center">
        <div className="h-px w-full max-w-[160px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <Node label="ArgoCD" color="orange" delay={0.4} sub="Git Sync" />
        <Arrow />
        <Node label="K8s Cluster" color="green" delay={0.5} sub="Self-healing" />
      </div>
    </div>
  )
}

function AWSDiagram() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 font-mono text-[10px]">
      <div className="mb-4 text-center text-[11px] font-semibold text-yellow-400/80">AWS Multi-Tier</div>
      <div className="space-y-2">
        <Node label="Route 53 / ALB" color="yellow" delay={0} />
        <div className="grid grid-cols-2 gap-2">
          <Node label="AZ-a EC2 ASG" color="blue" delay={0.1} />
          <Node label="AZ-b EC2 ASG" color="blue" delay={0.15} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Node label="RDS PostgreSQL" color="orange" delay={0.2} sub="Multi-AZ" />
          <Node label="S3 + DynamoDB" color="green" delay={0.25} sub="Encrypted" />
        </div>
        <Node label="VPC · IAM · CloudWatch" color="slate" delay={0.3} sub="Terraform State" />
      </div>
    </div>
  )
}

function ObservabilityDiagram() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 font-mono text-[10px]">
      <div className="mb-4 text-center text-[11px] font-semibold text-red-400/80">K8s Observability</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <Node label="Prometheus · 14 targets" color="yellow" delay={0} sub="Service Monitor" />
        </div>
        <Node label="Grafana" color="blue" delay={0.1} sub="Dashboards" />
        <Node label="Loki" color="orange" delay={0.15} sub="Log Streams" />
        <div className="col-span-2">
          <Node label="Alertmanager → Slack / Email" color="red" delay={0.2} sub="Real-time Alerts" />
        </div>
      </div>
    </div>
  )
}

export function ArchitectureDiagram({ type }: ArchitectureDiagramProps) {
  if (type === 'gitops') return <GitOpsDiagram />
  if (type === 'aws') return <AWSDiagram />
  return <ObservabilityDiagram />
}
