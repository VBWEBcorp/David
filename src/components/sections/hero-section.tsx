'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ValuesMarquee } from '@/components/sections/values-marquee'
import { Button } from '@/components/ui/button'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const
const INTERVAL = 5000

const defaults = {
  eyebrow: 'Électricité générale en Bretagne',
  title: "Göz Elec : Électricien à Rennes",
  description: "Göz Elec réalise votre installation de VMC et tous vos travaux d'électricité générale : installation, rénovation et dépannage. Intervention rapide 24h/24 sur Rennes et sa périphérie.",
  button1: 'Demander un devis gratuit',
  button2: 'Appeler maintenant',
  images: [
    '/images/hero-bg.jpg',
    '/images/goez-hero-1.jpg',
    '/images/goez-hero-2.jpg',
  ],
}

export function HeroSection() {
  const { data } = useContent('home', { hero: defaults })
  const hero = data.hero ?? defaults
  const images = hero.images ?? defaults.images
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75 sm:text-xl">
            {hero.description}
          </p>
          <p className="mx-auto mt-3 text-sm text-white/50">
            Rénovation &middot; Neuf &middot; Dépannage &middot; VMC
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                {hero.button1}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="tel:0769797744">
                <Phone className="size-4" />
                {hero.button2}
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-2">
          {images.map((_: string, i: number) => (
            <button
              key={i}
              type="button"
              aria-label={`Image ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-white' : 'w-4 bg-white/35 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <ValuesMarquee variant="dark" />
      </div>
    </section>
  )
}
