import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'

const colorScheme = [
  { card: 'border-blue-500/10 bg-blue-500/[0.03]', text: 'text-blue-300', tag: 'bg-blue-500/10 border-blue-500/20' },
  { card: 'border-orange-500/10 bg-orange-500/[0.03]', text: 'text-orange-300', tag: 'bg-orange-500/10 border-orange-500/20' },
  { card: 'border-green-500/10 bg-green-500/[0.03]', text: 'text-green-300', tag: 'bg-green-500/10 border-green-500/20' },
  { card: 'border-purple-500/10 bg-purple-500/[0.03]', text: 'text-purple-300', tag: 'bg-purple-500/10 border-purple-500/20' },
  { card: 'border-rose-500/10 bg-rose-500/[0.03]', text: 'text-rose-300', tag: 'bg-rose-500/10 border-rose-500/20' },
  { card: 'border-cyan-500/10 bg-cyan-500/[0.03]', text: 'text-cyan-300', tag: 'bg-cyan-500/10 border-cyan-500/20' },
  { card: 'border-amber-500/10 bg-amber-500/[0.03]', text: 'text-amber-300', tag: 'bg-amber-500/10 border-amber-500/20' },
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Tech Stack</h2>
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
