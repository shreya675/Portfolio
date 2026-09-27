import { useState, type ReactNode } from 'react'

/**
 * Shows a real screenshot of the project inside a small browser-window frame.
 * If the image is missing or fails to load, renders `fallback` (the hand-drawn illustration) instead.
 */
export default function Screenshot({ src, alt, url, focus, fallback }: { src?: string; alt: string; url?: string; focus?: string; fallback: ReactNode }) {
  const [ok, setOk] = useState(true)
  if (!src || !ok) return <>{fallback}</>

  const host = url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : ''
  return (
    <div className="shot">
      <div className="shot-bar" aria-hidden="true">
        <span className="shot-dots"><i /><i /><i /></span>
        {host && <span className="shot-url">{host}</span>}
      </div>
      <div className="shot-img">
        <img src={src} alt={alt} loading="lazy" style={focus ? { objectPosition: focus } : undefined} onError={() => setOk(false)} />
      </div>
    </div>
  )
}
