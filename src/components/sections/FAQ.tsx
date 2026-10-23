import { faq } from '../../data/portfolio'

export function FAQ() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="section-label">// 07. faq</div>
      <h2 id="faq-title" className="section-title">
        Questions, Answered
      </h2>
      <div className="section-divider" />
      <div className="faq-list reveal">
        {faq.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
