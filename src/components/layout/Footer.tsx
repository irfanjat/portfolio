import { ArrowUp, Download, Github, Linkedin, Mail } from 'lucide-react'
import { navLinks, personal } from '../../data/portfolio'
import { trackEvent } from '../../lib/analytics'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="brand" aria-label="Irfan Ali — back to top">
              <span className="prompt">~/</span>
              <span className="brand-name">
                irfan<span className="brand-path">.ali</span>
              </span>
            </a>
            <p className="footer-desc">
              DevOps and cloud engineer focused on reproducible infrastructure,
              GitOps delivery and observability.
            </p>
          </div>

          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#faq">faq</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Connect</h3>
            <ul>
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={11} aria-hidden="true" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={11} aria-hidden="true" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${personal.email}`}>
                  <Mail size={11} aria-hidden="true" /> Email
                </a>
              </li>
              <li>
                <a
                  href={personal.resume}
                  download="Irfan-Ali-Resume.pdf"
                  onClick={() => trackEvent('Résumé Download', { source: 'footer' })}
                >
                  <Download size={11} aria-hidden="true" /> Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {personal.name}.
          </span>
          <span>
            <a href="#hero">
              Back to top <ArrowUp size={10} aria-hidden="true" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
