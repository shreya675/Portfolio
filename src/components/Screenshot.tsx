import { useState, type ReactNode } from 'react'

// screenshot in a browser frame; falls back to the illustration if the image 404s
export default function Screenshot({ src, alt, url, fallback }: { src?: string; alt: string; url?: string; fallback: ReactNode }) {
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
        <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} />
      </div>
    </div>
  )
}
