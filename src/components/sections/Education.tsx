import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Education"
          title="Academic Background"
          subtitle="Building a strong foundation in computer science."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 border border-white/10">
                <GraduationCap className="h-8 w-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{education.degree}</h3>
                <p className="mt-2 text-slate-400">{education.university}</p>
                <p className="mt-1 font-mono text-sm text-blue-400/80">{education.graduation}</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
