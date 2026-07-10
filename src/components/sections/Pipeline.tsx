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
import { pipelineStages } from '../../data/portfolio'
import { SectionHeader } from '../ui/SectionHeader'

const iconMap: Record<string, LucideIcon> = {
  GitCommit,
  FlaskConical,
  Box,
  Shield,
  Rocket,
  Activity,
}

const colorMap: Record<string, string> = {
  cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
  violet: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
  emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  rose: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
}

export function Pipeline() {
  return (
    <section id="pipeline" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Pipeline"
          title="CI/CD Workflow"
          subtitle="End-to-end delivery pipeline from code push to production monitoring."
          align="center"
        />

        <div className="relative">
          <div className="absolute top-10 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {pipelineStages.map((stage, i) => {
              const Icon = iconMap[stage.icon] ?? GitCommit
              const colors = colorMap[stage.color] ?? colorMap.cyan

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="glass glass-hover rounded-2xl p-5 text-center">
                    <motion.div
                      className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${colors}`}
                      animate={{ boxShadow: ['0 0 0 0 rgba(34,211,238,0)', '0 0 0 8px rgba(34,211,238,0)', '0 0 0 0 rgba(34,211,238,0)'] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="text-sm font-semibold text-slate-200">{stage.label}</h3>
                    <p className="mt-1.5 font-mono text-[10px] leading-relaxed text-slate-500">
                      {stage.desc}
                    </p>
                  </div>
                  {i < pipelineStages.length - 1 && (
                    <div className="absolute -right-2 top-10 hidden text-slate-600 lg:block">→</div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
