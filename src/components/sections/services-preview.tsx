'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Home, Wrench, Zap, Wind } from 'lucide-react'
import Link from 'next/link'

import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'

const defaultServices = [
  { title: 'Rénovation', desc: "Vous venez d'acheter un logement ancien et souhaitez le rénover ? Göz Elec se charge de toute la remise aux normes du logement : mise en sécurité ou remplacement du tableau électrique et du câblage si cela s'avère nécessaire, mise à la terre des équipements nécessaires, raccordement des nouveaux appareils…" },
  { title: 'Neuf', desc: "Dans les logements neufs, Göz Elec intervient pour l'installation initiale du réseau électrique. Nous mettons en place le tableau électrique et procédons à la pose des prises, interrupteurs et autres équipements nécessaires. Nous réalisons tous les travaux dans le respect de la série de normes NF C 15-100." },
  { title: 'Dépannage', desc: "L'un de vos appareils électriques dysfonctionne ou vous subissez une panne électrique ? En semaine comme le week-end, Göz Elec se déplace à domicile pour opérer votre dépannage électrique à Rennes et sa périphérie. Nous intervenons 24h/24 en urgence pour identifier la cause de la panne et y apporter la solution adaptée." },
  { title: 'VMC', desc: "Que ce soit dans une construction neuve ou en vue d'une rénovation, vous pouvez faire appel à Göz Elec pour l'installation de VMC. Que celle-ci soit à simple ou double flux, hygroréglable ou non, nous nous adaptons à vos préférences et assurons sa pose et sa mise en service." },
]

const defaultIcons = [Wrench, Home, Zap, Wind]

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesPreview() {
  const { data } = useContent('services', {
    hero: { eyebrow: 'Nos prestations' },
    services: defaultServices,
  })

  const services = (data.services ?? defaultServices).slice(0, 4)

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Les prestations de votre électricien à Rennes"
          title="Particuliers et professionnels de proximité"
          description="Nous répondons à vos besoins en électricité sur Rennes et les alentours dans un rayon de 30 km."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((s: any, i: number) => {
            const Icon = defaultIcons[i] ?? Zap
            return (
              <motion.div
                key={s.title || i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.04 }}
              >
                <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <CardTitle className="font-display text-base">{s.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{s.desc || s.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="group" asChild>
            <Link href="/services">
              Voir toutes nos prestations
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
