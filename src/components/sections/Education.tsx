import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/portfolio'
import { TiltCard } from '../ui/TiltCard'

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10"
        >
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
            // 05. education
          </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Education
            </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <TiltCard
            intensity={7}
            glareColor="rgba(74,112,148,0.15)"
            className="rounded-2xl border border-blue-500/25 bg-white/[0.03] p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/25 text-blue-300">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{education.degree}</h3>
                <p className="mt-1 text-xs text-slate-500">{education.university}</p>
                <p className="mt-1 font-mono text-[11px] text-blue-400/80">{education.graduation}</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
