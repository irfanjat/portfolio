import { MeshBackground } from './components/effects/MeshBackground'
import { SmoothScrollProvider } from './components/effects/SmoothScrollProvider'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { ScrollToTop } from './components/ui/ScrollToTop'

function App() {
  return (
    <SmoothScrollProvider>
      <MeshBackground />
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
    </SmoothScrollProvider>
  )
}

export default App
