import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { personal } from '../../data/portfolio'
import { GlowButton } from '../ui/GlowButton'
import { GradientText } from '../ui/GradientText'

const jsonLines = [
  '  "role": "DevOps Engineer",',
  '  "cloud": "AWS",',
  '  "iac": "Terraform | Ansible",',
  '  "containers": "Docker | K8s",',
  '  "status": "Open — remote | hybrid | onsite"',
]

function TerminalVisual() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(v => {
        if (v < jsonLines.length + 3) return v + 1
        clearInterval(interval)
        return v
      })
    }, 180)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const blink = setInterval(() => setCursorOn(v => !v), 530)
    return () => clearInterval(blink)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[400px] lg:mt-6">
      <div className="overflow-hidden rounded-xl border-2 border-slate-600/80 bg-[#0d1117] shadow-2xl shadow-blue-950/40">
        <div className="flex items-center gap-2.5 border-b border-slate-700 bg-[#1a1a2e]/90 px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#f85149]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#3fb950]" />
          </div>
          <span className="font-mono text-[11px] font-semibold text-white">
            irfan <span className="text-slate-400">~</span> bash
          </span>
        </div>

        <div className="px-5 py-4 font-mono text-[12.5px] leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleLines >= 1 ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            className="mb-2"
          >
            <span className="text-blue-300">irfan@aws</span>
            <span className="text-slate-500">:~$</span>
            <span className="ml-2 text-slate-100">cat profile.json</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleLines >= 2 ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="mb-3"
          >
            <span className="text-yellow-300">{'{'}</span>
            {jsonLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: visibleLines >= i + 3 ? 1 : 0 }}
                transition={{ duration: 0.12 }}
                className="pl-4"
              >
                <span className="text-cyan-200">{line.split(':')[0]}:</span>
                <span className="text-slate-300">{line.split(':')[1]}</span>
              </motion.div>
            ))}
            <span className="text-yellow-300">{'}'}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleLines >= jsonLines.length + 3 ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-blue-300">irfan@aws</span>
            <span className="text-slate-500">:~$</span>
            <span className={`ml-0.5 inline-block h-[18px] w-[8px] bg-green-400 align-text-bottom transition-opacity duration-75 ${cursorOn ? 'opacity-100' : 'opacity-0'}`} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [first, last] = personal.name.split(' ')

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center section-padding pt-32 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-start gap-16 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-sm text-blue-400/80"
          >
            irfan@portfolio:~$
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-fluid-hero font-bold tracking-tight text-slate-100"
          >
            {first}{' '}
            <GradientText shimmer>{last}</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-4 font-mono text-sm text-slate-400 sm:text-base"
          >
            {personal.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-slate-400 lg:mx-0"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Open to DevOps, Cloud & Platform Engineering roles
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <GlowButton href="#contact">Get in Touch</GlowButton>
            <GlowButton href="#projects" variant="secondary">View Projects</GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-blue-400" aria-label="GitHub">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-blue-400" aria-label="LinkedIn">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <span className="font-mono text-xs text-slate-600">{personal.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 lg:mt-0"
        >
          <TerminalVisual />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 transition hover:text-blue-400"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
