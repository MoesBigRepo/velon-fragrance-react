import { storyImage } from '../data'

export default function Story() {
  return (
    <section id="story" className="grid grid-cols-2 items-stretch bg-ink text-[#f4efe6] max-md:grid-cols-1">
      <div className="min-h-[420px] overflow-hidden">
        <img src={storyImage} alt="Velon fragrance campaign still life in gold light" loading="lazy"
          className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center gap-6 p-[clamp(40px,6vw,96px)]">
        <span className="eyebrow !text-gold">The House of Velon</span>
        <h2 className="text-[clamp(30px,4vw,52px)] text-white">Luxury that arrives <em className="italic text-gold">before</em> you speak.</h2>
        <p className="max-w-[48ch] text-[15px] text-[#c9c2b6]">
          Velon is built on a single belief — that scent is the most quiet form of power. Every extrait is composed for longevity and presence, blending radiant fruits, velvet florals and glowing amber woods into a trail that feels both commanding and refined.
        </p>
        <p className="max-w-[48ch] text-[15px] text-[#c9c2b6]">No noise. No compromise. One signature, designed to be remembered.</p>
        <div><a href="#collection" className="link-underline !border-gold text-white">Explore the Fragrances</a></div>
      </div>
    </section>
  )
}
