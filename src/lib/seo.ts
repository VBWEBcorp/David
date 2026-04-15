export const siteConfig = {
  name: 'Göz Elec',
  url: 'https://gozelec.fr',
  locale: 'fr_FR',
  description:
    'Göz Elec, votre électricien à Rennes. Installation, rénovation et dépannage électrique pour particuliers et professionnels. Disponible 24h/24.',
  ogImage: 'https://gozelec.fr/og.png',
  twitterHandle: '@gozelec',
  themeColor: '#f28b10',
  phone: '07 69 79 77 44',
  email: 'gozelec35@hotmail.com',
  address: {
    street: '5 Allée de la Grande Treille',
    city: 'Rennes',
    postalCode: '35200',
    country: 'FR',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} - ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
