import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, personal } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="brand" aria-label="Irfan Ali — back to top">
            <span className="prompt">~/</span>
            <span className="brand-name">
              irfan<span className="brand-path">.ali</span>
            </span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={active === id ? 'active' : undefined}
                      aria-current={active === id ? 'true' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  className="nav-cv"
                  href={personal.resume}
                  download="Irfan-Ali-Resume.pdf"
                >
                  cv <Download size={11} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={active === id ? 'active' : undefined}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              )
            })}
            <li>
              <a
                className="mobile-cv"
                href={personal.resume}
                download="Irfan-Ali-Resume.pdf"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                Download CV <Download size={12} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
