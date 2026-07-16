import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, ChevronDown, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/hero_cargo_ship.png'

const trustBadges = [
  { icon: CheckCircle2, text: 'Licensed Customs Broker' },
  { icon: CheckCircle2, text: 'Reliable Service' },
  { icon: CheckCircle2, text: 'Fast Documentation' },
  { icon: CheckCircle2, text: 'PAN India Support' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Cargo ship at sea port"
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07121F]/95 via-[#0C1C2E]/80 to-[#0C1C2E]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07121F]/90 via-transparent to-transparent" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#A77428] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-[#A77428]/20 border border-[#A77428]/40 text-[#d4a853] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
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
            className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Trusted Customs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#A77428]">
              Clearance &
            </span>
            <br />
            Freight Forwarding{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#A77428]">
              Experts
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
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
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link
              to="/request-quote"
              id="hero-request-quote-btn"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#A77428] text-white font-bold px-8 py-4 rounded-2xl text-base shadow-2xl shadow-[#A77428]/30 hover:shadow-[#A77428]/50 hover:scale-105 transition-all duration-300"
            >
              Request Quote
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <a
              href="tel:9322652532"
              id="hero-call-now-btn"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                <Icon className="w-4 h-4 text-[#d4a853] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-[#d4a853] transition-colors duration-300 cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 float-animation" />
      </motion.button>
    </section>
  )
}
