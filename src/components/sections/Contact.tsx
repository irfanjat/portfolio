import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
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

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
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
                whileHover={{ x: 4 }}
                className="card card-hover flex items-center gap-4 rounded-xl p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{link.label}</p>
                  <p className="text-sm font-medium text-slate-200">{link.value}</p>
                </div>
              </motion.a>
            ))}

            <a
              href={`mailto:${personal.email}?subject=Portfolio%20inquiry`}
              className="card card-hover flex items-center justify-center gap-2 rounded-xl p-4 text-sm font-medium text-cyan-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Email me at {personal.email}
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="card rounded-xl p-6 sm:p-8 lg:col-span-3"
          >
            <input type="hidden" name="access_key" value={contactForm.web3formsAccessKey} />
            <input type="hidden" name="subject" value="New message from Irfan Ali Portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />
            <input type="hidden" name="redirect" value={redirectUrl} />

            <div className="mb-4 flex items-center gap-2 pb-4 border-b border-slate-800">
              <span className="flex h-2 w-2 rounded-full bg-rose-400" />
              <span className="flex h-2 w-2 rounded-full bg-amber-400" />
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-[11px] text-slate-500">contact-form.sh</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-mono text-slate-500">$ --name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-mono text-slate-500">$ --email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-mono text-slate-500">$ --message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </div>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
              >
                <CheckCircle2 className="h-4 w-4" />
                Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
