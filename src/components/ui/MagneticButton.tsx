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
    'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300'
  const styles =
    variant === 'primary'
      ? 'bg-[#39d353] text-[#0d1117] hover:bg-[#46ef63] hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(57,211,83,0.45)]'
      : 'glass-soft text-[var(--color-ink)] hover:text-[var(--color-green)] hover:border-[var(--color-green)] hover:-translate-y-0.5'

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