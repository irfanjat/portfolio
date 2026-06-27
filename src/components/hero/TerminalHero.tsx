import { motion } from 'framer-motion'

const profileCmd = 'cat profile.json'
const profileOutput = `{
  "name": "Irfan Ali",
  "role": "DevOps Engineer",
  "location": "Pakistan",
  "cloud": "AWS",
  "stack": ["Kubernetes", "Terraform", "ArgoCD", "Docker", "Helm"],
  "status": "Open for opportunities",
  "projects": 9,
  "certifications": 4,
  "tools": "25+"
}`

export function TerminalHero() {
  return (
    <div className="relative w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl font-mono text-sm shadow-xl shadow-black/30"
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <div className="ml-2 flex items-center gap-2">
            <span className="text-[11px] font-medium tracking-wide text-slate-400">irfan</span>
            <span className="text-[11px] text-slate-500">~</span>
            <span className="text-[11px] font-bold text-cyan-400">bash</span>
          </div>
        </div>

        {/* body */}
        <div className="min-h-[240px] p-5">
          <div className="mb-4 flex items-baseline gap-1.5">
            <span className="shrink-0 text-emerald-400 font-bold">irfan@aws:~$</span>
            <span className="text-cyan-300">{profileCmd}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="inline-block h-4 w-[7px] bg-slate-500"
            />
          </div>
          <pre className="whitespace-pre text-sm leading-relaxed text-slate-400">
{profileOutput}
          </pre>
        </div>

        {/* footer */}
        <div className="flex items-center gap-2.5 border-t border-white/5 bg-white/[0.015] px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] tracking-wide text-slate-500">ready</span>
          <span className="ml-auto font-mono text-[10px] text-slate-500">NORMAL</span>
          <span className="text-[10px] text-slate-500">●</span>
          <span className="text-[10px] text-slate-500">100%</span>
        </div>
      </motion.div>
    </div>
  )
}
