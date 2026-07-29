import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
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
      <div className="relative mx-auto w-full max-w-[400px]">
      <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d1117] shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2.5 border-b border-white/[0.06] bg-[#1a1a2e]/80 px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#f85149]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#3fb950]" />
          </div>
          <span className="font-mono text-[11px] font-medium text-slate-300">
            irfan <span className="text-slate-600">~</span> bash
          </span>
        </div>

        {/* Terminal body */}
        <div className="px-5 py-4 font-mono text-[12.5px] leading-relaxed">
          {/* cat profile.json command */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleLines >= 1 ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            className="mb-2"
          >
            <span className="text-blue-400">irfan@aws</span>
            <span className="text-slate-600">:~$</span>
            <span className="ml-2 text-slate-200">cat profile.json</span>
          </motion.div>

          {/* JSON output */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleLines >= 2 ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="mb-3"
          >
            <span className="text-yellow-400">{'{'}</span>
            {jsonLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: visibleLines >= i + 3 ? 1 : 0 }}
                transition={{ duration: 0.12 }}
                className="pl-4"
              >
                <span className="text-cyan-300">{line.split(':')[0]}:</span>
                <span className="text-slate-400">{line.split(':')[1]}</span>
              </motion.div>
            ))}
            <span className="text-yellow-400">{'}'}</span>
          </motion.div>

          {/* Final prompt with cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleLines >= jsonLines.length + 3 ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-blue-400">irfan@aws</span>
            <span className="text-slate-600">:~$</span>
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
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="label-dot mb-8"
          >
            {personal.availability}
          </motion.div>

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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <GlowButton href="#projects">
              View Projects
            </GlowButton>
            <GlowButton href="#contact" variant="secondary">
              Contact Me
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-blue-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <span className="font-mono text-xs text-slate-600">{personal.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:block"
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
