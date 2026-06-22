import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const themes = [
  {
    labelColor: 'rgba(6,182,212,0.6)',
    periodColor: '#22d3ee',
    iconBox: 'from-cyan-500/20 to-blue-600/20 text-cyan-400 shadow-cyan-500/10',
    borderHover: 'rgba(6,182,212,0.3)',
    shadowHover: '0 0 60px rgba(6,182,212,0.08)',
    bgBlur: 'rgba(6,182,212,0.05)',
    accent: '#22d3ee',
    icon: '🤖',
  },
  {
    labelColor: 'rgba(124,58,237,0.6)',
    periodColor: '#a78bfa',
    iconBox: 'from-violet-500/20 to-purple-600/20 text-violet-400 shadow-violet-500/10',
    borderHover: 'rgba(124,58,237,0.3)',
    shadowHover: '0 0 60px rgba(124,58,237,0.08)',
    bgBlur: 'rgba(124,58,237,0.05)',
    accent: '#a78bfa',
    icon: '⚙️',
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="Building real-world skills through hands-on internships"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((exp, index) => {
            const t = themes[index]
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div
                  className="group dash-card dash-card-hover relative overflow-hidden rounded-xl p-6"
                >
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition group-hover:opacity-150"
                    style={{ background: t.bgBlur }}
                  />

                  <div className="relative flex gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.iconBox} text-2xl shadow-lg`}
                    >
                      {exp.logo}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: t.labelColor }}>
                        <Briefcase className="h-3 w-3" />
                        {exp.company}
                      </div>
                      <h3 className="mt-1 text-base font-bold text-white">{exp.role}</h3>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                        <span className="font-mono text-xs" style={{ color: t.periodColor }}>
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
