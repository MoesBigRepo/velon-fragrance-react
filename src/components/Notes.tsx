import Reveal from './Reveal'
import { notesPyramid, products } from '../data'

const ambre = products.find((p) => p.slug === 'ambre')!

export default function Notes() {
  return (
    <section id="notes" className="sec">
      <div className="wrap">
        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(32px,5vw,80px)] max-lg:grid-cols-1">
          <Reveal className="aspect-square overflow-hidden bg-cream">
            <img src={ambre.image} alt="Velon Ambre Suprême extrait de parfum" loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal>
            <span className="eyebrow">Signature Composition · Ambre Suprême</span>
            <h2 className="mt-3.5 text-[clamp(30px,4vw,50px)]">Warmth with power.</h2>
            <p className="mt-[18px] max-w-[48ch] text-ink-soft">
              Glowing spice, creamy vanilla and radiant amber woods, finished with praline, tonka and smoky guaiac — an intoxicating signature that feels magnetic and unforgettable.
            </p>
            <div className="mt-9 flex flex-col gap-[30px]">
              {notesPyramid.map((row) => (
                <div key={row.label} className="border-t border-line pt-[18px]">
                  <span className="mb-[9px] block text-[11px] uppercase tracking-[0.28em] text-gold-deep">{row.label}</span>
                  <p className="font-serif text-[clamp(18px,2vw,24px)] leading-[1.4] text-ink">{row.notes}</p>
                </div>
              ))}
            </div>
            <div className="mt-9"><a href={ambre.url} className="btn">Add to Cart — $80</a></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
