import { motion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'
import { certifications } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const colors = [
  { text: 'text-violet-300', border: 'border-violet-400/25', bg: 'bg-violet-500/10', glow: 'rgba(139,92,246,0.3)' },
  { text: 'text-cyan-300', border: 'border-cyan-400/25', bg: 'bg-cyan-500/10', glow: 'rgba(34,211,238,0.3)' },
  { text: 'text-emerald-300', border: 'border-emerald-400/25', bg: 'bg-emerald-500/10', glow: 'rgba(52,211,153,0.3)' },
  { text: 'text-amber-300', border: 'border-amber-400/25', bg: 'bg-amber-500/10', glow: 'rgba(251,191,36,0.3)' },
]

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="04" label="certifications" title="Credentials" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-lg border border-[#30363d] bg-[#161b22] p-5 transition-colors hover:border-[#e3b341]/50"
              >
                <div className="flex items-start justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-md border ${c.border} ${c.bg} ${c.text} transition-transform group-hover:scale-110`}>
                    <Award className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className={`h-4 w-4 text-[var(--color-muted)] transition group-hover:text-[var(--color-ink)] ${c.text}`} />
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-[var(--color-ink)]">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-xs text-[var(--color-muted)]">{cert.issuer}</p>
                <span className={`mt-4 inline-flex items-center gap-1 font-mono text-[11px] ${c.text}`}>
                  Verify credential
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}