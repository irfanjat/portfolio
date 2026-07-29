import { motion } from 'framer-motion'
import { stats } from '../../data/portfolio'

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
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Who I Am</h2>
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
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
              >
                <div className="font-mono text-3xl font-bold text-blue-400">
                  {stat.value}{stat.suffix}
                </div>
                <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
