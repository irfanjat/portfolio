import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface SectionHeadingProps {
  index: string
  label: string
  title: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
}

export function SectionHeading({ index, label, title, subtitle, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <span className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-[#f0883e]">
        // {index}. {label}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 font-mono text-sm text-[#f0883e]">{subtitle}</p>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      )}
      <div className="mt-5 h-[3px] w-12 rounded-sm bg-[#f0883e]" />
    </motion.div>
  )
}