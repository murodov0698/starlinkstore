import { type ReactNode } from 'react'

export function ProductPhoto({
  src,
  alt,
}: {
  src: string
  alt: string
  fallback?: ReactNode
}) {
  return <img key={src} src={src} alt={alt} />
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#102033" />
      <circle cx="32" cy="32" r="18" stroke="#6ecbff" strokeOpacity="0.35" />
      <path d="M14 40c8-3 12-16 18-16s10 13 18 16" stroke="#6ecbff" strokeWidth="2.2" />
      <rect x="24" y="22" width="16" height="11" rx="2" fill="#eef4ff" />
      <path d="M27 22h10l-2-5h-6l-2 5z" fill="#9aabc2" />
      <circle cx="48" cy="16" r="2" fill="#e8c36a" />
    </svg>
  )
}

export function DishStandard() {
  return (
    <svg viewBox="0 0 420 280" fill="none" aria-hidden="true">
      <ellipse cx="210" cy="230" rx="110" ry="14" fill="#000" opacity="0.35" />
      <path d="M210 92v92" stroke="#6ecbff" strokeWidth="4" />
      <rect x="198" y="178" width="24" height="42" rx="3" fill="#9aabc2" />
      <path
        d="M96 118c18-48 70-78 114-78s96 30 114 78c-22 18-66 30-114 30s-92-12-114-30z"
        fill="#dce7f5"
      />
      <path
        d="M118 108c16-32 54-52 92-52s76 20 92 52c-20 10-54 16-92 16s-72-6-92-16z"
        fill="#8ea4bd"
        opacity="0.55"
      />
      <circle cx="210" cy="78" r="7" fill="#6ecbff" />
      <path d="M210 78c40-28 92-24 128-6" stroke="#6ecbff" strokeOpacity="0.5" />
      <path d="M210 78c-40-28-92-24-128-6" stroke="#6ecbff" strokeOpacity="0.5" />
    </svg>
  )
}

export function DishMini() {
  return (
    <svg viewBox="0 0 420 280" fill="none" aria-hidden="true">
      <ellipse cx="210" cy="228" rx="78" ry="12" fill="#000" opacity="0.35" />
      <rect x="168" y="96" width="84" height="92" rx="16" fill="#ece7dc" />
      <rect x="180" y="108" width="60" height="54" rx="8" fill="#1b2433" />
      <circle cx="210" cy="135" r="10" fill="#6ecbff" opacity="0.8" />
      <rect x="188" y="170" width="44" height="8" rx="4" fill="#c7b48a" />
      <path d="M210 96c28-26 70-24 96-10" stroke="#e8c36a" strokeOpacity="0.7" />
      <path d="M210 96c-28-26-70-24-96-10" stroke="#e8c36a" strokeOpacity="0.7" />
    </svg>
  )
}
