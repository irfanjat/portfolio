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
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="06"
          label="contact"
          title="Contact"
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
              className="group flex items-center gap-4 rounded-lg border border-[#30363d] bg-[#161b22] p-4 transition-colors hover:border-[#3fb950]/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#21262d] text-[#3fb950] transition group-hover:text-[#39d353]">
                <link.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-[var(--color-muted)]">{link.label}</p>
                <p className="truncate text-sm font-medium text-[var(--color-ink)]">{link.value}</p>
              </div>
            </motion.a>
            ))}

            <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <div className="relative">
                <p className="text-xs text-[var(--color-muted)]">Availability</p>
                <p className="mt-1.5 text-sm font-medium text-[#7ee787]">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#39d353] align-middle" />
                  {personal.availability}
                </p>
                <p className="mt-1 text-xs text-[var(--color-muted)]">{personal.availabilityDetail}</p>
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
            <div className="glass rounded-lg p-6 sm:p-8">
              <input type="hidden" name="access_key" value={contactForm.web3formsAccessKey} />
              <input type="hidden" name="subject" value="New message from Irfan Ali Portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="hidden" name="redirect" value={redirectUrl} />

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block font-mono text-xs text-[var(--color-muted)]">Name</label>
                    <input id="contact-name" type="text" name="name" required placeholder="Your name" className="glass-input" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block font-mono text-xs text-[var(--color-muted)]">Email</label>
                    <input id="contact-email" type="email" name="email" required placeholder="your@email.com" className="glass-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block font-mono text-xs text-[var(--color-muted)]">Message</label>
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
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#39d353] px-6 py-4 text-sm font-semibold text-[#0d1117] transition hover:bg-[#46ef63]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-md border border-[#3fb950]/40 bg-[#3fb950]/10 px-4 py-3 text-sm text-[#7ee787]"
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