import { motion } from 'framer-motion'
import { stats, aboutChips } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" label="about" title="Who I Am" />

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              I'm <span className="text-[var(--color-green)]">Irfan Ali</span> — DevOps & Cloud Engineer
            </h3>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-400">
              <p>
                I design, automate, and operate cloud-native infrastructure with a focus on reliability, security, and repeatability.
              </p>
              <p>
                From AWS architecture and Terraform IaC to GitHub Actions, ArgoCD, Kubernetes, and Prometheus/Grafana observability, I focus on the full lifecycle: build → automate → deploy → monitor → troubleshoot → improve.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {aboutChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/10 px-3 py-1 text-[11px] font-medium text-[var(--color-cyan-300)]"
                >
                  {chip}
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
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg2)] p-6 text-center transition-colors hover:border-[var(--color-green-300)]/50"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px opacity-70"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)`,
                  }}
                />
                <div className="relative">
                  <div
                    className="font-display text-4xl font-extrabold"
                    style={{ color: stat.accent, textShadow: `0 0 26px ${stat.glow}` }}
                  >
                    {stat.value}
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="mt-2 text-xs text-[var(--color-muted)]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}