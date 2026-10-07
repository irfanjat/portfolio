import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks, personal } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#39d353] font-mono text-[13px] font-black text-[#0d1117] shadow-[0_0_14px_rgba(57,211,83,0.45)]">
        IA
      </span>
      <span className="font-display text-[17px] font-extrabold tracking-tight text-white">
        Irfan <span className="text-[#39d353]">Ali</span>
      </span>
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 40], ['rgba(13,17,23,0.5)', 'rgba(13,17,23,0.92)'])

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, backdropFilter: 'blur(12px)' }}
        className="fixed inset-x-0 top-0 z-50 border-b border-[#30363d]"
      >
        <nav className="mx-auto flex h-[60px] w-full max-w-5xl items-center justify-between px-4 lg:px-8">
          <a href="#home" aria-label="Irfan Ali — home">
            <Logo />
          </a>

          <div className="hidden items-center gap-6 md:flex lg:gap-7">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[13.5px] font-medium transition-colors ${
                    isActive ? 'text-[#39d353]' : 'text-[#8b949e] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md border border-[#30363d] px-4 py-2 text-[13px] font-medium text-[#8b949e] transition hover:border-[#58a6ff]/50 hover:text-white md:block"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="hidden rounded-md bg-[#39d353] px-4 py-2 text-[13px] font-semibold text-[#0d1117] transition hover:bg-[#46ef63] md:block"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="glass-soft flex h-8 w-8 items-center justify-center rounded-md text-slate-200 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
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
            className="fixed inset-x-0 top-[60px] z-40 md:hidden"
          >
            <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-md px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-1">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center rounded-md bg-[#39d353] px-4 py-3 text-center text-sm font-semibold text-[#0d1117]"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}