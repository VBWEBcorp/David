'use client'

import { SectionTitle } from '@/components/ui/section-title'

const logo = '/images/partner-08.jpg'

export function PartnersSection() {
  const items = Array.from({ length: 10 }, (_, i) => i)

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-4 sm:px-6 lg:px-8 lg:pt-20 lg:pb-6">
        <SectionTitle
          eyebrow="Nos partenaires"
          title="Les partenaires de Göz Elec"
        />
      </div>

      <div className="relative mt-8 overflow-hidden pb-16 lg:pb-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div className="group flex">
          <div className="flex shrink-0 items-center gap-20 animate-marquee-bar group-hover:[animation-play-state:paused]">
            {items.map((i) => (
              <img key={`a-${i}`} src={logo} alt="Dyson" className="h-8 w-auto object-contain sm:h-10" loading="lazy" />
            ))}
          </div>
          <div aria-hidden className="flex shrink-0 items-center gap-20 animate-marquee-bar group-hover:[animation-play-state:paused]">
            {items.map((i) => (
              <img key={`b-${i}`} src={logo} alt="Dyson" className="h-8 w-auto object-contain sm:h-10" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
