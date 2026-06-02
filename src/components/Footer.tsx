import { logoImage } from '../data'

const S = 'https://www.velonfragrance.com'
const cols = [
  { h: 'Explore', links: [['All Fragrances', '#collection'], ['Shop the Store', `${S}/products`], ['Fragrance Notes', '#notes'], ['Cart', `${S}/cart`]] },
  { h: 'Customer Care', links: [['Contact Us', `${S}/contact`], ['Shipping & Delivery', `${S}/policies/shipping`], ['Returns & Refunds', `${S}/policies/refund`]] },
  { h: 'House & Legal', links: [['Instagram', 'https://instagram.com/velonfragrance'], ['TikTok', 'https://www.tiktok.com/@velonfragrance'], ['Privacy Policy', `${S}/policies/privacy`], ['Terms & Conditions', `${S}/policies/terms`]] },
]

export default function Footer() {
  return (
    <footer className="bg-ink py-[clamp(56px,7vw,96px)] pb-9 text-[#bdb6aa]">
      <div className="wrap">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div>
            <div className="font-serif text-[30px] tracking-[0.4em] text-white [padding-left:0.4em]">VELON</div>
            <p className="mt-[18px] max-w-[34ch] text-[13.5px] text-[#9a948b]">
              Elite extrait de parfum, crafted for identity, authority and elegance. Where presence becomes power.
            </p>
            <img src={logoImage} alt="Velon Fragrance logo" loading="lazy" className="mt-6 h-[54px] w-auto opacity-85 brightness-125" />
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h5 className="mb-5 text-[11px] uppercase tracking-[0.24em] text-white">{c.h}</h5>
              <ul className="flex flex-col gap-[13px]">
                {c.links.map(([label, href]) => (
                  <li key={label}><a href={href} className="text-[13.5px] text-[#bdb6aa] transition-colors hover:text-gold">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-[#322f2a] pt-[26px]">
          <p className="text-[12px] text-[#7e7970]">© 2025 Velon Fragrance. All rights reserved.</p>
          <div className="flex items-center gap-2.5">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span key={p} className="rounded-sm border border-[#4a463f] px-[9px] py-[5px] text-[9px] uppercase tracking-[0.12em] text-white">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
