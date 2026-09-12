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
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label="certifications"
          title={<>Credentials that <span className="gradient-text">back the build</span></>}
          description="Verified certifications in cloud and DevOps fundamentals."
        />

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
                className="group glass glass-hover relative flex flex-col overflow-hidden rounded-3xl p-5"
              >
                <div
                  className="pointer-events-none absolute -top-14 -right-14 h-32 w-32 rounded-full blur-3xl opacity-50 group-hover:opacity-100"
                  style={{ background: c.glow }}
                />
                <div className="relative flex items-start justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${c.border} ${c.bg} ${c.text} transition-transform group-hover:scale-110`}>
                    <Award className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className={`h-4 w-4 text-slate-600 transition group-hover:text-white ${c.text}`} />
                </div>
                <h3 className="relative mt-4 text-sm font-semibold leading-snug text-white">
                  {cert.title}
                </h3>
                <p className="relative mt-1.5 text-xs text-slate-500">{cert.issuer}</p>
                <span className={`relative mt-4 inline-flex items-center gap-1 font-mono text-[11px] ${c.text}`}>
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