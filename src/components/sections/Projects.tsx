import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Database,
  DollarSign,
  Github,
  GitBranch,
  Linkedin,
  ShieldCheck,
  Share2,
  type LucideIcon,
} from 'lucide-react'
import { personal, projects } from '../../data/portfolio'
import { trackEvent } from '../../lib/analytics'

const projectIcons: Record<string, LucideIcon> = {
  'db-operator': Database,
  fizzshare: Share2,
  gitops: GitBranch,
  'terraform-aws': Cloud,
  observability: Activity,
  guardrails: ShieldCheck,
  costguard: DollarSign,
}

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
      <div className="section-label" aria-hidden="true">// 05. projects</div>
      <h2 id="projects-title" className="section-title">
        Notable Projects
      </h2>
      <div className="section-divider" />
      <div className="projects-grid">
        {projects.map((project) => {
          const Icon = projectIcons[project.id] ?? Cloud

          return (
            <article
              className="project-card reveal"
              id={`project-${project.id}`}
              key={project.id}
            >
              <span className="project-icon" aria-hidden="true">
                <Icon size={24} />
              </span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="project-evidence" aria-label="Project evidence">
                {project.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
                  aria-label={`${project.name} repository`}
                  onClick={() =>
                    trackEvent('Project Repo Click', { project: project.id })
                  }
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
                    onClick={() =>
                      trackEvent('Project Config Click', { project: project.id })
                    }
                  >
                    {link.label} <ArrowUpRight size={10} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          )
        })}
      </div>

      <div className="collab reveal">
        <div>
          <div className="collab-badge">
            <span className="dot" aria-hidden="true" />
            entry-level roles · devops &amp; cloud
          </div>
          <h3>
            Hiring for an entry-level DevOps or cloud role?{' '}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s talk <ArrowRight size={14} aria-hidden="true" />
            </a>
          </h3>
          <p>
            Send the role or the platform problem you&apos;re trying to solve. The
            repositories below show how I build, test and document each one.
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
              onClick={() => trackEvent('Project Repo Click', { project: card.title })}
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
