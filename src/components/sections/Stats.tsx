import { motion } from 'framer-motion'
import { stats } from '../../data/portfolio'
import { Counter } from '../ui/Counter'
import { GlassCard } from '../ui/GlassCard'

const accents = [
  'accent-cyan',
  'accent-violet',
  'accent-emerald',
  'accent-rose',
]

const gridClasses = [
  'col-span-2 row-span-1 sm:col-span-1 sm:row-span-2',
  'col-span-1',
  'col-span-1',
  'col-span-2 sm:col-span-1',
]

export function Stats() {
  return (
    <section id="stats" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={gridClasses[i]}
            >
              <GlassCard className={`h-full p-6 sm:p-8 ${accents[i]}`}>
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}
                >
                  <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div
                  className="text-4xl font-bold tracking-tight sm:text-5xl"
                  style={{ color: 'var(--accent)' }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
