import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlowButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  className?: string
  download?: boolean | string
}

export function GlowButton({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  download,
}: GlowButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300'
  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-100 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]',
    secondary:
      'glass text-slate-200 border-slate-500/30 hover:border-violet-400/40 hover:text-white',
    ghost: 'text-slate-400 hover:text-cyan-300 border border-transparent hover:border-slate-600/50',
  }

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} download={download} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className="cursor-pointer border-0 bg-transparent p-0">
      {content}
    </button>
  )
}
