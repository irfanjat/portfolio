import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'

export function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace('#', ''))

    const update = () => {
      let current = ''
      let closest = Number.POSITIVE_INFINITY

      ids.forEach((id) => {
        const element = document.getElementById(id)
        if (!element) return
        const top = element.getBoundingClientRect().top
        if (top <= 150 && Math.abs(top - 150) < closest) {
          current = id
          closest = Math.abs(top - 150)
        }
      })

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 12

      if (atBottom) current = ids[ids.length - 1]

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return active
}
