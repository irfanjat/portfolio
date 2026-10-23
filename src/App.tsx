import { useEffect } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { FAQ } from './components/sections/FAQ'
import { Hero } from './components/sections/Hero'
import { Notes } from './components/sections/Notes'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace('#', ''))
    if (!id) return

    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Notes />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
