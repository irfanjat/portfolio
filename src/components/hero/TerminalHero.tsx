import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { terminalCommands } from '../../data/site'

export function TerminalHero() {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState<'typing' | 'output' | 'pause'>('typing')
  const current = terminalCommands[index]

  useEffect(() => {
    if (phase === 'typing') {
      if (typed.length < current.cmd.length) {
        const t = setTimeout(() => setTyped(current.cmd.slice(0, typed.length + 1)), 45)
        return () => clearTimeout(t)
      }
      setPhase('output')
      return
    }
    if (phase === 'output') {
      const t = setTimeout(() => setPhase('pause'), 2200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % terminalCommands.length)
      setTyped('')
      setPhase('typing')
    }, 600)
    return () => clearTimeout(t)
  }, [phase, typed, current.cmd, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="glass-strong w-full max-w-xl overflow-hidden rounded-2xl font-mono text-sm shadow-2xl shadow-cyan-500/5"
      style={{ borderImage: 'linear-gradient(135deg, rgba(0,217,255,0.2), rgba(124,58,237,0.2), rgba(0,255,136,0.2)) 1', border: '1px solid transparent' }}
    >
      {/* header */}
      <div className="flex items-center gap-2 border-b border-slate-700/60 bg-slate-900/80 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-rose-500/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        <span className="ml-2 text-xs text-slate-500">irfan@devops-cluster ~</span>
        <span className="ml-auto text-xs text-slate-600">bash</span>
      </div>

      {/* body */}
      <div className="min-h-[280px] p-5 sm:p-6">
        {/* previous command hint */}
        <p className="mb-3 text-xs text-slate-600">
          # infrastructure automation · live
        </p>

        <p className="text-slate-500">
          <span className="text-emerald-400">❯</span>{' '}
          <span className="text-cyan-300">{typed}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 bg-cyan-400 text-cyan-400"
          >
            |
          </motion.span>
        </p>

        <AnimatePresence mode="wait">
          {phase !== 'typing' && (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4"
            >
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-emerald-300/80">
                {current.output}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* footer */}
      <div className="border-t border-slate-700/40 bg-slate-900/40 px-5 py-2 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] text-slate-600">cluster connected · 3 nodes ready</span>
      </div>
    </motion.div>
  )
}