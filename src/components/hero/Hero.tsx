import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FolderKanban, Mail } from 'lucide-react'
import { personal } from '../../data/site'
import { GlowButton } from '../ui/GlowButton'
import { TerminalHero } from './TerminalHero'

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
      <div className="mx-auto grid max-w-6xl w-full gap-12 lg:grid-cols-2 lg:gap-16 items-center">

        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="label-dot mb-6"
          >
            {personal.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl"
          >
            {personal.name.split(' ')[0]}{' '}
            <span className="text-cyan-400">{personal.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-3 font-mono text-sm text-slate-400 sm:text-base"
          >
            {personal.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-5 max-w-lg text-base text-slate-400 leading-relaxed mx-auto lg:mx-0"
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
              <FolderKanban className="h-4 w-4" />
              View Projects
            </GlowButton>
            <GlowButton href="#contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Contact Me
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-6 text-xs text-slate-500 font-mono"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-emerald-500" />
              Open to work
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-cyan-500" />
              Remote / On-site
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-indigo-500" />
              Immediate join
            </span>
          </motion.div>
        </div>

        <motion.div style={{ y }} className="flex justify-center lg:justify-end w-full">
          <TerminalHero />
        </motion.div>

      </div>
    </section>
  )
}
