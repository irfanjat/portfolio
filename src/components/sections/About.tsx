import { motion } from 'framer-motion'
import { Cloud, Code2, GitBranch, Layers, Rocket, Sparkles } from 'lucide-react'
import { aboutHighlights } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const icons = [Rocket, Cloud, GitBranch, Layers, Code2, Sparkles]

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="About"
          title="Engineering Reliable Infrastructure"
          subtitle="Self-taught DevOps Engineer building automated, observable, and scalable systems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutHighlights.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass group rounded-xl p-6 transition-all hover:border-cyan-400/30 hover:glow-cyan"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500/20">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}