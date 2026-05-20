import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education" title="Academic Background" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong mx-auto flex max-w-2xl flex-col items-center rounded-2xl p-10 text-center glow-violet sm:flex-row sm:text-left sm:items-start gap-6"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-400">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{education.degree}</h3>
            <p className="mt-2 text-slate-400">{education.university}</p>
            <p className="mt-3 font-mono text-sm text-cyan-400/90">{education.graduation}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
