import { motion } from 'framer-motion'
import { GraduationCap, CalendarClock } from 'lucide-react'
import { education } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="05" label="education" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-lg p-7 transition-colors hover:border-[#3fb950]/50 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#21262d] text-[#39d353]">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-bold text-[var(--color-ink)] sm:text-xl">{education.degree}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{education.university}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-md border border-[#30363d] bg-[#21262d] px-4 py-2.5 font-mono text-xs text-[#58a6ff]">
              <CalendarClock className="h-4 w-4" />
              {education.graduation}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}