import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { terminalCommands } from '../../data/site'

function useTypedSequence(commands: typeof terminalCommands) {
  const [step, setStep] = useState(0)
  const [cmdChars, setCmdChars] = useState('')
  const [outLines, setOutLines] = useState<string[]>([])
  const [phase, setPhase] = useState<'cmd' | 'out' | 'pause' | 'idle'>('cmd')
  const idx = step % commands.length
  const current = commands[idx]

  useEffect(() => {
    if (phase === 'idle') return
    if (phase === 'cmd') {
      if (cmdChars.length < current.cmd.length) {
        const t = setTimeout(() => setCmdChars(current.cmd.slice(0, cmdChars.length + 1)), 30)
        return () => clearTimeout(t)
      }
      setPhase('out')
      return
    }
    if (phase === 'out') {
      const lines = current.output.split('\n')
      if (outLines.length < lines.length) {
        const t = setTimeout(() => setOutLines(lines.slice(0, outLines.length + 1)), 180)
        return () => clearTimeout(t)
      }
      setPhase('pause')
      return
    }
    const t = setTimeout(() => {
      setStep((s) => s + 1)
      setCmdChars('')
      setOutLines([])
      setPhase('cmd')
    }, 2500)
    return () => clearTimeout(t)
  }, [phase, cmdChars, outLines, current, idx])

  return { current, cmdChars, outLines, phase, idx }
}

function Scanlines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl opacity-[0.04]"
      aria-hidden
    >
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.3) 1px, rgba(255,255,255,0.3) 2px)',
          backgroundSize: '100% 2px',
        }}
      />
    </div>
  )
}

function Glow() {
  return (
    <>
      <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-cyan-500/10 via-violet-500/5 to-transparent opacity-60 blur-3xl" />
      <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-cyan-400/5 to-emerald-400/5 opacity-40 blur-2xl" />
    </>
  )
}

function BorderGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-2xl"
      style={{
        padding: 1,
        background: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(139,92,246,0.15), rgba(52,211,153,0.15))',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
      }}
    />
  )
}

export function TerminalHero() {
  const { current, cmdChars, outLines, phase, idx } = useTypedSequence(terminalCommands)
  const lines = current.output.split('\n')
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [outLines])

  return (
    <div className="relative">
      <Glow />
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/70 font-mono text-sm shadow-2xl shadow-cyan-500/5 backdrop-blur-xl"
      >
        <Scanlines />
        <BorderGlow />

        {/* title bar */}
        <div className="relative z-20 flex items-center gap-2 border-b border-slate-700/50 bg-slate-900/90 px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 shadow-[0_0_6px_rgba(251,191,36,0.3)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow-[0_0_6px_rgba(52,211,153,0.3)]" />
          <div className="ml-3 flex items-center gap-2">
            <span className="text-[11px] font-medium tracking-wide text-slate-400">
              irfan@devops-cluster
            </span>
            <span className="text-[11px] text-slate-600">~</span>
          </div>
          <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-slate-600">
            bash — {idx + 1}/{terminalCommands.length}
          </span>
        </div>

        {/* body */}
        <div
          ref={bodyRef}
          className="relative z-20 min-h-[290px] overflow-y-auto p-5 sm:p-6"
        >
          {/* comment line */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[10px] text-slate-600">#</span>
            <span className="text-[10px] italic text-slate-600">
              interactive terminal · type help for commands
            </span>
          </div>

          {/* prompt line */}
          <div className="flex items-baseline gap-1.5">
            <span className="shrink-0 text-emerald-400/90">$</span>
            <span className="text-cyan-300/90">{cmdChars}</span>
            {phase === 'cmd' && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="inline-block h-4 w-[7px] bg-cyan-300/80"
              />
            )}
          </div>

          {/* output lines */}
          {outLines.length > 0 && (
            <div className="mt-3 space-y-1">
              {outLines.map((line, i) => {
                const isKey = /^[A-Z][a-zA-Z]+:/.test(line.trim())
                const isValue = line.includes('@') || line.includes('github') || line.includes('linkedin')
                return (
                  <motion.div
                    key={`${idx}-${i}`}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <pre
                      className={`whitespace-pre-wrap text-sm leading-relaxed ${
                        outLines.length === lines.length && i === outLines.length - 1
                          ? 'text-emerald-300/90'
                          : isKey
                            ? 'text-violet-300/80'
                            : isValue
                              ? 'text-cyan-300/70'
                              : 'text-slate-300/70'
                      }`}
                    >
                      {line || '\u00A0'}
                    </pre>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* exit indicator when done */}
          {phase === 'pause' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-5 flex items-center gap-1.5"
            >
              <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
              <span className="text-[10px] text-slate-600">
                exited with code 0 — next command in 2.5s
              </span>
            </motion.div>
          )}
        </div>

        {/* footer */}
        <div className="relative z-20 flex items-center gap-2.5 border-t border-slate-700/40 bg-slate-900/60 px-5 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] tracking-wide text-slate-500">
            {phase === 'cmd'
              ? 'processing command...'
              : phase === 'out'
                ? `streaming output (${outLines.length}/${lines.length})`
                : 'ready'}
          </span>
          <span className="ml-auto text-[10px] text-slate-600">
            {idx + 1} / {terminalCommands.length}
          </span>
        </div>
      </motion.div>
    </div>
  )
}