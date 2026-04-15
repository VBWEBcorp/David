'use client'

import { motion } from 'framer-motion'
import {
  Building2, Home, Lightbulb, Plug, Shield, Sun, Wind, Wrench, Zap,
} from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const
const defaultIcons = [Wrench, Home, Zap, Wind, Lightbulb, Building2, Shield, Sun, Plug]

const defaults = {
  hero: {
    eyebrow: 'Nos prestations',
    title: "Tous les services électriques dont vous avez besoin",
    description: "De la rénovation à l'installation neuve, en passant par le dépannage d'urgence et l'installation de VMC. Göz Elec intervient à Rennes et dans un rayon de 30 km.",
    image: '/images/goez-10.jpg',
  },
  services: [
    { title: 'Rénovation électrique', description: "Remise aux normes du logement : mise en sécurité ou remplacement du tableau électrique et du câblage, mise à la terre des équipements, raccordement des nouveaux appareils." },
    { title: 'Installation neuve', description: "Installation initiale du réseau électrique dans les logements neufs. Mise en place du tableau électrique, pose des prises, interrupteurs et équipements dans le respect des normes NF C 15-100." },
    { title: 'Dépannage 24h/24', description: "Intervention rapide en semaine comme le week-end pour vos pannes électriques. Nous identifions la cause de la panne et apportons la solution adaptée, de jour comme de nuit." },
    { title: 'Installation VMC', description: "Installation de VMC simple ou double flux, hygroréglable ou non. Nous nous adaptons à vos préférences et assurons la pose et la mise en service, en neuf comme en rénovation." },
    { title: 'Éclairage intérieur', description: "Installation de spots, luminaires, éclairages LED, variateurs et solutions d'ambiance pour tous vos espaces intérieurs." },
    { title: 'Électricité commerciale', description: "Installation et maintenance électrique pour commerces, restaurants, fromageries, salons de coiffure, boulangeries et locaux professionnels." },
    { title: 'Mise en sécurité', description: "Diagnostics électriques, mise en conformité NF C 15-100, installation de dispositifs de protection, mise à la terre et parafoudres." },
    { title: 'Éclairage extérieur', description: "Mise en lumière de façades, jardins, terrasses. Installation de détecteurs de mouvement, appliques murales et bornes lumineuses." },
    { title: 'Domotique & connecté', description: "Solutions domotiques, prises connectées, volets roulants électriques, gestion intelligente de l'énergie pour votre confort." },
  ],
}

export function ServicesContent() {
  const { data } = useContent('services', defaults)
  const hero = data.hero ?? defaults.hero
  const services = data.services ?? defaults.services

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Services"
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s: any, i: number) => {
              const Icon = defaultIcons[i] ?? Zap
              return (
                <motion.div
                  key={s.title || i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, ease, delay: i * 0.03 }}
                >
                  <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                    <CardHeader>
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <CardTitle className="font-display text-base">{s.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{s.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
