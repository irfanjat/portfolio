import { useInView, useSpring, useMotionValueEvent } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  label: string
}

export function Counter({ value, suffix = '', label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const spring = useSpring(0, { stiffness: 60, damping: 20 })
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(spring, 'change', (v) => setDisplay(Math.round(v)))

  useEffect(() => {
    if (inView) spring.set(value)
  }, [inView, spring, value])

  return (
    <div ref={ref} className="text-center">
      <span className="block font-mono text-3xl font-bold text-gradient sm:text-4xl">
        {display}
        {suffix}
      </span>
      <span className="mt-2 block text-sm text-slate-500">{label}</span>
    </div>
  )
}
