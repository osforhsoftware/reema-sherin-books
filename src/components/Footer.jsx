import { ArrowRight } from 'lucide-react'
import { books } from '../data/books'

export default function Footer() {
  return (
    <footer>
      <section className="relative overflow-hidden bg-[#ff805f] py-20">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-[70px] border-white/15" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-black/70">Keep a story close</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[.9] tracking-[-.065em] text-black md:text-8xl">
            Choose the words you need today.
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            {books.map((book) => (
              <a
                key={book.title}
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-buy"
              >
                Buy {book.shortTitle || book.title} <ArrowRight size={15} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black text-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-2xl font-black tracking-[-.04em]">REEMA<span className="text-coral">/</span>SHERIN</p>
            <p className="mt-3 max-w-lg text-base leading-7 text-white/70">Poetry and prose exploring love, emotional healing, personal growth, and the quiet moments that shape contemporary life.</p>
          </div>
          <nav className="flex items-center gap-6 text-sm font-bold uppercase tracking-[.12em] text-white/70 md:justify-self-end">
            <a href="#books" className="transition hover:text-coral">Books</a>
            <a href="#author" className="transition hover:text-coral">About the author</a>
          </nav>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 border-t border-white/10 px-5 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Reema Sherin. All rights reserved.</span>
          <span>Official author showcase</span>
        </div>
      </div>
    </footer>
  )
}
