import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const steps = ['PLAN', 'CODE', 'BUILD', 'TEST', 'SCAN', 'DEPLOY', 'OBSERVE', 'IMPROVE']

export function WorkflowStrip() {
  return (
    <section id="workflow" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="06" label="workflow" title="How I Ship" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mt-8 overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-bg2)] p-4 sm:p-5"
        >
          <div className="flex min-w-max items-center justify-between gap-2 sm:gap-3">
            {steps.map((s, i) => (
              <div key={s} className="group flex items-center">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-[11px] text-[var(--color-ink)] transition-all duration-300 group-hover:border-[var(--color-cyan-300)]/60 group-hover:bg-[color-mix(in_srgb,var(--color-cyan-300)_10%,var(--color-bg))] group-hover:text-[var(--color-cyan-300)] sm:h-9 sm:w-9 sm:text-[12px]">
{String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="mt-2 font-mono text-[10px] tracking-[0.12em] text-[var(--color-muted)] sm:text-[11px]">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="relative mx-2 h-px w-6 overflow-hidden bg-[var(--color-border)] sm:mx-3 sm:w-8">
                    <span className="absolute inset-x-0 top-0 h-full w-0 bg-gradient-to-r from-[var(--color-cyan-300)] via-[var(--color-green)] to-[var(--color-cyan-300)] opacity-70 transition-all duration-500 group-hover:w-full" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
