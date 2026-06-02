export const asset = (p: string) => import.meta.env.BASE_URL + p

export type Product = {
  slug: string
  name: string
  conc: string
  profile: string
  price: string
  image: string
  url: string
  cta: string
  tag?: { label: string; gold?: boolean }
}

const STORE = 'https://www.velonfragrance.com'

export const products: Product[] = [
  {
    slug: 'aureline', name: 'Aureline', conc: 'Extrait de Parfum',
    profile: 'Floral · Amber · Fruity · Woody', price: '$80.00',
    image: asset('images/aureline.jpg'),
    url: `${STORE}/product/velon-aureline-extrait-de-parfum`, cta: 'Add to Cart — $80',
  },
  {
    slug: 'ambre', name: 'Ambre Suprême', conc: 'Extrait de Parfum',
    profile: 'Warm · Gourmand · Woody · Amber', price: '$80.00',
    image: asset('images/ambre.jpg'),
    url: `${STORE}/product/velon-ambre-supr%C3%AAme-extrait-de-parfum`, cta: 'Add to Cart — $80',
  },
  {
    slug: 'titan', name: 'Titan', conc: 'Extrait de Parfum',
    profile: 'Spicy · Woody · Unmistakably Masculine', price: '$80.00',
    image: asset('images/titan.jpg'),
    url: `${STORE}/product/velon-titan-extrait-de-parfum`, cta: 'Add to Cart — $80',
    tag: { label: 'On Sale' },
  },
  {
    slug: 'sahara', name: 'Sahara Lumière', conc: 'Extrait de Parfum',
    profile: 'Luminous · Amber · Unisex', price: '$80.00',
    image: asset('images/sahara.jpg'),
    url: `${STORE}/product/velon-saharah-lumi%C3%A8re-extrait-de-parfum`, cta: 'Add to Cart — $80',
    tag: { label: 'On Sale' },
  },
  {
    slug: 'titanelixir', name: 'Titan Elixir', conc: 'Roll-On Elixir · 10ml / 30ml',
    profile: 'Spicy · Amber · Masculine', price: '$24.99 – $49.99',
    image: asset('images/titanelixir.jpg'),
    url: `${STORE}/product/velon-titan-elixir`, cta: 'Shop Titan Elixir',
    tag: { label: '2 Sizes', gold: true },
  },
  {
    slug: 'saharale', name: 'Sahara Lumière — LE', conc: 'Roll-On Elixir · 10ml / 30ml',
    profile: 'Luminous · Amber · Unisex', price: '$24.99 – $49.99',
    image: asset('images/saharale.jpg'),
    url: `${STORE}/product/velon-sahara-lumi%C3%A8re-limited-edition`, cta: 'Shop Limited Edition',
    tag: { label: 'Limited Edition', gold: true },
  },
]

const TI = (id: string, w = 1200) =>
  `https://assets.bigcartel.com/theme_images/${id}?auto=format&fit=max&w=${w}`

// Brand campaign imagery (original Velon assets, kept remote)
export const heroImage = TI('157128594/A19CB085-E698-45A9-962F-CA62E60CD91A.png', 1600)
export const storyImage = TI('160913901/C21D1D3D-2E50-4599-9E75-B16FE02738CF.png', 1600)
export const logoImage = TI('157128705/066981D0-14C0-4E90-BAA8-8793701EF59D.png', 600)
export const galleryImages = [
  '159452904/DF678AF0-3B34-4ABB-B0AD-14AA6D1D4AF9.png',
  '160913562/890D7A0C-5408-414D-B941-AF1C5D9C1EAC.png',
  '160913565/5456AEC3-8A9F-40D7-8E09-914FBA6DE593.png',
  '160913568/5493134C-EE8D-4098-838E-F5C79A75139C.png',
  '160913571/ECBF6F5B-A78C-490E-8861-070926E9BE06.png',
  '160913574/21B27CCC-5578-496D-9A55-BEFFC2D14D22.png',
  '160913577/CC274E26-D87A-4EF6-88C6-8DFB7B14E5F1.png',
  '160913580/CF557703-14B5-4871-AA1F-D0FB6E5046CC.png',
  '160913895/C3E0159B-BD32-4288-8087-FA120E2DD1CF.png',
  '160913898/9B0DABEB-5D29-4073-BBE1-733A50B7935F.png',
].map((id) => TI(id))

export const notesPyramid = [
  { label: 'Top', notes: 'Cinnamon · Cardamom · Saffron · Bergamot · Orange Blossom · Jasmine' },
  { label: 'Heart', notes: 'Creamy Vanilla · Elemi Resin · Ambered Woods · Mineral Amber' },
  { label: 'Base', notes: 'Praline · Candied Almond · Tonka Bean · Musk · Cedar · Smoky Guaiac Wood' },
]
