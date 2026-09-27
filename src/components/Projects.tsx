import type { MouseEvent } from 'react'
import { profile, projects, type Project } from '../data'
import ProjectArt from './ProjectArt'
import { External, GitHub } from './Icons'

function spotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function statusClass(s: Project['status']) {
  return s === 'Live' ? 'live' : s === 'Completed' ? 'done' : ''
}

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <article
      className={`card project reveal ${p.featured ? 'featured' : ''} ${p.flip ? 'flip' : ''}`}
      data-delay={String((i % 3) + 1)}
      onMouseMove={spotlight}
    >
      <div className="project-art">
        <ProjectArt slug={p.slug} />
      </div>
      <div className="project-body">
        <div className="project-top">
          <h3>{p.title}</h3>
          <span className={`status ${statusClass(p.status)}`}><i />{p.status}</span>
          <span className="period">{p.period}</span>
        </div>
        <p>{p.blurb}</p>
        <ul>
          {p.points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
        <div className="chips">
          {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
        </div>
        <div className="project-links">
          {p.live && (
            <a className="link-btn primary" href={p.live} target="_blank" rel="noopener">
              Live demo <External />
            </a>
          )}
          <a className="link-btn" href={p.code} target="_blank" rel="noopener">
            <GitHub size={15} /> Source
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Projects</span>
            <h2>Things I’ve built</h2>
          </div>
          <p>Mostly over the last two years. Three are deployed and you can try them; the code for all of them is on GitHub.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
        </div>
        <p className="more-projects reveal">
          Smaller and half-finished things live on <a href={profile.links.github} target="_blank" rel="noopener">GitHub</a>.
        </p>
      </div>
    </section>
  )
}
