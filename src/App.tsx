import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/hero/Hero'
import { PipelineTimeline } from './components/sections/PipelineTimeline'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Stats } from './components/sections/Stats'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollToTop } from './components/ui/ScrollToTop'
import { useActiveSection } from './hooks/useActiveSection'

const themeMeshes = [
  ['rgba(0,217,255,0.12)', 'rgba(124,58,237,0.1)', 'rgba(0,255,136,0.06)'],
  ['rgba(124,58,237,0.13)', 'rgba(236,72,153,0.08)', 'rgba(6,182,212,0.06)'],
  ['rgba(0,255,136,0.13)', 'rgba(0,217,255,0.08)', 'rgba(245,158,11,0.05)'],
  ['rgba(6,182,212,0.13)', 'rgba(0,255,136,0.08)', 'rgba(124,58,237,0.05)'],
  ['rgba(245,158,11,0.12)', 'rgba(239,68,68,0.08)', 'rgba(0,217,255,0.06)'],
  ['rgba(168,85,247,0.12)', 'rgba(236,72,153,0.08)', 'rgba(0,255,136,0.06)'],
  ['rgba(236,72,153,0.12)', 'rgba(168,85,247,0.08)', 'rgba(0,217,255,0.06)'],
  ['rgba(0,217,255,0.12)', 'rgba(124,58,237,0.1)', 'rgba(0,255,136,0.06)'],
  ['rgba(124,58,237,0.12)', 'rgba(6,182,212,0.08)', 'rgba(0,255,136,0.05)'],
]

const accentColors = [
  '#00d9ff', '#7c3aed', '#00ff88', '#06b6d4',
  '#f59e0b', '#a855f7', '#ec4899', '#00d9ff', '#7c3aed',
]

function App() {
  const theme = useActiveSection()

  useEffect(() => {
    document.documentElement.setAttribute('data-scroll-theme', String(theme))
  }, [theme])

  const style = useMemo(() => ({ '--accent': accentColors[theme] } as React.CSSProperties), [theme])

  return (
    <div style={style}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 70% 50% at 50% -10%, ${themeMeshes[theme][0]}, transparent),
              radial-gradient(ellipse 50% 40% at 95% 50%, ${themeMeshes[theme][1]}, transparent),
              radial-gradient(ellipse 40% 30% at 5% 90%, ${themeMeshes[theme][2]}, transparent)
            `,
          }}
        />
      </AnimatePresence>
      <div className="fixed inset-0 z-0 grid-pattern opacity-20 pointer-events-none" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <div className="relative">
          <Experience />
        </div>
        <div className="relative">
          <Skills />
        </div>
        <div className="relative">
          <PipelineTimeline />
        </div>
        <div className="relative">
          <Projects />
        </div>
        <div className="relative">
          <Certifications />
        </div>
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
