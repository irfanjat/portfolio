import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { skillCategories } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

const colorMap: Record<string, { bar: string; text: string; bg: string }> = {
  blue: { bar: 'bg-blue-400', text: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  orange: { bar: 'bg-orange-400', text: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  green: { bar: 'bg-green-400', text: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  red: { bar: 'bg-red-400', text: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
}

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const c = colorMap[color] ?? colorMap.blue

  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="text-slate-300">{name}</span>
        <span className={`font-mono ${c.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className={`h-full rounded-full ${c.bar}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ cat, index }: { cat: (typeof skillCategories)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const c = colorMap[cat.color] ?? colorMap.blue
  const hasExtra = cat.extra && cat.extra.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
    >
      <GlassCard className="h-full p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className={`inline-flex rounded-lg border px-3 py-1 text-xs font-medium ${c.bg} ${c.text}`}>
            {cat.title}
          </div>
          {hasExtra && (
            <span className="font-mono text-[10px] text-slate-600">
              {cat.skills.length}+{cat.extra!.length}
            </span>
          )}
        </div>

        <div className="mt-5 space-y-3">
          {cat.skills.map((skill, j) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={cat.color}
              delay={j * 0.05}
            />
          ))}
        </div>

        <AnimatePresence>
          {expanded && hasExtra && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-3 border-t border-white/5 pt-3 space-y-3">
                {cat.extra!.map((skill, j) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={j * 0.03}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hasExtra && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-dashed px-3 py-2 text-xs font-medium transition-colors ${c.bg} ${c.text} hover:border-solid`}
          >
            {expanded ? 'Show Less' : `Show ${cat.extra!.length} More Services`}
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-3.5 w-3.5" />
            </motion.div>
          </button>
        )}
      </GlassCard>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Skills"
          title="Tools & Technologies"
          subtitle="Production-grade tooling across cloud, containers, CI/CD, and observability."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
