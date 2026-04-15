'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { SectionTitle } from '@/components/ui/section-title'

const ease = [0.22, 1, 0.36, 1] as const

const faqs = [
  {
    question: "Qu'est-ce que la mise à la terre ?",
    answer: "La mise à la terre est une protection rendue obligatoire par la norme NF C 15-100. Elle permet d'évacuer les courants de fuite vers la terre, ce qui évite que la fuite ne traverse le corps humain. Göz Elec se charge de la mise à la terre lors de la remise aux normes de votre réseau électrique.",
  },
  {
    question: "Comment savoir si je dois remplacer mon tableau électrique ?",
    answer: "Vous avez un doute sur la fiabilité du tableau électrique de votre logement ? La meilleure option est de faire appel à un professionnel qualifié comme Göz Elec qui saura évaluer l'état global de votre tableau électrique et vous indiquer si un remplacement est nécessaire.",
  },
  {
    question: "Intervenez-vous en urgence le week-end ?",
    answer: "Oui ! Göz Elec se déplace également en urgence les samedis et dimanches. En cas de panne électrique, contactez-nous au 07 69 79 77 44, nous intervenons 24h/24.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Göz Elec intervient à Rennes et dans toute sa périphérie, dans un rayon de 30 km. Nous couvrons notamment Cesson-Sévigné, Saint-Grégoire, Bruz, Pacé, Chantepie et les communes avoisinantes.",
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-sm font-semibold text-foreground sm:text-base">{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </motion.div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="FAQ"
          title="Vous avez des questions ?"
          description="Retrouvez les réponses aux questions les plus fréquentes sur nos services d'électricité."
        />
        <div className="mt-12">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
