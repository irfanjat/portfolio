import { experience } from '../../data/portfolio'

export function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="section-label" aria-hidden="true">// 03. experience</div>
      <h2 id="experience-title" className="section-title">
        Experience &amp; Education
      </h2>
      <div className="section-divider" />
      <div className="timeline reveal">
        {experience.map((item) => (
          <article className="timeline-item" key={item.role}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="tl-top">
              <h3 className="tl-role">{item.role}</h3>
              <span className="tl-when">{item.period}</span>
            </div>
            <div className="tl-org">{item.org}</div>
            <ul className="tl-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
