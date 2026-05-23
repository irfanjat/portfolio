import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Education" title="Academic Background" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong flex flex-col items-center gap-5 rounded-2xl p-8 text-center sm:flex-row sm:text-left sm:items-start"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{education.degree}</h3>
            <p className="mt-1.5 text-sm text-slate-400">{education.university}</p>
            <p className="mt-2 font-mono text-sm text-cyan-400/90">{education.graduation}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}