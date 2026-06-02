const words = ['Titan', 'Sahara Lumière', 'Aureline', 'Ambre Suprême', 'Extrait de Parfum']

export default function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden border-y border-line bg-cream py-4">
      <div className="flex w-max animate-marquee gap-[46px] whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-[46px] font-serif text-[19px] italic text-gold-deep">
            {w}<span className="not-italic text-ink">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
