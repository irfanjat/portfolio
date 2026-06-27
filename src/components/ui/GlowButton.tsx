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
    'relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200'
  const variants = {
    primary:
      'bg-cyan-600 text-white border border-cyan-600 hover:bg-cyan-700',
    secondary:
      'bg-white/[0.04] backdrop-blur-lg text-slate-300 border border-white/10 hover:border-white/20 hover:bg-white/[0.08]',
    ghost: 'text-slate-500 hover:text-slate-300 border border-transparent hover:border-slate-700',
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
