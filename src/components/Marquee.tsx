import { marquee } from '../data'

export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        {items.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  )
}
