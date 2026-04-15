'use client'

import { SectionTitle } from '@/components/ui/section-title'

const partners = [
  { name: 'Partenaire 1', logo: '/images/partner-01.jpg' },
  { name: 'Partenaire 2', logo: '/images/partner-02.jpg' },
  { name: 'Partenaire 3', logo: '/images/partner-03.jpg' },
  { name: 'Partenaire 4', logo: '/images/partner-04.jpg' },
  { name: 'Partenaire 5', logo: '/images/partner-05.jpg' },
  { name: 'Partenaire 6', logo: '/images/partner-06.jpg' },
  { name: 'Partenaire 7', logo: '/images/partner-07.jpg' },
  { name: 'Partenaire 8', logo: '/images/partner-08.jpg' },
]

export function PartnersSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-4 sm:px-6 lg:px-8 lg:pt-20 lg:pb-6">
        <SectionTitle
          eyebrow="Nos partenaires"
          title="Les partenaires de Göz Elec"
        />
      </div>

      {/* Marquee carousel */}
      <div className="relative mt-8 overflow-hidden pb-16 lg:pb-20">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div className="group flex">
          <div className="flex shrink-0 items-center gap-16 animate-marquee-bar group-hover:[animation-play-state:paused]">
            {partners.map((p, i) => (
              <img
                key={`a-${i}`}
                src={p.logo}
                alt={p.name}
                className="h-10 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-14"
                loading="lazy"
              />
            ))}
          </div>
          <div aria-hidden className="flex shrink-0 items-center gap-16 animate-marquee-bar group-hover:[animation-play-state:paused]">
            {partners.map((p, i) => (
              <img
                key={`b-${i}`}
                src={p.logo}
                alt={p.name}
                className="h-10 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-14"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
