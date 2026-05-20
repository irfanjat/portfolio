import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/8 blur-[90px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* K8s-inspired hex nodes */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
            <path
              d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-cyan-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    </div>
  )
}
