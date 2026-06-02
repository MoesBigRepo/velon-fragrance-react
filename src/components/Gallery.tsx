import Reveal from './Reveal'
import { galleryImages } from '../data'

export default function Gallery() {
  return (
    <section className="sec pb-[clamp(40px,6vw,80px)]">
      <div className="wrap mb-10">
        <Reveal>
          <span className="eyebrow">The Velon World</span>
          <h2 className="mt-3.5 text-[clamp(32px,4.4vw,58px)]">In golden light.</h2>
        </Reveal>
      </div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-[18px] overflow-x-auto px-[clamp(20px,5vw,64px)] pb-2.5">
        {galleryImages.map((src, i) => (
          <figure key={i} className="group w-[min(78vw,440px)] flex-none snap-start overflow-hidden bg-cream">
            <img src={src} alt="Velon fragrance campaign image" loading="lazy"
              className="h-[300px] w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
          </figure>
        ))}
      </div>
    </section>
  )
}
