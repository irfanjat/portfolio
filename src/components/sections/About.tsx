import { motion } from 'framer-motion'
import { stats } from '../../data/portfolio'
import { GradientText } from '../ui/GradientText'
import { TiltCard } from '../ui/TiltCard'

const statColors = [
  { value: 'text-blue-400', border: 'border-blue-500/25', glow: 'rgba(59,130,246,0.12)' },
  { value: 'text-violet-400', border: 'border-violet-500/25', glow: 'rgba(139,92,246,0.12)' },
  { value: 'text-teal-400', border: 'border-teal-500/25', glow: 'rgba(20,184,166,0.12)' },
  { value: 'text-amber-400', border: 'border-amber-500/25', glow: 'rgba(245,158,11,0.12)' },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
              // 01. about
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <GradientText shimmer>Who I Am</GradientText>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              I'm <strong className="text-slate-200">Irfan Ali</strong> — a DevOps Engineer and lifelong learner
              based in Pakistan. I'm pursuing my <strong className="text-slate-200">BSc in Computer Science</strong>
              {' '}from the University of Sindh and have spent the past year building, automating, and
              operating cloud-native infrastructure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              My work spans the infrastructure lifecycle: architecting AWS environments, implementing
              CI/CD pipelines, hardening security postures, and managing Kubernetes clusters. I believe
              in infrastructure as code, shift-left security, and fully automated delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const c = statColors[i % statColors.length]
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TiltCard
                    intensity={10}
                    glareColor={c.glow}
                    className={`rounded-2xl border bg-white/[0.03] p-6 text-center ${c.border}`}
                  >
                    <div className={`font-mono text-3xl font-bold ${c.value}`}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
