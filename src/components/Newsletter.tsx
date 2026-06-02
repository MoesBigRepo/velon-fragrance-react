import { useState } from 'react'

type Msg = { kind: 'err' | 'ok'; text: string } | null

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState<Msg>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const v = email.trim()
    if (!v) return setMsg({ kind: 'err', text: 'Please enter your email address.' })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return setMsg({ kind: 'err', text: 'That email doesn’t look right — please check it.' })
    setMsg({ kind: 'ok', text: 'Welcome to the inner circle. Check your inbox to confirm.' })
    setEmail('')
  }

  return (
    <section id="contact" className="bg-cream py-[clamp(64px,9vw,120px)] text-center">
      <div className="wrap">
        <span className="eyebrow">The Inner Circle</span>
        <h2 className="mx-auto mt-3.5 max-w-[16ch] text-[clamp(34px,5vw,68px)]">
          New fragrances,<br /><em className="italic text-gold-deep">private releases.</em>
        </h2>
        <form onSubmit={submit} noValidate className="mx-auto mt-[42px] flex max-w-[520px] flex-col gap-2 text-left">
          <div className="flex border-b border-ink">
            <input type="email" value={email} aria-label="Email address" autoComplete="email"
              onChange={(e) => { setEmail(e.target.value); if (msg) setMsg(null) }}
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-1 py-3.5 text-[15px] text-ink outline-none placeholder:text-[#9a948b]" />
            <button type="submit" className="px-2 text-[11px] uppercase tracking-[0.26em] text-ink transition-colors hover:text-gold-deep">Subscribe</button>
          </div>
          <span className={`min-h-[18px] text-[12.5px] ${msg?.kind === 'err' ? 'text-[#9b2c2c]' : 'text-gold-deep'}`} role="status" aria-live="polite">
            {msg?.text}
          </span>
        </form>
      </div>
    </section>
  )
}
