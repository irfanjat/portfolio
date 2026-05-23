import { motion } from 'framer-motion'
import { stats } from '../../data/site'
import { Counter } from '../ui/Counter'

export function StatsBar() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-strong mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-2xl p-8 md:grid-cols-4 glow-cyan"
      >
        {stats.map((s) => (
          <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </motion.div>
    </section>
  )
}