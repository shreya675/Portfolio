import { useState } from 'react'
import { profile } from '../data'

export default function Avatar({ size = 56, className = '' }: { size?: number; className?: string }) {
  const [ok, setOk] = useState(true)
  const style = { width: size, height: size }

  if (!ok) {
    return (
      <div className={`avatar avatar-initials ${className}`} style={{ ...style, fontSize: size * 0.36 }} aria-hidden="true">
        {profile.initials}
      </div>
    )
  }
  return (
    <div className={`avatar avatar-photo ${className}`} style={style}>
      <img src={profile.photo} alt={profile.name} width={size} height={size} onError={() => setOk(false)} />
    </div>
  )
}
