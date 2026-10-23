import { ArrowRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { personal, projects } from '../../data/portfolio'

const collabCards = [
  {
    category: 'Cloud infrastructure',
    title: 'Multi-AZ AWS with Terraform',
    href: 'https://github.com/irfanjat/terraform-aws-infra',
  },
  {
    category: 'GitOps delivery',
    title: 'Actions + Argo CD pipeline',
    href: 'https://github.com/irfanjat/gitops-cicd-pipeline',
  },
  {
    category: 'Observability',
    title: 'Prometheus, Grafana & Loki',
    href: 'https://github.com/irfanjat/k8s-observability',
  },
  {
    category: 'Cost control',
    title: 'Serverless AWS watchdog',
    href: 'https://github.com/irfanjat/costguard',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section-label">// 05. projects</div>
      <h2 id="projects-title" className="section-title">
        Notable Projects
      </h2>
      <div className="section-divider" />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.id}>
            <span className="project-icon" aria-hidden="true">
              {project.icon}
            </span>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                className="project-link"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={11} aria-hidden="true" /> repository
                <ArrowUpRight size={10} aria-hidden="true" />
              </a>
              {project.extra?.map((link) => (
                <a
                  className="project-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.href}
                >
                  {link.label} <ArrowUpRight size={10} aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="collab reveal">
        <div>
          <div className="collab-badge">
            <span className="dot" aria-hidden="true" />
            architecture &amp; technical collaboration · cloud devops
          </div>
          <h3>
            Building something that needs reliable delivery?{' '}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s talk <ArrowRight size={14} aria-hidden="true" />
            </a>
          </h3>
          <p>
            I&apos;m available for junior DevOps and cloud roles, technical
            collaboration and project discussions. Happy to walk through any
            repository, architecture decision or the trade-offs behind it.
          </p>
        </div>
        <div className="collab-cta">
          <a
            href={personal.linkedin}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={14} aria-hidden="true" /> Connect on LinkedIn
          </a>
        </div>

        <div className="collab-cards">
          {collabCards.map((card) => (
            <a
              className="collab-card"
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              key={card.href}
            >
              <div className="collab-cat">{card.category}</div>
              <div className="collab-title">{card.title}</div>
              <span className="collab-link">
                explore repo <ArrowUpRight size={9} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
