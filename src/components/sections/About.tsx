import { motion } from 'framer-motion'
import { stats, aboutChips, education } from '../../data/portfolio'
import { LiveDeployStatus } from '../ui/LiveDeployStatus'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" label="about" title="Who I Am" />

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              I'm <span className="text-[var(--color-green)]">Irfan Ali</span> — Junior DevOps & Cloud Engineer
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

            <div className="mt-7 flex flex-col gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg2)] p-5">
              <p className="text-[14px] text-slate-300">
                <span className="font-semibold text-[var(--color-ink)]">{education.degree}</span>
                <br />
                <span className="text-slate-400">{education.university}</span>
              </p>
              <p className="font-mono text-xs text-slate-500">{education.graduation}</p>
              <div className="border-t border-[var(--color-border)] pt-3">
                <LiveDeployStatus />
              </div>
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