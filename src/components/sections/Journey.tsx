import { motion } from 'framer-motion'
import { journey } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Journey() {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Journey"
          title="DevOps Learning Path"
          subtitle="From self-study to production-ready infrastructure engineering."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent md:left-1/2 md:-ml-px" />

          {journey.map((step, i) => (
            <motion.div
              key={`${step.title}-${i}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative mb-10 flex gap-6 md:mb-12 ${
                i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'md:flex-row'
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <span className="font-mono text-xs text-cyan-400/80">{step.year}</span>
                <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.desc}</p>
              </div>
              <div className="relative z-10 flex shrink-0 flex-col items-center">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  className="h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#050810] shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                />
              </div>
              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
