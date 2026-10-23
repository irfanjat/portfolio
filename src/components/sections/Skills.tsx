import { skills } from '../../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-label">// 02. skills</div>
      <h2 id="skills-title" className="section-title">
        Technical Toolbox
      </h2>
      <div className="section-divider" />
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card reveal" key={skill.title}>
            <h3 className="skill-title">{skill.title}</h3>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span className="skill-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
