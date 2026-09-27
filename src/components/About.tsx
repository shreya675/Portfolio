import { competitive, education, leadership, skills } from '../data'
import { External } from './Icons'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">About</span>
            <h2>Background &amp; skills</h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-col">
            <div className="card panel reveal">
              <h3>Education</h3>
              <div className="edu-degree">{education.degree}</div>
              <div className="edu-school">{education.school}</div>
              <div className="edu-period">{education.period}</div>
              <p className="note">Relevant coursework</p>
              <div className="chips" style={{ marginTop: 6 }}>
                {education.coursework.map((c) => <span className="chip" key={c}>{c}</span>)}
              </div>
              <p className="note">Most of my software knowledge comes from building things outside class and reading a lot of docs.</p>
            </div>
            <div className="card panel reveal" data-delay="1">
              <h3>Problem solving</h3>
              <div className="cp-row">
                <a href={competitive.leetcode.url} target="_blank" rel="noopener">
                  <b>{competitive.leetcode.label}</b>
                  <span>{competitive.leetcode.value}</span>
                  <External size={12} />
                </a>
                <a href={competitive.codeforces.url} target="_blank" rel="noopener">
                  <b>{competitive.codeforces.label}</b>
                  <span>{competitive.codeforces.value}</span>
                  <External size={12} />
                </a>
              </div>
              <p className="note">Mostly data structures and algorithms in C++ — arrays, graphs, DP, the usual suspects.</p>
            </div>
          </div>

          <div className="about-col">
          <div className="card panel reveal" data-delay="1">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((g) => (
                <div className="skill-group" key={g.group}>
                  <h4>{g.group}</h4>
                  <div className="chips">
                    {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <p className="note">The web stack is home turf; most of the ML column comes from the PCB and FraudGuard projects above.</p>
          </div>
            <div className="card panel reveal" data-delay="2">
              <h3>Outside of code</h3>
              {leadership.map((l) => (
                <div className="lead-item" key={l.role}>
                  <b>{l.role}</b>
                  <span>{l.org} · {l.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
