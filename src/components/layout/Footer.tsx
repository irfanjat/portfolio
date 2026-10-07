import { ExternalLink } from 'lucide-react'
import { personal } from '../../data/portfolio'

const col1 = [
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#toolbox' },
  { label: 'Path', href: '#path' },
]

const col2 = [
  { label: 'About', href: '#about' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[#30363d]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-sm font-bold tracking-[0.18em] text-[#e6edf3]">
              <span>IRFAN ALI</span>
              <span className="inline-block h-[12px] w-[7px] animate-blink bg-[#39d353]" aria-hidden="true" />
            </div>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-[#8b949e]">
              DevOps & Cloud Engineer — automating cloud infrastructure and Kubernetes delivery so that deployments stay boring.
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[#58a6ff]">
              <ExternalLink className="h-3 w-3" />
              deployed via GitOps · this site ships itself
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.15em] text-[#6e7681]">EXPLORE</p>
            <ul className="mt-3 space-y-2">
              {col1.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] text-[#8b949e] transition hover:text-[#39d353]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.15em] text-[#6e7681]">INFO</p>
            <ul className="mt-3 space-y-2">
              {col2.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] text-[#8b949e] transition hover:text-[#39d353]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.15em] text-[#6e7681]">CONTACT</p>
            <ul className="mt-3 space-y-2 text-[13px] text-[#8b949e]">
              <li>
                <a href={`mailto:${personal.email}`} className="transition hover:text-[#39d353]">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#39d353]">
                  github.com/irfanjat
                </a>
              </li>
              <li>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#39d353]">
                  linkedin.com/in/irfanjat
                </a>
              </li>
              <li className="text-[#6e7681]">{personal.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#30363d] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-[#8b949e]">
            © {year} {personal.name} — {personal.role}
          </p>
          <p className="font-mono text-xs text-[#6e7681]">
            powered by <span className="text-[#39d353]">git push</span>
          </p>
        </div>
      </div>
    </footer>
  )
}