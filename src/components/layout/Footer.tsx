import { Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react'
import { navLinks, personal } from '../../data/site'

const services = [
  { label: 'Cloud Architecture', href: '#skills' },
  { label: 'CI/CD Setup', href: '#projects' },
  { label: 'Infrastructure as Code', href: '#projects' },
  { label: 'Kubernetes Deployments', href: '#skills' },
  { label: 'Monitoring Setup', href: '#projects' },
  { label: 'GitOps Automation', href: '#projects' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/60 px-4 pt-14 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                <Terminal className="h-3.5 w-3.5 text-cyan-400" />
              </span>
              <span>{personal.name.split(' ')[0]}<span className="text-cyan-400/80">.devops</span></span>
            </a>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Building scalable cloud infrastructure and automated delivery systems with modern DevOps practices.
            </p>
            <div className="mt-4 space-y-1.5">
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(personal.location)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-cyan-400"
              >
                <MapPin className="h-3.5 w-3.5 text-cyan-400/60" />
                {personal.location}
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-cyan-400"
              >
                <Mail className="h-3.5 w-3.5 text-cyan-400/60" />
                {personal.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-500 transition-colors hover:text-cyan-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-slate-500 transition-colors hover:text-cyan-400">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Connect</h3>
            <ul className="space-y-2.5">
              <li>
                <a href={personal.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800/40 pt-6 sm:flex-row">
          <span className="font-mono text-sm text-slate-500">
            {personal.name} &copy; {year}
          </span>
          <span className="font-mono text-xs text-slate-600">kubectl apply -f portfolio.yaml</span>
        </div>
      </div>
    </footer>
  )
}
