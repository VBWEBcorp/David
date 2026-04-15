'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User, Search } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const posts = [
  {
    _id: '1',
    title: "Mise aux normes électriques : ce qu'il faut savoir en 2024",
    slug: 'mise-aux-normes-electriques-2024',
    excerpt: "La norme NF C 15-100 évolue régulièrement. Découvrez les points essentiels pour mettre votre installation en conformité et garantir la sécurité de votre habitation.",
    coverImage: '/images/goez-img-4454.png',
    category: 'Normes',
    author: 'Göz Elec',
    publishedAt: '2024-11-15T10:00:00Z',
  },
  {
    _id: '2',
    title: 'Comment bien choisir son éclairage intérieur ?',
    slug: 'choisir-eclairage-interieur',
    excerpt: "L'éclairage joue un rôle crucial dans l'ambiance de votre intérieur. Spots, suspensions, LED : nos conseils pour faire le bon choix pièce par pièce.",
    coverImage: '/images/goez-10.jpg',
    category: 'Conseils',
    author: 'Göz Elec',
    publishedAt: '2024-10-28T10:00:00Z',
  },
  {
    _id: '3',
    title: 'Les avantages de la domotique pour votre maison',
    slug: 'avantages-domotique-maison',
    excerpt: "La domotique n'est plus réservée aux maisons de luxe. Découvrez comment rendre votre habitation plus intelligente et réaliser des économies d'énergie.",
    coverImage: '/images/goez-8.jpg',
    category: 'Domotique',
    author: 'Göz Elec',
    publishedAt: '2024-10-10T10:00:00Z',
  },
  {
    _id: '4',
    title: 'Dépannage électrique : quand faut-il appeler un professionnel ?',
    slug: 'depannage-electrique-quand-appeler',
    excerpt: "Certaines pannes électriques sont bénignes, d'autres nécessitent une intervention urgente. Apprenez à reconnaître les signes qui doivent vous alerter.",
    coverImage: '/images/goez-7.jpg',
    category: 'Dépannage',
    author: 'Göz Elec',
    publishedAt: '2024-09-22T10:00:00Z',
  },
]

const categories = ['Normes', 'Conseils', 'Domotique', 'Dépannage']

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

  const filteredPosts = activeCategory === 'all' ? posts : posts.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex items-center">
        <div className="absolute inset-0"><div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-background" /></div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28 w-full">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-center max-w-3xl mx-auto">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-white/70 uppercase mb-4">Blog</p>
            <h1 className="font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl font-bold">Actualités &amp; conseils</h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed sm:text-xl max-w-2xl mx-auto">Retrouvez nos conseils en électricité, nos réalisations récentes et les tendances du secteur.</p>
          </motion.div>
        </div>
      </section>

      <div className="border-b border-border/60 bg-background/50 backdrop-blur-sm sticky top-16 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            <button onClick={() => setActiveCategory('all')} className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-primary text-white' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>Tous</button>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>{cat}</button>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {filteredPosts.length > 0 && filteredPosts[0].coverImage && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="mb-12">
            <div className="group block">
              <div className="grid md:grid-cols-2 gap-6 rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="aspect-[16/10] md:aspect-auto overflow-hidden bg-muted">
                  <img src={filteredPosts[0].coverImage} alt={filteredPosts[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{filteredPosts[0].category}</span>
                    <span className="flex items-center gap-1"><Calendar className="size-3" />{formatDate(filteredPosts[0].publishedAt)}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{filteredPosts[0].title}</h2>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><User className="size-3.5" />{filteredPosts[0].author}</span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-primary">Lire l&apos;article<ArrowRight className="size-4" /></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {filteredPosts.length > 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, i) => (
              <motion.article key={post._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease, delay: i * 0.06 }}>
                <div className="group block h-full">
                  <div className="h-full rounded-2xl border border-border/50 bg-card overflow-hidden transition-all hover:shadow-lg hover:border-primary/20">
                    {post.coverImage && (
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    )}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                        <span className="flex items-center gap-1"><Calendar className="size-3" />{formatDate(post.publishedAt)}</span>
                      </div>
                      <h2 className="font-display text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="size-3" />{post.author}</span>
                        <span className="flex items-center gap-1 text-xs font-medium text-primary">Lire la suite<ArrowRight className="size-3" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="size-12 text-muted-foreground/20 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg font-medium">Aucun article dans cette catégorie.</p>
          </div>
        ) : null}
      </section>
    </div>
  )
}
