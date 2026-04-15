import type { Metadata } from 'next'

import { siteConfig } from '@/lib/seo'
import BlogPageContent from './blog-page-content'

export const metadata: Metadata = {
  title: 'Blog - Actualites & conseils electricite',
  description: 'Retrouvez nos conseils en electricite, nos realisations recentes et les tendances du secteur. Goz Elec, votre electricien a Rennes.',
  openGraph: {
    type: 'website',
    title: 'Blog - Actualites & conseils electricite',
    description: 'Retrouvez nos conseils en electricite, nos realisations recentes et les tendances du secteur.',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return <BlogPageContent />
}
