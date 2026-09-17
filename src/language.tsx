import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Copy, type Lang } from './i18n'

type Ctx = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Copy
}

const LanguageContext = createContext<Ctx | null>(null)

function isLang(value: string | null): value is Lang {
  return value === 'tg' || value === 'ru' || value === 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('sstj-lang')
    return isLang(saved) ? saved : 'tg'
  })

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('sstj-lang', next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = translations[lang].metaTitle
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', translations[lang].metaDesc)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('LanguageProvider missing')
  return ctx
}
