import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import { githubRepos, personal } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const langColors: Record<string, string> = {
  HCL: '#844fba',
  YAML: '#cb171e',
  Python: '#3572A5',
  Rego: '#7d9199',
}

export function GitHubSection() {
  return (
    <section id="github" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          label="github"
          title="Receipts, not promises."
          description="The repos behind the mission logs — real commits, real pipelines nobody is staging for you."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="h-fit rounded-lg border border-[#30363d] bg-[#161b22] p-6"
          >
            <div className="flex items-center gap-4">
              <img
                src="/pic.jpg"
                alt="Irfan Ali avatar"
                className="h-16 w-16 rounded-md border border-[#30363d] object-cover"
              />
              <div>
                <p className="font-display text-lg font-bold text-[#e6edf3]">{personal.name}</p>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-[#58a6ff] transition hover:text-[#79c0ff]"
                >
                  @irfanjat <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#8b949e]">
              DevOps & Cloud Engineer. Shipping GitOps pipelines, infrastructure-as-code and Kubernetes
              observability — one commit at a time.
            </p>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#39d353] px-5 py-2.5 font-mono text-[13px] font-semibold text-[#0d1117] transition hover:bg-[#46ef63]"
            >
              <GitBranch className="h-4 w-4" /> open all repos
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {githubRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 2) * 0.06, duration: 0.45 }}
                className="group flex flex-col rounded-lg border border-[#30363d] bg-[#161b22] p-4 transition-colors hover:border-[#39d353]/50"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] font-bold text-[#e6edf3] group-hover:text-[#39d353]">
                    {repo.name}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10.5px] text-[#8b949e]">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: langColors[repo.language] ?? '#8b949e' }}
                    />
                    {repo.language}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-[#8b949e]">{repo.description}</p>
                <span className="mt-3 font-mono text-[11px] text-[#58a6ff] opacity-0 transition-opacity group-hover:opacity-100">
                  view source ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}