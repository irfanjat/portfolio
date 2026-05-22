import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { personal } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: personal.phone,
    href: `https://wa.me/92${personal.phone.replace(/^0/, '')}`,
    color: 'emerald',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/irfanjat',
    href: personal.linkedin,
    color: 'violet',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/irfanjat',
    href: personal.github,
    color: 'slate',
  },
]

const colorMap: Record<string, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20 hover:border-cyan-400/50',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20 hover:border-emerald-400/50',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-400/20 hover:border-violet-400/50',
  slate: 'bg-slate-500/10 text-slate-300 border-slate-600/30 hover:border-slate-400/50',
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 pb-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Contact"
          title="Let's Build Something"
          subtitle="Open to DevOps, Cloud & Platform Engineering roles — remote or Pakistan-based."
        />

        {/* availability badge */}
        <div className="mb-10 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {personal.availability}
          </div>
        </div>

        {/* contact cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className={`glass flex items-center gap-4 rounded-xl border p-5 transition-all ${colorMap[link.color]}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                <link.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500">{link.label}</p>
                <p className="truncate font-medium text-slate-200">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-8 text-center"
        >
          
            href={`mailto:${personal.email}?subject=DevOps%20Role%20Opportunity`}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-8 py-4 text-sm font-semibold text-cyan-100 transition hover:glow-cyan"
          >
            <Mail className="h-4 w-4" />
            Send me an email
          </a>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-600">
            <MapPin className="h-3 w-3" />
            Based in Pakistan · Open to international remote
          </p>
        <</motion.div>>
      </div>
    </section>
  )
}