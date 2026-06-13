import { useEffect, useState } from 'react'

const sectionIds = ['home', 'stats', 'skills', 'pipeline', 'projects', 'certifications', 'education', 'contact']

export function useActiveSection(): number {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const entries = new Map<string, number>()

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      const observer = new IntersectionObserver(
        ([entry]) => {
          entries.set(id, entry.intersectionRatio)
          let best = ''
          let bestRatio = 0
          for (const [k, v] of entries) {
            if (v > bestRatio) {
              bestRatio = v
              best = k
            }
          }
          if (best) setActive(sectionIds.indexOf(best))
        },
        { threshold: [0, 0.25, 0.5, 0.75] },
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
