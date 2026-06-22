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

const barColors: Record<string, string> = {
  cyan: 'from-cyan-400 to-cyan-600',
  emerald: 'from-emerald-400 to-emerald-600',
  violet: 'from-violet-400 to-violet-600',
  rose: 'from-rose-400 to-rose-600',
}

const chipColors: Record<string, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
  violet: 'bg-violet-500/10 text-violet-300 border-violet-400/20',
  rose: 'bg-rose-500/10 text-rose-300 border-rose-400/20',
  slate: 'bg-slate-500/10 text-slate-300 border-slate-400/20',
}

const iconBoxes: Record<string, string> = {
  cyan: 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-400',
  emerald: 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 text-emerald-400',
  violet: 'bg-gradient-to-br from-violet-500/20 to-violet-500/5 text-violet-400',
  rose: 'bg-gradient-to-br from-rose-500/20 to-rose-500/5 text-rose-400',
  slate: 'bg-gradient-to-br from-slate-500/20 to-slate-500/5 text-slate-400',
}

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="group/skill">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium text-slate-300">{name}</span>
        <span className="font-mono text-[10px] text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${barColors[color] ?? barColors.cyan}`}
        />
      </div>
    </div>
  )
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
                className="dash-card dash-card-hover group relative overflow-hidden rounded-xl p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-lg ${iconBoxes[color] ?? iconBoxes.slate}`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} color={color} />
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/30">
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-mono transition-all duration-200 ${chipColors[color] ?? chipColors.slate}`}
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
