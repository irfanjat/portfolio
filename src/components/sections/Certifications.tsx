import { motion } from 'framer-motion'
import { Award, BadgeCheck } from 'lucide-react'
import { certifications } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Certifications"
          title="Verified Credentials"
          subtitle="Industry-recognized certifications in DevOps and cloud fundamentals."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-cyan-400/30 hover:glow-cyan"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl transition group-hover:bg-cyan-500/10" />
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 font-bold text-cyan-300">
                  {cert.badge}
                </div>
                {cert.verified && (
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                    <BadgeCheck className="h-3 w-3" />
                    Verified
                  </span>
                )}
              </div>
              <Award className="mt-4 h-5 w-5 text-violet-400/80" />
              <h3 className="mt-3 font-semibold leading-snug text-white">{cert.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
