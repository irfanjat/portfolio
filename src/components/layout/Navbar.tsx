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
          scrolled ? 'bg-surface/90 backdrop-blur-md border-b border-slate-800 py-2.5 shadow-sm shadow-black/20' : 'bg-transparent py-4'
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 font-mono text-sm font-semibold text-slate-200 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-surface">
            <Terminal className="h-4 w-4 text-cyan-400" />
          </span>
          <span className="hidden sm:inline">{personal.name.split(' ')[0]}<span className="text-cyan-400">.devops</span></span>
          <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
                      ? 'text-cyan-300 bg-cyan-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
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
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-500/30"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Hire Me
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 hover:text-slate-300 hover:bg-slate-800 md:hidden"
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
          className="bg-surface border-t border-slate-800 md:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-lg bg-cyan-500/10 px-4 py-3 text-center text-sm text-cyan-300 transition hover:bg-cyan-500/20"
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
