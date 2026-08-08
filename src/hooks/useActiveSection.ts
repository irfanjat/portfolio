import { useEffect, useState } from 'react'

const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'certifications',
  'education',
  'contact',
]

export function useActiveSection(): string {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const ratios = new Map<string, number>()

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue

      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios.set(id, entry.intersectionRatio)
          let best = 'home'
          let bestRatio = 0
          for (const [k, v] of ratios) {
            if (v > bestRatio) {
              bestRatio = v
              best = k
            }
          }
          setActive(best)
        },
        { threshold: [0, 0.15, 0.3, 0.5, 0.75] },
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}

export { sectionIds }
