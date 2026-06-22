import { motion } from 'framer-motion'
import { Menu, Terminal, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, personal } from '../../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map((l) => l.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-2.5 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 font-mono text-sm font-semibold text-white group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 transition group-hover:glow-cyan group-hover:border-cyan-400/60">
            <Terminal className="h-4 w-4 text-cyan-400" />
          </span>
          <span className="hidden sm:inline">{personal.name.split(' ')[0]}<span className="text-cyan-400/80">.devops</span></span>
          <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[10px] text-emerald-400/80 font-mono">
            <span className="status-dot">
              <span className="ping bg-emerald-400" />
              <span className="solid bg-emerald-400" />
            </span>
            Active
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  active === link.href.slice(1)
                    ? 'text-cyan-300 bg-cyan-500/5'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-white/[0.02]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:glow-cyan hover:border-cyan-400/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Hire Me
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 hover:text-cyan-300 hover:bg-white/5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="glass-strong border-t border-slate-700/50 md:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-xl bg-gradient-to-r from-cyan-500/15 to-violet-500/15 px-4 py-3 text-center text-sm text-cyan-300 transition hover:from-cyan-500/25 hover:to-violet-500/25"
                onClick={() => setOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
