import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const CART = 'https://www.velonfragrance.com/cart'
const links = [
  { href: '#collection', label: 'Fragrances' },
  { href: '#story', label: 'The House' },
  { href: '#notes', label: 'Notes' },
  { href: '#contact', label: 'Contact' },
]

function Icon({ d, label, href }: { d: string; label: string; href: string }) {
  return (
    <a href={href} aria-label={label} className="flex text-ink transition-colors hover:text-gold-deep">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-[19px] w-[19px]"
        dangerouslySetInnerHTML={{ __html: d }} />
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-ink px-4 py-[11px] text-center text-[10.5px] uppercase tracking-[0.26em] text-[#f4efe6]">
        Complimentary shipping on every order &nbsp;·&nbsp; <span className="text-gold">Extrait de Parfum</span>
        &nbsp;·&nbsp; Vegan &amp; never tested on animals
      </div>

      <header id="top" className="sticky top-0 z-50 border-b border-line bg-bg/[0.86] backdrop-blur-md">
        <div className="wrap">
          <nav aria-label="Primary" className="grid h-[74px] grid-cols-[1fr_auto_1fr] items-center max-md:h-16 max-md:grid-cols-[auto_1fr_auto]">
            <button className="hidden text-ink max-md:flex" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-6 w-6"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>

            <div className="flex gap-[34px] max-md:hidden">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="group relative py-1 text-[11px] uppercase tracking-[0.2em] text-ink">
                  {l.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </a>
              ))}
            </div>

            <a href="#top" aria-label="Velon Fragrance home"
              className="text-center font-serif text-[25px] font-medium tracking-[0.42em] [padding-left:0.42em] max-md:text-left max-md:text-[21px]">
              VELON
            </a>

            <div className="flex items-center justify-end gap-[22px] max-md:hidden">
              <Icon label="Search" href="#collection" d='<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>' />
              <Icon label="Account" href={CART} d='<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>' />
              <Icon label="Cart" href={CART} d='<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>' />
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-bg p-7"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="font-serif text-[21px] tracking-[0.42em]">VELON</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-ink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-[26px] w-[26px]"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="border-b border-line py-[10px] font-serif text-3xl">
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
