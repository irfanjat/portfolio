import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { contactForm, personal } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const links = [
  { icon: Mail, label: 'Email', href: `mailto:${personal.email}`, value: personal.email },
  { icon: Phone, label: 'Phone', href: `tel:${personal.phone}`, value: personal.phone },
  { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin, value: 'irfanjat' },
  { icon: Github, label: 'GitHub', href: personal.github, value: 'irfanjat' },
]

export function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('sent') === '1') {
      setShowSuccess(true)
      window.history.replaceState({}, '', `${window.location.pathname}#contact`)
    }
  }, [])

  const redirectUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${import.meta.env.BASE_URL}?sent=1#contact`
      : contactForm.successRedirect

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's Build Something"
          subtitle={personal.availabilityDetail}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-cyan-400/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{link.label}</p>
                  <p className="font-medium text-slate-200">{link.value}</p>
                </div>
              </motion.a>
            ))}

            <a
              href={`mailto:${personal.email}?subject=Portfolio%20inquiry`}
              className="glass flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 p-4 text-sm font-medium text-cyan-300 transition hover:glow-cyan"
            >
              <Mail className="h-4 w-4" />
              Email me at {personal.email}
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="glass-strong space-y-4 rounded-2xl p-8"
          >
            <input type="hidden" name="access_key" value={contactForm.web3formsAccessKey} />
            <input type="hidden" name="subject" value="New message from Irfan Ali Portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />
            <input type="hidden" name="redirect" value={redirectUrl} />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {showSuccess && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Message sent successfully! I&apos;ll reply to your email soon.
              </div>
            )}

            <p className="text-xs text-slate-500">
              {personal.availability} — Pakistan & international teams welcome.
            </p>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-500">
                Your email (so I can reply)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                placeholder="Role, project, or opportunity details..."
              />
            </div>
            <button
              type="submit"
              className="relative flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:glow-cyan cursor-pointer"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <p className="text-center text-[10px] text-slate-600">
              Delivered to {personal.email} · You&apos;ll be redirected back after sending
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
