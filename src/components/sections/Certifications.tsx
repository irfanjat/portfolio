import { motion } from 'framer-motion'
import { certifications } from '../../data/portfolio'

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
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Credentials</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-blue-500/20 hover:bg-blue-500/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-base">
                ☁️
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-slate-100">{cert.title}</h3>
                <p className="mt-0.5 text-xs text-slate-500">{cert.issuer}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-blue-400/80">
                  View Certificate ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
