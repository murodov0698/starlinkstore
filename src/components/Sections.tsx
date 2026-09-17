import { useEffect, useState, type FormEvent } from 'react'
import { contact, telUrl, whatsappUrl } from '../config'
import { useLang } from '../language'

export function Services() {
  const { t } = useLang()
  const s = t.services
  return (
    <section className="section wrap" id="services">
      <div className="kicker">{s.kicker}</div>
      <h2>{s.title}</h2>
      <p className="lead">{s.lead}</p>
      <div className="svc-grid">
        {s.items.map((item, i) => (
          <article className={`card svc ${i === 4 ? 'kyc' : ''}`} key={item.t}>
            <h3>{item.t}</h3>
            <p>{item.d}</p>
            {'price' in item && item.price ? <span className="price-tag">{item.price}</span> : null}
          </article>
        ))}
      </div>
      <p className="note">{s.kycNote}</p>
    </section>
  )
}

export function Process() {
  const { t } = useLang()
  return (
    <section className="section wrap">
      <div className="kicker">{t.process.kicker}</div>
      <h2>{t.process.title}</h2>
      <div className="process-grid">
        {t.process.steps.map((step) => (
          <article className="card" key={step.n}>
            <div className="num">{step.n}</div>
            <h3>{step.t}</h3>
            <p>{step.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Coverage() {
  const { t } = useLang()
  return (
    <section className="section wrap" id="coverage">
      <div className="kicker">{t.coverage.kicker}</div>
      <h2>{t.coverage.title}</h2>
      <p className="lead">{t.coverage.lead}</p>
      <div className="cities">
        {t.coverage.cities.map((city) => (
          <span className="city" key={city}>
            {city}
          </span>
        ))}
      </div>
      <p className="note">{t.coverage.note}</p>
    </section>
  )
}

export function FAQ() {
  const { t } = useLang()
  return (
    <section className="section wrap" id="faq">
      <div className="kicker">{t.faq.kicker}</div>
      <h2>{t.faq.title}</h2>
      <div className="faq-list">
        {t.faq.items.map((item) => (
          <details className="card faq-item" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  const { lang, t } = useLang()
  const c = t.contact
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [interest, setInterest] = useState<string>(c.interests[0])
  const [message, setMessage] = useState('')

  useEffect(() => {
    setInterest(c.interests[0])
  }, [lang, c.interests])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = t.msg.form
      .replace('{name}', name)
      .replace('{city}', city)
      .replace('{interest}', interest)
      .replace('{message}', message)
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section wrap" id="contact">
      <div className="kicker">{c.kicker}</div>
      <h2>{c.title}</h2>
      <p className="lead">{c.lead}</p>
      <div className="contact-grid">
        <form className="card" onSubmit={onSubmit}>
          <label>
            {c.name}
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            {c.city}
            <input value={city} onChange={(e) => setCity(e.target.value)} required />
          </label>
          <label>
            {c.interest}
            <select value={interest} onChange={(e) => setInterest(e.target.value)}>
              {c.interests.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            {c.message}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={c.messagePh}
            />
          </label>
          <button className="btn btn-wa" type="submit">
            {c.submit}
          </button>
        </form>
        <aside className="card side-contact">
          <p>{c.or}</p>
          <a className="btn btn-wa" href={whatsappUrl(t.msg.hi)}>
            WhatsApp {contact.phoneDisplay}
          </a>
          <a className="btn btn-ghost" href={telUrl()}>
            {c.hours}
            <br />
            {contact.phoneDisplay}
          </a>
        </aside>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong>Starlink Store TJ</strong>
          <p>{t.footer.independent}</p>
          {t.footer.photos ? <p>{t.footer.photos}</p> : null}
        </div>
        <div>© {new Date().getFullYear()} · {t.footer.rights}</div>
      </div>
    </footer>
  )
}

export function Dock() {
  const { t } = useLang()
  return (
    <nav className="dock" aria-label="Mobile actions">
      <a href={telUrl()}>{t.dock.call}</a>
      <a className="wa" href={whatsappUrl(t.msg.chat)}>
        {t.dock.chat}
      </a>
      <a href="#advisor">{t.dock.quiz}</a>
    </nav>
  )
}
