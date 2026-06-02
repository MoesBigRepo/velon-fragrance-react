import Reveal from './Reveal'

const items = [
  { d: '<path d="M3 7h13v9H3zM16 10h4l1 3v3h-5z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/>', h: 'Complimentary Shipping', p: 'Delivered on every order, with care.' },
  { d: '<path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>', h: 'Secure Payment', p: 'Encrypted checkout, every transaction.' },
  { d: '<path d="M12 3c3 2 4 6 1 9 2 0 4-1 5-3 1 6-3 11-6 11-4 0-7-3-7-7 0-4 4-6 4-9 0-1 .5-2-.5-3 2 0 3.5 1 3.5 2z"/>', h: 'Vegan & Paraben-Free', p: 'Clean composition, never compromised.' },
  { d: '<circle cx="12" cy="12" r="9"/><path d="M9 9.5c.6 1.6 4.8 1.6 6 0M9 14c1.2 1.4 4.8 1.4 6 0"/>', h: 'Never Tested on Animals', p: 'Cruelty-free, by principle.' },
]

export default function Assurance() {
  return (
    <section className="wrap pt-6">
      <Reveal className="grid grid-cols-4 border-y border-line max-md:grid-cols-2 max-[480px]:grid-cols-1">
        {items.map((it) => (
          <div key={it.h} className="flex flex-col gap-2.5 border-l border-line p-[42px_28px] first:border-l-0 max-md:[&:nth-child(odd)]:border-l-0 max-md:[&:nth-child(n+3)]:border-t max-md:[&:nth-child(n+3)]:border-line max-[480px]:border-l-0 max-[480px]:border-t max-[480px]:border-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-[26px] w-[26px] text-gold-deep" dangerouslySetInnerHTML={{ __html: it.d }} />
            <h4 className="font-serif text-[19px] font-normal">{it.h}</h4>
            <p className="text-[13px] text-ink-soft">{it.p}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
