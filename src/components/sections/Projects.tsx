import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, GitBranch, ServerCog, ShieldCheck, CloudCog } from 'lucide-react'
import { projects } from '../../data/portfolio'
import { TiltCard } from '../ui/TiltCard'

const colorScheme = [
  { text: 'text-blue-300', border: 'border-blue-500/25', bg: 'bg-blue-500/10', glow: 'rgba(59,130,246,0.12)' },
  { text: 'text-violet-300', border: 'border-violet-500/25', bg: 'bg-violet-500/10', glow: 'rgba(139,92,246,0.12)' },
  { text: 'text-teal-300', border: 'border-teal-500/25', bg: 'bg-teal-500/10', glow: 'rgba(20,184,166,0.12)' },
  { text: 'text-amber-300', border: 'border-amber-500/25', bg: 'bg-amber-500/10', glow: 'rgba(245,158,11,0.12)' },
]

const projectIcons = [CloudCog, GitBranch, ShieldCheck, ServerCog]

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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Notable Projects
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard
                intensity={6}
                glareColor={colorScheme[i % colorScheme.length].glow}
                className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition hover:border-white/[0.16] ${colorScheme[i % colorScheme.length].border}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${colorScheme[i % colorScheme.length].border} ${colorScheme[i % colorScheme.length].bg} ${colorScheme[i % colorScheme.length].text} shadow-lg`}>
                    {(() => {
                      const Icon = projectIcons[i % projectIcons.length]
                      return <Icon className="h-5 w-5" />
                    })()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
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
                      className={`mt-4 inline-flex items-center gap-1.5 text-xs font-medium transition ${colorScheme[i % colorScheme.length].text} hover:brightness-125`}
                    >
                      View on GitHub <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </TiltCard>
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
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/50 transition hover:bg-cyan-500 hover:shadow-cyan-900/50"
          >
            View All on GitHub <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
