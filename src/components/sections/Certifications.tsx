import { motion } from 'framer-motion'
import { BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

const badgeColors: Record<string, string> = {
  IBM: 'from-blue-500/20 to-blue-600/10 text-blue-300 border-blue-500/20',
  AWS: 'from-amber-500/20 to-amber-600/10 text-amber-300 border-amber-500/20',
  OCI: 'from-red-500/20 to-red-600/10 text-red-300 border-red-500/20',
}

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Certifications"
          title="Verified Credentials"
          subtitle="Industry-recognized certifications in DevOps, AWS, and cloud fundamentals."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <GlassCard className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br font-mono text-xs font-bold ${badgeColors[cert.badge] ?? badgeColors.AWS}`}
                    >
                      {cert.badge}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold leading-snug text-slate-100">{cert.title}</h3>
                      <p className="mt-1 text-xs text-slate-500">{cert.issuer}</p>
                      <div className="mt-3 flex items-center gap-3">
                        {cert.verified && (
                          <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                            <BadgeCheck className="h-3.5 w-3.5" />
                            Verified
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-[10px] text-cyan-400/80">
                          View credential
                          <ExternalLink className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
