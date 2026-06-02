import { motion, useMotionValueEvent, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../../data/site'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const spring = useSpring(0, { stiffness: 50, damping: 20 })
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(spring, 'change', (v) => setDisplay(Math.round(v)))

  useEffect(() => {
    if (inView) spring.set(value)
  }, [inView, spring, value])

  return (
    <span ref={ref} className="font-mono text-3xl font-bold text-gradient sm:text-4xl">
      {display}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-700/40 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center justify-center py-8 px-4 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
