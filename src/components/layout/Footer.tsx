import {
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
} from 'lucide-react'
import { navLinks, personal } from '../../data/site'

const services = [
  { label: 'Cloud Architecture', icon: '☁', href: '#skills' },
  { label: 'CI/CD Setup', icon: '⚙', href: '#projects' },
  { label: 'Infrastructure as Code', icon: '📦', href: '#projects' },
  { label: 'Kubernetes Deployments', icon: '⎈', href: '#skills' },
  { label: 'Monitoring Setup', icon: '📊', href: '#projects' },
  { label: 'GitOps Automation', icon: '🔄', href: '#projects' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/60 px-4 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                <Terminal className="h-4 w-4 text-cyan-400" />
              </span>
              <span>{personal.name.split(' ')[0]}<span className="text-cyan-400/80">.devops</span></span>
            </a>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Building scalable cloud infrastructure and automated delivery systems with modern DevOps practices.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(personal.location)}`}
                target="_blank"
                rel="noopener noreferrer"
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    <span className="text-xs">{s.icon}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
              Stay Connected
            </h3>
            <p className="mb-4 text-xs text-slate-500">
              Follow me for updates on DevOps, cloud-native tools &amp; automation.
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/50">
                    <Github className="h-4 w-4" />
                  </span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/50">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/50">
                    <Mail className="h-4 w-4" />
                  </span>
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/40 pt-8 sm:flex-row">
          <div className="flex items-center gap-2 font-mono text-sm text-slate-500">
            <Terminal className="h-4 w-4 text-cyan-500/60" />
            <span>
              {personal.name} &copy; <span className="text-slate-600">{year}</span>
            </span>
          </div>
          <p className="flex items-center gap-1 text-sm text-slate-600">
            Built with <Heart className="h-3.5 w-3.5 text-rose-500/80" /> for cloud-native engineering
          </p>
          <p className="font-mono text-xs text-slate-600">kubectl apply -f portfolio.yaml</p>
        </div>
      </div>
    </footer>
  )
}
