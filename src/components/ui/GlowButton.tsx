import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface GlowButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function GlowButton({ href, children, variant = 'primary' }: GlowButtonProps) {
  const isPrimary = variant === 'primary'

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300
        ${
          isPrimary
            ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950/50 hover:bg-cyan-500 hover:shadow-cyan-900/50'
            : 'border border-slate-600/70 bg-slate-800 text-slate-100 hover:bg-slate-700 hover:text-white'
        }
      `}
    >
      {children}
    </motion.a>
  )
}
