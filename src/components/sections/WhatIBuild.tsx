import { motion } from 'framer-motion'
import { Cloud, GitBranch, Layers, ServerCog } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const cards = [
  {
    title: 'Cloud Infra',
    icon: Cloud,
    desc: 'Scalable, secure AWS environments with VPC, ALB, ASG, RDS — built to be repeatable and recoverable.',
    tech: ['VPC', 'EC2', 'ALB', 'RDS', 'S3'],
  },
  {
    title: 'CI/CD & GitOps',
    icon: GitBranch,
    desc: 'Automated pipelines with GitHub Actions and ArgoCD to ship immutable images with git as source of truth.',
    tech: ['GitHub Actions', 'ArgoCD', 'Docker', 'Helm'],
  },
  {
    title: 'K8s & Containers',
    icon: Layers,
    desc: 'Containerized workloads on Kubernetes with declarative manifests, rolling updates and ingress.',
    tech: ['Kubernetes', 'EKS', 'Ingress', 'Docker'],
  },
  {
    title: 'IaC & Monitoring',
    icon: ServerCog,
    desc: 'Terraform for repeatable infra, Prometheus/Grafana/Loki for metrics/logs, alerts and faster RCA.',
    tech: ['Terraform', 'Prometheus', 'Grafana', 'Loki', 'Promtail'],
  },
  {
    title: 'Automation & Scripting',
    icon: Cloud,
    desc: 'Bash/Python to automate checks, reports and routine ops to reduce toil.',
    tech: ['Bash', 'Python', 'Git'],
  },
  {
    title: 'Security & Policy-as-Code',
    icon: GitBranch,
    desc: 'OPA/Rego, Kyverno and Conftest to enforce guardrails early in PRs and IaC.',
    tech: ['OPA/Rego', 'Kyverno', 'Conftest'],
  },
]
export function WhatIBuild() {
  return (
    <section id="build" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" label="what i build" title="What I Build" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="flex flex-col gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg2)] p-5 transition-colors hover:border-[var(--color-green)]/40"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-[var(--color-green)]" />
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[var(--color-green)]">{`0${i + 1}`}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">{card.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-[var(--color-muted)]">{card.desc}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {card.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-ink)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
