'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  hero: {
    eyebrow: 'Contact',
    title: 'Contacter votre électricien à Rennes',
    description: "Que vous ayez besoin d'un renseignement ou que vous souhaitiez un devis, Göz Elec est à votre écoute !",
    image: '/images/goez-9.jpg',
  },
  info: {
    phone: siteConfig.phone,
    email: siteConfig.email,
    street: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    city: siteConfig.address.city,
  },
}

export function ContactContent() {
  const { data } = useContent('contact', defaults)
  const hero = data.hero ?? defaults.hero
  const info = data.info ?? defaults.info

  const phone = info.phone || siteConfig.phone
  const email = info.email || siteConfig.email
  const street = info.street || siteConfig.address.street
  const postalCode = info.postalCode || siteConfig.address.postalCode
  const city = info.city || siteConfig.address.city

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Contact"
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <Card className="rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
                <CardHeader>
                  <CardTitle className="font-display text-lg">Demander un devis gratuit</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstname">Prénom</Label>
                        <Input id="firstname" name="firstname" placeholder="Jean" autoComplete="given-name" className="h-11 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastname">Nom</Label>
                        <Input id="lastname" name="lastname" placeholder="Dupont" autoComplete="family-name" className="h-11 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="jean@exemple.fr" autoComplete="email" className="h-11 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="06 12 34 56 78" autoComplete="tel" className="h-11 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Type de prestation</Label>
                      <select
                        id="service"
                        name="service"
                        className="w-full h-11 rounded-xl border border-input bg-transparent px-3 text-sm text-foreground transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      >
                        <option value="">Sélectionnez une prestation</option>
                        <option value="renovation">Rénovation électrique</option>
                        <option value="neuf">Installation neuve</option>
                        <option value="depannage">Dépannage urgent</option>
                        <option value="vmc">Installation VMC</option>
                        <option value="eclairage">Éclairage</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Décrivez votre projet</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Décrivez votre besoin : type de travaux, surface, délais souhaités..."
                        className="w-full rounded-xl border border-input bg-transparent px-3 py-2.5 text-sm leading-relaxed text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">Envoyer la demande</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.06 }}
              className="space-y-5"
            >
              <Card className="rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Phone className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Téléphone</p>
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-muted-foreground hover:text-foreground">{phone}</a>
                      <p className="mt-1 text-xs text-primary font-medium">Disponible 24h/24</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-foreground">{email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <MapPin className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Adresse</p>
                      <p className="text-sm text-muted-foreground">{street}<br />{postalCode} {city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <CardContent className="pt-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Horaires</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lundi - Vendredi</span>
                      <span className="font-medium text-foreground">8h - 12h / 13h - 17h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Urgences</span>
                      <span className="font-medium text-primary">24h/24 - 7j/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-2xl border border-border/80 bg-muted/30 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.8!2d-1.6489!3d48.0911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ede2fa7d69085%3A0x40ca5cd36e4ab30!2s5%20All%C3%A9e%20de%20la%20Grande%20Treille%2C%2035200%20Rennes!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  className="w-full h-56 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Göz Elec - 5 Allée de la Grande Treille, 35200 Rennes"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
