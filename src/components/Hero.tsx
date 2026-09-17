import { productImages, telUrl, whatsappUrl } from '../config'
import { useLang } from '../language'
import { ProductPhoto } from './Graphics'

export function Hero() {
  const { t } = useLang()
  const hello = t.msg.consult

  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="kicker">{t.hero.kicker}</div>
          <h1>
            {t.hero.title}
            <span className="accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-wa" href={whatsappUrl(hello)}>
              {t.cta.whatsapp}
            </a>
            <a className="btn btn-ghost" href="#advisor">
              {t.cta.advisor}
            </a>
            <a className="btn btn-ghost" href={telUrl()}>
              {t.cta.call}
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <b>{t.hero.stat1}</b>
              <span>{t.hero.stat1s}</span>
            </div>
            <div className="stat">
              <b>{t.hero.stat2}</b>
              <span>{t.hero.stat2s}</span>
            </div>
            <div className="stat">
              <b>{t.hero.stat3}</b>
              <span>{t.hero.stat3s}</span>
            </div>
          </div>
        </div>
        <div className="stage" aria-hidden="true">
          <div className="orbit" />
          <div className="orbit slow" />
          <div className="dish">
            <ProductPhoto src={productImages.standard} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function TrustBar() {
  const { t } = useLang()
  return (
    <div className="wrap trust">
      {t.trust.map((item) => (
        <span className="chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  )
}

export function Why() {
  const { t } = useLang()
  return (
    <section className="section wrap">
      <div className="kicker">Starlink Store TJ</div>
      <h2>{t.why.title}</h2>
      <p className="lead">{t.why.lead}</p>
      <div className="why-grid">
        {t.why.items.map((item) => (
          <article className="card" key={item.t}>
            <h3>{item.t}</h3>
            <p>{item.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
