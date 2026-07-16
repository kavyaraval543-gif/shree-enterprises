import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const trustItems = [
  'Licensed Customs Broker',
  'Mumbai Based',
  'Customs Clearance Experts',
  'Freight Forwarding',
  'Fast Documentation',
]

export default function TrustBar() {
  return (
    <section className="relative z-20 py-8 bg-[#0F0C07] border-y border-[#A77428]/20" aria-label="Trust highlights">
      {/* Subtle gold ambient glow behind the bar */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A77428]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
          {trustItems.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="flex items-center gap-2.5 text-white/90 text-sm sm:text-base font-medium tracking-wide"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <div className="w-5 h-5 rounded-full bg-[#A77428]/25 border border-[#d4a853]/40 flex items-center justify-center shrink-0 shadow-sm shadow-[#A77428]/20">
                <Check className="w-3 h-3 text-[#d4a853]" strokeWidth={3} />
              </div>
              <span className="hover:text-[#d4a853] transition-colors duration-250 select-none">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
