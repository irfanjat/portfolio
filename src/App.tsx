import { useEffect, useState } from 'react'
import { MeshBackground } from './components/effects/MeshBackground'
import { SmoothScrollProvider } from './components/effects/SmoothScrollProvider'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Hero } from './components/sections/Hero'
import { MoreProjects } from './components/sections/MoreProjects'
import { Pipeline } from './components/sections/Pipeline'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Stats } from './components/sections/Stats'
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
        <Stats />
        <Skills />
        <Pipeline />
        <Projects />
        <Certifications />
        <Education />
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
