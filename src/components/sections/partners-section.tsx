'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/section-title'

const ease = [0.22, 1, 0.36, 1] as const

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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow="Nos partenaires"
          title="Les partenaires de Göz Elec"
        />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-auto object-contain sm:h-12"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
