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
      className="mb-14"
    >
      <span className="section-badge">
        <span className="text-slate-400">{index}</span> {label}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-display text-lg font-semibold text-transparent sm:text-xl">
          <span className="gradient-text">{subtitle}</span>
        </p>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  )
}