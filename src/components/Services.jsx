import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FileCheck2, Ship, Package, Warehouse,
  Truck, Globe2, FileText
} from 'lucide-react'

const services = [
  {
    icon: FileCheck2,
    title: 'Customs Clearance',
    desc: 'End-to-end customs clearance at all major Indian ports and airports. Accurate HS code classification, duty calculation, and filing.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Ship,
    title: 'Freight Forwarding',
    desc: 'Seamless international freight forwarding by sea and air. We coordinate with global carriers for the best rates and transit times.',
    color: 'from-[#A77428] to-[#d4a853]',
  },
  {
    icon: Package,
    title: 'Shipping',
    desc: 'Reliable FCL and LCL shipping solutions. We manage booking, documentation, and cargo tracking for every shipment.',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    desc: 'Secure bonded and general warehousing facilities. Temperature-controlled storage available for sensitive cargo.',
    color: 'from-violet-500 to-violet-700',
  },
  {
    icon: Truck,
    title: 'Transportation',
    desc: 'Efficient inland transportation and last-mile delivery across Mumbai and throughout India via our logistics network.',
    color: 'from-orange-500 to-orange-700',
  },
  {
    icon: Globe2,
    title: 'Import & Export Consultancy',
    desc: 'Expert advisory on import/export regulations, trade compliance, DGFT licences, and government policy updates.',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    icon: FileText,
    title: 'Documentation Assistance',
    desc: 'Preparation and verification of all trade documents — Bill of Lading, Commercial Invoice, Packing List, COO, and more.',
    color: 'from-rose-500 to-rose-700',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ServiceCard({ icon: Icon, title, desc, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index % 4}
      className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-2 transition-all duration-400 cursor-default overflow-hidden"
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C1C2E] to-[#162F50] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Icon */}
      <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" strokeWidth={1.6} />
      </div>

      <h3 className="relative z-10 text-[#0C1C2E] group-hover:text-white font-bold text-lg mb-3 transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-slate-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
        {desc}
      </p>

      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-r-[48px] border-t-transparent border-r-[#A77428]/30" />
      </div>
    </motion.article>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 lg:py-32 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#A77428] text-xs font-bold tracking-[0.25em] uppercase mb-3"
          >
            What We Offer
          </motion.span>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1C2E] leading-tight"
          >
            Our Core{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A77428] to-[#d4a853]">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Comprehensive logistics and customs solutions tailored for Indian importers and exporters.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="navy-gradient rounded-2xl p-7 flex flex-col justify-between border border-[#A77428]/20"
          >
            <div>
              <p className="text-[#d4a853] text-xs font-bold tracking-widest uppercase mb-3">Get Started</p>
              <h3 className="text-white font-bold text-xl mb-3">Need a Custom Solution?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Every business is unique. Let us design a logistics solution that fits your exact requirements.
              </p>
            </div>
            <a
              href="/request-quote"
              id="services-quote-btn"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#A77428] text-white font-semibold py-3 px-6 rounded-xl text-sm hover:opacity-90 transition-opacity duration-200"
            >
              Request Quote →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
