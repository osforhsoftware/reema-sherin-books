import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { books } from '../data/books'

const Book3D = lazy(() => import('./Book3D'))

function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  )

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return isDesktop
}

function LazyBook3D({ cover, back, title }) {
  const ref = useRef(null)
  const isNearViewport = useInView(ref, { once: true, margin: '250px' })
  const isDesktop = useDesktop()

  return (
    <div ref={ref} className="min-h-[300px]">
      {!isDesktop && (
        <div className="mobile-book-stage" aria-label={`Rotating cover of ${title}`}>
          <img src={cover} alt={`${title} book cover`} loading="lazy" className="mobile-book" />
          <div className="mobile-shadow" />
        </div>
      )}
      {isDesktop && isNearViewport && (
        <Suspense fallback={<div className="h-[300px] animate-pulse bg-black/[.03]" />}>
          <Book3D cover={cover} back={back} title={title} />
        </Suspense>
      )}
    </div>
  )
}

export default function BookShowcase() {
  const tones = ['bg-[#dceeff]', 'bg-[#ff805f]', 'bg-[#e8ddff]']

  return (
    <section id="books" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="eyebrow">Featured books</p>
          <h2 className="section-title">Three books for reflection, healing, and pause.</h2>
          <p className="mt-5 text-base leading-7 text-black/70">Explore each book and rotate it to view the front and back covers.</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {books.map((book, index) => (
            <motion.article
              key={book.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
              className={`book-card ${tones[index]}`}
            >
              <div className="relative">
                <LazyBook3D cover={book.cover} back={book.back} title={book.title} />
                <span className="absolute left-4 top-4 rounded-full border border-black/15 bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-black/70 backdrop-blur">
                  Drag to rotate
                </span>
              </div>
              <div className="border-t border-black/10 bg-white/85 px-5 pb-5 pt-5 backdrop-blur-md">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl leading-tight text-black">{book.title}</h3>
                    <p className="mt-2 text-[11px] font-bold uppercase tracking-[.16em] text-black/60">{book.author}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-bold uppercase leading-5 tracking-[.1em] text-black/70">{book.genre}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[.1em] text-black/55">{book.format}</p>
                <p className="mt-4 text-sm leading-6 text-black/75">{book.description}</p>
                <div className="mt-5 flex justify-end">
                  <a
                    href={book.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amazon-button"
                    aria-label={`Buy ${book.title} on Amazon`}
                  >
                    Buy on Amazon <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
