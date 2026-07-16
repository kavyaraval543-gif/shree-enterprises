import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Process from '../components/Process'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
