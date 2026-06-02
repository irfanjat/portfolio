import { motion } from 'framer-motion'
import {
  Activity,
  Box,
  FlaskConical,
  GitCommit,
  Rocket,
  Shield,
  type LucideIcon,
} from 'lucide-react'
import { pipelineStages } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  GitCommit,
  FlaskConical,
  Box,
  Shield,
  Rocket,
  Activity,
}

const iconColors: Record<string, string> = {
  cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-400/30',
  violet: 'bg-violet-500/15 text-violet-400 border-violet-400/30',
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-400/30',
  rose: 'bg-rose-500/15 text-rose-400 border-rose-400/30',
}

const lineColors: Record<string, string> = {
  cyan: 'bg-cyan-500/30',
  violet: 'bg-violet-500/30',
  emerald: 'bg-emerald-500/30',
  rose: 'bg-rose-500/30',
}

export function PipelineTimeline() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Pipeline"
          title="CI/CD Workflow"
          subtitle="From code push to production — fully automated GitOps pipeline."
        />

        <div className="relative">
          <div className="absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent hidden lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {pipelineStages.map((stage, i) => {
              const Icon = iconMap[stage.icon]
              const color = stage.color as string
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-lg backdrop-blur-sm ${iconColors[color] ?? iconColors.cyan}`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <div className={`mt-4 h-1 w-8 rounded-full ${lineColors[color] ?? lineColors.cyan} hidden lg:block`} />
                  <h3 className="mt-3 text-sm font-semibold text-white">{stage.label}</h3>
                  <p className="mt-1 text-[11px] text-slate-500 leading-relaxed max-w-[140px]">{stage.desc}</p>

                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400/60">Active</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
