import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail, Terminal } from 'lucide-react'
import { personal, stats } from '../../data/site'
import { GlowButton } from '../ui/GlowButton'
import { TerminalHero } from './TerminalHero'

function MetricBar({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const spring = useSpring(0, { stiffness: 60, damping: 25 })
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(spring, 'change', (v) => setDisplay(Math.round(v)))
  useEffect(() => { if (inView) spring.set(value) }, [inView, spring, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="text-center"
    >
      <div className="font-mono text-2xl font-bold text-cyan-400 sm:text-3xl">{display}{suffix}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-widest text-slate-500">{label}</div>
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto grid max-w-6xl w-full gap-12 lg:grid-cols-2 lg:gap-16 items-center">

        <div className="text-center lg:text-left relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-lg px-4 py-1.5 text-xs font-mono text-slate-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personal.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl leading-[1.1]"
          >
            {personal.name.split(' ')[0]} <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              {personal.name.split(' ')[1]}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 flex items-center gap-2 font-mono text-sm text-slate-400 sm:text-base justify-center lg:justify-start"
          >
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            {personal.role}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-4 max-w-lg text-sm text-slate-500 leading-relaxed mx-auto lg:mx-0"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <GlowButton href="#projects" variant="primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </GlowButton>
            <GlowButton href="#contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Contact Me
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 grid grid-cols-4 gap-6 max-w-md mx-auto lg:mx-0"
          >
            {stats.map((s, i) => (
              <MetricBar key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={0.7 + i * 0.1} />
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y }} className="flex justify-center lg:justify-end w-full">
          <TerminalHero />
        </motion.div>

      </div>
    </section>
  )
}
