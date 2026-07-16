import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, ChevronDown } from 'lucide-react'
import heroBg from '../assets/hero_cargo_ship.png'

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] },
  }),
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5
      const y = (e.clientY / window.innerHeight) - 0.5
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
          scale: 1.05,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.65 }}
        role="img"
        aria-label="Cargo ship at sea port"
      />

      {/* Premium Multi-layer overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070E18]/98 via-[#0C1C2E]/80 to-[#0C1C2E]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070E18]/95 via-transparent to-transparent" />

      {/* Gold hairline at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A77428]/45 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-36 pb-28 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* License Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-[#A77428]/15 border border-[#A77428]/35 text-[#d4a853] px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-10"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] animate-pulse" />
            Customs Broker No. 11/2244
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl sm:text-6xl lg:text-[4.8rem] xl:text-[5.8rem] font-bold text-white leading-[1.04] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '-0.01em' }}
          >
            Trusted Customs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] via-[#A77428] to-[#d4a853] bg-size-200">
              Clearance &
            </span>
            <br />
            Freight Forwarding{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] via-[#A77428] to-[#d4a853]">
              Experts
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-white/75 text-lg sm:text-xl leading-[1.7] max-w-2xl mb-12"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Providing reliable Customs Clearance, Freight Forwarding, Shipping,
            Warehousing, Transportation, and Import & Export Consultancy services
            for businesses across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-4.5"
          >
            <Link
              to="/request-quote"
              id="hero-request-quote-btn"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#A77428] text-white font-bold px-9 py-4.5 rounded-2xl text-base shadow-lg shadow-[#A77428]/25 hover:shadow-[#A77428]/45 hover:scale-[1.04] transition-all duration-300 ease-out"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Request Quote
              <span className="group-hover:translate-x-1.5 transition-transform duration-250 ease-out">→</span>
            </Link>
            <a
              href="tel:9322652532"
              id="hero-call-now-btn"
              className="inline-flex items-center gap-2.5 bg-white/5 border border-white/12 text-white font-bold px-9 py-4.5 rounded-2xl text-base hover:bg-white/15 hover:border-white/25 hover:scale-[1.02] transition-all duration-300 ease-out backdrop-blur-md"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <Phone className="w-4 h-4 text-[#d4a853]" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-[#d4a853] transition-colors duration-300 cursor-pointer"
      >
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ fontFamily: "'Raleway', sans-serif" }}>Scroll</span>
        <ChevronDown className="w-5 h-5 float-animation text-[#d4a853]" />
      </motion.button>
    </section>
  )
}
