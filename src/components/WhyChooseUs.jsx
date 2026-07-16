import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Clock3, Users, Star, MessageSquare, Target, TrendingUp, Lock } from 'lucide-react'

const reasons = [
  { icon: ShieldCheck, title: 'Licensed CHA', desc: 'Fully licensed Customs House Agent with government-issued Broker No. 11/2244.' },
  { icon: Clock3, title: 'Fast Clearance', desc: 'Streamlined procedures for quick customs clearance, minimizing your cargo detention costs.' },
  { icon: Users, title: 'Reliable Team', desc: 'A dedicated team of customs experts, documentation specialists, and logistics coordinators.' },
  { icon: MessageSquare, title: 'Transparent Communication', desc: 'Real-time updates, clear cost breakdowns, and no hidden charges — ever.' },
  { icon: Target, title: 'Customer-First Focus', desc: 'Your cargo is our priority. We go the extra mile to ensure timely and accurate delivery.' },
  { icon: TrendingUp, title: 'Years of Experience', desc: 'Proven track record serving importers and exporters across diverse industries.' },
]

const stats = [
  { value: '500+', label: 'Shipments Handled' },
  { value: '100%', label: 'Compliance Rate' },
  { value: '24/7', label: 'Support Available' },
  { value: 'PAN India', label: 'Coverage' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#0C1C2E] overflow-hidden" aria-labelledby="why-heading">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A77428]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A77428]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#d4a853] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Our Advantage
          </span>
          <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#A77428]">
              SHREE Enterprises?
            </span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Stats */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
                >
                  <p className="text-3xl font-black text-[#d4a853] mb-1">{value}</p>
                  <p className="text-white/60 text-sm font-medium">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Large accent block */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={4}
              className="bg-gradient-to-br from-[#A77428]/20 to-[#d4a853]/10 border border-[#A77428]/30 rounded-2xl p-8"
            >
              <Lock className="w-8 h-8 text-[#d4a853] mb-4" strokeWidth={1.5} />
              <h3 className="text-white font-bold text-xl mb-3">Fully Licensed & Compliant</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                As a government-registered Customs House Agent with license number 11/2244, SHREE Enterprises operates under the full oversight of Indian Customs regulations. Your shipments are always in safe, legal hands.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[#d4a853] text-xs font-bold tracking-widest">CHA NO. 11/2244</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
            </motion.div>
          </div>

          {/* Right: Reasons list */}
          <div className="grid gap-4">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i * 0.5}
                className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-[#A77428]/30 transition-all duration-300 group"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a853] to-[#A77428] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
