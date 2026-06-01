import { motion } from 'framer-motion'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { projects } from '../../data/site'
import { ArchitectureDiagram } from '../projects/ArchitectureDiagram'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Projects"
          title="Production-Grade Work"
          subtitle="Real infrastructure projects demonstrating GitOps, IaC, and observability."
        />
        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="glass-strong overflow-hidden rounded-2xl border border-slate-700/40 transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[0_0_40px_rgba(0,217,255,0.06)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className={`p-7 sm:p-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10 font-mono text-[11px] text-cyan-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400/60">
                      Project
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-slate-600/40 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-3 text-center transition hover:border-cyan-400/20 hover:bg-cyan-500/10"
                      >
                        <div className="font-mono text-base font-bold text-cyan-300">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-1.5">
                    {project.achievements.slice(0, 4).map((a) => (
                      <div key={a} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400/70" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)]"
                  >
                    View on GitHub
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div
                  className={
                    'flex items-center justify-center border-t border-slate-700/40 bg-slate-900/30 p-6 lg:border-t-0 lg:border-l ' +
                    (i % 2 === 1 ? 'lg:order-1 lg:border-l-0 lg:border-r' : '')
                  }
                >
                  <div className="w-full max-w-sm">
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