'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Award, FileCheck, Headphones, Sparkles } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'

const ease = [0.22, 1, 0.36, 1] as const

const engagements = [
  { icon: FileCheck, title: 'Devis gratuit', description: 'Nous proposons à tous nos clients un devis gratuit et adapté à leurs besoins.' },
  { icon: Sparkles, title: 'Étude et conseil', description: 'Göz Elec analyse précisément votre réseau électrique pour vous conseiller au mieux.' },
  { icon: Shield, title: 'Respect des normes', description: 'Nous travaillons dans le respect de la série de normes NF C 15-100.' },
  { icon: Award, title: 'Garantie décennale', description: 'Pour votre sécurité, Göz Elec a souscrit à une garantie décennale.' },
  { icon: Clock, title: 'Respect des délais', description: 'Nous vous rendons un chantier propre, sécurisé et dans le respect des délais convenus.' },
  { icon: Headphones, title: 'Accompagnement', description: 'Un interlocuteur unique qui vous conseille et vous accompagne de A à Z.' },
]

export function EngagementsSection() {
  return (
    <section className="border-b border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Nos engagements"
          title="Les engagements de Göz Elec"
          description="Installation électrique et dépannage de qualité, dans le respect des normes et des délais."
        />

        {/* Big 24/24 feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-12 text-center"
        >
          <div className="font-display text-7xl font-bold tracking-tight text-primary sm:text-8xl">
            24/24
          </div>
          <p className="mt-3 text-lg font-medium text-foreground">Dépannage jour et nuit</p>
          <p className="mt-2 text-sm text-muted-foreground max-w-lg">
            Plus d&apos;électricité dans votre logement ? Göz Elec, votre électricien à Rennes, se déplace de jour comme de nuit pour le dépannage de vos équipements. Nous intervenons également en urgence les samedis et dimanches !
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.04 }}
              className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card/70 p-5 shadow-[var(--shadow-xs)] ring-1 ring-foreground/5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <e.icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">{e.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
