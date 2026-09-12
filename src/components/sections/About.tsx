import { motion } from 'framer-motion'
import { stats } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="about"
          title={<>Where <span className="gradient-text">infrastructure</span> meets automation</>}
          description="A snapshot of who I am and what I spend my time building."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <h3 className="font-display text-2xl font-bold text-white">
              I'm <span className="gradient-text">Irfan Ali</span> — DevOps Engineer & lifelong learner
            </h3>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-400">
              <p>
                Based in Pakistan and pursuing my BSc in Computer Science, I've spent the past year
                designing, automating, and operating cloud-native infrastructure that ships reliably.
              </p>
              <p>
                My work spans the full infrastructure lifecycle: architecting AWS environments,
                implementing CI/CD pipelines, hardening security postures, and managing Kubernetes
                clusters. I believe in infrastructure as code, shift-left security, and delivery that
                runs itself.
              </p>
              <p className="border-l-2 border-violet-500/50 pl-4 text-slate-300">
                "I build systems that make teams irrelevant on release day — automation, observability,
                and reproducibility at every layer."
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {['IaC-Driven', 'Shift-Left Security', 'GitOps Mindset', 'Observability First'].map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-200"
                >
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`glass glass-hover relative overflow-hidden rounded-3xl p-6 text-center ${i % 2 === 1 ? 'translate-y-4' : ''}`}
              >
                <div
                  className="pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl"
                  style={{ background: stat.glow }}
                />
                <div className="relative">
                  <div className="font-display text-4xl font-extrabold text-white">
                    {stat.value}
                    <span className="gradient-text">{stat.suffix}</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}