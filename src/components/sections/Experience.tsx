import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const themes = [
  { accent: '#06b6d4', labelColor: 'text-cyan-400', periodColor: 'text-cyan-400', iconBg: 'bg-cyan-500/10 text-cyan-400', lineColor: 'bg-cyan-500/30', dotColor: 'bg-cyan-500' },
  { accent: '#818cf8', labelColor: 'text-indigo-400', periodColor: 'text-indigo-400', iconBg: 'bg-indigo-500/10 text-indigo-400', lineColor: 'bg-indigo-500/30', dotColor: 'bg-indigo-500' },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="Building real-world skills through hands-on internships"
        />

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-indigo-500/30 to-transparent" />

          {experience.map((exp, index) => {
            const t = themes[index]
            const isLast = index === experience.length - 1
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <div className={`absolute left-[27px] top-7 h-3 w-3 rounded-full border-2 border-slate-800 ${t.dotColor} z-10`} />

                {!isLast && (
                  <div className={`absolute left-[30px] top-10 bottom-0 w-0.5 ${t.lineColor}`} />
                )}

                <div className="group card card-hover relative overflow-hidden rounded-xl p-6">
                  <div className="relative flex gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${t.iconBg} text-2xl`}
                    >
                      {exp.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${t.labelColor}`}>
                        <Briefcase className="h-3 w-3" />
                        {exp.company}
                      </div>
                      <h3 className="mt-1 text-base font-bold text-slate-100">{exp.role}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                        <span className={`font-mono text-xs ${t.periodColor}`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
