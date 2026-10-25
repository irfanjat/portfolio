import { useEffect } from 'react'
import { Link2 } from 'lucide-react'
import { notes, projects } from '../../data/portfolio'

export function Notes() {
  useEffect(() => {
    const openLinkedNote = () => {
      const id = decodeURIComponent(window.location.hash.replace('#', ''))
      if (!id) return
      const target = document.getElementById(id)
      if (!target?.classList.contains('note-card')) return
      target.querySelector('details')?.setAttribute('open', '')
    }

    openLinkedNote()
    window.addEventListener('hashchange', openLinkedNote)
    return () => window.removeEventListener('hashchange', openLinkedNote)
  }, [])

  return (
    <section id="notes" className="section" aria-labelledby="notes-title">
      <div className="section-label" aria-hidden="true">// 06. notes</div>
      <h2 id="notes-title" className="section-title">
        Engineering Notes
      </h2>
      <div className="section-divider" />
      <div className="notes-grid">
        {notes.map((note) => {
          const relatedProject = projects.find(
            (project) => project.id === note.relatedProject,
          )

          return (
            <article className="note-card reveal" id={note.slug} key={note.title}>
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
              <div className="note-heading">
                <h3 className="note-title">{note.title}</h3>
                <a
                  className="note-anchor"
                  href={`#${note.slug}`}
                  aria-label={`Link to ${note.title}`}
                >
                  <Link2 size={14} aria-hidden="true" />
                </a>
              </div>
              <p className="note-summary">{note.summary}</p>

              {relatedProject && (
                <a className="note-related" href={`#project-${relatedProject.id}`}>
                  Related project: {relatedProject.name}
                </a>
              )}

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
                        <pre tabIndex={0}>
                          <code>{block.code}</code>
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </details>
            </article>
          )
        })}
      </div>
    </section>
  )
}
