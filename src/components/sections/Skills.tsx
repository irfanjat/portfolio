import { motion } from 'framer-motion'
import { skillCategories } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const colorMap: Record<string, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-400/20',
  slate: 'bg-slate-500/10 text-slate-300 border-slate-600/30',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-400/20',
}

const colorBadge: Record<string, string> = {
  cyan: 'bg-cyan-400/8 text-cyan-300 border border-cyan-400/15',
  emerald: 'bg-emerald-400/8 text-emerald-300 border border-emerald-400/15',
  violet: 'bg-violet-400/8 text-violet-300 border border-violet-400/15',
  slate: 'bg-slate-400/8 text-slate-300 border border-slate-500/15',
  rose: 'bg-rose-400/8 text-rose-300 border border-rose-400/15',
}

const dotColor: Record<string, string> = {
  cyan: 'bg-cyan-400',
  emerald: 'bg-emerald-400',
  violet: 'bg-violet-400',
  slate: 'bg-slate-400',
  rose: 'bg-rose-400',
}

const textColor: Record<string, string> = {
  cyan: 'text-cyan-400',
  emerald: 'text-emerald-400',
  violet: 'text-violet-400',
  slate: 'text-slate-400',
  rose: 'text-rose-400',
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Skills"
          title="Cloud-Native Toolkit"
          subtitle="Production tools across CI/CD, orchestration, IaC, AWS, and observability."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const color = cat.color as string
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.06 }}
                className={`glass rounded-2xl border p-5 transition-all duration-300 ${colorMap[color] ?? colorMap.slate}`}
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${dotColor[color] ?? dotColor.slate}`} aria-hidden="true" />
                  <h3 className={`text-sm font-semibold tracking-wide ${textColor[color] ?? textColor.slate}`}>
                    {cat.title}
                  </h3>
                  <span className="ml-auto font-mono text-[10px] text-slate-600">
                    {cat.skills.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.06 + si * 0.04 }}
                      className={`                      rounded-lg px-3 py-1.5 text-xs font-medium ${colorBadge[color] ?? colorBadge.slate}`}
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