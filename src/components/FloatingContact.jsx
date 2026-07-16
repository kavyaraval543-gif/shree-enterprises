import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageSquare, Phone, Send } from 'lucide-react'

const services = [
  'Customs Clearance',
  'Freight Forwarding',
  'Shipping',
  'Warehousing',
  'Transportation',
  'Import & Export Consultancy',
  'Documentation Assistance',
]

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: 'Customs Clearance',
    message: '',
  })
  
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setIsOpen(false)
      setFormData({
        fullName: '',
        companyName: '',
        phone: '',
        email: '',
        service: 'Customs Clearance',
        message: '',
      })
      navigate('/thank-you')
    }, 1200)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Quote Request Modal"
          className="relative group flex items-center justify-center w-14 h-14 rounded-full text-white cursor-pointer transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #d4a853 0%, #A77428 60%, #8a5f1f 100%)',
            boxShadow: '0 8px 30px rgba(167, 116, 40, 0.45)',
          }}
        >
          {/* Subtle gold outer pulse rings */}
          <span className="absolute inset-0 rounded-full bg-[#A77428]/35 animate-ping opacity-60 pointer-events-none" />
          <MessageSquare className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
          
          {/* Tooltip */}
          <span
            className="absolute right-16 px-3.5 py-2 text-xs font-bold tracking-wider text-white uppercase bg-[#0C1C2E] border border-[#A77428]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl select-none shrink-0"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Get a Quote
          </span>
        </button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.45 }}
              className="relative w-full max-w-lg bg-[#0C1C2E] border border-[#A77428]/30 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Gold gradient top accent */}
              <div className="h-[3px] bg-gradient-to-r from-transparent via-[#A77428] to-transparent" />
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <div>
                  <h3
                    className="text-2xl font-bold text-white leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Quick Quote Inquiry
                  </h3>
                  <p className="text-white/50 text-[11px] uppercase tracking-widest mt-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    SHREE Enterprises &bull; CHA 11/2244
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close quote modal"
                  className="text-white/50 hover:text-white p-1.5 rounded-xl hover:bg-white/8 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form container */}
              <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[70vh] flex flex-col gap-4">
                
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-white/70 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="companyName" className="text-white/70 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company Pvt. Ltd."
                      className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-white/70 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-white/70 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-white/70 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#0C1C2E] border border-white/12 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-white/70 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements..."
                    className="w-full bg-white/5 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors resize-none"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #d4a853 0%, #A77428 60%, #8a5f1f 100%)',
                    boxShadow: '0 4px 15px rgba(167, 116, 40, 0.25)',
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Request Quote
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-white/8" />
                  <span className="text-[10px] text-white/35 font-bold uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Or Contact Instantly
                  </span>
                  <div className="flex-1 h-px bg-white/8" />
                </div>

                {/* Instant Buttons */}
                <div className="grid grid-cols-2 gap-3.5">
                  <a
                    href="tel:9322652532"
                    className="flex items-center justify-center gap-2 bg-white/5 border border-white/12 hover:bg-white/10 hover:border-white/20 text-white font-bold py-3 rounded-xl text-sm transition-all duration-200"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    <Phone className="w-4 h-4 text-[#d4a853]" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919322652532?text=Hello%20SHREE%20Enterprises,%20I%20would%20like%20to%20request%20a%20customs/logistics%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/15 hover:border-emerald-500/40 text-emerald-400 font-bold py-3 rounded-xl text-sm transition-all duration-200"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    WhatsApp
                  </a>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
