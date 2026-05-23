import { motion } from 'framer-motion'
import { journey } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Journey() {
  return (
    <section id="journey" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Journey"
          title="DevOps Roadmap"
          subtitle="From self-study to production-ready infrastructure engineering."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-slate-700/40 bg-[#030507]"
        >
          {/* terminal header */}
          <div className="flex items-center gap-2 border-b border-slate-700/40 bg-slate-900/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 font-mono text-xs text-slate-500">
              ~/irfan-devops ~ career-roadmap.log
            </span>
          </div>

          {/* log lines */}
          <div className="p-6 font-mono text-sm space-y-1">
            <p className="text-slate-600 text-xs mb-4"># DevOps learning path · 2025 → 2026</p>

            {journey.map((step, i) => {
              const isActive = step.status === 'active'
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-start gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/[0.02]"
                >
                  <span className="mt-0.5 shrink-0">
                    {isActive ? (
                      <span className="relative flex h-4 w-4 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30" />
                        <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
                      </span>
                    ) : (
                      <span className="text-emerald-400">✓</span>
                    )}
                  </span>

                  <span className="shrink-0 text-slate-600 text-xs mt-0.5">{step.phase}</span>
                  <span className="shrink-0 text-slate-700">·</span>

                  <span className={`shrink-0 font-medium ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                    {step.title}
                  </span>

                  <span className="hidden md:flex flex-wrap gap-1.5 ml-1">
                    {step.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>

                  <span className="ml-auto shrink-0 text-xs text-slate-600">{step.year}</span>
                </motion.div>
              )
            })}

            <div className="mt-4 flex items-center gap-2 px-2">
              <span className="text-cyan-400">❯</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="h-4 w-2 bg-cyan-400/70 rounded-sm"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}