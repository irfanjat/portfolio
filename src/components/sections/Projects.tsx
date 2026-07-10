import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { projects } from '../../data/portfolio'
import { ArchitectureDiagram } from '../projects/ArchitectureDiagram'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Projects"
          title="Production-Grade Work"
          subtitle="Real infrastructure projects demonstrating GitOps, IaC, and observability."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className={`p-6 sm:p-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 font-mono text-[10px] text-cyan-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Deployed
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-slate-100">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-3 text-center"
                        >
                          <div className="font-mono text-sm font-bold text-cyan-300">{m.value}</div>
                          <div className="mt-0.5 text-[9px] uppercase tracking-wider text-slate-500">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <ul className="mt-5 space-y-2">
                      {project.achievements.slice(0, 3).map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      View on GitHub
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div
                    className={`flex items-center justify-center border-t border-white/5 bg-white/[0.01] p-6 sm:p-8 lg:border-t-0 lg:border-l ${i % 2 === 1 ? 'lg:order-1 lg:border-l-0 lg:border-r' : ''}`}
                  >
                    <ArchitectureDiagram type={project.diagram} />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#more-projects"
            className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3 text-sm font-semibold text-slate-200"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
