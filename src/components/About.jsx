import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, ClipboardCheck, HeadphonesIcon } from 'lucide-react'
import warehouseImg from '../assets/about_warehouse.png'

const features = [
  {
    icon: Award,
    title: 'Licensed Customs Broker',
    desc: 'Officially licensed CHA with Broker No. 11/2244, ensuring full legal compliance for all your customs operations.',
  },
  {
    icon: Users,
    title: 'Experienced Professionals',
    desc: 'Our seasoned team brings deep expertise in Indian customs regulations, import/export laws, and logistics.',
  },
  {
    icon: ClipboardCheck,
    title: 'Transparent Process',
    desc: 'Every step is clearly communicated. No hidden charges. Full documentation visibility at every stage.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Customer Support',
    desc: 'Dedicated support across Mumbai and PAN India. We are always reachable when your cargo needs attention.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function FeatureCard({ icon: Icon, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      className="group relative bg-white rounded-2xl p-7 shadow-md shadow-slate-200/80 border border-slate-100 hover:shadow-xl hover:shadow-[#A77428]/10 hover:-translate-y-1 transition-all duration-400"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4a853] to-[#A77428] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#A77428]/30">
        <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
      </div>
      <h3 className="text-[#0C1C2E] font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4a853] to-[#A77428] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

export default function About() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const imgRef = useRef(null)
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#f8fafc] section-pattern" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          variants={fadeUp}
          initial="hidden"
          animate={titleInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#A77428] text-xs font-bold tracking-[0.25em] uppercase mb-3">Who We Are</span>
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C1C2E] leading-tight">
            Mumbai's Trusted
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A77428] to-[#d4a853]">Customs Clearance</span> Partner
          </h2>
        </motion.div>

        {/* Two-column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -40 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300">
              <img
                src={warehouseImg}
                alt="Modern logistics warehouse interior"
                className="w-full h-80 lg:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1C2E]/60 via-transparent to-transparent" />
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                <p className="text-white text-xs tracking-widest uppercase opacity-70 mb-0.5">CHA License</p>
                <p className="text-[#d4a853] font-bold text-lg tracking-wider">No. 11/2244</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#A77428]/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0C1C2E]/5 rounded-3xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              <strong className="text-[#0C1C2E]">SHREE Enterprises</strong> is a licensed Customs House Agent (CHA) headquartered in Goregaon (West), Mumbai — the financial and commercial hub of India.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Founded with a commitment to simplify the complex world of customs and international trade, we serve importers, exporters, manufacturers, and traders across India with precision, speed, and transparency.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our team handles everything — from documentation and duty assessment to cargo release and last-mile delivery — so you can focus on growing your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '11/2244', label: 'Broker Number' },
                { num: 'PAN India', label: 'Coverage' },
                { num: '100%', label: 'Compliant' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-[#A77428] font-black text-xl mb-1">{num}</p>
                  <p className="text-slate-500 text-xs font-medium">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
