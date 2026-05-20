import { useState } from 'react'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Hero } from './components/hero/Hero'
import { Journey } from './components/sections/Journey'
import { MoreProjects } from './components/sections/MoreProjects'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { StatsBar } from './components/sections/StatsBar'
import { AnimatedBackground } from './components/layout/AnimatedBackground'
import { Footer } from './components/layout/Footer'
import { Loader } from './components/layout/Loader'
import { Navbar } from './components/layout/Navbar'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <MoreProjects />
        <Journey />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
