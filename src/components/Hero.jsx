import { motion } from 'framer-motion'
import { ArrowDown, ShoppingBag } from 'lucide-react'
import { books } from '../data/books'

export default function Hero({
  headline = 'Poetry for Life’s Quiet, Honest Moments',
  subheadline = 'Explore Reema Sherin’s reflections on love, healing, inner strength, and the emotions woven into everyday life.',
}) {
  const scrollToBooks = () =>
    document.querySelector('#books')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="hero-shell relative min-h-[760px] overflow-hidden bg-[#f7f6f1] lg:min-h-screen">
      <div className="hero-orb hero-orb-blue" />
      <div className="hero-orb hero-orb-orange" />
      <div className="grain absolute inset-0 opacity-20" />

      <nav className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10">
        <a href="#" className="text-sm font-black tracking-[-.03em] text-black md:text-xl">
          REEMA<span className="text-coral">/</span>SHERIN
        </a>
        <div className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[.16em] text-black md:flex">
          <a href="#books" className="transition hover:text-coral">Books</a>
          <a href="#author" className="transition hover:text-coral">About</a>
        </div>
        <a
          href="https://www.amazon.in/dp/9368684987?ref=cm_sw_r_ffobk_cso_wa_apin_dp_M4DA0T08C96A8KWH9RXM&ref_=cm_sw_r_ffobk_cso_wa_apin_dp_M4DA0T08C96A8KWH9RXM&social_share=cm_sw_r_ffobk_cso_wa_apin_dp_M4DA0T08C96A8KWH9RXM&bestFormat=true"
          className="nav-shop"
        >
          Shop <ShoppingBag size={15} />
        </a>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1440px] items-center justify-center px-5 pb-24 pt-12 text-center md:px-10 lg:min-h-[calc(100vh-88px)]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[.26em] text-black/70">Books by Reema Sherin</p>
          <h1 className="hero-title">
            {headline}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-8 text-black/75 md:text-lg">{subheadline}</p>
          <button onClick={scrollToBooks} className="primary-button mt-8">
            Shop the collection <ArrowDown size={17} />
          </button>
        </motion.div>

        <motion.img
          src={books[0].cover}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: -80, rotate: -18 }}
          animate={{ opacity: 1, x: 0, rotate: -12 }}
          transition={{ delay: .2, duration: .9 }}
          className="hero-float hero-book-one"
        />
        <motion.img
          src={books[1].cover}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: -80, rotate: 16 }}
          animate={{ opacity: 1, y: 0, rotate: 11 }}
          transition={{ delay: .35, duration: .9 }}
          className="hero-float hero-book-two"
        />
        <motion.img
          src={books[2].cover}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: 80, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: 9 }}
          transition={{ delay: .5, duration: .9 }}
          className="hero-float hero-book-three"
        />
        <motion.img
          src={books[0].back}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: 80, rotate: 12 }}
          animate={{ opacity: .95, y: 0, rotate: -7 }}
          transition={{ delay: .6, duration: .9 }}
          className="hero-float hero-book-four"
        />
      </div>
      <div className="hero-ticker absolute inset-x-0 bottom-0 z-20">
        <div>STRINGS <span>✦</span> SCARRING <span>✦</span> UNFILTERED: PAGES FOR YOUR PAUSES <span>✦</span></div>
      </div>
    </header>
  )
}
