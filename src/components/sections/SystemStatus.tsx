import { motion } from 'framer-motion'
import { Activity, CircleCheck, Cone } from 'lucide-react'
import { statusDisclaimer, systemStatus } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function SystemStatus() {
  return (
    <section id="status" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="07"
          label="status"
          title="System status."
          description="A dashboard for where this portfolio actually stands today."
        />

        <div className="overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22]">
          <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
            <Activity className="h-4 w-4 text-[#39d353]" />
            <span className="font-mono text-xs text-[#8b949e]">status.irfanali — all systems report</span>
            <span className="ml-auto hidden items-center gap-1.5 rounded-sm border border-[#39d353]/40 bg-[#39d353]/10 px-2 py-0.5 font-mono text-[10px] text-[#7ee787] sm:flex">
              <CircleCheck className="h-3 w-3" />
              live
            </span>
          </div>

          <ul className="divide-y divide-[#30363d]">
            {systemStatus.map((row, i) => (
              <motion.li
                key={row.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex items-center gap-3 px-4 py-3.5 sm:px-5"
              >
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    row.state === 'operational'
                      ? 'bg-[#39d353] shadow-[0_0_8px_rgba(57,211,83,0.8)]'
                      : 'bg-[#e3b341] shadow-[0_0_8px_rgba(227,179,65,0.8)]'
                  }`}
                  aria-hidden="true"
                />
                <span className="w-40 shrink-0 font-mono text-[13px] font-semibold text-[#e6edf3] sm:w-52">
                  {row.label}
                </span>
                <span className="hidden text-[12px] leading-relaxed text-[#8b949e] md:block">{row.detail}</span>
                <span
                  className={`ml-auto shrink-0 rounded-sm px-2 py-0.5 font-mono text-[9.5px] tracking-[0.12em] uppercase ${
                    row.state === 'operational'
                      ? 'bg-[#39d353]/10 text-[#7ee787]'
                      : 'bg-[#e3b341]/10 text-[#e3b341]'
                  }`}
                >
                  {row.state}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-start gap-2 border-t border-[#30363d] bg-[#0d1117] px-4 py-3 font-mono text-[11px] leading-relaxed text-[#6e7681] sm:px-5">
            <Cone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8b949e]" />
            <span>{statusDisclaimer}</span>
          </div>
        </div>
      </div>
    </section>
  )
}