import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90">
        {label}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
