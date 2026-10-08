import { motion } from 'framer-motion'
import { ChevronDown, TerminalSquare } from 'lucide-react'

interface ArchitectureDiagramProps {
  nodes: { node: string; detail: string }[]
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 sm:p-5">
      <div className="mb-4 flex items-center gap-2 border-b border-[var(--color-border)] pb-3">
        <TerminalSquare className="h-4 w-4 text-[var(--color-green)]" />
        <span className="font-mono text-xs text-[var(--color-muted)]">flow — {nodes.length} stages</span>
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
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg2)] font-mono text-[10.5px] text-[var(--color-green)] transition-colors group-hover:border-[var(--color-green)]/60">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < nodes.length - 1 && (
                  <div className="my-1 flex h-5 w-px items-center justify-center">
                    <ChevronDown className="h-3.5 w-3.5 text-[var(--color-border)]" />
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1 pb-2">
                <p className="font-mono text-[13px] font-medium text-[var(--color-ink)]">{n.node}</p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[var(--color-muted)]">{n.detail}</p>
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  )
}