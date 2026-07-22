import { motion } from 'framer-motion'
import { BookOpen, Feather, Heart, Library, PenLine } from 'lucide-react'

const features = [
  { label: 'Poetry & Prose', icon: Feather },
  { label: 'Love & Healing', icon: Heart },
  { label: 'Quiet Reflection', icon: BookOpen },
  { label: 'Mindful Journaling', icon: PenLine },
  { label: 'Three Featured Books', icon: Library },
]

export default function FeatureRow() {
  return (
    <section className="border-y border-black/10 bg-[#ff805f]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-3 md:grid-cols-5 md:px-10">
        {features.map(({ label, icon: Icon }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="flex min-h-32 flex-col items-center justify-center gap-3 border-black/10 p-4 text-center last:col-span-2 sm:last:col-span-1 md:border-l md:last:border-r"
          >
            <Icon size={25} strokeWidth={1.55} className="text-black" />
            <span className="text-xs font-bold uppercase leading-5 tracking-[.12em] text-black/80">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
