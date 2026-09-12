import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#07060f]" />

      <div className="absolute inset-0" style={{ filter: 'blur(90px)' }}>
        <motion.div
          className="absolute -top-[18%] -left-[14%] h-[65vmax] w-[65vmax] rounded-full bg-violet-600/40"
          style={{ background: 'radial-gradient(circle at 35% 35%, rgba(139,92,246,0.55) 0%, transparent 60%)' }}
          animate={{ opacity: [0.45, 0.7, 0.5] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[10%] right-[-16%] h-[58vmax] w-[58vmax] rounded-full"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(34,211,238,0.45) 0%, transparent 62%)' }}
          animate={{ opacity: [0.4, 0.65, 0.45] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[18%] h-[62vmax] w-[62vmax] rounded-full"
          style={{ background: 'radial-gradient(circle at 50% 60%, rgba(232,121,249,0.4) 0%, transparent 60%)' }}
          animate={{ opacity: [0.4, 0.7, 0.45] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        />
        <motion.div
          className="absolute top-[38%] left-[42%] h-[44vmax] w-[44vmax] rounded-full"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.22) 0%, transparent 58%)' }}
          animate={{ opacity: [0.3, 0.55, 0.35] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 9 }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)',
      }} />

      <div className="noise-overlay" />

      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-transparent to-ink-950/85" />
    </div>
  )
}

export function CursorGlow() {
  const mx = useMotionValue(-400)
  const my = useMotionValue(-400)
  const x = useSpring(mx, { stiffness: 120, damping: 30, mass: 0.4 })
  const y = useSpring(my, { stiffness: 120, damping: 30, mass: 0.4 })

  const bgX = useTransform(x, (v) => v - 320)
  const bgY = useTransform(y, (v) => v - 320)

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)')
    if (coarse.matches) return
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 h-[640px] w-[640px] rounded-full"
      style={{
        left: 0,
        top: 0,
        x: bgX,
        y: bgY,
        background:
          'radial-gradient(circle, rgba(124,58,237,0.14) 0%, rgba(34,211,238,0.06) 40%, transparent 70%)',
      }}
    />
  )
}