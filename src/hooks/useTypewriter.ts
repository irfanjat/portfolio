import { useEffect, useState } from 'react'

export function useTypewriter(
  words: string[],
  typeSpeed = 72,
  deleteSpeed = 34,
  hold = 1900,
) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }

    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timer = 0

    const tick = () => {
      const current = words[wordIndex]

      if (!deleting) {
        charIndex += 1
        setText(current.slice(0, charIndex))

        if (charIndex === current.length) {
          deleting = true
          timer = window.setTimeout(tick, hold)
          return
        }

        timer = window.setTimeout(tick, typeSpeed)
        return
      }

      charIndex -= 1
      setText(current.slice(0, charIndex))

      if (charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        timer = window.setTimeout(tick, 320)
        return
      }

      timer = window.setTimeout(tick, deleteSpeed)
    }

    timer = window.setTimeout(tick, 480)
    return () => window.clearTimeout(timer)
  }, [words, typeSpeed, deleteSpeed, hold])

  return text
}
