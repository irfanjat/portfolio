import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ label, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`mb-14 max-w-2xl ${alignClass}`}
    >
      <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-400">{subtitle}</p>
      )}
    </motion.div>
  )
}
