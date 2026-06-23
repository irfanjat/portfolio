import { useState, useEffect } from 'react'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/hero/Hero'
import { MoreProjectsPage } from './components/sections/MoreProjectsPage'
import { PipelineTimeline } from './components/sections/PipelineTimeline'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Stats } from './components/sections/Stats'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
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
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <PipelineTimeline />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function App() {
  const hash = useHashRoute()
  if (hash === '#more-projects') return <MoreProjectsPage />
  return <MainPortfolio />
}

export default App
