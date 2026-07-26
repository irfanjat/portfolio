import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, ExternalLink, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { moreProjects } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'

const flowColorMap: Record<string, string> = {
  blue: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  orange: 'border-orange-500/30 bg-orange-500/10 text-orange-300',
  green: 'border-green-500/30 bg-green-500/10 text-green-300',
  yellow: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300',
  red: 'border-red-500/30 bg-red-500/10 text-red-300',
}

function ProjectCard({ project, index }: { project: (typeof moreProjects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <GlassCard className="overflow-hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full p-6 text-left sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400/70">
                Project {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-100">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-5 w-5 shrink-0 text-slate-500" />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/5 px-6 pb-6 sm:px-8 sm:pb-8">
                {project.flowSteps && (
                  <div className="mb-5 flex flex-wrap items-center gap-1.5">
                    {project.flowSteps.map((step, i) => (
                      <span key={step.label} className="flex items-center gap-1.5">
                        <span
                          className={`rounded-md border px-2 py-0.5 font-mono text-[10px] ${flowColorMap[step.color] ?? flowColorMap.blue}`}
                        >
                          {step.label}
                        </span>
                        {i < project.flowSteps!.length - 1 && (
                          <span className="text-slate-600">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-green-400">Accomplished</p>
                    <p className="mt-1 text-sm text-slate-400">{project.xyz.accomplished}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-orange-400">By doing</p>
                    <p className="mt-1 text-sm text-slate-400">{project.xyz.byDoing}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-blue-400">Resulted in</p>
                    <p className="mt-1 text-sm text-slate-400">{project.xyz.resultedIn}</p>
                  </div>
                </div>

                {project.architecture && (
                  <p className="mt-4 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 font-mono text-[10px] text-slate-500">
                    {project.architecture}
                  </p>
                )}

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-xs text-slate-500">• {h}</li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  )
}

export function MoreProjects() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return moreProjects
    return moreProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)),
    )
  }, [query])

  return (
    <div className="min-h-screen">
      <div className="section-padding pt-28">
        <div className="mx-auto max-w-4xl">
          <a
            href="#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to featured projects
          </a>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
              All Projects
            </span>
            <h1 className="mt-3 text-3xl font-bold text-slate-100 sm:text-4xl">
              {moreProjects.length} Additional Projects
            </h1>
            <p className="mt-3 text-slate-400">
              CI/CD pipelines, cloud deployments, security tooling, and infrastructure automation.
            </p>
          </motion.div>

          <div className="relative mt-8">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by title or technology..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="glass-input w-full rounded-xl py-3 pl-11 pr-4 text-sm"
            />
          </div>

          <div className="mt-8 space-y-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
            {filtered.length === 0 && (
              <p className="py-12 text-center text-slate-500">No projects match your search.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
