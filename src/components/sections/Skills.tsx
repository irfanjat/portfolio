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

const gradientBorders: Record<string, string> = {
  cyan: 'from-cyan-500/40 via-transparent to-transparent',
  emerald: 'from-emerald-500/40 via-transparent to-transparent',
  violet: 'from-violet-500/40 via-transparent to-transparent',
  rose: 'from-rose-500/40 via-transparent to-transparent',
  slate: 'from-slate-500/40 via-transparent to-transparent',
}

const chipColors: Record<string, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-500/20 hover:border-cyan-400/40',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20 hover:bg-emerald-500/20 hover:border-emerald-400/40',
  violet: 'bg-violet-500/10 text-violet-300 border-violet-400/20 hover:bg-violet-500/20 hover:border-violet-400/40',
  rose: 'bg-rose-500/10 text-rose-300 border-rose-400/20 hover:bg-rose-500/20 hover:border-rose-400/40',
  slate: 'bg-slate-500/10 text-slate-300 border-slate-400/20 hover:bg-slate-500/20 hover:border-slate-400/40',
}

const iconBox: Record<string, string> = {
  cyan: 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-400 shadow-cyan-500/10',
  emerald: 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 text-emerald-400 shadow-emerald-500/10',
  violet: 'bg-gradient-to-br from-violet-500/20 to-violet-500/5 text-violet-400 shadow-violet-500/10',
  rose: 'bg-gradient-to-br from-rose-500/20 to-rose-500/5 text-rose-400 shadow-rose-500/10',
  slate: 'bg-gradient-to-br from-slate-500/20 to-slate-500/5 text-slate-400 shadow-slate-500/10',
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
                className="group relative"
              >
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-b opacity-0 blur-sm transition duration-500 group-hover:opacity-100 ${gradientBorders[color] ?? gradientBorders.slate}`}
                />
                <div className="relative h-full rounded-2xl border border-slate-700/50 bg-slate-900/80 p-5 backdrop-blur-sm transition duration-500 group-hover:border-slate-600/60">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-lg ${iconBox[color] ?? iconBox.slate}`}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-all duration-200 ${chipColors[color] ?? chipColors.slate}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
