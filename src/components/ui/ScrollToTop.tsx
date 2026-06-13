import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-surface/80 text-white/40 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
      initial={{ opacity: 0, scale: 0.8 }}
      style={{ opacity: scaleX, scale: scaleX }}
    >
      <ArrowUp className="h-4 w-4" />
    </motion.button>
  )
}
