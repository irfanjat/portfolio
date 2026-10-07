import type { ReactNode } from 'react'

interface TechBadgeProps {
  children: ReactNode
  detail?: string
  accent?: string
}

export function TechBadge({ children, detail, accent = '#39d353' }: TechBadgeProps) {
  return (
    <span
      title={detail}
      className="group/badge relative inline-flex cursor-default items-center gap-1.5 rounded-sm border border-[#30363d] bg-[#21262d] px-2 py-1 font-mono text-[11.5px] text-[#c9d1d9] transition-colors hover:border-[#39d353]/60"
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent, boxShadow: `0 0 6px ${accent}` }}
      />
      {children}
      {detail && (
        <span className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 z-20 hidden w-max max-w-[260px] -translate-x-1/2 rounded-md border border-[#30363d] bg-[#161b22] px-3 py-2 text-center text-[11px] font-normal leading-snug text-[#8b949e] shadow-lg group-hover/badge:block">
          {detail}
        </span>
      )}
    </span>
  )
}