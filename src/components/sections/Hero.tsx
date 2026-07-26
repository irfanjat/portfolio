import { motion } from 'framer-motion'
import { ChevronDown, FolderKanban, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { personal } from '../../data/portfolio'
import { GlowButton } from '../ui/GlowButton'
import { GradientText } from '../ui/GradientText'

function ProfileVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        className="relative"
      >
        <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl border border-white/10 sm:h-80 sm:w-80">
          <img
            src={`${import.meta.env.BASE_URL}pic.jpg`}
            alt="Irfan Ali"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-green-500/20 bg-[#0d1117]/90 px-4 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[11px] text-green-400">available for hire</span>
        </motion.div>
      </motion.div>

      <div className="absolute -top-6 -right-6 rounded-2xl border border-white/10 bg-[#161b22]/90 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
            <span className="font-mono text-xs font-bold">4</span>
          </div>
          <div>
            <p className="text-[10px] text-slate-500">Certifications</p>
            <p className="text-xs font-semibold text-slate-200">AWS + IBM + OCI</p>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -left-6 rounded-2xl border border-white/10 bg-[#161b22]/90 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
            <span className="font-mono text-xs font-bold">12+</span>
          </div>
          <div>
            <p className="text-[10px] text-slate-500">Projects</p>
            <p className="text-xs font-semibold text-slate-200">Shipped</p>
          </div>
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
          <ProfileVisual />
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
