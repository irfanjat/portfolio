import { motion } from 'framer-motion'
import { Cloud, Code2, GitBranch, Layers, Rocket, Sparkles } from 'lucide-react'
import { aboutHighlights } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const icons = [Rocket, Cloud, GitBranch, Layers, Code2, Sparkles]

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Engineering Reliable Infrastructure"
          subtitle="Turning infrastructure into automated, observable, and scalable systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong glow-violet mx-auto max-w-4xl rounded-2xl p-8 sm:p-10"
        >
          <p className="text-lg leading-relaxed text-slate-300">
            Self-taught <span className="text-cyan-300 font-medium">DevOps Engineer</span> with{' '}
            <span className="text-white font-semibold">8+ months</span> of hands-on experience building
            production-grade cloud infrastructure, GitOps CI/CD pipelines, and Kubernetes observability
            stacks. Delivered multiple portfolio projects using{' '}
            <span className="text-violet-300">Terraform</span>,{' '}
            <span className="text-amber-300">AWS</span>,{' '}
            <span className="text-cyan-300">Kubernetes</span>, GitHub Actions, ArgoCD, Prometheus,
            Grafana, and Docker.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Holds <span className="text-white">IBM</span> and <span className="text-white">AWS</span>{' '}
            certifications and is pursuing a BS in Computer Science — driven by a passion for
            automation, clean engineering discipline, and cloud-native platforms that scale.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
