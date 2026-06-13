import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Cpu, FolderKanban, GitBranch, Layers, Mail } from 'lucide-react'
import { personal } from '../../data/site'
import { GlowButton } from '../ui/GlowButton'

const floatingIcons = [
  { icon: Cpu, label: 'K8s', delay: 0, color: 'text-cyan-400', pos: { top: -18, left: -18 } },
  { icon: Cloud, label: 'AWS', delay: 0.6, color: 'text-amber-400', pos: { top: -18, right: -18 } },
  { icon: GitBranch, label: 'GitOps', delay: 1.2, color: 'text-violet-400', pos: { bottom: -18, left: -18 } },
  { icon: Layers, label: 'Docker', delay: 1.8, color: 'text-cyan-300', pos: { bottom: -18, right: -18 } },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl w-full gap-10 lg:grid-cols-2 lg:gap-12 items-center">

        <div className="text-center lg:text-left">
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
        </div>

        <motion.div style={{ y }} className="flex justify-center lg:justify-end">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent opacity-70 blur-2xl" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400/10 to-violet-500/10 opacity-50 blur-xl" />
            <div className="relative rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-emerald-400 p-1 shadow-[0_0_40px_rgba(0,217,255,0.15)]">
              <div className="rounded-full bg-slate-900 p-1">
                <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-72 sm:w-72">
                  <img
                    src={`${import.meta.env.BASE_URL}pic.jpg`}
                    alt={personal.name}
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {floatingIcons.map((item) => (
              <motion.div
                key={item.label}
                className="absolute hidden lg:flex items-center gap-2 rounded-full border border-white/5 bg-slate-900/80 px-3 py-1.5 backdrop-blur-sm shadow-lg"
                style={item.pos}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { delay: 1 + item.delay, duration: 0.5 },
                  scale: { delay: 1 + item.delay, duration: 0.5 },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: item.delay,
                  },
                }}
              >
                <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
                <span className="font-mono text-[10px] text-slate-500">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
