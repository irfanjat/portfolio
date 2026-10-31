import {
  Activity,
  ArrowUpRight,
  Cloud,
  Database,
  DollarSign,
  Github,
  GitBranch,
  ShieldCheck,
  Share2,
  type LucideIcon,
} from 'lucide-react'
import { projects } from '../../data/portfolio'
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

const mainProjects = projects.slice(0, 4)

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section-label" aria-hidden="true">// 05. projects</div>
      <h2 id="projects-title" className="section-title">
        Notable Projects
      </h2>
      <div className="section-divider" />
      <div className="projects-grid">
        {mainProjects.map((project) => {
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
    </section>
  )
}
