'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface GalleryImage {
  _id: string
  title: string
  description?: string
  imageUrl: string
  category?: string
}

const ease = [0.22, 1, 0.36, 1] as const

const images: GalleryImage[] = [
  { _id: '1', title: 'Salon de coiffure - Éclairage sur mesure', description: "Installation complète d'éclairage avec miroirs et appliques pour un salon haut de gamme.", imageUrl: '/images/goez-hero-2.jpg', category: 'Commercial' },
  { _id: '2', title: 'Salle de bain - Éclairage LED', description: "Éclairage LED d'ambiance et spots encastrés dans une salle de bain moderne.", imageUrl: '/images/goez-hero-1.jpg', category: 'Particulier' },
  { _id: '3', title: 'Tableau électrique - Mise aux normes', description: "Remplacement et mise aux normes NF C 15-100 d'un tableau électrique.", imageUrl: '/images/goez-img-4454.png', category: 'Rénovation' },
  { _id: '4', title: 'Fromagerie - Installation complète', description: "Installation électrique complète : éclairage, réfrigération, prises.", imageUrl: '/images/goez-12.jpg', category: 'Commercial' },
  { _id: '5', title: 'Salon de coiffure - Bac à shampoing', description: "Éclairage chaleureux avec suspensions et spots.", imageUrl: '/images/goez-11.jpg', category: 'Commercial' },
  { _id: '6', title: 'Cuisine moderne - Suspensions design', description: "Suspensions design et spots encastrés dans une cuisine contemporaine.", imageUrl: '/images/goez-10.jpg', category: 'Particulier' },
  { _id: '7', title: 'Boulangerie - Éclairage chaleureux', description: "Mise en lumière d'une boulangerie-pâtisserie.", imageUrl: '/images/goez-9.jpg', category: 'Commercial' },
  { _id: '8', title: 'Éclairage extérieur - Façade', description: "Applique murale avec détecteur de mouvement.", imageUrl: '/images/goez-8.jpg', category: 'Extérieur' },
  { _id: '9', title: 'Éclairage extérieur - Applique design', description: "Applique murale design avec éclairage bidirectionnel.", imageUrl: '/images/goez-7.jpg', category: 'Extérieur' },
  { _id: '10', title: 'Câblage réseau - Local technique', description: "Baie de brassage et câblage réseau complet.", imageUrl: '/images/goez-6.jpg', category: 'Rénovation' },
  { _id: '11', title: 'Salle de bain - Installation complète', description: "Spots LED, miroir éclairé et alimentation douche.", imageUrl: '/images/goez-4.jpg', category: 'Particulier' },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category).filter(Boolean)))]
  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter)

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28 w-full">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-center max-w-3xl mx-auto">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-white/70 uppercase mb-4">Réalisations</p>
            <h1 className="font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl font-bold">Le travail de Göz Elec en images</h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed sm:text-xl max-w-2xl mx-auto">Découvrez nos projets récents : installations électriques, éclairages, rénovations et bien plus.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat as string)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>
              {cat === 'all' ? 'Tout voir' : cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, i) => (
            <motion.div key={image._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease, delay: i * 0.06 }} className="group cursor-pointer" onClick={() => setLightbox(image)}>
              <div className="rounded-2xl border border-border/50 bg-card overflow-hidden transition-all hover:shadow-lg hover:border-primary/20">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img src={image.imageUrl} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{image.title}</h3>
                  {image.description && <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{image.description}</p>}
                  {image.category && <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{image.category}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {lightbox && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setLightbox(null)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3, ease }} className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ maxHeight: '70vh' }}>
              <img src={lightbox.imageUrl} alt={lightbox.title} className="w-full h-auto max-h-[70vh] object-contain bg-black" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-foreground">{lightbox.title}</h3>
              {lightbox.description && <p className="text-sm text-muted-foreground mt-1">{lightbox.description}</p>}
            </div>
            <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 size-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">✕</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
