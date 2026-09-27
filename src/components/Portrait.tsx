import { useState } from 'react'
import { profile } from '../data'

export default function Portrait() {
  const [ok, setOk] = useState(true)
  return (
    <div className="portrait-wrap">
      <div className="portrait">
        {ok ? (
          <img src={profile.photo} alt={profile.name} onError={() => setOk(false)} />
        ) : (
          <div className="portrait-fallback" aria-hidden="true">{profile.initials}</div>
        )}
        <div className="portrait-caption">
          <b>{profile.name}</b>
          <span>B.Tech EE ’27 · IIT Ropar</span>
        </div>
      </div>

    </div>
  )
}
