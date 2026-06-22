import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, MapPin } from 'lucide-react'
import { education } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education" title="Academic Background" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dash-card dash-card-hover group relative overflow-hidden rounded-xl"
        >
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl transition group-hover:bg-violet-500/10" />
          <div className="relative flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-400 shadow-lg shadow-violet-500/10">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400/60 uppercase tracking-wider">
                <BookOpen className="h-3 w-3" />
                Bachelor&apos;s Program
              </div>
              <h3 className="mt-1.5 text-lg font-bold text-white">{education.degree}</h3>
              <p className="mt-1 text-sm text-slate-400">{education.university}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="h-3 w-3" />
                  Sindh, Pakistan
                </span>
                <span className="font-mono text-sm text-cyan-400/90">{education.graduation}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
