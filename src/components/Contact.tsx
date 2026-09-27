import { profile } from '../data'
import { Arrow, Download, GitHub, LinkedIn, Mail } from './Icons'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-card reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Contact</span>
          <h2 className="grad-text" style={{ fontFamily: 'var(--display)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Let’s build something.
          </h2>
          <p>
            Hiring for an SDE role or internship for the 2027 batch? Or just want to talk about one of the projects above?
            Email is the fastest way to reach me; LinkedIn works too.
          </p>
          <div className="contact-actions">
            <a className="btn btn-grad btn-lg" href={`mailto:${profile.email}`}>
              <Mail /> Email me <Arrow />
            </a>
            <a className="btn btn-lg" href={profile.links.linkedin} target="_blank" rel="noopener">
              <LinkedIn size={16} /> LinkedIn
            </a>
            <a className="btn btn-lg" href={profile.links.github} target="_blank" rel="noopener">
              <GitHub size={16} /> GitHub
            </a>
            <a className="btn btn-lg" href={profile.resume} target="_blank" rel="noopener">
              <Download /> Resume
            </a>
          </div>
          <p className="contact-email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
