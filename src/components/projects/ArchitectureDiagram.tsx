import { motion } from 'framer-motion'

type DiagramType = 'gitops' | 'aws' | 'k8s-monitor'

interface ArchitectureDiagramProps {
  type: DiagramType
}

export function ArchitectureDiagram({ type }: ArchitectureDiagramProps) {
  if (type === 'gitops') {
    return (
      <div className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4 font-mono text-[10px] sm:text-xs">
        <div className="mb-3 text-center text-slate-500">GitOps Pipeline</div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['GitHub', 'Actions', 'Docker', 'Helm', 'ArgoCD', 'K8s'].map((node, i) => (
            <motion.div
              key={node}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2 py-1.5 text-cyan-300"
            >
              {node}
            </motion.div>
          ))}
        </div>
        <div className="my-3 flex justify-center">
          <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded border border-violet-500/20 bg-violet-500/5 p-2 text-violet-300">Build</div>
          <div className="rounded border border-emerald-500/20 bg-emerald-500/5 p-2 text-emerald-300">Push</div>
          <div className="rounded border border-amber-500/20 bg-amber-500/5 p-2 text-amber-300">Sync</div>
        </div>
        <p className="mt-3 text-center text-slate-600">SHA tags ? zero-downtime deploy</p>
      </div>
    )
  }

  if (type === 'aws') {
    return (
      <div className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4 font-mono text-[10px] sm:text-xs">
        <div className="mb-3 text-center text-amber-400/80">AWS Multi-Tier Topology</div>
        <div className="space-y-2">
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-2 text-center text-amber-200">
            Route 53 / ALB
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded border border-cyan-500/20 p-2 text-cyan-300">AZ-a EC2 ASG</div>
            <div className="rounded border border-cyan-500/20 p-2 text-cyan-300">AZ-b EC2 ASG</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded border border-violet-500/20 p-2 text-violet-300">RDS PostgreSQL</div>
            <div className="rounded border border-emerald-500/20 p-2 text-emerald-300">S3 + DynamoDB</div>
          </div>
          <div className="rounded border border-slate-600/40 p-2 text-center text-slate-500">
            VPC � IAM � CloudWatch � Terraform State
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4">
      <div className="mb-3 text-center font-mono text-xs text-rose-400/80">K8s Observability</div>
      <div className="grid grid-cols-2 gap-2 font-mono text-[10px] sm:text-xs">
        <div className="col-span-2 rounded-lg border border-orange-500/30 bg-orange-500/10 p-2 text-center text-orange-300">
          Prometheus � 14 targets
        </div>
        <div className="rounded border border-cyan-500/20 p-3 text-cyan-300">
          <div className="mb-2 h-8 rounded bg-cyan-500/10" />
          Grafana
        </div>
        <div className="rounded border border-violet-500/20 p-3 text-violet-300">
          <div className="mb-2 space-y-1">
            {[70, 45, 85, 60].map((h, i) => (
              <div key={i} className="h-1 rounded bg-violet-500/40" style={{ width: `${h}%` }} />
            ))}
          </div>
          Loki Logs
        </div>
        <div className="col-span-2 rounded border border-rose-500/20 p-2 text-center text-rose-300">
          Alertmanager ? Slack / Email
        </div>
      </div>
    </div>
  )
}
