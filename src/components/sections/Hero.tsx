import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
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

const TOKEN = {
  key: 'text-[#79c0ff]',
  val: 'text-[#a5d6ff]',
  plain: 'text-slate-200',
  punct: 'text-slate-400',
  comment: 'text-slate-500',
}

function CodeCard() {
  return (
    <div className="glass relative overflow-hidden rounded-lg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#39d353]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#58a6ff]/5 blur-3xl" />

      <div className="relative flex items-center gap-2 border-b border-[#30363d] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 min-w-0 truncate font-mono text-[10px] text-slate-400">
          .github/workflows/deploy-cloudflare-pages.yml
        </span>
        <span className="ml-auto shrink-0 rounded border border-[#30363d] bg-[#21262d] px-1.5 py-px font-mono text-[9px] text-slate-500">
          github-actions
        </span>
      </div>

      <div className="relative p-3.5 font-mono text-[10.5px] leading-[1.55] sm:px-5 sm:py-4 sm:text-[11.5px]">
        <div className="space-y-[3px]">
          <div>
            <span className={TOKEN.key}>name</span>
            <span className={TOKEN.punct}>:</span> <span className={TOKEN.val}>Deploy Cloudflare Pages</span>
          </div>
          <div>
            <span className={TOKEN.key}>on</span>
            <span className={TOKEN.punct}>:</span>
          </div>
          <div className="pl-4">
            <span className={TOKEN.key}>push</span>
            <span className={TOKEN.punct}>:</span> <span className={TOKEN.punct}>{'{'}</span>{' '}
            <span className={TOKEN.key}>branches</span>
            <span className={TOKEN.punct}>:</span> <span className={TOKEN.punct}>[</span>
            <span className={TOKEN.val}>main</span>
            <span className={TOKEN.punct}>]</span> <span className={TOKEN.punct}>{'}'}</span>
          </div>
          <div>
            <span className={TOKEN.key}>jobs</span>
            <span className={TOKEN.punct}>:</span>
          </div>
          <div className="pl-4">
            <span className={TOKEN.key}>build-and-deploy</span>
            <span className={TOKEN.punct}>:</span>
          </div>
          <div className="pl-8">
            <span className={TOKEN.key}>runs-on</span>
            <span className={TOKEN.punct}>:</span> <span className={TOKEN.val}>ubuntu-latest</span>
          </div>
          <div className="pl-8">
            <span className={TOKEN.key}>steps</span>
            <span className={TOKEN.punct}>:</span>
          </div>
          <div className="pl-12">
            <span className={TOKEN.punct}>-</span> <span className={TOKEN.key}>run</span>
            <span className={TOKEN.punct}>:</span> <span className={TOKEN.val}>{'npm ci && npm run build'}</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-1.5 pl-12">
            <span className={TOKEN.punct}>-</span> <span className={TOKEN.key}>uses</span>
            <span className={TOKEN.punct}>:</span> <span className={TOKEN.val}>cloudflare/wrangler-action@v3</span>
          </div>
          <div className="pt-0.5 text-slate-500 italic">{'# → https://irfanali.pages.dev'}</div>
        </div>
      </div>
    </div>
  )
}

function RoleRotator() {
  const prefersReduced = useReducedMotion()
  const [i, setI] = useState(0)
  useEffect(() => {
    if (prefersReduced) return
    const id = setInterval(() => setI((v) => (v + 1) % personal.roles.length), 2600)
    return () => clearInterval(id)
  }, [prefersReduced])
  const role = personal.roles[i]

  if (prefersReduced) {
    return <span className="inline-flex h-[1.35em] items-center">{role}</span>
  }

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
    <section id="home" className="relative flex min-h-[85vh] items-center pt-16 pb-14 section-padding">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold leading-[1.04] tracking-tight text-white"
          >
            {personal.firstName}{' '}
            <span className="gradient-text-animated">{personal.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 font-mono text-sm text-slate-400 sm:text-base"
          >
            <RoleRotator />
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
            Open to junior DevOps, Cloud & Platform roles · Remote
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
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href={personal.resume} target="_blank" rel="noopener noreferrer" variant="ghost">Resume</MagneticButton>
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
              className="glass-soft flex h-10 w-10 items-center justify-center rounded-md text-slate-300 transition hover:text-white hover:border-[#39d353]/50"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-[#39d353]" /> {personal.location}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-3 font-mono text-[11px] text-slate-400"
          >
            12+ projects · 32+ repos · OCI Certified
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0"
        >
          <CodeCard />
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
                  className={`group glass-soft flex flex-col items-center gap-1.5 rounded-md py-3 transition-colors ${chip.icon === 'aws' ? 'animate-float' : chip.icon === 'k8s' ? 'animate-float-delay' : ''} hover:border-[#39d353]/50`}
                >
                  {brand
                    ? <img src={brand} alt={chip.label} className="h-5 w-5 grayscale transition-all duration-300 group-hover:grayscale-0" />
                    : <Icon className="h-5 w-5 text-slate-300" />}
                  <span className="font-mono text-[10px] text-slate-300 sm:text-[11px]">{chip.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}