import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
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
        <nav className="mx-auto flex h-[56px] w-full max-w-5xl items-center justify-between px-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-2 font-mono text-[13.5px] font-bold tracking-[0.18em] text-[#e6edf3]">
            <span>IRFAN ALI</span>
            <span className="inline-block h-[13px] w-[7px] bg-[#39d353] group-hover:animate-blink" aria-hidden="true" />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[12.5px] tracking-wide transition-colors ${
                    isActive ? 'text-[#39d353]' : 'text-[#8b949e] hover:text-[#c9d1d9]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-8 w-8 items-center justify-center rounded-md text-[#8b949e] transition hover:text-[#e6edf3] sm:flex"
            >
              <SiGithub className="h-[15px] w-[15px]" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden h-8 w-8 items-center justify-center rounded-md text-[#8b949e] transition hover:text-[#e6edf3] sm:flex"
            >
              <FaLinkedinIn className="h-[14px] w-[14px]" />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md border border-[#30363d] px-3.5 py-1.5 font-mono text-[12px] font-medium text-[#8b949e] transition hover:border-[#39d353]/60 hover:text-[#e6edf3] sm:block"
            >
              Resume
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
            className="fixed inset-x-0 top-[56px] z-40 md:hidden"
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
                <div className="mt-1 flex items-center gap-2 px-4 pt-1">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    aria-label="GitHub"
                    className="glass-soft flex h-10 flex-1 items-center justify-center gap-2 rounded-md font-mono text-sm text-slate-200"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    aria-label="LinkedIn"
                    className="glass-soft flex h-10 flex-1 items-center justify-center gap-2 rounded-md font-mono text-sm text-slate-200"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
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