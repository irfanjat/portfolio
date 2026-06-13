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
          className="glass-strong group relative overflow-hidden rounded-2xl border border-slate-700/40 transition-all duration-500 hover:border-violet-400/20 hover:shadow-[0_0_40px_rgba(124,58,237,0.06)]"
        >
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl transition group-hover:bg-violet-500/10" />
          <div className="relative flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-400 shadow-lg shadow-violet-500/10">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400/60 uppercase tracking-wider">
                <BookOpen className="h-3 w-3" />
                Bachelor&apos;s Program
              </div>
              <h3 className="mt-1.5 text-xl font-bold text-white">{education.degree}</h3>
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