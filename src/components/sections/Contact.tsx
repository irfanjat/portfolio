import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { contactForm, personal } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

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
    <section id="contact" className="section-padding pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Contact"
          title="Let's Build Something"
          subtitle={personal.availabilityDetail}
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 lg:col-span-2"
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
              >
                <GlassCard className="flex items-center gap-4 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{link.label}</p>
                    <p className="text-sm font-medium text-slate-200">{link.value}</p>
                  </div>
                </GlassCard>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="lg:col-span-3"
          >
            <GlassCard hover={false} className="p-6 sm:p-8">
              <input type="hidden" name="access_key" value={contactForm.web3formsAccessKey} />
              <input type="hidden" name="subject" value="New message from Irfan Ali Portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="hidden" name="redirect" value={redirectUrl} />

              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="glass-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="glass-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    className="glass-input w-full resize-none rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </motion.button>
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
            </GlassCard>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
