import { profile } from '../data'
import { Code, GitHub, LinkedIn, Mail } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name} · Built with React + Vite. Last updated Sep 2026.</span>
        <div className="socials">
          <a className="icon-btn" href={profile.links.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHub size={16} /></a>
          <a className="icon-btn" href={profile.links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedIn size={16} /></a>
          <a className="icon-btn" href={profile.links.leetcode} target="_blank" rel="noopener" aria-label="LeetCode"><Code size={16} /></a>
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  )
}
