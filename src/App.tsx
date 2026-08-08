import { lazy, Suspense } from 'react'
import { MeshBackground } from './components/effects/MeshBackground'
import { SmoothScrollProvider } from './components/effects/SmoothScrollProvider'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { ScrollToTop } from './components/ui/ScrollToTop'

const Background3D = lazy(() =>
  import('./components/effects/Background3D').then((m) => ({ default: m.Background3D })),
)

function App() {
  return (
    <SmoothScrollProvider>
      <MeshBackground />
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </SmoothScrollProvider>
  )
}

export default App
