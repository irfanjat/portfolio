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
                className={`group flex flex-col rounded-lg border bg-[var(--color-bg2)] p-5 transition-colors ${
                  isCert ? 'border-[var(--color-green)]/40 hover:border-[var(--color-green)]' : 'border-[var(--color-border)] hover:border-[var(--color-cyan)]/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border ${
                      isCert
                        ? 'border-[var(--color-green)]/40 bg-[var(--color-green)]/10 text-[var(--color-green)]'
                        : 'border-[var(--color-border)] bg-[var(--color-bg2)] text-[var(--color-cyan)]'
                    }`}
                  >
                    {isCert ? <BadgeCheck className="h-4.5 w-4.5" /> : <BookOpenCheck className="h-4.5 w-4.5" />}
                  </span>
                  <span
                    className={`rounded-sm border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.12em] ${
                      isCert
                        ? 'border-[var(--color-green)]/40 text-[var(--color-green)]'
                        : 'border-[var(--color-border)] text-[var(--color-muted)]'
                    }`}
                  >
                    {cred.kind.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[15px] font-bold leading-snug text-[var(--color-ink)]">{cred.title}</h3>
                <p className="mt-1 font-mono text-[12px] text-[var(--color-muted)]">{cred.issuer}</p>
                <span
                  className={`mt-auto pt-3 inline-flex items-center gap-1.5 font-mono text-[11.5px] ${
                    isCert ? 'text-[var(--color-green)]' : 'text-[var(--color-cyan)]'
                  } opacity-0 transition-opacity group-hover:opacity-100`}
                >
                  verify <ExternalLink className="h-3 w-3" />
                </span>
              </motion.a>
            )
          })}
        </div>

        <p className="mt-6 max-w-2xl font-mono text-[12px] leading-relaxed text-[var(--color-slate-500)]">
          Note: the AWS and IBM entries are completed training courses, not industry certifications. Happy to walk
          through what each one covered.
        </p>
      </div>
    </section>
  )
}