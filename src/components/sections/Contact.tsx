import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { personal } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${personal.email}`

const links = [
  { icon: Mail, label: 'Email', href: `mailto:${personal.email}`, value: personal.email },
  { icon: Phone, label: 'Phone', href: `tel:${personal.phone}`, value: personal.phone },
  { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin, value: 'irfanjat' },
  { icon: Github, label: 'GitHub', href: personal.github, value: 'irfanjat' },
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: `Portfolio contact from ${data.get('name')}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Email me directly at irfanali.cloud@gmail.com',
      )
    }
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's Build Something"
          subtitle="Open to remote DevOps, Cloud, and Platform Engineering opportunities."
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

            <div className="fixed bottom-8 right-8 z-40 hidden flex-col gap-3 lg:flex">
              {[Linkedin, Github, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={[personal.linkedin, personal.github, `mailto:${personal.email}`][i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-400 transition hover:text-cyan-400 hover:glow-cyan"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-strong space-y-4 rounded-2xl p-8"
          >
            {status === 'success' && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {errorMsg}
              </div>
            )}

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                disabled={status === 'loading'}
                className="w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 disabled:opacity-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={status === 'loading'}
                className="w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 disabled:opacity-50"
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
                disabled={status === 'loading'}
                className="w-full resize-none rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 disabled:opacity-50"
                placeholder="Tell me about the role or project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="relative flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:glow-cyan cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-slate-600">
              Delivered securely to {personal.email} via FormSubmit
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
