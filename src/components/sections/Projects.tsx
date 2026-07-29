import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '../../data/portfolio'

const colorScheme = [
  { from: 'from-orange-500/20', to: 'to-orange-600/10', text: 'text-orange-300', border: 'border-orange-500/20', bg: 'bg-orange-500/10' },
  { from: 'from-green-500/20', to: 'to-green-600/10', text: 'text-green-300', border: 'border-green-500/20', bg: 'bg-green-500/10' },
  { from: 'from-purple-500/20', to: 'to-purple-600/10', text: 'text-purple-300', border: 'border-purple-500/20', bg: 'bg-purple-500/10' },
  { from: 'from-cyan-500/20', to: 'to-cyan-600/10', text: 'text-cyan-300', border: 'border-cyan-500/20', bg: 'bg-cyan-500/10' },
]

const projectIcons = ['🏗️', '🚀', '⚙️', '📈']

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14"
        >
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
            // 03. projects
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Notable Projects</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:border-white/[0.12]"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br border ${colorScheme[i % colorScheme.length].border} ${colorScheme[i % colorScheme.length].from} ${colorScheme[i % colorScheme.length].to} text-base`}>
                  {projectIcons[i]}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className={`rounded-lg border px-2.5 py-0.5 text-[11px] font-medium ${colorScheme[i % colorScheme.length].bg} ${colorScheme[i % colorScheme.length].text} ${colorScheme[i % colorScheme.length].border}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-blue-400/80 transition hover:text-blue-300"
                  >
                    View on GitHub <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/irfanjat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-500/30 hover:bg-blue-500/5"
          >
            View All on GitHub <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
