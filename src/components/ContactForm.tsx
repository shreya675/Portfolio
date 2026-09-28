import { useState, type FormEvent } from 'react'
import { profile } from '../data'
import { Arrow } from './Icons'

const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = '338a3d7e-534d-4780-86c2-ee2bd67ef8ed'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // honeypot: bots fill this, humans never see it
    if (data.get('website')) return

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    if (!name || !email || !message) {
      setError('Please fill in all three fields.')
      setStatus('error')
      return
    }

    setStatus('sending')
    setError('')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${name}`,
          from_name: 'Portfolio contact form',
          name,
          email,
          message,
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.message || 'Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      // fall back to the visitor's mail client with everything prefilled
      const subject = encodeURIComponent(`Portfolio message from ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setError('Could not send through the site, so I opened your email app instead.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done" role="status">
        <span className="form-done-icon" aria-hidden="true">✓</span>
        <b>Sent — thanks!</b>
        <span>I’ll get back to you soon. If it’s urgent, LinkedIn is the quickest.</span>
        <button className="btn" onClick={() => setStatus('idle')}>Send another</button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <div className="form-row">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@company.com" required autoComplete="email" />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} placeholder="Hi Shreya — we’re hiring for…" required />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-grad btn-lg form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <>Send message <Arrow /></>}
      </button>
    </form>
  )
}
