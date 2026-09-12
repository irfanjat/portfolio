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
    edge: 'from-violet-500/60',
  },
  {
    icon: GitBranch,
    text: 'text-cyan-300',
    border: 'border-cyan-400/30',
    bg: 'bg-cyan-500/10',
    glow: 'rgba(34,211,238,0.35)',
    edge: 'from-cyan-500/60',
  },
  {
    icon: ShieldCheck,
    text: 'text-fuchsia-300',
    border: 'border-fuchsia-400/30',
    bg: 'bg-fuchsia-500/10',
    glow: 'rgba(232,121,249,0.35)',
    edge: 'from-fuchsia-500/60',
  },
  {
    icon: ServerCog,
    text: 'text-amber-300',
    border: 'border-amber-400/30',
    bg: 'bg-amber-500/10',
    glow: 'rgba(251,191,36,0.35)',
    edge: 'from-amber-500/60',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="projects"
          title={<>Systems I've <span className="gradient-text">designed & shipped</span></>}
          description="Production-minded builds spanning cost optimization, GitOps, policy-as-code, and AWS infrastructure."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => {
            const s = styles[i % styles.length]
            const Icon = s.icon
            return (
              <motion.a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group glass glass-hover relative flex flex-col overflow-hidden rounded-3xl p-6 sm:p-7"
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${s.edge} via-white/40 to-transparent`} />
                <div
                  className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-90"
                  style={{ background: s.glow }}
                />

                <div className="relative flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border ${s.border} ${s.bg} ${s.text} px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider`}>
                    {project.tag}
                  </span>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${s.border} ${s.bg} ${s.text} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="relative mt-5">
                  <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-slate-500">{project.subtitle}</p>
                </div>

                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className={`relative mt-6 inline-flex items-center gap-1.5 text-xs font-medium ${s.text}`}>
                  View on GitHub
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
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
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition hover:border-violet-400/40 hover:text-white"
          >
            Explore more on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}