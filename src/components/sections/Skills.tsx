import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const accents: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  violet: { text: 'text-violet-200', border: 'border-violet-400/25', bg: 'bg-violet-500/10', glow: 'rgba(139,92,246,0.3)' },
  cyan: { text: 'text-cyan-200', border: 'border-cyan-400/25', bg: 'bg-cyan-500/10', glow: 'rgba(34,211,238,0.3)' },
  fuchsia: { text: 'text-fuchsia-200', border: 'border-fuchsia-400/25', bg: 'bg-fuchsia-500/10', glow: 'rgba(232,121,249,0.3)' },
  amber: { text: 'text-amber-200', border: 'border-amber-400/25', bg: 'bg-amber-500/10', glow: 'rgba(251,191,36,0.3)' },
  emerald: { text: 'text-emerald-200', border: 'border-emerald-400/25', bg: 'bg-emerald-500/10', glow: 'rgba(52,211,153,0.3)' },
  indigo: { text: 'text-indigo-200', border: 'border-indigo-400/25', bg: 'bg-indigo-500/10', glow: 'rgba(99,102,241,0.3)' },
  sky: { text: 'text-sky-200', border: 'border-sky-400/25', bg: 'bg-sky-500/10', glow: 'rgba(14,165,233,0.3)' },
  rose: { text: 'text-rose-200', border: 'border-rose-400/25', bg: 'bg-rose-500/10', glow: 'rgba(244,63,94,0.3)' },
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" label="skills" title="Skills" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const a = accents[cat.accent] ?? accents.violet
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group glass glass-hover relative flex flex-col gap-4 overflow-hidden rounded-3xl p-5"
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: a.glow, opacity: 0.4 }}
                />
                <div className={`relative inline-flex w-fit items-center gap-2 rounded-xl border ${a.border} ${a.bg} ${a.text} px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider`}>
                  {cat.title}
                </div>
                <div className="relative flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors group-hover:border-white/20"
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