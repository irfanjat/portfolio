import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Mail, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { contactForm, personal } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const links = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/irfanjat', href: personal.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'github.com/irfanjat', href: personal.github, icon: Github },
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
    <section id="contact" className="section-padding relative pb-36 content-visibility-auto">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          label="contact"
          title={<>Let's build something <span className="gradient-text">reliable</span></>}
          description="Whether you have a role to discuss, a project idea, or just want to talk shop — the inbox is open."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 lg:col-span-2"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="group glass glass-hover flex items-center gap-4 rounded-2xl p-4"
              >
                <span className="glass-soft flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-violet-300 transition group-hover:text-white">
                  <link.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">{link.label}</p>
                  <p className="truncate text-sm font-medium text-slate-200">{link.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="glass relative overflow-hidden rounded-2xl p-5">
              <div className="pointer-events-none absolute -top-12 -right-10 h-36 w-36 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs text-slate-500">Availability</p>
                <p className="mt-1.5 text-sm font-medium text-emerald-300">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
                  {personal.availability}
                </p>
                <p className="mt-1 text-xs text-slate-500">{personal.availabilityDetail}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="lg:col-span-3"
          >
            <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
              <input type="hidden" name="access_key" value={contactForm.web3formsAccessKey} />
              <input type="hidden" name="subject" value="New message from Irfan Ali Portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="hidden" name="redirect" value={redirectUrl} />

              <div className="relative space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-slate-400">Name</label>
                    <input id="contact-name" type="text" name="name" required placeholder="Your name" className="glass-input" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-slate-400">Email</label>
                    <input id="contact-email" type="email" name="email" required placeholder="your@email.com" className="glass-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="glass-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-[length:160%_auto] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_-10px_rgba(139,92,246,0.7)] transition hover:bg-right"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative mt-4 flex items-center gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully — I'll get back to you soon!
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}