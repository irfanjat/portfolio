import { AnimatePresence, motion } from 'framer-motion'
import {
  CloudUpload,
  Cog,
  Container,
  HeartPulse,
  Rocket,
  TestTube2,
  Check,
  Github,
  Linkedin,
  MapPin,
} from 'lucide-react'
import { FaAws } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { SiArgo, SiDocker, SiGithubactions, SiGrafana, SiKubernetes, SiPrometheus, SiTerraform } from 'react-icons/si'
import { personal, pipelineStages, toolChips } from '../../data/portfolio'
import { MagneticButton } from '../ui/MagneticButton'

const stageIcons: Record<string, typeof Cog> = {
  git: CloudUpload,
  build: Cog,
  test: TestTube2,
  image: Container,
  deploy: Rocket,
  monitor: HeartPulse,
}

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

function PipelineCard() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400/60" />
            </span>
            <span className="font-mono text-[11px] font-semibold text-slate-300">deploy-pipeline</span>
          </div>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-400">
            main · sha-7f3a2c
          </span>
        </div>

        <div className="relative mt-6">
          <svg
            className="pipeline-dash absolute left-[5%] right-[5%] top-5 w-auto"
            height="2"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="pipeline-track" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#34d399" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#ffffff" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <line x1="0" y1="1" x2="100" y2="1" stroke="url(#pipeline-track)" strokeWidth="2" />
          </svg>
          <div className="relative flex items-center justify-between">
            {pipelineStages.map((stage) => {
              const Icon = stageIcons[stage.icon] ?? Cog
              const statusColor =
                stage.status === 'done'
                  ? 'border-emerald-400/40 text-emerald-400 bg-emerald-400/10'
                  : stage.status === 'active'
                    ? 'border-cyan-400/50 text-cyan-300 bg-cyan-400/10 shadow-[0_0_24px_-4px_rgba(34,211,238,0.6)]'
                    : 'border-white/10 text-slate-500 bg-white/[0.03]'
              return (
                <div key={stage.id} className="flex flex-col items-center gap-2">
                  <span
                    className={`glass-soft flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${statusColor}`}
                  >
                    {stage.status === 'done' ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                    {stage.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-[11px] leading-relaxed backdrop-blur-sm">
          <p className="text-slate-500"><span className="text-violet-300">→</span> image built and pushed</p>
          <p className="mt-1 text-slate-300"><span className="text-cyan-300">$</span> helm upgrade --install app --namespace prod</p>
          <p className="mt-1 text-emerald-400">✓ rollout complete · 3/3 replicas healthy</p>
          <p className="mt-1 text-slate-500"><span className="text-slate-300">⟳</span> syncing ArgoCD application…</p>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full rounded-full bg-emerald-400" />
            </span>
            Services operational
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            uptime <span className="text-emerald-400">99.9%</span>
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
          <PipelineCard />
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