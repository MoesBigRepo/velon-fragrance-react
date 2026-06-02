import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { asset } from '../data'

const heroPoster = asset('images/hero-poster.jpg')
const heroVideo = asset('images/hero.mp4')

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 } }),
}

function HeroMedia() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (reduce) return
    const v = ref.current
    if (v) v.play().catch(() => {})
  }, [reduce])

  return (
    <div className="relative overflow-hidden bg-[#11100e] max-md:order-first max-md:min-h-[56vh]">
      <img src={heroPoster} alt="Velon Ambre Suprême extrait de parfum in golden studio light"
        fetchPriority="high"
        className={`h-full w-full object-cover ${reduce ? 'animate-slowzoom' : ''}`} />
      {!reduce && (
        <video ref={ref} muted loop playsInline autoPlay preload="metadata" poster={heroPoster}
          aria-hidden
          onLoadedData={(e) => (e.currentTarget.style.opacity = '1')}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000">
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-bg from-0% to-transparent to-[18%] max-md:bg-gradient-to-t max-md:to-[22%]" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="grid min-h-[calc(100dvh-74px-38px)] grid-cols-[1.05fr_1fr] max-md:grid-cols-1">
      <div className="flex flex-col justify-center gap-[30px] p-[clamp(32px,6vw,90px)]">
        {[
          <span className="eyebrow">Velon — Extrait de Parfum</span>,
          <h1 className="text-[clamp(44px,6.4vw,92px)]">Where Presence<br />Becomes <em className="italic text-gold-deep">Power</em></h1>,
          <p className="max-w-[42ch] text-base text-ink-soft">A collection of elite elixirs crafted for identity, authority and elegance. One signature, made to linger long after you leave the room.</p>,
          <div className="mt-1.5 flex flex-wrap items-center gap-4">
            <a href="#collection" className="btn">Discover the Collection</a>
            <a href="#story" className="link-underline">The Velon House</a>
          </div>,
        ].map((el, i) => (
          <motion.div key={i} custom={i} variants={fade} initial="hidden" animate="show">{el}</motion.div>
        ))}
      </div>
      <HeroMedia />
    </section>
  )
}
