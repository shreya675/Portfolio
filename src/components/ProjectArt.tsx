import type { CSSProperties } from 'react'
import type { Project } from '../data'

/* Small illustrative visuals for each project card. Pure CSS / SVG, no images. */

function RaceArt() {
  const racers = [
    { name: 'you', w: '92%', d: '0s' },
    { name: 'ak', w: '78%', d: '-1.2s' },
    { name: 'pr', w: '64%', d: '-2.1s' },
    { name: 'ni', w: '51%', d: '-0.6s' },
  ]
  return (
    <div className="art-race" aria-hidden="true">
      <div className="race-live"><span className="pulse" /> LIVE RACE · ROOM #A4F2</div>
      <div className="race-wpm"><b>84</b><span>WPM</span></div>
      {racers.map((r) => (
        <div className="race-row" key={r.name}>
          <span className="race-av">{r.name}</span>
          <span className="race-track"><span className="race-fill" style={{ '--w': r.w, '--d': r.d } as CSSProperties} /></span>
          <span>{r.w}</span>
        </div>
      ))}
      <div className="race-words">
        <em>the quick brown fox jumps over the</em> <i>l</i>azy dog and keeps typing until the race
      </div>
    </div>
  )
}

function PcbArt() {
  const boxes = [
    { x: 42, y: 30, w: 26, h: 20, c: '#f472b6', l: 'short_circuit' },
    { x: 150, y: 70, w: 22, h: 22, c: '#fbbf24', l: 'mouse_bite' },
    { x: 230, y: 120, w: 30, h: 18, c: '#5eead4', l: 'open_circuit' },
    { x: 96, y: 138, w: 20, h: 20, c: '#a78bfa', l: 'spur' },
  ]
  return (
    <>
      <svg className="art-svg art-fit" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <pattern id="pcb-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0H0v16" fill="none" stroke="currentColor" strokeOpacity="0.12" />
          </pattern>
        </defs>
        <rect width="320" height="200" fill="url(#pcb-grid)" style={{ color: 'var(--accent)' }} />
        {/* traces */}
        <g fill="none" stroke="var(--accent)" strokeOpacity="0.45" strokeWidth="2.2" strokeLinecap="round">
          <path d="M10 40h60l20 20h80" /><path d="M20 160h90l30-30h60l20 20h70" /><path d="M200 20v60l30 30" /><path d="M280 40v100" /><path d="M120 190v-30" />
        </g>
        {/* pads */}
        <g fill="var(--accent)" fillOpacity="0.7">
          {[[10, 40], [70, 40], [170, 60], [20, 160], [110, 160], [200, 20], [280, 40], [280, 140], [120, 190]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />
          ))}
        </g>
        {/* chip */}
        <rect x="126" y="86" width="52" height="40" rx="4" fill="var(--bg-3)" stroke="var(--border-2)" />
        <text x="152" y="110" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--text-3)">U1</text>
        {/* detections */}
        {boxes.map((b) => (
          <g key={b.l}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" stroke={b.c} strokeWidth="1.6" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1.4s" repeatCount="indefinite" />
            </rect>
            <rect x={b.x} y={b.y - 11} width={b.l.length * 5.3 + 8} height="10" rx="2" fill={b.c} />
            <text x={b.x + 4} y={b.y - 3.2} fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#0b0d14">{b.l}</text>
          </g>
        ))}
        {/* scan line */}
        <rect x="0" y="0" width="320" height="2" fill="var(--accent)" fillOpacity="0.6">
          <animate attributeName="y" from="-2" to="200" dur="3.2s" repeatCount="indefinite" />
        </rect>
      </svg>
      <span className="art-label">yolo11 · deeppcb · 97.8% mAP@0.5 · FAIL (1 critical)</span>
    </>
  )
}

function PmuArt() {
  // three phasors, 120° apart, plus a live sine trace
  const pts = Array.from({ length: 161 }, (_, i) => {
    const x = 240 + i * 1.4
    const y = 100 - Math.sin(i / 8) * 36
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  return (
    <>
      <svg className="art-svg" viewBox="0 0 480 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g transform="translate(110 100)">
          <circle r="66" fill="none" stroke="var(--border-2)" strokeDasharray="2 4" />
          <circle r="42" fill="none" stroke="var(--border)" />
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
            {[
              ['#5eead4', 0],
              ['#a78bfa', 120],
              ['#f472b6', 240],
            ].map(([c, a]) => (
              <g key={String(a)} transform={`rotate(${a})`}>
                <line x1="0" y1="0" x2="60" y2="0" stroke={c as string} strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="60" cy="0" r="3.5" fill={c as string} />
              </g>
            ))}
          </g>
          <circle r="3" fill="var(--text-2)" />
        </g>
        <line x1="240" y1="100" x2="466" y2="100" stroke="var(--border-2)" />
        <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.9" />
        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--text-3)">
          <text x="240" y="40">IEEE C37.118 · 50 fps</text>
          <text x="240" y="168">PMU → PDC · TCP :4712</text>
          <text x="240" y="182" fill="var(--accent)">0xAA01 · SYNC OK</text>
        </g>
      </svg>
      <span className="art-label">phasor stream</span>
    </>
  )
}

function FitArt() {
  const bars = [38, 52, 44, 70, 62, 88, 76]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <>
      <svg className="art-svg" viewBox="0 0 480 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="fit-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5eead4" /><stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        {[60, 100, 140].map((y) => <line key={y} x1="190" y1={y} x2="460" y2={y} stroke="var(--border)" />)}
        {bars.map((h, i) => (
          <g key={i}>
            <rect x={196 + i * 38} y={160 - h} width="24" height={h} rx="6" fill="url(#fit-g)" opacity={i === 5 ? 1 : 0.55}>
              <animate attributeName="height" from="0" to={h} dur="0.9s" begin={`${i * 0.08}s`} fill="freeze" />
              <animate attributeName="y" from="160" to={160 - h} dur="0.9s" begin={`${i * 0.08}s`} fill="freeze" />
            </rect>
            <text x={208 + i * 38} y="178" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--text-3)">{days[i]}</text>
          </g>
        ))}
        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--text-3)">
          <text x="28" y="52">weekly volume</text>
          <text x="28" y="82" fontSize="30" fontWeight="700" fontFamily="Sora, Inter, sans-serif" fill="var(--text)">6.4k</text>
          <text x="28" y="100" fill="var(--live)">▲ 18% vs last week</text>
          <text x="28" y="134">next up</text>
        </g>
        <g transform="translate(28 142)">
          <rect width="128" height="24" rx="6" fill="var(--bg-3)" stroke="var(--border-2)" />
          <text x="9" y="16" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--text-2)">rec: bulgarian split</text>
        </g>
      </svg>
      <span className="art-label">progress · recommendations</span>
    </>
  )
}

function FraudArt() {
  const feats = [
    { n: 'amount_equals_orig_balance', v: 0.92, c: '#f472b6' },
    { n: 'is_transfer_or_cashout', v: 0.74, c: '#f472b6' },
    { n: 'error_balance_orig', v: 0.58, c: '#f472b6' },
    { n: 'amount_to_orig_ratio', v: 0.31, c: '#a78bfa' },
    { n: 'hour_of_day', v: 0.06, c: '#5eead4' },
  ]
  return (
    <>
      <svg className="art-svg art-fit" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--text-3)">
          <text x="22" y="30">POST /predict · txn 0x7f3a</text>
          <text x="22" y="66" fontSize="7.5">shap contributions</text>
        </g>
        <g transform="translate(206 16)">
          <rect width="92" height="26" rx="7" fill="rgba(244,114,182,0.14)" stroke="#f472b6" />
          <text x="46" y="17" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600" fill="#f472b6">FRAUD · 0.993</text>
        </g>
        <line x1="150" y1="72" x2="150" y2="178" stroke="var(--border-2)" />
        {feats.map((f, i) => {
          const y = 78 + i * 21
          const w = Math.abs(f.v) * 120
          const x = f.v >= 0 ? 150 : 150 - w
          return (
            <g key={f.n}>
              <text x="146" y={y + 10} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--text-2)">{f.n}</text>
              <rect x={x} y={y} width={w} height="13" rx="3" fill={f.c} opacity="0.85">
                <animate attributeName="width" from="0" to={w} dur="0.8s" begin={`${i * 0.1}s`} fill="freeze" />
              </rect>
              <text x={f.v >= 0 ? 150 + w + 5 : x - 5} y={y + 10} textAnchor={f.v >= 0 ? 'start' : 'end'} fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--text-3)">
                {f.v > 0 ? '+' : ''}{f.v.toFixed(2)}
              </text>
            </g>
          )
        })}
      </svg>
      <span className="art-label">xgboost · threshold 0.98 · pr-auc 0.9999</span>
    </>
  )
}

export default function ProjectArt({ slug }: { slug: Project['slug'] }) {
  switch (slug) {
    case 'velocity': return <RaceArt />
    case 'pcb': return <PcbArt />
    case 'fraud': return <FraudArt />
    case 'pmu': return <PmuArt />
    case 'fittrack': return <FitArt />
  }
}
