import { ArrowUpRight, FileText, Github, Linkedin } from 'lucide-react'
import { personal, stats } from '../../data/portfolio'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-label">// 01. about</div>
      <h2 id="about-title" className="section-title">
        Who I Am
      </h2>
      <div className="section-divider" />

      <div className="about-grid">
        <div className="about-photo">
          <img
            src="/pic.jpg"
            alt="Irfan Ali"
            width={150}
            height={150}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about-copy reveal">
          <p>
            I&apos;m <strong>{personal.name}</strong> — a DevOps and cloud engineer
            based in {personal.location}. I like the unglamorous parts of the job:
            making infrastructure repeatable, making deployments boring, and making
            failures easy to see.
          </p>
          <p>
            I&apos;m currently finishing a BSc in Computer Science at the University
            of Sindh while building projects around <code>AWS</code>,{' '}
            <code>Terraform</code>, <code>Kubernetes</code> and <code>GitOps</code>.
            Each project is documented end to end, from the architecture decision to
            the command that proves it works.
          </p>
          <p>
            I care about <strong>clear trade-offs</strong>, least-privilege access and
            evidence over claims. The repositories linked here contain the actual
            Terraform, workflows and manifests — including the parts that did not
            work the first time.
          </p>

          <div className="about-links">
            <a
              className="about-link"
              href={personal.resume}
              download="Irfan-Ali-Resume.pdf"
            >
              <FileText size={12} aria-hidden="true" /> résumé
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

        <div className="about-stats reveal">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-value">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
