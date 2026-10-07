import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { toolbox } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'

export function Toolbox() {
  return (
    <section id="toolbox" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          label="stack"
          title="The toolbox."
          description="Technology group by layer. Hover any tool for the honest one-liner on how I use it."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {toolbox.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.05, duration: 0.45 }}
              className="flex flex-col gap-2 rounded-lg border border-[#30363d] bg-[#161b22] p-4 transition-colors hover:border-[#39d353]/40"
            >
              <div className="flex items-center gap-2 border-b border-[#30363d] pb-2.5">
                <Cpu className="h-3.5 w-3.5" style={{ color: cat.accent }} />
                <span className="font-mono text-[11.5px] font-semibold tracking-wide text-[#e6edf3]">{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <TechBadge key={item.label} detail={item.detail} accent={cat.accent}>
                    {item.label}
                  </TechBadge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}