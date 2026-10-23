import { ArrowUpRight } from 'lucide-react'
import { credentials } from '../../data/portfolio'

export function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
      aria-labelledby="certifications-title"
    >
      <div className="section-label">// 04. certifications</div>
      <h2 id="certifications-title" className="section-title">
        Credentials &amp; Courses
      </h2>
      <div className="section-divider" />
      <div className="certs-grid">
        {credentials.map((credential) => (
          <article className="cert-card reveal" key={credential.title}>
            <span className="cert-icon" aria-hidden="true">
              {credential.icon}
            </span>
            <h3 className="cert-name">{credential.title}</h3>
            <div className="cert-issuer">{credential.issuer}</div>
            <span className="cert-kind">{credential.kind}</span>
            <a
              className="cert-link"
              href={credential.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {credential.kind === 'Certification'
                ? 'verify credential'
                : 'view certificate'}{' '}
              <ArrowUpRight size={11} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
