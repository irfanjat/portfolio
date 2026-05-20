import { motion } from 'framer-motion'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { projects } from '../../data/site'
import { ArchitectureDiagram } from '../projects/ArchitectureDiagram'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Production-Grade Portfolio Work"
          subtitle="Real infrastructure projects demonstrating GitOps, IaC, and observability."
        />

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="glass-strong overflow-hidden rounded-3xl border border-slate-700/40"
            >
              <div className={`grid gap-0 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`p-8 sm:p-10 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="font-mono text-xs text-cyan-400/80">PROJECT 0{i + 1}</span>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-slate-600/50 bg-slate-800/50 px-3 py-1 text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-3 text-center"
                      >
                        <div className="font-mono text-lg font-bold text-cyan-300">{m.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500">{m.label}</div>
                        <div className="text-[10px] text-slate-600">{m.sub}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-8 space-y-2">
                    {project.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
                  >
                    View on GitHub <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div
                  className={`flex items-center justify-center border-t border-slate-700/40 bg-slate-900/40 p-8 lg:border-t-0 lg:border-l ${
                    i % 2 === 1 ? 'lg:order-1 lg:border-l-0 lg:border-r' : ''
                  }`}
                >
                  <div className="w-full max-w-md">
                    <ArchitectureDiagram type={project.diagram} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
