import { useEffect, useState } from 'react'
import { now, profile } from '../data'
import { Arrow, Download, GitHub, LinkedIn, Code, Mail } from './Icons'
import Portrait from './Portrait'

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let delay = deleting ? 38 : 70
    if (!deleting && text === word) delay = 1700
    if (deleting && text === '') delay = 300

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setI((n) => n + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="badge reveal in">
            <span className="pulse" /> {profile.availability}
          </span>
          <h1>
            Hi, I’m <span className="grad-text">Shreya</span>.
          </h1>
          <div className="hero-sub" aria-live="polite">
            <span>I build</span>
            <span>
              <span className="typed">{typed}</span>
              <span className="caret" aria-hidden="true" />
            </span>
          </div>
          <p className="lede">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-grad btn-lg" href="#projects">
              See my work <Arrow />
            </a>
            <a className="btn btn-lg" href={profile.resume} target="_blank" rel="noopener">
              <Download /> Resume
            </a>
            <div className="socials">
              <a className="icon-btn" href={profile.links.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHub /></a>
              <a className="icon-btn" href={profile.links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedIn /></a>
              <a className="icon-btn" href={profile.links.leetcode} target="_blank" rel="noopener" aria-label="LeetCode"><Code /></a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
            </div>
          </div>
        </div>

        <Portrait />
      </div>

      <div className="container now-strip reveal in">
        {now.map((n) => (
          <div className="now-item" key={n.label}>
            <b>{n.label}</b>
            <span>{n.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
