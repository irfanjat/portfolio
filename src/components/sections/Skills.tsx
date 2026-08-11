import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import { TiltCard } from '../ui/TiltCard'

const colorScheme = [
  { card: 'border-blue-500/20 bg-blue-500/[0.05]', text: 'text-blue-300', tag: 'bg-blue-500/10 border-blue-500/25', glow: 'rgba(59,130,246,0.12)' },
  { card: 'border-sky-500/20 bg-sky-500/[0.05]', text: 'text-sky-300', tag: 'bg-sky-500/10 border-sky-500/25', glow: 'rgba(14,165,233,0.12)' },
  { card: 'border-violet-500/20 bg-violet-500/[0.05]', text: 'text-violet-300', tag: 'bg-violet-500/10 border-violet-500/25', glow: 'rgba(139,92,246,0.12)' },
  { card: 'border-slate-500/20 bg-slate-500/[0.05]', text: 'text-slate-300', tag: 'bg-slate-500/10 border-slate-500/25', glow: 'rgba(100,116,139,0.12)' },
  { card: 'border-teal-500/20 bg-teal-500/[0.05]', text: 'text-teal-300', tag: 'bg-teal-500/10 border-teal-500/25', glow: 'rgba(20,184,166,0.12)' },
  { card: 'border-amber-500/20 bg-amber-500/[0.05]', text: 'text-amber-300', tag: 'bg-amber-500/10 border-amber-500/25', glow: 'rgba(245,158,11,0.12)' },
  { card: 'border-indigo-500/20 bg-indigo-500/[0.05]', text: 'text-indigo-300', tag: 'bg-indigo-500/10 border-indigo-500/25', glow: 'rgba(99,102,241,0.12)' },
  { card: 'border-cyan-500/20 bg-cyan-500/[0.05]', text: 'text-cyan-300', tag: 'bg-cyan-500/10 border-cyan-500/25', glow: 'rgba(6,182,212,0.12)' },
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14"
        >
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
            // 02. skills
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const c = colorScheme[i % colorScheme.length]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              >
                <TiltCard
                  intensity={8}
                  glareColor={c.glow}
                  className={`rounded-2xl border p-5 sm:p-6 ${c.card}`}
                >
                  <div className={`-mx-1 mb-4 rounded-lg border px-3 py-1.5 text-xs font-medium ${c.tag} ${c.text} inline-block`}>
                    {cat.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span
                        key={skill}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${c.tag} ${c.text}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
