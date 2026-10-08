import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navLinks, personal } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../hooks/useTheme'

function Logo() {
  return (
    <span className="logo-name text-[20px] leading-none tracking-tight text-[var(--color-cyan-300)] text-[var(--color-cyan-300)]">Irfan Ali</span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [hot, setHot] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()
  const { scrollY } = useScroll()
  const { theme, toggle } = useTheme()
  const timer = useRef<number | undefined>(undefined)

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 40)
    setHot(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setHot(false), 450)
  })

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <>
      <motion.header className={`site-header fixed inset-x-0 top-0 z-50${scrolled ? ' is-scrolled' : ''}`}>
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
                  className={`relative text-[13.5px] transition-colors ${
                    isActive
                      ? 'font-semibold text-[var(--color-ink)]'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
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
            <button
              type="button"
              onClick={toggle}
              className="icon-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title="Toggle light / dark theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md border border-[var(--color-border)] px-4 py-2 text-[13px] font-medium text-[var(--color-muted)] transition hover:border-[color-mix(in_srgb,var(--color-cyan)_60%,transparent)] hover:text-[var(--color-ink)] md:block"
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
              className="icon-btn md:hidden"
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
            <div className="border-b border-[var(--color-border)] bg-[var(--color-bg2)] px-4 py-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`relative rounded-md px-4 py-3 text-sm transition-colors hover:bg-[var(--color-slate-100)] ${
                      active === link.href.replace('#', '')
                        ? 'font-semibold text-[var(--color-ink)]'
                        : 'text-[var(--color-muted)]'
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
