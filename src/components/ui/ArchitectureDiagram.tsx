import { motion } from 'framer-motion'
import { ChevronDown, TerminalSquare } from 'lucide-react'

interface ArchitectureDiagramProps {
  nodes: { node: string; detail: string }[]
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-lg border border-[#323845] bg-[#121620] p-4 sm:p-5">
      <div className="mb-4 flex items-center gap-2 border-b border-[#323845] pb-3">
        <TerminalSquare className="h-4 w-4 text-[#11e956]" />
        <span className="font-mono text-xs text-[#919dab]">flow — {nodes.length} stages</span>
      </div>
      <ol className="space-y-0">
        {nodes.map((n, i) => (
          <li key={n.node}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="group flex items-start gap-3"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#323845] bg-[#181b26] font-mono text-[10.5px] text-[#11e956] transition-colors group-hover:border-[#11e956]/60">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < nodes.length - 1 && (
                  <div className="my-1 flex h-5 w-px items-center justify-center">
                    <ChevronDown className="h-3.5 w-3.5 text-[#323845]" />
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1 pb-2">
                <p className="font-mono text-[13px] font-medium text-[#dde3eb]">{n.node}</p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#919dab]">{n.detail}</p>
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  )
}