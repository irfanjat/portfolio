import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="09" label="education" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="card glass-hover flex items-start gap-5 rounded-lg p-6"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--color-green)]/40 bg-[var(--color-green)]/10 text-[var(--color-green)]">
            <GraduationCap className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold leading-snug text-[var(--color-ink)]">
              {education.degree}
            </h3>
            <p className="mt-1 font-mono text-[13px] text-[var(--color-muted)]">
              {education.university}
            </p>
            <span className="mt-3 inline-flex items-center rounded-full border border-[var(--color-green)]/40 bg-[var(--color-green)]/10 px-3 py-1 font-mono text-[11px] text-[var(--color-green)]">
              {education.graduation}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
