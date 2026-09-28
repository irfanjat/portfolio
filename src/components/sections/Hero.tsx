import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Github, Linkedin, MapPin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { SiArgo, SiDocker, SiGithubactions, SiGrafana, SiKubernetes, SiPrometheus, SiTerraform } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import dockerBrand from '../../assets/brands/docker-original.svg'
import kubernetesBrand from '../../assets/brands/kubernetes-original.svg'
import terraformBrand from '../../assets/brands/terraform-original.svg'
import awsBrand from '../../assets/brands/amazonwebservices-original.svg'
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

const brandLogos: Record<string, string> = {
  docker: dockerBrand,
  k8s: kubernetesBrand,
  terraform: terraformBrand,
  aws: awsBrand,
}

type TermLine = { l: string; r: string; ok?: boolean }

const SCENES: { command: string; lines: TermLine[] }[] = [
  {
    command: 'whoami --verbose',
    lines: [
      { l: 'name', r: 'Irfan Ali' },
      { l: 'role', r: 'DevOps & Cloud Engineer' },
      { l: 'stack', r: 'AWS · K8s · Terraform' },
      { l: 'status', r: '● open to work', ok: true },
    ],
  },
  {
    command: 'kubectl get pods -A',
    lines: [
      { l: 'grafana', r: '1/1  Running', ok: true },
      { l: 'prometheus', r: '1/1  Running', ok: true },
      { l: 'argocd', r: '1/1  Synced', ok: true },
      { l: 'postgres', r: '1/1  Running', ok: true },
    ],
  },
  {
    command: 'git push origin main',
    lines: [
      { l: '✓ build', r: '5.2s', ok: true },
      { l: '✓ typecheck', r: '0 errors', ok: true },
      { l: '✓ terraform plan', r: 'no drift', ok: true },
      { l: '→ live', r: 'pages deployed', ok: true },
    ],
  },
  {
    command: 'helm list -A',
    lines: [
      { l: 'platform', r: 'deployed  rev 3', ok: true },
      { l: 'observability', r: 'deployed  rev 5', ok: true },
      { l: 'gitops', r: 'synced    rev 1', ok: true },
      { l: 'postgres', r: 'deployed  rev 2', ok: true },
    ],
  },
]

function useTypewriter(text: string, active: boolean, speed = 60) {
  const [out, setOut] = useState('')
  useEffect(() => {
    if (!active) return
    setOut('')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [active, text, speed])
  return out
}

function Prompt() {
  return (
    <span className="shrink-0">
      <span className="text-emerald-400">irfan@aws</span>
      <span className="text-slate-600">:</span>
      <span className="text-cyan-400">~</span>
      <span className="text-slate-600">$ </span>
    </span>
  )
}

function Cursor() {
  return <span className="ml-0.5 inline-block h-[1em] w-[7px] animate-blink bg-slate-300 align-middle" />
}

function TerminalCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [scene, setScene] = useState(0)
  const [paused, setPaused] = useState(false)

  const active = SCENES[scene]
  const typed = useTypewriter(active.command, inView, 42)
  const done = typed.length >= active.command.length

  useEffect(() => {
    if (!inView || paused) return
    const id = setInterval(() => setScene((v) => (v + 1) % SCENES.length), 4200)
    return () => clearInterval(id)
  }, [inView, paused])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="glass relative overflow-hidden rounded-lg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#39d353]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#58a6ff]/5 blur-3xl" />

      <div className="relative flex items-center gap-2 border-b border-[#30363d] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[10.5px] text-slate-400">irfan@aws — ~/infra</span>
        <span className="ml-auto shrink-0 rounded border border-[#30363d] bg-[#21262d] px-1.5 py-px font-mono text-[9.5px] text-slate-500">
          zsh
        </span>
      </div>

      <div className="relative p-4 font-mono text-[11px] leading-relaxed sm:p-5 sm:text-[12px]">
        <div className="flex flex-wrap items-center gap-x-2">
          <Prompt />
          <span className="text-slate-100">{typed}</span>
          {!done && <Cursor />}
        </div>

        {done && (
          <motion.div
            key={scene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="mt-2.5 space-y-0.5"
          >
            {active.lines.map((line, i) => (
              <motion.div
                key={line.l}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + i * 0.11, duration: 0.32 }}
                className="flex flex-wrap items-baseline gap-x-2"
              >
                <span className="w-[6rem] shrink-0 truncate text-slate-500 sm:w-[7.5rem]">{line.l}</span>
                <span className={line.ok ? 'text-emerald-300' : 'text-slate-200'}>{line.r}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-3 flex items-center gap-1.5">
          {SCENES.map((s, i) => (
            <button
              key={s.command}
              type="button"
              aria-label={`Show ${s.command}`}
              onClick={() => setScene(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === scene ? 'w-4 bg-[#22d3ee]' : 'w-1.5 bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
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
      <div className="mx-auto grid w-full max-w-5xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
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
            {personal.lastName}
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
            className="mt-6 inline-flex items-center gap-2.5 rounded-md border border-[#3fb950]/40 bg-[#3fb950]/10 px-4 py-2 font-mono text-xs font-medium text-[#7ee787]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39d353] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#39d353]" />
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
              className="glass-soft flex h-10 w-10 items-center justify-center rounded-md text-slate-300 transition hover:text-white hover:border-[#39d353]/50"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass-soft flex h-10 w-10 items-center justify-center rounded-md text-slate-300 transition hover:text-white hover:border-[#58a6ff]/50"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-[#58a6ff]" /> {personal.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:mt-8"
        >
          <TerminalCard />
          <div className="mt-5 grid grid-cols-4 gap-2.5">
            {toolChips.slice(0, 4).map((chip, i) => {
              const brand = brandLogos[chip.icon]
              const Icon = toolIconMap[chip.icon] ?? SiDocker
              return (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className={`glass-soft flex flex-col items-center gap-1.5 rounded-md py-3 transition-colors ${chip.icon === 'aws' ? 'animate-float' : chip.icon === 'k8s' ? 'animate-float-delay' : ''} hover:border-[#39d353]/50`}
                >
                  {brand
                    ? <img src={brand} alt={chip.label} className="h-5 w-5" />
                    : <Icon className="h-5 w-5 text-slate-300" />}
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