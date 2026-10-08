import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navLinks, personal } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'

function Logo() {
  return (
    <span className="logo-name font-display text-[20px] font-black leading-none tracking-tight">
      Irfan Ali
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [hot, setHot] = useState(false)
  const active = useActiveSection()
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 40], ['rgba(18,22,32,0.5)', 'rgba(18,22,32,0.92)'])
  const shadow = useTransform(
    scrollY,
    (v) => (v > 40 ? '0 12px 30px -16px rgba(0,0,0,0.9)' : '0 0px 0px rgba(0,0,0,0)'),
  )
  const timer = useRef<number | undefined>(undefined)

  useMotionValueEvent(scrollY, 'change', () => {
    setHot(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setHot(false), 450)
  })

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, backdropFilter: 'blur(12px)', boxShadow: shadow }}
        className="fixed inset-x-0 top-0 z-50 border-b border-[#323845]"
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
                  className={`relative text-[13.5px] font-medium transition-colors ${
                    isActive ? 'text-[#11e956]' : 'text-[#919dab]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`nav-diamond${hot ? ' nav-diamond--hot' : ''}`}
                      aria-hidden="true"
                    />
                  )}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md border border-[#323845] px-4 py-2 text-[13px] font-medium text-[#919dab] transition hover:border-[#42a0ed]/50 hover:text-white md:block"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="btn-green hidden px-4 py-2 text-[13px] transition md:block"
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
            <div className="border-b border-[#323845] bg-[#181b26] px-4 py-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`relative rounded-md px-4 py-3 text-sm font-medium hover:bg-white/5 ${
                      active === link.href.replace('#', '') ? 'text-[#11e956]' : 'text-slate-200'
                    }`}
                  >
                    {link.label}
                    {active === link.href.replace('#', '') && (
                      <span
                        className={`nav-diamond${hot ? ' nav-diamond--hot' : ''}`}
                        aria-hidden="true"
                      />
                    )}
                  </motion.a>
                ))}
                <div className="mt-1">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-green flex items-center justify-center px-4 py-3 text-center text-sm"
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