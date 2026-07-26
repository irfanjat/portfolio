import { useEffect, useState } from 'react'
import { MeshBackground } from './components/effects/MeshBackground'
import { SmoothScrollProvider } from './components/effects/SmoothScrollProvider'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { MoreProjects } from './components/sections/MoreProjects'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { ScrollToTop } from './components/ui/ScrollToTop'

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return hash
}

function MainPortfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

function App() {
  const hash = useHashRoute()

  return (
    <SmoothScrollProvider>
      <MeshBackground />
      {hash === '#more-projects' ? (
        <>
          <Navbar />
          <MoreProjects />
          <Footer />
          <ScrollToTop />
        </>
      ) : (
        <MainPortfolio />
      )}
    </SmoothScrollProvider>
  )
}

export default App
