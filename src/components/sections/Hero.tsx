import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, MapPin, CheckCircle2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { SiArgo, SiDocker, SiGithubactions, SiGrafana, SiKubernetes, SiPrometheus, SiTerraform } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { personal, toolChips } from '../../data/portfolio'
import { MagneticButton } from '../ui/MagneticButton'

const toolIconMap: Record<string, typeof SiDocker> = {
  docker: SiDocker,
  k8s: SiKubernetes,
  terraform: SiTerraform,
  aws: FaAws,
  argocd: SiArgo,
  actions: SiGithubactions,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
}

const metrics = [
  { label: 'Deployments', value: 12, suffix: '', decimals: 0 },
  { label: 'Running Pods', value: 36, suffix: '', decimals: 0 },
  { label: 'Nodes', value: 3, suffix: '', decimals: 0 },
  { label: 'Uptime', value: 99.9, suffix: '%', decimals: 1 },
]

function Counter({ to, suffix = '', decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const start = performance.now()
        const dur = 1400
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(1 - t, 3)
          setVal(to * eased)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to])

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

function DashboardCard() {
  const chartPath =
    'M0 62 C 30 58, 50 66, 75 56 S 125 40, 150 46 S 200 30, 225 34 S 275 18, 300 24'

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] font-semibold text-slate-300">infra-overview</span>
          </div>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-400">
            us-east-1
          </span>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2.5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="glass-soft rounded-2xl px-2 py-3 text-center"
            >
              <div className="font-display text-lg font-bold text-white sm:text-xl">
                <Counter to={m.value} suffix={m.suffix} decimals={m.decimals} />
              </div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wide text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 rounded-2xl border border-white/10 bg-black/25 p-3">
          <svg viewBox="0 0 300 80" className="h-24 w-full" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="60%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#e879f9" />
              </linearGradient>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${chartPath} L300 80 L0 80 Z`} fill="url(#chartFill)" />
            <motion.path
              d={chartPath}
              fill="none"
              stroke="url(#chartStroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <circle cx="300" cy="24" r="4" fill="#22d3ee">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
          <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-slate-500">
            <span>3h</span>
            <span>pod count · rolling 24h</span>
            <span>now</span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {[
            { name: 'api-gateway', status: 'operational', dot: 'bg-emerald-400' },
            { name: 'k8s-workers (3/3)', status: 'healthy', dot: 'bg-emerald-400' },
            { name: 'db - postgres', status: 'read-replica synced', dot: 'bg-cyan-300' },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
            >
              <span className="font-mono text-[11px] text-slate-200">{row.name}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                <span className={`h-1.5 w-1.5 rounded-full ${row.dot}`} />
                {row.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-2.5">
          <div className="flex items-center gap-2 text-[11px] text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" />
            All systems operational
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            latency <span className="text-emerald-300">42ms</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function RoleRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % personal.roles.length), 2600)
    return () => clearInterval(id)
  }, [])
  const role = personal.roles[i]

  return (
    <span className="inline-flex flex-col overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={role}
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -22, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex h-[1.35em] items-center"
        >
          {role}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-24 section-padding">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="section-badge"
          >
            irfan@portfolio:~$
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold leading-[1.04] tracking-tight text-white"
          >
            {personal.firstName}{' '}
            <span className="gradient-text-animated">{personal.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 font-mono text-sm text-slate-400 sm:text-base"
          >
            <span className="text-ai-violet">&lt;</span>
            <RoleRotator />
            <span className="text-ai-violet"> /&gt;</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to DevOps, Cloud & Platform roles
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-7 max-w-lg text-balance text-base leading-relaxed text-slate-400"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">Get in Touch</MagneticButton>
            <MagneticButton href="#projects" variant="ghost">View Projects</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-9 flex items-center gap-3"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass-soft flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:text-white hover:border-violet-400/40"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass-soft flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:text-white hover:border-cyan-400/40"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-slate-600">
              <MapPin className="h-3.5 w-3.5" /> {personal.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:mt-8"
        >
          <DashboardCard />
          <div className="mt-5 grid grid-cols-4 gap-2.5">
            {toolChips.slice(0, 4).map((chip, i) => {
              const Icon = toolIconMap[chip.icon] ?? SiDocker
              return (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className={`glass-soft flex flex-col items-center gap-1.5 rounded-2xl py-3 ${chip.icon === 'aws' ? 'animate-float' : chip.icon === 'k8s' ? 'animate-float-delay' : ''}`}
                >
                  <Icon className="h-5 w-5 text-slate-300" />
                  <span className="font-mono text-[9px] text-slate-400">{chip.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}