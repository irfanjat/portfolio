import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../../data/portfolio'

const social = [
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

const quickLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[#30363d]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#39d353] font-mono text-xs font-bold text-[#0d1117]">
                {personal.initials}
              </div>
              <span className="font-display text-sm font-semibold text-[var(--color-ink)]">{personal.name}</span>
            </div>
            <p className="mt-2 font-mono text-sm text-[var(--color-muted)]">{personal.role}</p>
          </div>

          <div className="flex gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-muted)] transition hover:text-[#39d353]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="glass-soft flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-muted)] transition hover:text-[#39d353] hover:border-[#39d353]/50"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#30363d] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--color-muted)]">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[var(--color-muted)]">
            Built with <span className="text-[#39d353]">❤️</span> by {personal.name} · Hosted on Cloudflare
          </p>
        </div>
      </div>
    </footer>
  )
}
