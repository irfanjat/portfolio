import { motion } from 'framer-motion'
import { BookOpen, TerminalSquare } from 'lucide-react'
import { aboutChips, education } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="01"
          label="about"
          title="I put the Ops back into DevOps."
          description="A short diagnostic on who's running this terminal."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 lg:col-span-3"
          >
            <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-6">
              <div className="flex items-center gap-2 border-b border-[#30363d] pb-3">
                <TerminalSquare className="h-4 w-4 text-[#39d353]" />
                <span className="font-mono text-xs text-[#8b949e]">cat ~/about.txt</span>
              </div>
              <div className="mt-4 space-y-4 font-mono text-[13.5px] leading-relaxed text-[#c9d1d9]">
                <p>
                  <span className="text-[#8b949e]">$ who</span> — I design, build and operate cloud-native
                  infrastructure with <span className="text-[#7ee787]">Terraform</span>,{' '}
                  <span className="text-[#7ee787]">Kubernetes</span> and automated{' '}
                  <span className="text-[#7ee787]">CI/CD</span> — with a bias toward boring, reproducible systems.
                </p>
                <p>
                  <span className="text-[#8b949e]">$ now</span> — deepening AWS, Kubernetes and observability
                  skills while shipping hands-on projects: a GitOps pipeline that deploys itself, and clusters that
                  survive a node reboot without a page.
                </p>
                <p>
                  <span className="text-[#8b949e]">$ edge</span> — I care about the unattended hour: drift
                  detection, least-privilege IAM, alerting that people actually read.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#21262d] text-[#58a6ff]">
                  <BookOpen className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[13px] font-medium text-[#e6edf3]">{education.degree}</p>
                  <p className="mt-1 text-[13px] text-[#8b949e]">
                    {education.university} · <span className="text-[#6e7681]">{education.graduation}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-6">
              <h3 className="font-mono text-xs tracking-[0.15em] text-[#6e7681]">OPERATING SYNC</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {aboutChips.map((chip, i) => (
                  <motion.div
                    key={chip}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <TechBadge>{chip}</TechBadge>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 border-t border-[#30363d] pt-4 font-mono text-[12px] leading-relaxed text-[#8b949e]">
                <span className="text-[#39d353]">mode:</span> hands-on learner · shipping real repos, reading real
                docs, breaking things in dev on purpose.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}