import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import { personal } from '../../data/portfolio'
import { useTypewriter } from '../../hooks/useTypewriter'
import { trackEvent } from '../../lib/analytics'

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
              Remote (PKT, UTC+5) / on-site in Karachi
            </span>
          </div>

          <p className="hero-tag" aria-hidden="true">// devops &amp; cloud engineer</p>
          <h1 id="hero-title" className="hero-title">
            {personal.name}
          </h1>

          <p className="hero-role" aria-label={personal.role}>
            <span className="typed">{typed}</span>
            <span className="cursor" aria-hidden="true" />
          </p>

          <p className="hero-desc">
            I build <strong>AWS infrastructure with Terraform</strong>, deploy to{' '}
            <strong>Kubernetes with GitHub Actions and Argo CD</strong>, and monitor it
            with <strong>Prometheus and Grafana</strong>. DevOps/cloud engineer based in
            Karachi (PKT, UTC+5), open to remote, hybrid and on-site roles.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View selected work <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a
              href={personal.resume}
              className="btn btn-ghost"
              download="Irfan-Ali-Resume.pdf"
              onClick={() => trackEvent('Résumé Download', { source: 'hero' })}
            >
              <Download size={14} aria-hidden="true" /> Résumé
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait">
            <picture>
              <source
                type="image/avif"
                srcSet="/pic-480.avif 480w, /pic-700.avif 700w, /pic-892.avif 892w"
                sizes="(max-width: 900px) 68vw, 340px"
              />
              <source
                type="image/webp"
                srcSet="/pic-480.webp 480w, /pic-700.webp 700w, /pic-892.webp 892w"
                sizes="(max-width: 900px) 68vw, 340px"
              />
              <img
                src="/pic.jpg"
                alt="Portrait of Irfan Ali"
                width={892}
                height={890}
                fetchPriority="high"
                decoding="async"
              />
            </picture>
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
              <div className="t-ok">focus: aws · k8s · gitops</div>
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
