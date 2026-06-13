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
        scrolled ? 'glass-strong py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-white group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 transition group-hover:glow-cyan group-hover:border-cyan-400/60">
            <Terminal className="h-4 w-4 text-cyan-400" />
          </span>
          <span className="hidden sm:inline">{personal.name.split(' ')[0]}<span className="text-cyan-400/80">.devops</span></span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-cyan-400/60" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:glow-cyan hover:border-cyan-400/60 hover:bg-cyan-500/20 md:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
                  className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-xl bg-cyan-500/15 px-4 py-3 text-center text-cyan-300 transition hover:bg-cyan-500/25"
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
