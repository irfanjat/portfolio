import { motion } from 'framer-motion'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { projects } from '../../data/site'
import { moreProjects } from '../../data/moreProjects'
import { ArchitectureDiagram } from '../projects/ArchitectureDiagram'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Production-Grade Work"
          subtitle="Real infrastructure projects demonstrating GitOps, IaC, and observability."
        />
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="card card-hover overflow-hidden rounded-xl"
            >
              <div className="grid lg:grid-cols-5">
                <div className={`lg:col-span-3 p-6 sm:p-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 font-mono text-[10px] text-cyan-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">Project</span>
                    <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Deployed
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] backdrop-blur-lg px-2.5 py-1 text-xs font-medium text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-3 text-center">
                        <div className="font-mono text-sm font-bold text-cyan-300">{m.value}</div>
                        <div className="mt-0.5 text-[9px] uppercase tracking-wider text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-1">
                    {project.achievements.slice(0, 3).map((a) => (
                      <div key={a} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/20"
                    >
                      View on GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-lg px-3.5 py-2 text-xs font-medium text-slate-400 transition hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        Case Study
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className={`lg:col-span-2 flex items-center justify-center border-t border-white/5 bg-white/[0.015] p-6 lg:border-t-0 lg:border-l ${i % 2 === 1 ? 'lg:order-1 lg:border-l-0 lg:border-r' : ''}`}
                >
                  <div className="w-full max-w-sm">
                    <ArchitectureDiagram type={project.diagram} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#more-projects"
            className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 card px-6 py-4 transition-all duration-300 hover:border-slate-600"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </span>
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">More Projects</div>
              <div className="text-xs text-slate-400">View all {moreProjects.length} additional DevOps projects</div>
            </div>
            <span className="font-mono text-xs text-cyan-400 group-hover:text-cyan-300 ml-4">View all →</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
