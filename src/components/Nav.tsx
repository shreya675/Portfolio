import { useEffect, useMemo, useState } from 'react'
import { profile } from '../data'
import { useActiveSection } from '../hooks/useActiveSection'
import { Download, Menu, Moon, Sun, X } from './Icons'
import Avatar from './Avatar'

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ theme, onToggle }: { theme: 'dark' | 'light'; onToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => links.map((l) => l.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Home">
          <Avatar size={34} className="brand-avatar" />
          <span>{profile.name}</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a className="btn btn-resume" href={profile.resume} target="_blank" rel="noopener">
            <Download /> Resume
          </a>
          <button className="icon-btn" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}
