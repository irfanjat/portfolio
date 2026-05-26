import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-slate-900/90 text-cyan-400 backdrop-blur-md transition hover:glow-cyan hover:border-cyan-400/60"
      initial={{ opacity: 0, scale: 0.8 }}
      style={{ opacity: scaleX, scale: scaleX }}
    >
      <ArrowUp className="h-4 w-4" />
    </motion.button>
  )
}
