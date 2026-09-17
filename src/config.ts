/** Рақам ва шабакаҳои худро ин ҷо иваз кунед */
export const contact = {
  brand: 'Starlink Store TJ',
  city: 'Душанбе',
  phoneDisplay: '+992 90 120 14 53',
  phoneTel: '+992901201453',
  whatsapp: '992915774815',
  telegram: '992915774815',
}

/**
 * Аксҳои маҳсулот.
 * Файлро ТАНҲО дар public/products гузоред (на дар dist).
 * Номҳо: standard-v4.jpg ва mini.jpg
 * Пас аз иваз саҳифаро бо Ctrl+F5 навсозӣ кунед.
 */
export const productImages = {
  standard: `${import.meta.env.BASE_URL}products/standard-v4.jpg?v=3`,
  mini: `${import.meta.env.BASE_URL}products/mini.jpg?v=3`,
}

export function whatsappUrl(text: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`
}

export function telUrl() {
  return `tel:${contact.phoneTel}`
}

export function telegramUrl() {
  return contact.telegram ? `https://t.me/${contact.telegram}` : ''
}
