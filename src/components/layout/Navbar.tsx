import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { useState } from 'react'
import { navLinks, personal } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <>
      <motion.header
        style={{ opacity }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav className="glass flex w-full max-w-3xl items-center justify-between gap-3 rounded-2xl py-2 pl-3 pr-2">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-600 font-mono text-sm font-bold text-white">
              {personal.initials}
              <span className="absolute -inset-1 -z-10 rounded-xl bg-violet-600/40 blur-md" />
            </div>
            <span className="hidden font-display text-sm font-semibold text-white sm:block">
              Irfan Ali
            </span>
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-glass"
                      className="absolute inset-0 -z-10 rounded-xl border border-ai-violet/25 bg-gradient-to-r from-violet-500/15 to-cyan-500/15 backdrop-blur-md"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="glass-soft flex h-9 w-9 items-center justify-center rounded-xl text-emerald-300 transition hover:border-emerald-400/40 hover:text-emerald-200"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_24px_-6px_rgba(139,92,246,0.7)] transition hover:brightness-110 md:block"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="glass-soft flex h-9 w-9 items-center justify-center rounded-xl text-slate-200 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-20 z-40 md:hidden"
          >
            <div className="glass flex flex-col gap-1.5 rounded-2xl p-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-1 grid grid-cols-2 gap-2">
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-center text-sm font-semibold text-emerald-300"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}