export type UseCase = 'home' | 'travel' | 'both'
export type Power = 'grid' | 'low'
export type Install = 'roof' | 'diy' | 'help'
export type Account = 'new' | 'transfer' | 'none'

export type Answers = {
  use?: UseCase
  power?: Power
  install?: Install
  account?: Account
}

export type ProductRec = 'standard' | 'mini' | 'bundle'
export type ServiceRec = 'install' | 'setup' | 'transfer' | 'kyc' | 'consult'

export type Recommendation = {
  product: ProductRec
  services: ServiceRec[]
}

export function recommend(a: Required<Answers>): Recommendation {
  let product: ProductRec = 'standard'
  if (a.use === 'both') product = 'bundle'
  else if (a.use === 'travel' || a.power === 'low') product = 'mini'
  else product = 'standard'

  const services: ServiceRec[] = []
  if (a.install === 'roof') services.push('install')
  if (a.install === 'help') {
    services.push('consult')
    if (a.use !== 'travel') services.push('install')
  }
  if (a.account === 'new') {
    services.push('setup')
    services.push('kyc')
  }
  if (a.account === 'transfer') {
    services.push('transfer')
    services.push('kyc')
  }

  return { product, services: [...new Set(services)] }
}
