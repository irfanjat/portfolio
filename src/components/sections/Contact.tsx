import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { contactForm, personal } from '../../data/portfolio'
import { trackEvent } from '../../lib/analytics'

type Status = 'idle' | 'sending' | 'success' | 'error'

const channels = [
  {
    label: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'linkedin.com/in/irfanjat',
    href: personal.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'github.com/irfanjat',
    href: personal.github,
    icon: Github,
    external: true,
  },
  {
    label: 'Download resume (PDF)',
    href: personal.resume,
    icon: FileText,
    external: false,
  },
]

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('sent') === '1') {
      setStatus('success')
      params.delete('sent')
      const query = params.toString()
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}${query ? `?${query}` : ''}#contact`,
      )
    }
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    data.append('subject', `Portfolio contact — ${String(data.get('name') ?? 'new message')}`)
    data.append('from_name', 'irfanjat.online')

    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const result = (await response.json()) as { success?: boolean }

      if (response.ok && result.success) {
        form.reset()
        setStatus('success')
        trackEvent('Contact Submission')
        return
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="section-label" aria-hidden="true">// 08. contact</div>
      <h2 id="contact-title" className="section-title">
        Get in touch
      </h2>
      <div className="section-divider" />

      <div className="contact-grid">
        <div className="contact-copy reveal">
          <p>
            Hiring for an entry-level DevOps, cloud or platform role? Send the role or
            the problem you&apos;re trying to solve. I reply within one business day.
          </p>
          <p className="contact-availability">
            <span className="dot" aria-hidden="true" /> {personal.availability}
          </p>

          <div className="contact-links">
            {channels.map((channel) => {
              const Icon = channel.icon
              return (
                <a
                  className="contact-link"
                  href={channel.href}
                  key={channel.label}
                  {...(channel.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  {...(channel.href === personal.resume
                    ? {
                        download: 'Irfan-Ali-Resume.pdf',
                        onClick: () =>
                          trackEvent('Resume Download', { source: 'contact' }),
                      }
                    : {})}
                >
                  <span className="ico" aria-hidden="true">
                    <Icon size={15} />
                  </span>
                  {channel.label}
                </a>
              )
            })}
          </div>
        </div>

        <div className="reveal">
          {status === 'success' ? (
            <div className="contact-form">
              <div className="form-success" role="status" aria-live="polite">
                Message received — thank you. I&apos;ll get back to you within one
                business day.
              </div>
              <button
                type="button"
                className="form-submit"
                onClick={() => setStatus('idle')}
              >
                Send another message <ArrowRight size={13} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-describedby="form-privacy"
            >
              <input
                type="hidden"
                name="access_key"
                value={contactForm.web3formsAccessKey}
              />
              <input
                type="checkbox"
                name="botcheck"
                className="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  minLength={2}
                  maxLength={80}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What are you working on?"
                  minLength={20}
                  maxLength={5000}
                  required
                />
              </div>

              {status === 'error' && (
                <div className="form-error" role="alert">
                  Something went wrong. Email{' '}
                  <a href={`mailto:${personal.email}`}>{personal.email}</a> instead.
                </div>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                {status !== 'sending' && (
                  <ArrowUpRight size={13} aria-hidden="true" />
                )}
              </button>

              <p className="form-privacy" id="form-privacy">
                Your details are used only to reply. Messages are delivered by
                Web3Forms.
              </p>
              <p className="form-note">I usually reply within one business day.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
