import { ArrowUpRight, FileText, Github, Linkedin } from 'lucide-react'
import { personal } from '../../data/portfolio'
import { trackEvent } from '../../lib/analytics'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-label" aria-hidden="true">// 01. about</div>
      <h2 id="about-title" className="section-title">
        About
      </h2>
      <div className="section-divider" />

      <div className="about-grid">
        <div className="about-photo">
          <picture>
            <source
              type="image/avif"
              srcSet="/pic-480.avif 480w, /pic-700.avif 700w"
              sizes="140px"
            />
            <source
              type="image/webp"
              srcSet="/pic-480.webp 480w, /pic-700.webp 700w"
              sizes="140px"
            />
            <img
              src="/pic.jpg"
              alt="Irfan Ali"
              width={150}
              height={150}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        <div className="about-copy reveal">
          <p>
            I&apos;m <strong>{personal.name}</strong>, a DevOps and cloud engineer in
            Karachi. I like the parts most people skip: remote state, reviewable
            pipelines, and alerts that explain what broke.
          </p>
          <p>
            I&apos;m currently finishing a BSc in Computer Science at the University
            of Sindh while building projects around <code>AWS</code>,{' '}
            <code>Terraform</code>, <code>Kubernetes</code> and <code>GitOps</code>.
          </p>
          <p>
            I document the architecture, setup steps and test evidence for each
            project, including the trade-offs behind the implementation.
          </p>

          <p className="about-now">
            <span className="about-now-label">Now</span>
            Building in public at github.com/irfanjat while completing a BSc in
            Computer Science (expected 2027).
          </p>

          <div className="about-links">
            <a
              className="about-link"
              href={personal.resume}
              download="Irfan-Ali-Resume.pdf"
              onClick={() => trackEvent('Resume Download', { source: 'about' })}
            >
              <FileText size={12} aria-hidden="true" /> resume
              <ArrowUpRight size={11} aria-hidden="true" />
            </a>
            <a
              className="about-link"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={12} aria-hidden="true" /> github
              <ArrowUpRight size={11} aria-hidden="true" />
            </a>
            <a
              className="about-link"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={12} aria-hidden="true" /> linkedin
              <ArrowUpRight size={11} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
