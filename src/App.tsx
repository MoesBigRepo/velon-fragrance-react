import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Film from './components/Film'
import Collection from './components/Collection'
import Story from './components/Story'
import Notes from './components/Notes'
import Gallery from './components/Gallery'
import Assurance from './components/Assurance'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Film />
        <Collection />
        <Story />
        <Notes />
        <Gallery />
        <Assurance />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
