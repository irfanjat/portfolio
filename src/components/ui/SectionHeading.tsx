import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-500/5 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cyan-400/80">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
        {label}
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
