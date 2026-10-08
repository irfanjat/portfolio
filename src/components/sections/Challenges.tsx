import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const challenges = [
  {
    title: 'Secure Multi-AZ AWS Infra',
    problem: 'Console-built infra had no review, versioning or safe rebuild path.',
    solution: 'Modular Terraform with S3+DynamoDB state, encryption, least-privilege IAM and multi-AZ layout.',
    outcome: 'Reproducible, reviewable and auditable infra with locked state.',
  },
  {
    title: 'Drift-Free Deployments',
    problem: 'Manual deploys caused config drift and unverified releases.',
    solution: 'GitOps with GitHub Actions + ArgoCD; images pinned by SHA and manifests in git.',
    outcome: 'Cluster always matches repo; rollbacks are git reverts.',
  },
  {
    title: 'Cost Waste Detection',
    problem: 'Idle volumes/IPs found too late on invoices.',
    solution: 'Scheduled Lambda (boto3) scanning + DynamoDB history + Slack alerts.',
    outcome: 'Early detection of orphaned resources for minimal run cost.',
  },
  {
    title: 'Policy-as-Code Guardrails',
    problem: 'Security rules stayed in docs and were not enforced.',
    solution: 'OPA/Rego + Conftest in PRs, Kyverno checks for K8s; merge blocked on violations.',
    outcome: 'Consistent, versioned enforcement on every change.',
  },
]

export function Challenges() {
  return (
    <section id="challenges" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="05" label="challenges" title="Challenges I Solved" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="flex flex-col gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg2)] p-5 transition-colors hover:border-[var(--color-green)]/40"
            >
              <h3 className="font-display text-base font-semibold text-[var(--color-ink)]">{c.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-[var(--color-muted)]">
                <span className="text-[var(--color-ink)]">Problem:</span> {c.problem}
              </p>
              <p className="text-[13.5px] leading-relaxed text-[var(--color-muted)]">
                <span className="text-[var(--color-ink)]">Solution:</span> {c.solution}
              </p>
              <p className="mt-1 inline-flex items-start gap-2 text-[13.5px] leading-relaxed text-[var(--color-ink)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--color-green)]" />
                <span>
                  <span className="text-[var(--color-ink)]">Outcome:</span> {c.outcome}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
