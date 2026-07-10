import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

const colorMap: Record<string, { bar: string; text: string; bg: string }> = {
  cyan: { bar: 'bg-cyan-400', text: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  violet: { bar: 'bg-violet-400', text: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
  emerald: { bar: 'bg-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  rose: { bar: 'bg-rose-400', text: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
}

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const c = colorMap[color] ?? colorMap.cyan

  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="text-slate-300">{name}</span>
        <span className={`font-mono ${c.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className={`h-full rounded-full ${c.bar}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Skills"
          title="Tools & Technologies"
          subtitle="Production-grade tooling across cloud, containers, CI/CD, and observability."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color] ?? colorMap.cyan
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              >
                <GlassCard className="h-full p-5 sm:p-6">
                  <div className={`mb-5 inline-flex rounded-lg border px-3 py-1 text-xs font-medium ${c.bg} ${c.text}`}>
                    {cat.title}
                  </div>
                  <div className="space-y-3">
                    {cat.skills.map((skill, j) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={cat.color}
                        delay={j * 0.05}
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
