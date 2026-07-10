import { motion } from 'framer-motion'
import { ChevronDown, FolderKanban, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { personal } from '../../data/portfolio'
import { GlowButton } from '../ui/GlowButton'
import { GradientText } from '../ui/GradientText'

function InfraVisualization() {
  const nodes = [
    { id: 'git', label: 'Git', x: 50, y: 15, color: '#22d3ee' },
    { id: 'ci', label: 'CI/CD', x: 20, y: 45, color: '#a78bfa' },
    { id: 'k8s', label: 'K8s', x: 80, y: 45, color: '#34d399' },
    { id: 'aws', label: 'AWS', x: 35, y: 75, color: '#fbbf24' },
    { id: 'monitor', label: 'Monitor', x: 65, y: 75, color: '#fb7185' },
  ]

  const edges = [
    ['git', 'ci'],
    ['git', 'k8s'],
    ['ci', 'k8s'],
    ['ci', 'aws'],
    ['k8s', 'monitor'],
    ['aws', 'monitor'],
  ]

  const getNode = (id: string) => nodes.find((n) => n.id === id)!

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-3xl glass gradient-border" />
      <svg viewBox="0 0 100 100" className="relative h-full w-full p-8">
        {edges.map(([from, to], i) => {
          const a = getNode(from)
          const b = getNode(to)
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            />
          )
        })}
        {edges.map(([from, to], i) => {
          const a = getNode(from)
          const b = getNode(to)
          return (
            <motion.circle
              key={`pulse-${from}-${to}`}
              r="0.8"
              fill="#22d3ee"
              initial={{ opacity: 0 }}
              animate={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'linear',
              }}
            />
          )
        })}
        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill={`${node.color}20`}
              stroke={node.color}
              strokeWidth="0.4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
            />
            <motion.text
              x={node.x}
              y={node.y + 10}
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="3.5"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[10px] text-emerald-400">all systems operational</span>
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
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
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
          <InfraVisualization />
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 transition hover:text-cyan-400"
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
