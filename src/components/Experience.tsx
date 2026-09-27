import { experience } from '../data'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Experience</span>
            <h2>Where I’ve worked</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((e, i) => (
            <div className="tl-item reveal" data-delay={String(i + 1)} key={e.role + e.org}>
              <span className="tl-dot" />
              <div className="card tl-card">
                <div className="tl-head">
                  <h3>{e.role} <span>· {e.org}</span></h3>
                  <span className="period">{e.period} · {e.mode}</span>
                </div>
                <p>{e.summary}</p>
                {e.points.length > 0 && (
                  <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                )}
                <div className="chips">
                  {e.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
