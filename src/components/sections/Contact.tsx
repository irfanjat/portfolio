import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Mail, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { contactForm, personal } from '../../data/portfolio'
import { TiltCard } from '../ui/TiltCard'

const contactColors = [
  { icon: 'text-blue-400', border: 'border-blue-500/25', glow: 'rgba(59,130,246,0.12)' },
  { icon: 'text-violet-400', border: 'border-violet-500/25', glow: 'rgba(139,92,246,0.12)' },
  { icon: 'text-teal-400', border: 'border-teal-500/25', glow: 'rgba(20,184,166,0.12)' },
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
    <section id="contact" className="section-padding pb-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14"
        >
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
            // 06. contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 max-w-xl text-base text-slate-400">
            Whether you have a role to discuss, a project idea, or just want to say hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 lg:col-span-2"
          >
            {[
              { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
              { label: 'LinkedIn', value: 'irfanjat', href: personal.linkedin, icon: Linkedin },
              { label: 'GitHub', value: 'irfanjat', href: personal.github, icon: Github },
            ].map((link, i) => {
              const c = contactColors[i % contactColors.length]
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="block"
                >
                  <TiltCard
                    intensity={8}
                    glareColor={c.glow}
                    className={`rounded-2xl border bg-white/[0.03] p-4 transition ${c.border}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${c.border} ${c.icon}`}>
                        <link.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{link.label}</p>
                        <p className="text-sm font-medium text-slate-200">{link.value}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.a>
              )
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <input type="hidden" name="access_key" value={contactForm.web3formsAccessKey} />
              <input type="hidden" name="subject" value="New message from Irfan Ali Portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="hidden" name="redirect" value={redirectUrl} />

              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-slate-400">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500/40 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-slate-400">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500/40 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500/40 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/50 transition hover:bg-cyan-500 hover:shadow-cyan-900/50"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully!
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
