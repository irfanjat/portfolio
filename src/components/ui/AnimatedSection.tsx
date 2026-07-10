import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode
  delay?: number
}

export function AnimatedSection({ children, delay = 0, className, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}
