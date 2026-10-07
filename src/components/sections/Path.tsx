import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Map, Terminal } from 'lucide-react'
import { useState } from 'react'
import { roadmap, type RoadmapState } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const stateStyles: Record<RoadmapState, { text: string; border: string; dot: string; label: string }> = {
  LEARNED: {
    text: 'text-[#39d353]',
    border: 'border-[#39d353]/50',
    dot: 'bg-[#39d353] shadow-[0_0_10px_rgba(57,211,83,0.6)]',
    label: 'LEARNED',
  },
  PRACTICING: {
    text: 'text-[#58a6ff]',
    border: 'border-[#58a6ff]/50',
    dot: 'bg-[#58a6ff] shadow-[0_0_10px_rgba(88,166,255,0.6)]',
    label: 'PRACTICING',
  },
  BUILDING: {
    text: 'text-[#e3b341]',
    border: 'border-[#e3b341]/50',
    dot: 'bg-[#e3b341] shadow-[0_0_10px_rgba(227,179,65,0.6)]',
    label: 'BUILDING',
  },
  PROJECT: {
    text: 'text-[#bc8cff]',
    border: 'border-[#bc8cff]/50',
    dot: 'bg-[#bc8cff] shadow-[0_0_10px_rgba(188,140,255,0.6)]',
    label: 'PROJECT',
  },
}

export function Path() {
  const [open, setOpen] = useState<number | null>(1)

  return (
    <section id="path" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          label="path"
          title="Learning Path"
          description="How I'm moving from foundations to production — every step is a skill I've worked on, with a repo or course behind it."
        />
        <p className="mb-8 inline-flex items-center gap-2 font-mono text-[11.5px] text-[#6e7681]">
          <Map className="h-3.5 w-3.5 text-[#39d353]" />
          Click a node to see details
        </p>

        <ol className="relative ml-3 border-l border-[#30363d] pl-6 sm:ml-6">
          {roadmap.map((node, i) => {
            const s = stateStyles[node.state]
            const expanded = open === node.step
            return (
              <li key={node.step} className="relative pb-4">
                <span
                  className={`absolute -left-[31px] top-[6px] h-3 w-3 rounded-full sm:-left-[37px] ${s.dot}`}
                  aria-hidden="true"
                />
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className={`rounded-lg border bg-[#161b22] transition-colors ${expanded ? s.border : 'border-[#30363d] hover:border-[#8b949e]/60'}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : node.step)}
                    aria-expanded={expanded}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left"
                  >
                    <span className="font-mono text-[11px] text-[#6e7681]">
                      {String(node.step).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[15px] font-bold text-[#e6edf3]">{node.title}</span>
                      <span className="block truncate font-mono text-[11px] text-[#6e7681]">{node.domain}</span>
                    </span>
                    <span className={`hidden shrink-0 rounded-sm border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.1em] sm:inline ${s.text} ${s.border}`}>
                      {s.label}
                    </span>
                    <span className="shrink-0 text-[#8b949e]">
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="border-t border-[#30363d] px-4 py-4">
                          <div className="flex flex-wrap items-center gap-2 pb-3">
                            <span className={`font-mono text-[10px] tracking-[0.14em] ${s.text}`}>[{s.label}]</span>
                            {node.tech.map((t) => (
                              <span
                                key={t}
                                className="rounded-sm border border-[#30363d] bg-[#21262d] px-1.5 py-0.5 font-mono text-[10.5px] text-[#8b949e]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <p className="text-[13px] leading-relaxed text-[#c9d1d9]">{node.summary}</p>
                          {node.links && node.links.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-3">
                              {node.links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#58a6ff] transition hover:text-[#79c0ff]"
                                >
                                  <Terminal className="h-3.5 w-3.5" />
                                  {link.label} ↗
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}