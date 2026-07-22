import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { books } from '../data/books'

const tiles = [
  { image: books[0].cover, className: 'social-tile tile-one' },
  { image: books[1].back, className: 'social-tile tile-two' },
  { image: '/assets/author-desk.jpg', className: 'social-tile tile-three' },
  { image: books[2].cover, className: 'social-tile tile-four' },
  { image: books[0].back, className: 'social-tile tile-five' },
]

export default function SocialCollage() {
  return (
    <section className="relative min-h-[570px] overflow-hidden bg-[linear-gradient(180deg,#dceeff_0%,#ffad6f_100%)] px-5 py-24">
      <div className="grain absolute inset-0 opacity-15" />
      <motion.div
        initial={{ opacity: 0, scale: .94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: .4 }}
        className="relative z-10 mx-auto flex min-h-[370px] max-w-5xl flex-col items-center justify-center text-center"
      >
        <p className="mb-2 text-xs font-bold uppercase leading-5 tracking-[.18em] text-black/70">Poetry, reflection, and mindful pauses</p>
        <h2 className="social-title">THE COLLECTION</h2>
        <a href="#books" className="social-link">
          EXPLORE THE BOOKS <ArrowUpRight size={15} />
        </a>
        {tiles.map((tile, index) => (
          <motion.img
            key={`${tile.image}-${index}`}
            src={tile.image}
            alt=""
            loading="lazy"
            className={tile.className}
            whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          />
        ))}
      </motion.div>
    </section>
  )
}
