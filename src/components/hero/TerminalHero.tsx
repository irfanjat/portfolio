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
      transition={{ delay: 2.2, duration: 0.7 }}
      className="glass-strong glow-cyan w-full max-w-lg overflow-hidden rounded-2xl font-mono text-xs shadow-2xl sm:text-sm"
    >
      <div className="flex items-center gap-2 border-b border-slate-700/60 bg-slate-900/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-500/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        <span className="ml-2 text-slate-500">irfan@devops-cluster ~</span>
      </div>
      <div className="min-h-[140px] p-4 sm:p-5">
        <p className="text-slate-500">
          <span className="text-emerald-400">?</span>{' '}
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
            <motion.pre
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-3 whitespace-pre-wrap text-slate-400 leading-relaxed"
            >
              {current.output}
            </motion.pre>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
