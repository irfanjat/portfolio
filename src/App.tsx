import { AuroraBackground, CursorGlow } from './components/effects/AuroraBackground'
import { SmoothScrollProvider } from './components/effects/SmoothScrollProvider'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Credentials } from './components/sections/Credentials'
import { GitHubSection } from './components/sections/GitHubSection'
import { Hero } from './components/sections/Hero'
import { Path } from './components/sections/Path'
import { Projects } from './components/sections/Projects'
import { SystemStatus } from './components/sections/SystemStatus'
import { Toolbox } from './components/sections/Toolbox'
import { Workflow } from './components/sections/Workflow'
import { ScrollToTop } from './components/ui/ScrollToTop'

function App() {
  return (
    <SmoothScrollProvider>
      <AuroraBackground />
      <CursorGlow />
      <Navbar />
      <a href="#projects" className="skip-link">
        Skip to content
      </a>
      <main className="relative z-10">
        <Hero />
        <About />
        <Workflow />
        <Projects />
        <Path />
        <Toolbox />
        <GitHubSection />
        <Credentials />
        <SystemStatus />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </SmoothScrollProvider>
  )
}

export default App