import { motion, useInView } from 'framer-motion'
import { Github, MapPin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { SiArgo, SiDocker, SiGithubactions, SiGrafana, SiKubernetes, SiPrometheus, SiTerraform } from 'react-icons/si'
import { FaAws, FaLinkedinIn } from 'react-icons/fa6'
import dockerBrand from '../../assets/brands/docker-original.svg'
import kubernetesBrand from '../../assets/brands/kubernetes-original.svg'
import terraformBrand from '../../assets/brands/terraform-original.svg'
import awsBrand from '../../assets/brands/amazonwebservices-original.svg'
import { hero, personal, stats, toolChips } from '../../data/portfolio'
import { LiveDeployStatus } from '../ui/LiveDeployStatus'
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
    command: 'cat ~/workflow.txt',
    lines: [
      { l: '$ code', r: '✓ python · bash', ok: true },
      { l: '$ push', r: '✓ main → CI', ok: true },
      { l: '$ deploy', r: '✓ argocd synced', ok: true },
      { l: '$ observe', r: '✓ prometheus scraping', ok: true },
    ],
  },
  {
    command: 'kubectl get pods -A',
    lines: [
      { l: 'grafana', r: '1/1 Running', ok: true },
      { l: 'prometheus', r: '1/1 Running', ok: true },
      { l: 'argocd', r: '1/1 Synced', ok: true },
      { l: 'workloads', r: '1/1 Running', ok: true },
    ],
  },
  {
    command: 'git log --oneline -4',
    lines: [
      { l: 'HEAD', r: 'feat(gitops): reconcile cluster state', ok: true },
      { l: '', r: 'fix(guardrails): block insecure plans', ok: true },
      { l: '', r: 'perf(costguard): shrink cold start', ok: true },
      { l: '', r: 'build(infra): tag multi-az snapshot', ok: true },
    ],
  },
]

function useTypewriter(text: string, active: boolean, speed = 42) {
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
      <span className="text-[#39d353]">irfan@portfolio</span>
      <span className="text-[#6e7681]">:</span>
      <span className="text-[#58a6ff]">~</span>
      <span className="text-[#6e7681]">$ </span>
    </span>
  )
}

function Cursor() {
  return <span className="ml-0.5 inline-block h-[1em] w-[7px] animate-blink bg-[#39d353] align-middle" />
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
      className="relative overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#39d353]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#58a6ff]/5 blur-3xl" />

      <div className="relative flex items-center gap-2 border-b border-[#30363d] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[10.5px] text-[#8b949e]">irfan@portfolio — ~/infra</span>
        <span className="ml-auto shrink-0 rounded border border-[#30363d] bg-[#21262d] px-1.5 py-px font-mono text-[9.5px] text-[#6e7681]">
          zsh
        </span>
      </div>

      <div className="relative p-4 font-mono text-[11px] leading-relaxed sm:p-5 sm:text-[12px]">
        <div className="flex flex-wrap items-center gap-x-2">
          <Prompt />
          <span className="text-[#e6edf3]">{typed}</span>
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
                <span className="w-[6rem] shrink-0 truncate text-[#8b949e] sm:w-[7.5rem]">{line.l}</span>
                <span className={line.ok ? 'text-[#7ee787]' : 'text-[#e6edf3]'}>{line.r}</span>
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
                i === scene ? 'w-4 bg-[#39d353]' : 'w-1.5 bg-[#6e7681] hover:bg-[#8b949e]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-24 section-padding">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000,transparent)]" />
      <div className="mx-auto grid w-full max-w-5xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-sm border border-[#39d353]/40 bg-[#39d353]/10 px-3 py-1.5 font-mono text-[12px] text-[#7ee787]"
          >
            <span className="font-medium text-[#39d353]">$ whoami</span>
            <span className="text-[#6e7681]">→</span>
            <span>{personal.role}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-6 font-mono text-[12.5px] tracking-[0.2em] text-[#8b949e]"
          >
            {'// '}
            {personal.name.toUpperCase()} — DEVOPS / CLOUD ENGINEER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 font-display text-[clamp(2.5rem,7vw,4.4rem)] font-extrabold leading-[1.05] tracking-tight text-[#e6edf3]"
          >
            I make deployments{' '}
            <span className="text-[#39d353]">{hero.statementAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 max-w-lg text-balance text-[15px] leading-relaxed text-[#8b949e]"
          >
            {hero.statementSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href={personal.github} variant="ghost">
              <Github className="h-4 w-4" />
              GitHub Repos
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62 }}
            className="mt-10 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#30363d] bg-[#30363d] sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-[#161b22] px-4 py-3.5">
                <p className="font-mono text-xl font-bold" style={{ color: s.accent }}>
                  {s.value}
                  {s.suffix}
                </p>
                <p className="mt-0.5 font-mono text-[10px] tracking-wide text-[#8b949e]">{s.label.toUpperCase()}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.72 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-[12.5px] text-[#6e7681]"
          >
            <LiveDeployStatus />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82 }}
            className="mt-6 flex items-center gap-4"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass-soft flex h-9 w-9 items-center justify-center rounded-md text-[#8b949e] transition hover:border-[#39d353]/50 hover:text-[#e6edf3]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass-soft flex h-9 w-9 items-center justify-center rounded-md text-[#8b949e] transition hover:border-[#58a6ff]/50 hover:text-[#e6edf3]"
            >
              <FaLinkedinIn className="h-[14px] w-[14px]" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-[#6e7681]">
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
                  {brand ? (
                    <img src={brand} alt={chip.label} className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5 text-[#8b949e]" />
                  )}
                  <span className="font-mono text-[9px] text-[#8b949e]">{chip.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}