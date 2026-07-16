import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, Home, Phone, Ship } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ThankYou() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center pt-20 pb-20 px-4">
        <div className="max-w-lg w-full text-center">
          {/* Animated success icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#d4a853] to-[#A77428] flex items-center justify-center shadow-2xl shadow-[#A77428]/40">
                <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={1.8} />
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#A77428]/30 animate-ping" style={{ animationDuration: '2s' }} />
              <div className="absolute -inset-3 rounded-full border border-[#A77428]/15" />
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-10 mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Ship className="w-5 h-5 text-[#A77428]" />
              <span className="text-[#A77428] text-sm font-bold tracking-widest uppercase">SHREE Enterprises</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0C1C2E] mb-4">
              Thank You! 🎉
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-2">
              Your quotation request has been{' '}
              <strong className="text-[#0C1C2E]">successfully submitted.</strong>
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Our team will review your requirements and contact you shortly with a detailed quote. We typically respond within{' '}
              <strong>4–8 business hours.</strong>
            </p>

            <div className="my-7 h-px bg-slate-100" />

            {/* What happens next */}
            <h2 className="text-[#0C1C2E] font-bold text-base mb-4">What happens next?</h2>
            <div className="space-y-3 text-left">
              {[
                'Our team reviews your request',
                'We prepare a customised quote',
                'You receive a detailed proposal via email or call',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#d4a853] to-[#A77428] flex items-center justify-center">
                    <span className="text-white text-xs font-bold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{i + 1}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              id="thankyou-home-btn"
              className="flex items-center justify-center gap-2 bg-[#0C1C2E] text-white font-semibold px-8 py-3.5 rounded-2xl hover:bg-[#162F50] hover:scale-105 transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href="tel:9322652532"
              id="thankyou-call-btn"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#A77428] text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg shadow-[#A77428]/30 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now — 93226 52532
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 text-xs mt-8"
          >
            SHREE Enterprises · Customs Broker No. 11/2244 · Goregaon (W), Mumbai
          </motion.p>
        </div>
      </main>
      <Footer />
    </>
  )
}
