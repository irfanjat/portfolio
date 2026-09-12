import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface MagneticButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
}

export function MagneticButton({ href, children, variant = 'primary', className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 })

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold transition-colors duration-300'
  const styles =
    variant === 'primary'
      ? 'text-white shadow-[0_8px_40px_-10px_rgba(139,92,246,0.7)] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-[length:160%_auto] hover:bg-right'
      : 'glass-soft text-slate-200 hover:text-white hover:border-white/25'

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  )
}