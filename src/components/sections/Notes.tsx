import { notes } from '../../data/portfolio'

export function Notes() {
  return (
    <section id="notes" className="section" aria-labelledby="notes-title">
      <div className="section-label">// 06. notes</div>
      <h2 id="notes-title" className="section-title">
        Engineering Notes
      </h2>
      <div className="section-divider" />
      <div className="notes-grid">
        {notes.map((note) => (
          <article className="note-card reveal" key={note.title}>
            <div className="note-meta">
              <span>{note.date}</span>
              <span>·</span>
              <span>{note.readTime}</span>
              {note.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="note-title">{note.title}</h3>
            <p className="note-summary">{note.summary}</p>

            <details>
              <summary>read note</summary>
              <div className="note-body">
                {note.body.map((block, index) => (
                  <div key={`${note.title}-${index}`}>
                    {block.heading && <h4>{block.heading}</h4>}
                    {block.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {block.bullets && (
                      <ul>
                        {block.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {block.code && (
                      <pre>
                        <code>{block.code}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  )
}
