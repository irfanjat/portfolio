import { motion } from 'framer-motion'
import { BadgeCheck, BookOpenCheck, ExternalLink } from 'lucide-react'
import { credentials } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          label="certifications"
          title="Certifications"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((cred, i) => {
            const isCert = cred.kind === 'Credential'
            return (
              <motion.a
                key={cred.title}
                href={cred.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 2) * 0.06, duration: 0.45 }}
                className={`group flex flex-col rounded-lg border bg-[#181b26] p-5 transition-colors ${
                  isCert ? 'border-[#11e956]/40 hover:border-[#11e956]' : 'border-[#323845] hover:border-[#42a0ed]/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border ${
                      isCert
                        ? 'border-[#11e956]/40 bg-[#11e956]/10 text-[#11e956]'
                        : 'border-[#323845] bg-[#202330] text-[#42a0ed]'
                    }`}
                  >
                    {isCert ? <BadgeCheck className="h-4.5 w-4.5" /> : <BookOpenCheck className="h-4.5 w-4.5" />}
                  </span>
                  <span
                    className={`rounded-sm border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.12em] ${
                      isCert
                        ? 'border-[#11e956]/40 text-[#11e956]'
                        : 'border-[#323845] text-[#919dab]'
                    }`}
                  >
                    {cred.kind.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[15px] font-bold leading-snug text-[#dde3eb]">{cred.title}</h3>
                <p className="mt-1 font-mono text-[12px] text-[#919dab]">{cred.issuer}</p>
                <span
                  className={`mt-auto pt-3 inline-flex items-center gap-1.5 font-mono text-[11.5px] ${
                    isCert ? 'text-[#11e956]' : 'text-[#42a0ed]'
                  } opacity-0 transition-opacity group-hover:opacity-100`}
                >
                  verify <ExternalLink className="h-3 w-3" />
                </span>
              </motion.a>
            )
          })}
        </div>

        <p className="mt-6 max-w-2xl font-mono text-[12px] leading-relaxed text-[#6e7888]">
          Note: the AWS and IBM entries are completed training courses, not industry certifications. Happy to walk
          through what each one covered.
        </p>
      </div>
    </section>
  )
}