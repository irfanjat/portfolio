import { motion } from 'framer-motion'

export function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#030308]" />

      <motion.div
        className="absolute -top-[40%] -left-[20%] h-[80%] w-[70%] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -top-[20%] -right-[10%] h-[60%] w-[50%] rounded-full opacity-25 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-[30%] left-[20%] h-[50%] w-[60%] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #34d399 0%, transparent 70%)' }}
        animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030308]/80" />
    </div>
  )
}
