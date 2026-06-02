import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { asset } from '../data'

const poster = asset('images/velon-hero-poster.jpg')
const videoSrc = asset('images/velon-hero.mp4')

export default function Film() {
  const ref = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { amount: 0.25 })
  const [loaded, setLoaded] = useState(false)
  const [muted, setMuted] = useState(true)

  // Scroll-linked parallax (transform only)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-7%', '7%'])
  const scale = reduce ? 1 : 1.14

  // Lazy load + play/pause on viewport
  useEffect(() => {
    const v = videoRef.current
    if (!v || reduce) return
    if (inView) {
      if (!loaded) { v.src = videoSrc; setLoaded(true) }
      v.play().catch(() => {})
    } else if (loaded) {
      v.pause()
    }
  }, [inView, loaded, reduce])

  const toggleSound = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <section ref={ref} id="film" aria-label="Velon in motion"
      className="relative h-[clamp(440px,86vh,900px)] w-full overflow-hidden bg-[#11100e]">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src={poster} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        {!reduce && (
          <video ref={videoRef} muted loop playsInline preload="none" poster={poster}
            onLoadedData={(e) => (e.currentTarget.style.opacity = '1')}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000" />
        )}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[2]"
        style={{ background: 'linear-gradient(180deg,rgba(17,16,14,.34) 0%,rgba(17,16,14,.05) 32%,rgba(17,16,14,.12) 62%,rgba(17,16,14,.74) 100%)' }} />

      {!reduce && (
        <button onClick={toggleSound} aria-label="Toggle sound" aria-pressed={!muted}
          className="absolute right-[18px] top-[18px] z-[4] flex h-[42px] w-[42px] items-center justify-center border border-white/45 bg-[#11100e]/30 text-white backdrop-blur transition hover:border-white hover:bg-white/15">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-[18px] w-[18px]">
            <path d="M4 9v6h4l5 4V5L8 9H4z" />
            {muted ? <path d="M17 9l4 6M21 9l-4 6" /> : <path d="M17 9.5a3.5 3.5 0 0 1 0 5" />}
          </svg>
        </button>
      )}

      <div className="absolute inset-0 z-[3] flex flex-col items-center justify-end gap-[22px] p-[clamp(36px,7vw,96px)] text-center">
        <motion.span className="eyebrow !text-gold"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          Velon — In Motion
        </motion.span>
        <motion.h2 className="text-[clamp(34px,6vw,86px)] tracking-[-0.02em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,.4)]"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}>
          Where Presence<br />Becomes <em className="italic text-[#e9d9bd]">Power</em>
        </motion.h2>
        <motion.a href="#collection" className="btn btn--light"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}>
          Enter the Collection
        </motion.a>
      </div>
    </section>
  )
}
