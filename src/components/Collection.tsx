import { motion } from 'motion/react'
import { products, type Product } from '../data'

function Card({ p, i }: { p: Product; i: number }) {
  return (
    <motion.article
      className="group flex flex-col"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {p.tag && (
          <span className={`absolute left-3.5 top-3.5 z-[2] px-[11px] py-1.5 text-[9.5px] uppercase tracking-[0.22em] text-white ${p.tag.gold ? 'bg-gold' : 'bg-ink'}`}>
            {p.tag.label}
          </span>
        )}
        <img src={p.image} alt={`Velon ${p.name} bottle`} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]" />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 backdrop-blur-sm transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
          <a href={p.url} className="block p-4 text-center text-[10.5px] uppercase tracking-[0.26em] text-white hover:text-gold">{p.cta}</a>
        </div>
      </div>
      <a href={p.url} className="flex flex-col gap-[7px] pt-5">
        <span className="text-[10.5px] uppercase tracking-[0.22em] text-gold-deep">{p.conc}</span>
        <h3 className="text-[23px]">{p.name}</h3>
        <span className="text-[13px] text-ink-soft">{p.profile}</span>
        <span className="mt-[3px] font-serif text-[18px]">{p.price}</span>
      </a>
    </motion.article>
  )
}

export default function Collection() {
  return (
    <section id="collection" className="sec">
      <div className="wrap">
        <motion.div
          className="mb-14 flex flex-wrap items-end justify-between gap-6"
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <div>
            <span className="eyebrow">The Collection</span>
            <h2 className="mt-3.5 text-[clamp(32px,4.4vw,58px)]">Elite elixirs,<br />one signature.</h2>
          </div>
          <p className="max-w-[46ch] text-[15px] text-ink-soft">
            Each Velon fragrance is built as a high-concentration extrait — greater depth, longer wear, an unmistakable trail. Choose the scent that carries your presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-x-[clamp(20px,2.6vw,40px)] gap-y-[clamp(24px,3vw,48px)] max-md:grid-cols-2 max-[480px]:grid-cols-1">
          {products.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
