import { motion } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050810]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="relative h-16 w-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-violet-400" />
        <div className="absolute inset-2 rounded-full border border-cyan-400/20" />
      </motion.div>
      <motion.p
        className="mt-6 font-mono text-sm text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-cyan-400">$</span> initializing infrastructure...
      </motion.p>
      <motion.div
        className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
