import { motion } from 'framer-motion'
import { journey } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Journey() {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Journey"
          title="DevOps Roadmap"
          subtitle="From self-study to production-ready infrastructure engineering."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/30 to-transparent md:left-1/2 md:-ml-px" />

          {journey.map((step, i) => {
            const isEven = i % 2 === 0
            const isActive = step.status === 'active'

            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`relative mb-10 flex gap-4 md:mb-12 ${
                  isEven ? 'md:flex-row-reverse md:text-right' : 'md:flex-row'
                }`}
              >
                {/* content */}
                <div className={`flex-1 ${isEven ? 'md:pr-14' : 'md:pl-14'}`}>
                  <div
                    className={`glass rounded-2xl border p-5 transition-all ${
                      isActive
                        ? 'border-cyan-400/40 shadow-[0_0_24px_rgba(34,211,238,0.08)]'
                        : 'border-slate-700/40'
                    }`}
                  >
                    {/* header */}
                    <div
                      className={`mb-3 flex items-center gap-2 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-400/60">
                        PHASE {step.phase}
                      </span>
                      <span className="h-px flex-1 bg-slate-700/60" />
                      <span
                        className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${
                          isActive
                            ? 'bg-cyan-500/15 text-cyan-300'
                            : 'bg-slate-700/50 text-slate-500'
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>

                    {/* title */}
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>

                    {/* desc */}
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.desc}</p>

                    {/* tags */}
                    <div
                      className={`mt-3 flex flex-wrap gap-1.5 ${
                        isEven ? 'md:justify-end' : ''
                      }`}
                    >
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${
                            isActive
                              ? 'bg-cyan-500/10 text-cyan-300/80'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* dot */}
                <div className="relative z-10 flex shrink-0 flex-col items-center pt-5">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 font-mono text-[10px] font-bold ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.4)]'
                        : 'border-slate-600 bg-[#050810] text-slate-500'
                    }`}
                  >
                    {isActive ? (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                      </span>
                    ) : (
                      step.phase
                    )}
                  </motion.div>
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}