import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, FolderGit2, Target } from 'lucide-react'
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
        <span className="font-mono text-[11px] tracking-[0.15em] text-[#39d353]">
          // {project.label} · {project.category}
        </span>
        <h3 className="mt-2 font-display text-2xl font-bold text-[#e6edf3] sm:text-3xl">{project.title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#8b949e]">{project.subtitle}</p>
      </div>

      <div className="mt-6 space-y-5">
        <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-5">
          <div className="flex items-center gap-2 text-[#e3b341]">
            <Target className="h-4 w-4" />
            <span className="font-mono text-[11px] tracking-[0.15em]">THE PROBLEM</span>
          </div>
          <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#c9d1d9]">{project.problem}</p>
        </div>

        <ArchitectureDiagram nodes={project.architecture} />

        <div>
          <p className="mb-2 font-mono text-[11px] tracking-[0.15em] text-[#6e7681]">STACK</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-mono text-[11px] tracking-[0.15em] text-[#6e7681]">THE OUTCOME</p>
          <p className="rounded-lg border border-[#39d353]/30 bg-[#39d353]/5 p-4 text-[13.5px] leading-relaxed text-[#c9d1d9]">
            {project.result}
          </p>
        </div>

        <div>
          <p className="mb-2 font-mono text-[11px] tracking-[0.15em] text-[#6e7681]">LESSONS</p>
          <ul className="space-y-2">
            {project.lessons.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#8b949e]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#39d353]" />
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-[#30363d] pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#39d353] px-5 py-2.5 font-mono text-[13px] font-semibold text-[#0d1117] transition hover:bg-[#46ef63]"
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
              className="inline-flex items-center gap-2 rounded-md border border-[#30363d] px-5 py-2.5 font-mono text-[13px] text-[#8b949e] transition hover:border-[#58a6ff]/50 hover:text-[#e6edf3]"
            >
              <ExternalLink className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <span className="sr-only">
        Mission detail for {project.title}. Close using the button at the top right.
      </span>
    </div>
  )
}

const borderAccents: Record<Project['category'], string> = {
  'CI/CD · GitOps': 'hover:border-[#39d353]/60',
  'Infrastructure as Code': 'hover:border-[#e3b341]/60',
  Observability: 'hover:border-[#f78166]/60',
  'Cloud Cost': 'hover:border-[#58a6ff]/60',
  Security: 'hover:border-[#bc8cff]/60',
}

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          label="work"
          title="Mission logs."
          description="Each entry below is a real repo — built to solve a real infrastructure problem, with the architecture mapped out."
        />

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] tracking-[0.15em] text-[#6e7681]">
            $ ls -la ~/projects
          </span>
          <span className="ml-auto font-mono text-[11px] text-[#39d353]">▲ expand each card</span>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex cursor-pointer flex-col rounded-lg border border-[#30363d] bg-[#161b22] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1c2128] hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] ${borderAccents[project.category]}`}
            >
              <button
                type="button"
                onClick={() => setOpenProject(project)}
                className="flex flex-1 flex-col p-6 text-left"
                aria-label={`Open ${project.title} details`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10.5px] tracking-[0.14em] text-[#8b949e]">
                    {project.category}
                  </span>
                  <span className="rounded-sm bg-[#39d353]/10 px-1.5 py-0.5 font-mono text-[9.5px] tracking-wide text-[#7ee787]">
                    {project.label}
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-[#6e7681] transition group-hover:text-[#39d353]" />
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[#e6edf3] group-hover:text-[#39d353]">
                  {project.title}
                </h3>
                <p className="mt-1.5 font-mono text-[11.5px] text-[#6e7681]">{project.subtitle}</p>

                <p className="mt-4 text-[13px] leading-relaxed text-[#8b949e] line-clamp-3">{project.problem}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-[#30363d] bg-[#21262d] px-1.5 py-0.5 font-mono text-[10.5px] text-[#8b949e]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>

              <div className="flex items-center gap-3 border-t border-[#30363d] px-6 py-3">
                <button
                  type="button"
                  onClick={() => setOpenProject(project)}
                  className="font-mono text-[12px] font-medium text-[#39d353] transition hover:text-[#7ee787]"
                >
                  read the mission →
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="ml-auto inline-flex items-center gap-1.5 font-mono text-[12px] text-[#8b949e] transition hover:text-[#e6edf3]"
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