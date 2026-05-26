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
      className="mb-12 text-center"
    >
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/80">
        {label}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </motion.div>
  )
}