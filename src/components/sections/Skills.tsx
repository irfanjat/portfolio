import { motion } from 'framer-motion'
import {
  Activity,
  Box,
  Cloud,
  Code2,
  Database,
  FileCode,
  GitBranch,
  Rocket,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import { skillCategories } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const categoryIcons: Record<string, LucideIcon> = {
  'CI/CD & GitOps': Rocket,
  'Containers & Orchestration': Box,
  'Infrastructure as Code': Code2,
  'Cloud & AWS': Cloud,
  'Monitoring & Observability': Activity,
  'Languages & Scripting': FileCode,
  'Linux & System Admin': Terminal,
  'Web Servers & Databases': Database,
  'Version Control': GitBranch,
}

const chipThemes: Record<string, string> = {
  cyan: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/30 hover:shadow-[0_0_12px_rgba(6,182,212,0.06)]',
  emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/30',
  violet: 'border-violet-500/20 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/30',
  rose: 'border-rose-500/20 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 hover:border-rose-400/30',
  slate: 'border-slate-500/20 bg-slate-500/10 text-slate-300 hover:bg-slate-500/20',
}

const iconBoxes: Record<string, string> = {
  cyan: 'from-cyan-500/20 to-cyan-500/5 text-cyan-400',
  emerald: 'from-emerald-500/20 to-emerald-500/5 text-emerald-400',
  violet: 'from-violet-500/20 to-violet-500/5 text-violet-400',
  rose: 'from-rose-500/20 to-rose-500/5 text-rose-400',
  slate: 'from-slate-500/20 to-slate-500/5 text-slate-400',
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Toolkit"
          title="Cloud-Native Stack"
          subtitle="Production tools across CI/CD, orchestration, IaC, AWS, and observability."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const color = cat.color as string
            const Icon = categoryIcons[cat.title]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.06, duration: 0.4 }}
                className="dash-card dash-card-hover relative overflow-hidden rounded-xl p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg ${iconBoxes[color] ?? iconBoxes.slate}`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                  <span className="ml-auto font-mono text-[10px] text-slate-600">{cat.skills.length}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.06 + si * 0.03 }}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${chipThemes[color] ?? chipThemes.slate}`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
