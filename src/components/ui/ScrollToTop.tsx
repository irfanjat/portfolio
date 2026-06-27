import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-xl text-slate-500 shadow-xl shadow-black/30 transition hover:border-white/20 hover:text-slate-300"
      initial={{ opacity: 0, scale: 0.8 }}
      style={{ opacity: scaleX, scale: scaleX }}
    >
      <ArrowUp className="h-4 w-4" />
    </motion.button>
  )
}
