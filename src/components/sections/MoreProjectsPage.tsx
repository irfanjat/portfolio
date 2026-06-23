import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ExternalLink, GitBranch } from 'lucide-react'
import { moreProjects } from '../../data/moreProjects'

const flowColors: Record<string, string> = {
  cyan: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-300',
  violet: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-300',
  emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  amber: 'border-amber-500/20 bg-amber-500/10 text-amber-300',
  rose: 'border-rose-500/20 bg-rose-500/10 text-rose-300',
}

export function MoreProjectsPage() {
  const handleBack = () => {
    window.location.hash = ''
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-surface px-4 py-2 text-sm text-slate-400 transition hover:text-cyan-400 hover:border-cyan-500/20 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>

          <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">More Projects</h1>
          <p className="mt-2 text-slate-400">Additional DevOps and cloud infrastructure projects.</p>
        </motion.div>

        <div className="space-y-6">
          {moreProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="card card-hover overflow-hidden rounded-xl"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 font-mono text-[10px] text-cyan-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-lg font-bold text-slate-100 truncate">{project.title}</h2>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                        <GitBranch className="h-3 w-3" />
                        {project.github.split('/').pop()}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 mb-4">
                      <div className="rounded-lg border border-slate-800 bg-slate-800/30 p-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1">Accomplished</div>
                        <p className="text-xs text-slate-400 leading-relaxed">{project.xyz.accomplished}</p>
                      </div>
                      <div className="rounded-lg border border-slate-800 bg-slate-800/30 p-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 mb-1">How</div>
                        <p className="text-xs text-slate-400 leading-relaxed">{project.xyz.byDoing}</p>
                      </div>
                      <div className="rounded-lg border border-slate-800 bg-slate-800/30 p-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-1">Result</div>
                        <p className="text-xs text-slate-400 leading-relaxed">{project.xyz.resultedIn}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-4">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {project.architecture && (
                      <div className="mb-4">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">Architecture</div>
                        <div className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5">
                          <span className="text-xs text-slate-400 font-mono">{project.architecture}</span>
                        </div>
                      </div>
                    )}

                    {project.flowSteps && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        {project.flowSteps.map((step, si) => (
                          <span key={step.label} className="flex items-center gap-1">
                            <span
                              className={`rounded-md border px-2.5 py-1 text-[11px] font-mono transition ${flowColors[step.color] ?? flowColors.cyan}`}
                            >
                              {step.label}
                            </span>
                            {si < project.flowSteps!.length - 1 && (
                              <span className="text-slate-600 text-xs">→</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/20"
                    >
                      View on GitHub <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-surface px-6 py-3 text-sm font-medium text-slate-400 transition hover:border-slate-600 hover:text-slate-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
        </motion.div>
      </div>
    </div>
  )
}
