import { motion } from 'framer-motion'

const blobs = [
  { color: '#41658a', className: '-top-[40%] -left-[20%] h-[80%] w-[70%]', opacity: 0.22, x: [0, 60, 0], y: [0, 40, 0], duration: 22 },
  { color: '#5b4f8a', className: '-top-[15%] -right-[10%] h-[65%] w-[55%]', opacity: 0.16, x: [0, -40, 0], y: [0, 60, 0], duration: 19 },
  { color: '#4a7094', className: 'top-[30%] -left-[15%] h-[55%] w-[50%]', opacity: 0.18, x: [0, 50, 0], y: [0, -30, 0], duration: 24 },
  { color: '#5f4a3a', className: '-bottom-[30%] left-[15%] h-[55%] w-[60%]', opacity: 0.14, x: [0, 60, 0], y: [0, -40, 0], duration: 25 },
  { color: '#3f6a6a', className: '-bottom-[15%] -right-[15%] h-[60%] w-[55%]', opacity: 0.16, x: [0, -50, 0], y: [0, 30, 0], duration: 21 },
  { color: '#5b84ab', className: 'top-[10%] left-[35%] h-[45%] w-[40%]', opacity: 0.16, x: [0, 40, 0], y: [0, 50, 0], duration: 23 },
]

export function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#0d1117]" />

      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] ${blob.className}`}
          style={{ background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`, opacity: blob.opacity }}
          animate={{ x: blob.x, y: blob.y }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1117]/90" />
    </div>
  )
}
