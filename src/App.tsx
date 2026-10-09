import { AuroraBackground, CursorGlow } from './components/effects/AuroraBackground'
import { SmoothScrollProvider } from './components/effects/SmoothScrollProvider'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Hero } from './components/sections/Hero'
import { WhatIBuild } from './components/sections/WhatIBuild'
import { WorkflowStrip } from './components/sections/WorkflowStrip'
import { ResumeCTA } from './components/sections/ResumeCTA'
import { Path } from './components/sections/Path'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { ScrollToTop } from './components/ui/ScrollToTop'

function App() {
  return (
    <SmoothScrollProvider>
      <AuroraBackground />
      <CursorGlow />
      <Navbar />
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <main className="relative z-10">
        <Hero />
        <WhatIBuild />
        <About />
        <Skills />
        <Projects />
        <WorkflowStrip />
        <Path />
        <Certifications />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </SmoothScrollProvider>
  )
}

export default App