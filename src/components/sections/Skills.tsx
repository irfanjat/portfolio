import { motion } from 'framer-motion'
import { skillCategories } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const colorMap = {
  cyan: {
    border: 'hover:border-cyan-400/40',
    glow: 'hover:glow-cyan',
    bar: 'from-cyan-500 to-cyan-300',
    dot: 'bg-cyan-400',
    text: 'text-cyan-400',
  },
  violet: {
    border: 'hover:border-violet-400/40',
    glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]',
    bar: 'from-violet-500 to-violet-300',
    dot: 'bg-violet-400',
    text: 'text-violet-400',
  },
  emerald: {
    border: 'hover:border-emerald-400/40',
    glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
    bar: 'from-emerald-500 to-emerald-300',
    dot: 'bg-emerald-400',
    text: 'text-emerald-400',
  },
  rose: {
    border: 'hover:border-rose-400/40',
    glow: 'hover:shadow-[0_0_30px_rgba(251,113,133,0.15)]',
    bar: 'from-rose-500 to-rose-300',
    dot: 'bg-rose-400',
    text: 'text-rose-400',
  },
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Cloud-Native Toolkit"
          subtitle="Production tools across CI/CD, orchestration, IaC, AWS, and observability."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, ci) => {
            const colors = colorMap[cat.color as keyof typeof colorMap]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.06 }}
                className={`glass rounded-2xl p-6 transition-all duration-300 ${colors.border} ${colors.glow}`}
              >
                <div className="mb-5 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${colors.dot}`} />
                  <h3 className={`font-semibold ${colors.text}`}>{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="font-mono text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: si * 0.05 + 0.2, duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
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
