import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'
import { navLinks, personal } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'

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
          <a href="#home" className="flex items-center gap-2 font-mono text-sm font-bold tracking-[0.05em]">
            <Zap className="h-4 w-4 shrink-0 text-[#39d353]" aria-hidden="true" />
            <span className="text-[#39d353]">~/{personal.firstName.toLowerCase()}</span>
          </a>

          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[13px] transition-colors ${
                    isActive ? 'text-[#39d353]' : 'text-[#c9d1d9] hover:text-[#e6edf3]'
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
              className="hidden rounded-md border border-[#30363d] px-4 py-2 font-mono text-[12.5px] font-medium text-[#c9d1d9] transition hover:border-[#39d353]/60 hover:text-white md:block"
            >
              Resume
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="glass-soft flex h-8 w-8 items-center justify-center rounded-md text-slate-200 md:hidden"
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
                    className="rounded-md px-4 py-3 font-mono text-sm text-slate-200 hover:bg-white/5"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-md border border-[#30363d] px-4 py-3 text-center font-mono text-sm text-[#c9d1d9]"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}