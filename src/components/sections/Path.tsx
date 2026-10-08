import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Map, Terminal } from 'lucide-react'
import { useState } from 'react'
import { roadmap, type RoadmapState } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const stateStyles: Record<RoadmapState, { text: string; border: string; dot: string; label: string }> = {
  LEARNED: {
    text: 'text-[#11e956]',
    border: 'border-[#11e956]/50',
    dot: 'bg-[#11e956] shadow-[0_0_10px_rgba(17,233,86,0.6)]',
    label: 'LEARNED',
  },
  PRACTICING: {
    text: 'text-[#42a0ed]',
    border: 'border-[#42a0ed]/50',
    dot: 'bg-[#42a0ed] shadow-[0_0_10px_rgba(66,160,237,0.6)]',
    label: 'PRACTICING',
  },
  BUILDING: {
    text: 'text-[#11e956]',
    border: 'border-[#11e956]/50',
    dot: 'bg-[#11e956] shadow-[0_0_10px_rgba(17,233,86,0.6)]',
    label: 'BUILDING',
  },
  PROJECT: {
    text: 'text-[#8794c0]',
    border: 'border-[#8794c0]/50',
    dot: 'bg-[#8794c0] shadow-[0_0_10px_rgba(135,148,192,0.6)]',
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
        <p className="mb-8 inline-flex items-center gap-2 font-mono text-[11.5px] text-[#6e7888]">
          <Map className="h-3.5 w-3.5 text-[#11e956]" />
          Click a node to see details
        </p>

        <ol className="relative ml-3 border-l border-[#323845] pl-6 sm:ml-6">
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
                  className={`rounded-lg border bg-[#181b26] transition-colors ${expanded ? s.border : 'border-[#323845] hover:border-[#919dab]/60'}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : node.step)}
                    aria-expanded={expanded}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left"
                  >
                    <span className="font-mono text-[11px] text-[#6e7888]">
                      {String(node.step).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[15px] font-bold text-[#dde3eb]">{node.title}</span>
                      <span className="block truncate font-mono text-[11px] text-[#6e7888]">{node.domain}</span>
                    </span>
                    <span className={`hidden shrink-0 rounded-sm border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.1em] sm:inline ${s.text} ${s.border}`}>
                      {s.label}
                    </span>
                    <span className="shrink-0 text-[#919dab]">
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
                        <div className="border-t border-[#323845] px-4 py-4">
                          <div className="flex flex-wrap items-center gap-2 pb-3">
                            <span className={`font-mono text-[10px] tracking-[0.14em] ${s.text}`}>[{s.label}]</span>
                            {node.tech.map((t) => (
                              <span
                                key={t}
                                className="rounded-sm border border-[#323845] bg-[#202330] px-1.5 py-0.5 font-mono text-[10.5px] text-[#919dab]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <p className="text-[13px] leading-relaxed text-[#c4d1db]">{node.summary}</p>
                          {node.links && node.links.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-3">
                              {node.links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#42a0ed] transition hover:text-[#67b3f1]"
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