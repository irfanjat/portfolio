import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { workflowStages } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Workflow() {
  return (
    <section id="workflow" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="00"
          label="workflow"
          title="How I ship code."
          description="The pipeline I think in — every project on this site passes through these stages."
        />

        <div className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <ol className="flex min-w-max items-stretch gap-2 md:flex-wrap">
            {workflowStages.map((stage, i) => (
              <li key={stage.name} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="group flex w-[132px] shrink-0 flex-col rounded-lg border border-[#30363d] bg-[#161b22] p-3.5 transition-colors hover:border-[#39d353]/50"
                >
                  <span className="font-mono text-[10px] tracking-[0.12em]" style={{ color: stage.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 font-mono text-[12.5px] font-semibold text-[#e6edf3]">{stage.name}</span>
                  <span className="mt-1 text-[10.5px] leading-snug text-[#6e7681]">{stage.tech}</span>
                </motion.div>
                {i < workflowStages.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 + 0.2 }}
                    aria-hidden="true"
                    className="mx-1 hidden shrink-0 text-[#30363d] md:block"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}