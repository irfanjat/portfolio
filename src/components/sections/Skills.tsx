import { motion } from 'framer-motion'
import {
  Activity, Box, Cloud, Code2, Database, FileCode, GitBranch, Rocket, Terminal,
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
  cyan: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-300',
  emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  violet: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-300',
  rose: 'border-rose-500/20 bg-rose-500/10 text-rose-300',
}

const iconBoxes: Record<string, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-400',
  emerald: 'bg-emerald-500/10 text-emerald-400',
  violet: 'bg-indigo-500/10 text-indigo-400',
  rose: 'bg-rose-500/10 text-rose-400',
}

const groupBorderThemes: Record<string, string> = {
  cyan: 'border-cyan-500/10',
  emerald: 'border-emerald-500/10',
  violet: 'border-indigo-500/10',
  rose: 'border-rose-500/10',
}

const groupTextThemes: Record<string, string> = {
  cyan: 'text-cyan-400',
  emerald: 'text-emerald-400',
  violet: 'text-indigo-400',
  rose: 'text-rose-400',
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
            const groups = 'groups' in cat ? (cat as typeof cat & { groups: { label: string; skills: { name: string; level: number; usecase: string }[] }[] }).groups : null
            const flatSkills = 'skills' in cat ? (cat as typeof cat & { skills: { name: string; level: number }[] }).skills : null
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.06, duration: 0.4 }}
                className="card card-hover relative overflow-hidden rounded-xl p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBoxes[color] ?? 'bg-white/[0.04] backdrop-blur-lg text-slate-400'}`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-100">{cat.title}</h3>
                </div>

                {groups ? (
                  <div className="space-y-4">
                    {groups.map((group) => (
                      <div key={group.label}>
                        <div className={`mb-2 text-[10px] font-mono uppercase tracking-wider ${groupTextThemes[color]}`}>
                          {group.label}
                        </div>
                        <div className="flex flex-col gap-2">
                          {group.skills.map((skill, si) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: si * 0.03 }}
                              className={`rounded-lg border ${groupBorderThemes[color]} bg-white/[0.02] px-3 py-2`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                                <span className="font-mono text-[10px] text-slate-500">{skill.level}%</span>
                              </div>
                              <div className="mt-0.5 text-[10px] text-slate-500 leading-relaxed">{skill.usecase}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : flatSkills ? (
                  <div className="flex flex-wrap gap-2">
                    {flatSkills.map((skill, si) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.03 }}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium ${chipThemes[color] ?? 'border-white/10 bg-white/[0.04] backdrop-blur-lg text-slate-400'}`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
