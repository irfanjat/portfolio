import { motion } from 'framer-motion'
import { BadgeCheck, BookOpenCheck, ExternalLink } from 'lucide-react'
import { credentials } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Credentials() {
  return (
    <section id="credentials" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="06"
          label="credentials"
          title="Credentials."
          description="What I've earned, labelled honestly: industry certificates vs. coursework training."
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
                className={`group flex flex-col rounded-lg border bg-[#161b22] p-5 transition-colors ${
                  isCert ? 'border-[#e3b341]/40 hover:border-[#e3b341]' : 'border-[#30363d] hover:border-[#58a6ff]/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border ${
                      isCert
                        ? 'border-[#e3b341]/40 bg-[#e3b341]/10 text-[#e3b341]'
                        : 'border-[#30363d] bg-[#21262d] text-[#58a6ff]'
                    }`}
                  >
                    {isCert ? <BadgeCheck className="h-4.5 w-4.5" /> : <BookOpenCheck className="h-4.5 w-4.5" />}
                  </span>
                  <span
                    className={`rounded-sm border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.12em] ${
                      isCert
                        ? 'border-[#e3b341]/40 text-[#e3b341]'
                        : 'border-[#30363d] text-[#8b949e]'
                    }`}
                  >
                    {cred.kind.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[15px] font-bold leading-snug text-[#e6edf3]">{cred.title}</h3>
                <p className="mt-1 font-mono text-[12px] text-[#8b949e]">{cred.issuer}</p>
                <span
                  className={`mt-auto pt-3 inline-flex items-center gap-1.5 font-mono text-[11.5px] ${
                    isCert ? 'text-[#e3b341]' : 'text-[#58a6ff]'
                  } opacity-0 transition-opacity group-hover:opacity-100`}
                >
                  verify <ExternalLink className="h-3 w-3" />
                </span>
              </motion.a>
            )
          })}
        </div>

        <p className="mt-6 max-w-2xl font-mono text-[12px] leading-relaxed text-[#6e7681]">
          Note: the AWS and IBM entries are completed training courses, not industry certifications. Happy to walk
          through what each one covered.
        </p>
      </div>
    </section>
  )
}