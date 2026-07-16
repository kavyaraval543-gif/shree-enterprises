import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FolderOpen, SearchCheck, FileStack, Banknote, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: FolderOpen,
    number: '01',
    title: 'Receive Documents',
    desc: 'Client submits shipping documents — invoice, packing list, bill of lading, and any certificates required for the shipment.',
  },
  {
    icon: SearchCheck,
    number: '02',
    title: 'Document Verification',
    desc: 'Our experts review and verify all documents for accuracy, completeness, and regulatory compliance before submission.',
  },
  {
    icon: FileStack,
    number: '03',
    title: 'Customs Filing',
    desc: 'We prepare and file the Bill of Entry or Shipping Bill electronically with Indian Customs through the ICEGATE portal.',
  },
  {
    icon: Banknote,
    number: '04',
    title: 'Duty Assessment & Payment',
    desc: 'Customs duty is assessed, calculated accurately, and paid promptly to avoid any delays or demurrage charges.',
  },
  {
    icon: PackageCheck,
    number: '05',
    title: 'Cargo Release & Delivery',
    desc: 'Post-clearance, cargo is released and transported to the final destination with full documentation and proof of delivery.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#f8fafc] section-pattern" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#A77428] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            How It Works
          </span>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1C2E] leading-tight">
            Our Clearance{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A77428] to-[#d4a853]">Process</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process designed to move your cargo from port to door with zero hassle.
          </p>
        </motion.div>

        {/* Timeline — Desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#A77428]/30 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map(({ icon: Icon, number, title, desc }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0 lg:text-center group"
              >
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#A77428]/40 to-transparent" />
                )}

                {/* Step number + icon */}
                <div className="relative shrink-0 lg:mb-6">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#d4a853] to-[#A77428] flex items-center justify-center shadow-lg shadow-[#A77428]/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.6} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0C1C2E] border border-[#A77428]/65 flex items-center justify-center z-20">
                    <span className="text-[#d4a853] text-[11px] font-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>{i + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:px-2">
                  <span
                    className="text-[#A77428] text-[11px] font-bold tracking-widest block uppercase"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    Step {number}
                  </span>
                  <h3 className="text-[#0C1C2E] font-bold text-base mt-1.5 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-5 text-base">Ready to start your clearance process?</p>
          <a
            href="/request-quote"
            id="process-quote-btn"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#A77428] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-[#A77428]/30 hover:shadow-[#A77428]/50 hover:scale-105 transition-all duration-300"
          >
            Get Started — Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
