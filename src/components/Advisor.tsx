import { useMemo, useState } from 'react'
import { recommend, type Answers, type ProductRec, type ServiceRec } from '../advisor'
import { whatsappUrl } from '../config'
import { useLang } from '../language'

const productLabel: Record<ProductRec, string> = {
  standard: 'Starlink Standard V4',
  mini: 'Starlink Mini',
  bundle: 'Starlink Standard V4 + Mini',
}

export function Advisor() {
  const { t } = useLang()
  const a = t.advisor
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})

  const questions = [
    {
      q: a.q1,
      key: 'use' as const,
      opts: [
        { v: 'home' as const, l: a.q1a },
        { v: 'travel' as const, l: a.q1b },
        { v: 'both' as const, l: a.q1c },
      ],
    },
    {
      q: a.q2,
      key: 'power' as const,
      opts: [
        { v: 'grid' as const, l: a.q2a },
        { v: 'low' as const, l: a.q2b },
      ],
    },
    {
      q: a.q3,
      key: 'install' as const,
      opts: [
        { v: 'roof' as const, l: a.q3a },
        { v: 'diy' as const, l: a.q3b },
        { v: 'help' as const, l: a.q3c },
      ],
    },
    {
      q: a.q4,
      key: 'account' as const,
      opts: [
        { v: 'new' as const, l: a.q4a },
        { v: 'transfer' as const, l: a.q4b },
        { v: 'none' as const, l: a.q4c },
      ],
    },
  ]

  const ready = Boolean(answers.use && answers.power && answers.install && answers.account)
  const rec = useMemo(() => {
    if (!ready) return null
    return recommend(answers as Required<Answers>)
  }, [answers, ready])

  const choose = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
    setStep((s) => Math.min(s + 1, 4))
  }

  const resultCopy = rec ? a.rec[rec.product] : null
  const svcLabel = (id: ServiceRec) => a.svc[id]

  const waText = rec
    ? `${a.wa}\n${a.waProduct} ${productLabel[rec.product]}\n${a.waServices} ${
        rec.services.length ? rec.services.map(svcLabel).join(', ') : '—'
      }`
    : ''

  return (
    <section className="section wrap" id="advisor">
      <div className="kicker">{a.kicker}</div>
      <h2>{a.title}</h2>
      <p className="lead">{a.lead}</p>
      <div className="card advisor-box">
        {step < 4 && (
          <>
            <div className="progress">
              <span>
                {a.progress} {step + 1} {a.of} 4
              </span>
              <div className="bar">
                <span style={{ ['--w' as string]: `${((step + 1) / 4) * 100}%` }} />
              </div>
              {step > 0 && (
                <button type="button" onClick={() => setStep((s) => s - 1)}>
                  {a.back}
                </button>
              )}
            </div>
            <h3>{questions[step].q}</h3>
            <div className="options" style={{ marginTop: 16 }}>
              {questions[step].opts.map((opt) => (
                <button
                  key={opt.v}
                  className={`option ${answers[questions[step].key] === opt.v ? 'on' : ''}`}
                  onClick={() => choose(questions[step].key, opt.v)}
                >
                  {opt.l}
                </button>
              ))}
            </div>
          </>
        )}
        {step >= 4 && rec && resultCopy && (
          <div className="result">
            <div className="kicker">{a.resultTitle}</div>
            <h3>{resultCopy.title}</h3>
            <p className="lead">{resultCopy.why}</p>
            <p className="note">{a.resultLead}</p>
            {rec.services.length > 0 && (
              <>
                <div className="tag" style={{ marginTop: 18 }}>
                  {a.servicesTitle}
                </div>
                <div className="svc-pills">
                  {rec.services.map((s) => (
                    <span className="pill" key={s}>
                      {svcLabel(s)}
                    </span>
                  ))}
                </div>
              </>
            )}
            <div className="hero-actions">
              <a className="btn btn-wa" href={whatsappUrl(waText)}>
                {a.send}
              </a>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => {
                  setAnswers({})
                  setStep(0)
                }}
              >
                {a.restart}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
