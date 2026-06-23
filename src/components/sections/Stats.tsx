import { motion, useMotionValueEvent, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Activity, Box, GitBranch, Shield } from 'lucide-react'
import { stats } from '../../data/site'

const statIcons = [Activity, Box, GitBranch, Shield]

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
    <span ref={ref} className="font-mono text-3xl font-bold text-slate-100 sm:text-4xl">
      {display}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section id="stats" className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-hover rounded-xl p-6 text-center"
              >
                {Icon && (
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-4 w-4" />
                  </div>
                )}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="mt-1.5 block text-xs font-mono uppercase tracking-wider text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
