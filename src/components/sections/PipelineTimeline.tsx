import { motion } from 'framer-motion'
import {
  Activity, Box, FlaskConical, GitCommit, Rocket, Shield,
  type LucideIcon,
} from 'lucide-react'
import { pipelineStages } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  GitCommit, FlaskConical, Box, Shield, Rocket, Activity,
}

const iconThemes: Record<string, { box: string; line: string }> = {
  cyan: { box: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', line: 'bg-cyan-500' },
  violet: { box: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', line: 'bg-indigo-500' },
  emerald: { box: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', line: 'bg-emerald-500' },
  rose: { box: 'bg-rose-500/10 text-rose-400 border-rose-500/20', line: 'bg-rose-500' },
}

export function PipelineTimeline() {
  return (
    <section id="pipeline" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Pipeline"
          title="CI/CD Workflow"
          subtitle="From code push to production — fully automated GitOps pipeline."
        />

        <div className="card rounded-xl p-6 sm:p-8">
          <div className="relative">
            <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent hidden lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
              {pipelineStages.map((stage, i) => {
                const Icon = iconMap[stage.icon]
                const theme = iconThemes[stage.color as string] ?? iconThemes.cyan
                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    <div className="relative">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${theme.box}`}
                      >
                        {Icon && <Icon className="h-5 w-5" />}
                      </div>
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full ${theme.line} hidden lg:block`} />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-slate-100">{stage.label}</h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed max-w-[120px]">{stage.desc}</p>
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400">Live</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
