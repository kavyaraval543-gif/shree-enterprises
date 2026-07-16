import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import shipIcon from '../assets/ship_icon_transparent.png'

const navLinks = [
  { label: 'Home',    href: '/#home' },
  { label: 'About',   href: '/#about' },
  { label: 'Services',href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

/* ─── Brand Logo ──────────────────────────────────────── */
function NavLogo({ size = 'md' }) {
  const imgH = size === 'sm' ? 'h-8' : 'h-10'

  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={shipIcon}
        alt="SHREE Enterprises ship icon"
        className={`${imgH} w-auto object-contain shrink-0`}
      />
      <div className="flex flex-col leading-none gap-[3px]">
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 800,
            fontSize: size === 'sm' ? '1.05rem' : '1.2rem',
            letterSpacing: '0.22em',
            color: '#ffffff',
            lineHeight: 1,
          }}
        >
          SHREE
        </span>
        <span
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 500,
            fontSize: size === 'sm' ? '0.48rem' : '0.52rem',
            letterSpacing: '0.45em',
            color: '#d4a853',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
        >
          ENTERPRISES
        </span>
      </div>
    </div>
  )
}

/* ─── Navbar ──────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      if (!isHome) { window.location.href = href; return }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  /* ── Glass states ── Keep the navbar exactly the same transparent glass look when scrolling */
  const navClass = 'glass-nav shadow-lg shadow-black/15'

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}
      >
        {/* Gold hairline — appears after scroll */}
        <motion.div
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-[#A77428]/50 to-transparent"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[74px]">

            {/* Logo */}
            <Link to="/" aria-label="SHREE Enterprises – Home" className="group hover:opacity-85 transition-opacity duration-300">
              <NavLogo size="md" />
            </Link>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-5 py-2 text-white/80 hover:text-white text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-250 group"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-[#d4a853] to-[#A77428] group-hover:w-6 transition-all duration-350 rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/request-quote"
                id="navbar-request-quote-btn"
                className="hidden sm:inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.08em] uppercase text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #d4a853 0%, #A77428 60%, #8a5f1f 100%)',
                  boxShadow: '0 4px 20px rgba(167,116,40,0.35)',
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Request Quote <ChevronRight className="w-3.5 h-3.5" />
              </Link>

              <button
                id="mobile-menu-btn"
                aria-label="Open navigation"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ─── Mobile Drawer ─────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{
                background: 'linear-gradient(160deg, #0C1C2E 0%, #0A1626 100%)',
                borderLeft: '1px solid rgba(167,116,40,0.2)',
              }}
            >
              {/* Drawer top */}
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <NavLogo size="sm" />
                <button
                  id="mobile-close-btn"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="text-white/50 hover:text-white p-1.5 rounded-lg hover:bg-white/8 transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Gold accent line */}
              <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #A77428 40%, #d4a853 60%, transparent)' }} />

              {/* Links */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.05 }}
                    className="flex items-center justify-between text-white/70 hover:text-[#d4a853] py-3 px-4 rounded-xl text-sm hover:bg-white/5 transition-all duration-200 group"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}
                  >
                    {link.label}
                    <ChevronRight className="w-3.5 h-3.5 opacity-25 group-hover:opacity-80 transition-opacity" />
                  </motion.a>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-5 py-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <Link
                  to="/request-quote"
                  id="mobile-request-quote-btn"
                  className="flex items-center justify-center gap-2 w-full text-white font-bold py-3.5 rounded-xl text-sm tracking-widest uppercase"
                  style={{
                    background: 'linear-gradient(135deg, #d4a853, #A77428)',
                    fontFamily: "'Raleway', sans-serif",
                    letterSpacing: '0.1em',
                    fontSize: '0.72rem',
                  }}
                >
                  Request a Quote
                </Link>
                <p className="text-center text-white/25 mt-3 tracking-[0.2em] uppercase" style={{ fontSize: '0.58rem', fontFamily: "'Raleway', sans-serif" }}>
                  CHA No. 11/2244
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
