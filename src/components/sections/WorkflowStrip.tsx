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
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-[11px] text-[var(--color-ink)] transition-colors group-hover:border-[var(--color-green)]/60 sm:h-9 sm:w-9 sm:text-[12px]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="mt-2 font-mono text-[10px] tracking-[0.12em] text-[var(--color-muted)] sm:text-[11px]">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="mx-2 h-px w-6 bg-[var(--color-border)] sm:mx-3 sm:w-8" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
