import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ChevronRight, MessageCircle } from 'lucide-react'
import shreeLogo from '../assets/shree_logo_transparent.png'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Our Process', href: '/#process' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Request a Quote', href: '/request-quote' },
]

const servicesList = [
  'Customs Clearance',
  'Freight Forwarding',
  'Shipping',
  'Warehousing',
  'Transportation',
  'Import & Export Consultancy',
  'Documentation Assistance',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(160deg, #111008 0%, #0F0C07 50%, #131009 100%)' }} aria-label="Site footer">
      {/* Gold top bar — thicker, richer */}
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #8a5f1f 10%, #A77428 30%, #d4a853 50%, #A77428 70%, #8a5f1f 90%, transparent 100%)' }} />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5 group" aria-label="SHREE Enterprises">
              <img
                src={shreeLogo}
                alt="SHREE Enterprises Logo"
                className="h-24 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
                style={{
                  maxWidth: '190px',
                  filter: 'brightness(1.5) contrast(1.1) drop-shadow(0 0 1.5px rgba(255, 255, 255, 0.8))',
                }}
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Trusted Customs Clearance &amp; Logistics Partner serving businesses across India since inception.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#A77428]/15 border border-[#A77428]/25 text-[#d4a853] px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider">
              CHA No.: 11/2244
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/919322652532"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#A77428]/20 flex items-center justify-center transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4 text-white/60 hover:text-[#d4a853]" />
              </a>
              <a
                href="mailto:shree@shree-enterprise.net.in"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#A77428]/20 flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-white/60" />
              </a>
              <a
                href="tel:9322652532"
                aria-label="Phone"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#A77428]/20 flex items-center justify-center transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d4a853] font-bold text-sm tracking-[0.15em] uppercase mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/55 hover:text-[#d4a853] text-sm flex items-center gap-1.5 transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#d4a853] font-bold text-sm tracking-[0.15em] uppercase mb-5">Services</h3>
            <ul className="space-y-2.5">
              {servicesList.map((s) => (
                <li key={s}>
                  <a
                    href="/#services"
                    className="text-white/55 hover:text-[#d4a853] text-sm flex items-center gap-1.5 transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#d4a853] font-bold text-sm tracking-[0.15em] uppercase mb-5">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                <p className="text-white/55 text-sm leading-relaxed">
                  'A' Wing, Office No 102, Sumit Samarth Arcade,<br />
                  Aarey Road, Goregaon (W),<br />
                  Mumbai – 400104
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:0226828055" className="block text-white/55 hover:text-[#d4a853] text-sm transition-colors duration-200">022 6828 7055</a>
                  <a href="tel:0224973272" className="block text-white/55 hover:text-[#d4a853] text-sm transition-colors duration-200">022 4973 8272</a>
                  <a href="tel:9322652532" className="block text-white/55 hover:text-[#d4a853] text-sm transition-colors duration-200">93226 52532 (Darshan)</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:shree@shree-enterprise.net.in" className="block text-white/55 hover:text-[#d4a853] text-xs break-all transition-colors duration-200">shree@shree-enterprise.net.in</a>
                  <a href="mailto:shreeenterprises2244@gmail.com" className="block text-white/55 hover:text-[#d4a853] text-xs break-all transition-colors duration-200">shreeenterprises2244@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(167,116,40,0.12)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-center sm:text-left" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.7rem', letterSpacing: '0.08em' }}>
            © {year} SHREE Enterprises. All rights reserved. &nbsp;|&nbsp; Customs Broker No. 11/2244
          </p>
          <p className="text-[#d4a853]/55 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.85rem', letterSpacing: '0.04em' }}>
            Trusted Customs Clearance &amp; Logistics Partner
          </p>
        </div>
      </div>
    </footer>
  )
}
