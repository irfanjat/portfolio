import { type ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  shimmer?: boolean
}

export function GradientText({ children, className = '', shimmer = false }: GradientTextProps) {
  return (
    <span className={`${shimmer ? 'text-gradient-shimmer' : 'text-gradient'} ${className}`}>
      {children}
    </span>
  )
}
