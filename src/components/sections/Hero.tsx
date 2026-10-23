import { ArrowDown, ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { personal, stats } from '../../data/portfolio'
import { useTypewriter } from '../../hooks/useTypewriter'

export function Hero() {
  const typed = useTypewriter(personal.roles)

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-pills">
            <span className="pill">
              <span className="dot" aria-hidden="true" />
              <strong>Open to work</strong>
              <span className="pill-sep">·</span>
              Remote / hybrid
            </span>
            <span className="pill">
              <strong>OCI certified</strong>
              <span className="pill-sep">·</span>
              Foundations Associate
            </span>
            <span className="pill">
              <strong>{stats[1].value}+ projects</strong>
              <span className="pill-sep">·</span>
              AWS · K8s · IaC
            </span>
          </div>

          <p className="hero-tag">// devops &amp; cloud engineer</p>
          <h1 id="hero-title" className="hero-title">
            {personal.name}
          </h1>

          <p className="hero-role" aria-label={personal.role}>
            <span className="typed">{typed}</span>
            <span className="cursor" aria-hidden="true" />
          </p>

          <p className="hero-desc">
            I design <strong>reproducible AWS infrastructure</strong>, ship{' '}
            <strong>GitOps delivery pipelines</strong> and instrument clusters so
            failures are visible before users notice. Based in Karachi, building in
            public one project at a time.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in touch <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a
              href={personal.linkedin}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={14} aria-hidden="true" /> LinkedIn
            </a>
            <a
              href={personal.resume}
              className="btn btn-ghost"
              download="Irfan-Ali-Resume.pdf"
            >
              <Download size={14} aria-hidden="true" /> Resume
            </a>
            <a
              href={personal.github}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait">
            <img
              src="/pic.jpg"
              alt="Portrait of Irfan Ali"
              width={322}
              height={402}
              fetchPriority="high"
              decoding="async"
            />
            <span className="portrait-badge">
              <span className="dot" aria-hidden="true" /> open to opportunities
            </span>
          </div>

          <div className="hero-chips" aria-label="Quick facts">
            <span className="chip">OCI Certified</span>
            <span className="chip">AWS · Terraform</span>
            <span className="chip">Kubernetes</span>
            <span className="chip">GitOps</span>
          </div>

          <div className="terminal">
            <div className="terminal-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>bash — 80×24</span>
            </div>
            <div className="terminal-body" aria-hidden="true">
              <div>
                <span className="t-prompt">irfan@cloud</span>
                <span className="t-dim">:</span>
                <span className="t-path">~</span>
                <span className="t-dim">$</span>{' '}
                <span className="t-cmd">whoami</span>
              </div>
              <div className="t-out">devops · cloud · platform</div>
              <div>
                <span className="t-prompt">irfan@cloud</span>
                <span className="t-dim">:</span>
                <span className="t-path">~</span>
                <span className="t-dim">$</span>{' '}
                <span className="t-cmd">cat status.txt</span>
              </div>
              <div className="t-ok">● available for opportunities</div>
              <div>
                <span className="t-prompt">irfan@cloud</span>
                <span className="t-dim">:</span>
                <span className="t-path">~</span>
                <span className="t-dim">$</span>{' '}
                <span className="t-cmd">./next.sh</span>
                <span className="t-cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to about">
        scroll
        <ArrowDown size={13} aria-hidden="true" />
      </a>
    </section>
  )
}
