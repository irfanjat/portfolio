import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../../data/portfolio'
import { TiltCard } from '../ui/TiltCard'

const colors = [
  { text: 'text-blue-300', border: 'border-blue-500/25', bg: 'bg-blue-500/10', icon: 'text-blue-400', glow: 'rgba(59,130,246,0.12)' },
  { text: 'text-violet-300', border: 'border-violet-500/25', bg: 'bg-violet-500/10', icon: 'text-violet-400', glow: 'rgba(139,92,246,0.12)' },
  { text: 'text-teal-300', border: 'border-teal-500/25', bg: 'bg-teal-500/10', icon: 'text-teal-400', glow: 'rgba(20,184,166,0.12)' },
  { text: 'text-amber-300', border: 'border-amber-500/25', bg: 'bg-amber-500/10', icon: 'text-amber-400', glow: 'rgba(245,158,11,0.12)' },
]

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14"
        >
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
            // 04. certifications
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Credentials
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const c = colors[i % colors.length]
            return (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <TiltCard
                  intensity={8}
                  glareColor={c.glow}
                  className={`rounded-2xl border bg-white/[0.03] p-5 transition ${c.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${c.border} ${c.bg} ${c.icon} transition group-hover:scale-110`}>
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-white">{cert.title}</h3>
                      <p className="mt-0.5 text-xs text-slate-500">{cert.issuer}</p>
                      <span className={`mt-2 inline-flex items-center gap-1 text-xs ${c.text}`}>
                        View Certificate ↗
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
