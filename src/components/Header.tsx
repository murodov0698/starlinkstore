import { useEffect, useState } from 'react'
import { contact, telUrl, whatsappUrl } from '../config'
import { useLang } from '../language'
import { LogoMark } from './Graphics'

const langs = [
  { id: 'tg' as const, label: 'TG' },
  { id: 'ru' as const, label: 'RU' },
  { id: 'en' as const, label: 'EN' },
]

export function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#products', label: t.nav.products },
    { href: '#services', label: t.nav.services },
    { href: '#advisor', label: t.nav.advisor },
    { href: '#coverage', label: t.nav.coverage },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className={`header ${open ? 'open' : ''}`}>
      <div className="wrap header-inner">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>
          <LogoMark className="logo-mark" />
          <span>
            STARLINK <b>TJ</b>
          </span>
        </a>
        <nav className="nav" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang" role="group" aria-label="Language">
            {langs.map((item) => (
              <button
                key={item.id}
                className={lang === item.id ? 'on' : ''}
                onClick={() => setLang(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <a className="btn btn-cyan header-cta" href={whatsappUrl(t.msg.consult)}>
            {t.cta.whatsapp}
          </a>
          <a className="btn btn-ghost header-cta" href={telUrl()}>
            {contact.phoneDisplay}
          </a>
          <button
            className={`menu-btn ${open ? 'open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className="nav-mobile" id="mobile-menu">
        <div className="wrap">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="nav-mobile-actions">
            <a className="btn btn-wa" href={whatsappUrl(t.msg.consult)} onClick={() => setOpen(false)}>
              {t.cta.whatsapp}
            </a>
            <a className="btn btn-ghost" href={telUrl()} onClick={() => setOpen(false)}>
              {t.cta.call}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
