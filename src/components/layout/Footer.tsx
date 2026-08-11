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
    <footer className="border-t border-white/5 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-600 border border-cyan-400/50 font-mono text-xs font-bold text-white">
                IA
              </div>
              <span className="font-semibold text-slate-200">{personal.name}</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">{personal.role}</p>
          </div>

          <div className="flex gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-blue-400"
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
                className="flex h-10 w-10 items-center justify-center rounded-xl glass glass-hover text-slate-400 hover:text-blue-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-600">
            Built with React · Vite · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
