import { motion } from 'framer-motion'
import { Feather } from 'lucide-react'

export default function AuthorStory({
  heading = 'Emotionally grounded stories for contemporary life.',
  bio = 'Reema Sherin is an emerging author and poet known for emotionally grounded storytelling and thoughtful explorations of human relationships. Her work blends realism with quiet introspection, focusing on personal growth, inner strength, and the deep emotions embedded in everyday experiences. With a relatable and evocative voice, she connects with readers navigating love, self-discovery, and contemporary life.',
}) {
  return (
    <section id="author" className="bg-[#dceeff] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-3 translate-x-5 translate-y-5 rounded-[2rem] bg-[#ff805f]" />
          <img
            src="/assets/author-desk.jpg"
            alt="Writing desk with a typewriter and books"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover"
          />
          <div className="absolute -bottom-5 -right-1 rounded-full bg-black p-5 text-white">
            <Feather size={22} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:pl-10"
        >
          <p className="eyebrow">Behind the pages</p>
          <h2 className="section-title max-w-xl">{heading}</h2>
          <div className="my-8 h-1 w-20 bg-coral" />
          <p className="max-w-xl text-base font-medium leading-8 text-black/75 md:text-lg md:leading-9">{bio}</p>
          <p className="mt-8 text-xs font-bold uppercase tracking-[.24em] text-coral">— Reema Sherin</p>
        </motion.div>
      </div>
    </section>
  )
}
