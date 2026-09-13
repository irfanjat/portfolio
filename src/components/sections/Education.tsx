import { motion } from 'framer-motion'
import { GraduationCap, CalendarClock } from 'lucide-react'
import { education } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" label="education" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass glass-hover relative overflow-hidden rounded-3xl p-7 sm:p-8"
        >
          <div className="pointer-events-none absolute -top-20 -left-16 h-52 w-52 rounded-full bg-violet-600/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-200">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">{education.degree}</h3>
              <p className="mt-1 text-sm text-slate-400">{education.university}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 font-mono text-xs text-slate-300">
              <CalendarClock className="h-4 w-4 text-cyan-300" />
              {education.graduation}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}