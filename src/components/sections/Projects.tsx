import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, FolderGit2 } from 'lucide-react'
import { useState } from 'react'
import { projects, type Project } from '../../data/portfolio'
import { ArchitectureDiagram } from '../ui/ArchitectureDiagram'
import { Modal } from '../ui/Modal'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="p-6 sm:p-8">
      <div className="pr-10">
        <span className="font-mono text-[11px] tracking-[0.12em] text-[var(--color-green)]">{project.tag}</span>
        <h3 className="mt-2 font-display text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">{project.title}</h3>
        <p className="mt-1 font-mono text-[13px] text-[var(--color-muted)]">{project.subtitle}</p>
      </div>

      <div className="mt-6 space-y-5">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
          <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--color-green)]">PROBLEM</p>
          <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--color-ink)]">{project.problem}</p>
        </div>

        <div>
          <p className="mb-2 font-mono text-[11px] tracking-[0.12em] text-[var(--color-slate-500)]">ARCHITECTURE</p>
          <ArchitectureDiagram nodes={project.architecture} />
        </div>

        <div>
          <p className="mb-2 font-mono text-[11px] tracking-[0.12em] text-[var(--color-slate-500)]">STACK</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-mono text-[11px] tracking-[0.12em] text-[var(--color-slate-500)]">RESULT</p>
          <p className="rounded-lg border border-[var(--color-green)]/30 bg-[var(--color-green)]/5 p-4 text-[13.5px] leading-relaxed text-[var(--color-ink)]">
            {project.result}
          </p>
        </div>

        <div>
          <p className="mb-2 font-mono text-[11px] tracking-[0.12em] text-[var(--color-slate-500)]">LESSONS</p>
          <ul className="space-y-2">
            {project.lessons.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[var(--color-muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-green)]" />
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green px-5 py-2.5 text-[13px] transition"
          >
            <FolderGit2 className="h-4 w-4" />
            View source
          </a>
          {project.extraLinks?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-2.5 font-mono text-[13px] text-[var(--color-muted)] transition hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-ink)]"
            >
              <ExternalLink className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const borderAccents: Record<Project['category'], string> = {
  'CI/CD · GitOps': 'hover:border-[var(--color-green)]/60',
  'Infrastructure as Code': 'hover:border-[var(--color-green)]/60',
  Observability: 'hover:border-[var(--color-orange-400)]/60',
  'Cloud Cost': 'hover:border-[var(--color-cyan)]/60',
  Security: 'hover:border-[var(--color-purple)]/60',
}

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" label="projects" title="Notable Projects" />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex cursor-pointer flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-bg)] hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] ${borderAccents[project.category]}`}
            >
              <button
                type="button"
                onClick={() => setOpenProject(project)}
                className="flex flex-1 flex-col p-6 text-left"
                aria-label={`Open ${project.title} details`}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md border border-[var(--color-purple)]/30 bg-[var(--color-purple)]/10 px-3 py-1 font-mono text-[10px] font-medium tracking-wider text-[var(--color-slate-300)] uppercase">
                    {project.tag}
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-[var(--color-slate-500)] transition group-hover:text-[var(--color-green)]" />
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-green)]">
                  {project.title}
                </h3>
                <p className="mt-1.5 font-mono text-[11.5px] text-[var(--color-slate-500)]">{project.subtitle}</p>

                <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-muted)] line-clamp-3">{project.problem}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg2)] px-1.5 py-0.5 font-mono text-[10.5px] text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>

              <div className="flex items-center gap-3 border-t border-[var(--color-border)] px-6 py-3">
                <button
                  type="button"
                  onClick={() => setOpenProject(project)}
                  className="font-mono text-[12px] font-medium text-[var(--color-green)] transition hover:text-[var(--color-green-300)]"
                >
                  View details →
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="ml-auto inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
                >
                  <FolderGit2 className="h-3.5 w-3.5" /> source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Modal
        open={!!openProject}
        onClose={() => setOpenProject(null)}
        label={openProject ? `${openProject.title} details` : 'Project details'}
      >
        {openProject && <ProjectDetail project={openProject} />}
      </Modal>
    </section>
  )
}