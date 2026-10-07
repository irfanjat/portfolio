import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'

export function Skills() {
  return (
    <section id="skills" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" label="skills" title="Skills" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.45 }}
              className="flex flex-col gap-3 rounded-lg border border-[#323845] bg-[#181b26] p-5 transition-colors hover:border-[#11e956]/40"
            >
              <div className="flex items-center gap-2 border-b border-[#323845] pb-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[13px] font-semibold tracking-wide text-[#dde3eb]">
                  {cat.title}
                </span>
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