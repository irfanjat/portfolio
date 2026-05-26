import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ExternalLink, X, Zap } from 'lucide-react'
import { useState } from 'react'
import { moreProjects, type MoreProject } from '../../data/moreProjects'
import { SectionHeading } from '../ui/SectionHeading'

const flowColorMap: Record<string, string> = {
  cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
  violet: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
  emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  amber: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  rose: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
}

function ProjectModal({ project, onClose }: { project: MoreProject; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-4 rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
          <p className="text-xs font-mono uppercase tracking-wider text-violet-400">XYZ Impact</p>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <span className="font-semibold text-cyan-300">Accomplished:</span>{' '}
              <span className="text-slate-300">{project.xyz.accomplished}</span>
            </p>
            <p>
              <span className="font-semibold text-violet-300">By doing:</span>{' '}
              <span className="text-slate-300">{project.xyz.byDoing}</span>
            </p>
            <p>
              <span className="font-semibold text-emerald-300">Resulted in:</span>{' '}
              <span className="text-slate-300">{project.xyz.resultedIn}</span>
            </p>
          </div>
        </div>

        {project.flowSteps && project.flowSteps.length > 0 && (
          <div className="mt-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">Pipeline Flow</p>
            <div className="flex flex-wrap items-center gap-1.5">
              {project.flowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-1.5">
                  <span className={`rounded-lg border px-2.5 py-1 text-[10px] font-mono font-medium ${flowColorMap[step.color] ?? flowColorMap.cyan}`}>
                    {step.label}
                  </span>
                  {i < project.flowSteps!.length - 1 && (
                    <ArrowRight className="h-3 w-3 shrink-0 text-slate-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              {h}
            </li>
          ))}
        </ul>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-300 transition hover:glow-cyan"
        >
          View on GitHub <ExternalLink className="h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  )
}

export function MoreProjects() {
  const [selected, setSelected] = useState<MoreProject | null>(null)

  return (
    <section id="more-projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="More Projects"
          title="Additional DevOps Work"
          subtitle="20+ GitHub repositories — click any project to explore the XYZ impact breakdown."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(project)}
              className="glass group cursor-pointer rounded-2xl p-6 text-left transition hover:border-cyan-400/40 hover:glow-cyan"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-500/70">
                Click to explore
              </span>
              <h3 className="mt-2 font-semibold text-white group-hover:text-cyan-100">
                {project.title}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm text-slate-500">{project.xyz.accomplished}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-400"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-500">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/irfanjat?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            View all 20+ repositories on GitHub <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
