import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const contactDetails = [
  {
    icon: MapPin,
    title: 'Office Address',
    color: 'from-blue-500 to-blue-700',
    content: (
      <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif" }}>
        'A' Wing, Office No 102,<br />
        Sumit Samarth Arcade, Aarey Road,<br />
        Goregaon (West), Mumbai – 400104
      </p>
    )
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    color: 'from-[#A77428] to-[#d4a853]',
    content: (
      <div className="flex flex-col gap-1.5" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <a href="tel:02268287055" className="block text-slate-600 text-[0.95rem] hover:text-[#A77428] transition-colors font-medium">
          022 6828 7055 <span className="text-[10px] text-slate-400 font-normal block sm:inline sm:ml-1" style={{ fontFamily: "'Raleway', sans-serif" }}>(Office Line 1)</span>
        </a>
        <a href="tel:02249738272" className="block text-slate-600 text-[0.95rem] hover:text-[#A77428] transition-colors font-medium">
          022 4973 8272 <span className="text-[10px] text-slate-400 font-normal block sm:inline sm:ml-1" style={{ fontFamily: "'Raleway', sans-serif" }}>(Office Line 2)</span>
        </a>
        <a href="tel:9322652532" className="block text-slate-600 text-[0.95rem] hover:text-[#A77428] transition-colors font-medium">
          93226 52532 <span className="text-[10px] text-slate-400 font-normal block sm:inline sm:ml-1" style={{ fontFamily: "'Raleway', sans-serif" }}>(Darshan Raval)</span>
        </a>
      </div>
    )
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    color: 'from-emerald-500 to-emerald-700',
    content: (
      <div className="flex flex-col gap-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>
        <a href="mailto:shree@shree-enterprise.net.in" className="block text-slate-600 text-sm hover:text-[#A77428] transition-colors font-medium break-all">
          shree@shree-enterprise.net.in
        </a>
        <a href="mailto:shreeenterprises2244@gmail.com" className="block text-slate-600 text-sm hover:text-[#A77428] transition-colors font-medium break-all">
          shreeenterprises2244@gmail.com
        </a>
      </div>
    )
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white section-pattern" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#A77428] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1C2E] leading-tight">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A77428] to-[#d4a853]">
              SHREE Enterprises
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            Reach out to us for any queries about customs clearance, freight, or logistics. We're here to help.
          </p>
        </motion.div>

        {/* Grid: Map + Details */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactDetails.map(({ icon: Icon, title, color, content }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i}
                className="group flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/80 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[#0C1C2E] font-bold text-sm mb-2">{title}</p>
                  {content}
                </div>
              </motion.div>
            ))}

            {/* CHA Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
              className="flex items-center gap-3 p-5 bg-[#0C1C2E] rounded-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-[#A77428]/20 border border-[#A77428]/30 flex items-center justify-center">
                <span className="text-[#d4a853] font-black text-xs">CHA</span>
              </div>
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Customs Broker No.</p>
                <p className="text-[#d4a853] font-extrabold text-lg tracking-widest mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>11/2244</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Map + Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
              <iframe
                title="SHREE Enterprises Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.218898285707!2d72.84805!3d19.15938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b726a4e0d9bf%3A0x0!2zSm9yZWdhb24gV2VzdCwgTXVtYmFpLCBNYWhhcmFzaHRyYSA0MDAxMDQ!5e0!3m2!1sen!2sin!4v1694500000000!5m2!1sen!2sin"
                className="w-full h-64 lg:h-80"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href="tel:9322652532"
                id="contact-call-btn"
                className="flex flex-col items-center gap-2 p-4 bg-[#0C1C2E] text-white rounded-2xl hover:bg-[#162F50] hover:scale-105 transition-all duration-300 text-center"
              >
                <Phone className="w-5 h-5 text-[#d4a853]" />
                <span className="text-xs font-semibold">Call Now</span>
              </a>
              <a
                href="https://wa.me/919322652532?text=Hello%20SHREE%20Enterprises%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                id="contact-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-[#25D366] text-white rounded-2xl hover:bg-[#1ebe59] hover:scale-105 transition-all duration-300 text-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
              <a
                href="mailto:shree@shree-enterprise.net.in"
                id="contact-email-btn"
                className="flex flex-col items-center gap-2 p-4 bg-slate-100 text-[#0C1C2E] rounded-2xl hover:bg-slate-200 hover:scale-105 transition-all duration-300 text-center"
              >
                <Mail className="w-5 h-5 text-[#A77428]" />
                <span className="text-xs font-semibold">Email Us</span>
              </a>
              <Link
                to="/request-quote"
                id="contact-quote-btn"
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-[#d4a853] to-[#A77428] text-white rounded-2xl hover:opacity-90 hover:scale-105 transition-all duration-300 text-center"
              >
                <ChevronRight className="w-5 h-5" />
                <span className="text-xs font-semibold">Get Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
