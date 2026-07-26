import { motion } from 'framer-motion'
import { Server, Shield, Zap } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const highlights = [
  {
    icon: Server,
    title: 'Infrastructure',
    desc: 'Designing scalable, resilient cloud architectures on AWS with Terraform and Kubernetes.',
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Building CI/CD pipelines that ship code to production in minutes, not hours.',
  },
  {
    icon: Shield,
    title: 'Security',
    desc: 'Embedding security into every pipeline stage with policy-as-code and automated scanning.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="What I Do"
          subtitle="I help teams ship faster and safer by building the infrastructure and pipelines that make it possible."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
