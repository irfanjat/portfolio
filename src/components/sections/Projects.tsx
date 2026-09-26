import { ArrowUpRight, CloudCog, GitBranch, ShieldCheck, ServerCog } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const styles = [
  {
    icon: CloudCog,
    text: 'text-violet-300',
    border: 'border-violet-400/30',
    bg: 'bg-violet-500/10',
    glow: 'rgba(139,92,246,0.35)',
  },
  {
    icon: GitBranch,
    text: 'text-cyan-300',
    border: 'border-cyan-400/30',
    bg: 'bg-cyan-500/10',
    glow: 'rgba(34,211,238,0.35)',
  },
  {
    icon: ShieldCheck,
    text: 'text-fuchsia-300',
    border: 'border-fuchsia-400/30',
    bg: 'bg-fuchsia-500/10',
    glow: 'rgba(232,121,249,0.35)',
  },
  {
    icon: ServerCog,
    text: 'text-amber-300',
    border: 'border-amber-400/30',
    bg: 'bg-amber-500/10',
    glow: 'rgba(251,191,36,0.35)',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" label="projects" title="Projects" />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => {
            const s = styles[i % styles.length]
            const Icon = s.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-lg border border-[#30363d] bg-[#161b22] p-6 transition-colors hover:border-[var(--color-purple)]/50 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 rounded-md border ${s.border} ${s.bg} ${s.text} px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider`}>
                    {project.tag}
                  </span>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-md border ${s.border} ${s.bg} ${s.text} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">{project.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-[var(--color-muted)]">{project.subtitle}</p>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[#30363d] bg-[#21262d] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--color-purple)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className={`mt-6 flex flex-wrap items-center gap-x-4 gap-y-1`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80 ${s.text}`}
                  >
                    View on GitHub
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  {('live' in project ? project.live : undefined) && (
                    <a
                      href={'live' in project ? project.live : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-[#30363d] bg-[#21262d] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--color-ink)] transition hover:border-[#39d353]/50 hover:text-[#3fb950]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#39d353]" />
                      Live demo
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/irfanjat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[#30363d] bg-[#21262d] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[#39d353]/50 hover:text-[#3fb950]"
          >
            Explore more on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}