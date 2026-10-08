import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personal } from '../../data/portfolio'
import { MagneticButton } from '../ui/MagneticButton'

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
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000,transparent)]" />
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
            className="mt-6 font-display text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold leading-[1.04] tracking-tight text-[var(--color-ink)]"
          >
            {personal.firstName}{' '}
            <span className="text-[var(--color-green)]">{personal.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 font-mono text-sm text-slate-400 sm:text-base"
          >
            <span className="text-[var(--color-purple)]">&lt;</span>
            <RoleRotator />
            <span className="text-[var(--color-purple)]"> /&gt;</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2.5 rounded-md border border-[var(--color-green-300)]/40 bg-[var(--color-green-300)]/10 px-4 py-2 font-mono text-xs font-medium text-[var(--color-green-300)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-green)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-green)]" />
            </span>
            {personal.availability}
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
            <MagneticButton href="#projects" variant="ghost">
              View Projects
            </MagneticButton>
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
              className="glass-soft flex h-10 w-10 items-center justify-center rounded-md text-slate-300 transition hover:text-[var(--color-ink)] hover:border-[var(--color-green)]/50"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass-soft flex h-10 w-10 items-center justify-center rounded-md text-slate-300 transition hover:text-[var(--color-ink)] hover:border-[var(--color-cyan)]/50"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-[var(--color-cyan)]" /> {personal.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:mt-8"
        >
          <div className="relative mx-auto w-full max-w-[19rem]">
            <div className="relative overflow-hidden rounded-[22px] border border-[color-mix(in_srgb,var(--color-green)_35%,transparent)] bg-[var(--color-bg2)] shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-green)_8%,transparent),0_20px_60px_rgba(0,0,0,0.55),0_0_80px_color-mix(in_srgb,var(--color-green)_12%,transparent)]">
              <img
                src="/pic.jpg"
                alt="Irfan Ali — DevOps & Cloud Engineer"
                className="block aspect-[4/5] w-full object-cover object-top"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 55%, color-mix(in srgb, var(--color-bg) 85%, transparent) 100%)' }}
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-[7px] rounded-full border border-[color-mix(in_srgb,var(--color-green)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] px-3.5 py-1.5 font-mono text-[11px] text-[var(--color-green)] backdrop-blur-sm">
                <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[var(--color-green)]" aria-hidden="true" />
                open to work
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}