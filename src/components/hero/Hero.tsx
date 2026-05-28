import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Download, FolderKanban, Mail } from 'lucide-react'
import { personal } from '../../data/site'
import { GlowButton } from '../ui/GlowButton'
import { TerminalHero } from './TerminalHero'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-5xl w-full gap-10 lg:grid-cols-2 lg:gap-12 items-center">

        {/* left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-1.5 font-mono text-xs text-cyan-300/90"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {personal.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {personal.name.split(' ')[0]}{' '}
            <span className="text-gradient">{personal.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-3 font-mono text-sm text-gradient-subtle sm:text-base"
          >
            {personal.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-5 max-w-lg text-base text-slate-400 leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <GlowButton href="#projects" variant="primary">
              <FolderKanban className="h-4 w-4" />
              View Projects
            </GlowButton>
            <GlowButton href={`${import.meta.env.BASE_URL}resume.pdf`} variant="secondary" download="IrfanAliResume.pdf">
              <Download className="h-4 w-4" />
              Download Resume
            </GlowButton>
            <GlowButton href="#contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Contact Me
            </GlowButton>
          </motion.div>


        </div>

        {/* right */}
        <motion.div style={{ y }} className="flex justify-center lg:justify-end">
          <TerminalHero />
        </motion.div>

      </div>
    </section>
  )
}