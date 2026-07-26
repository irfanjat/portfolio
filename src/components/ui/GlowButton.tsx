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
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
            : 'glass text-slate-200 hover:text-white'
        }
      `}
    >
      {children}
    </motion.a>
  )
}
