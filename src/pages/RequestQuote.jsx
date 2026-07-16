import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Ship, User, Building2, Mail, Phone, Globe2,
  Package, MapPin, Calendar, MessageSquare, ChevronRight,
  Loader2, ArrowLeft
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const serviceOptions = [
  'Customs Clearance',
  'Freight Forwarding',
  'Shipping',
  'Warehousing',
  'Transportation',
  'Import Consultancy',
  'Export Consultancy',
  'Documentation Assistance',
  'Other',
]

const cargoTypes = [
  'General Cargo',
  'Perishable Goods',
  'Hazardous Materials',
  'Industrial Machinery',
  'Electronics',
  'Textiles & Apparel',
  'Automotive Parts',
  'Pharmaceuticals',
  'Other',
]

function FormField({ id, label, required, children, icon: Icon }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-[#0C1C2E] flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-[#A77428]" />}
        {label}
        {required && <span className="text-[#A77428]">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0C1C2E] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#A77428]/40 focus:border-[#A77428] transition-all duration-200'
const selectClass =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0C1C2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#A77428]/40 focus:border-[#A77428] transition-all duration-200 appearance-none cursor-pointer'

export default function RequestQuote() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    tradeType: '',
    cargoType: '',
    originCountry: '',
    destination: '',
    serviceRequired: '',
    shipmentDate: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 2000))
    setLoading(false)
    navigate('/thank-you')
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc] pt-24 pb-20">
        {/* Page Header */}
        <div className="bg-[#0C1C2E] py-16 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNBNzc0MjgiIG9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwaDE4djE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#A77428]/20 border border-[#A77428]/30 text-[#d4a853] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                <Ship className="w-3.5 h-3.5" />
                Free Consultation
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Request a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#A77428]">
                  Quote
                </span>
              </h1>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                Fill in the details below and our team will get back to you with a customised quote within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
          >
            {/* Form header strip */}
            <div className="h-1.5 bg-gradient-to-r from-[#A77428] via-[#d4a853] to-[#A77428]" />

            <form onSubmit={handleSubmit} noValidate className="p-8 sm:p-10 lg:p-12">
              {/* Section: Personal Info */}
              <div className="mb-8">
                <h2 className="text-[#0C1C2E] font-bold text-lg mb-5 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#A77428]" />
                  Contact Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField id="fullName" label="Full Name" required icon={User}>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Darshan Raval"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FormField>
                  <FormField id="companyName" label="Company Name" icon={Building2}>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Your Company Pvt. Ltd."
                      value={formData.companyName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FormField>
                  <FormField id="email" label="Email Address" required icon={Mail}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FormField>
                  <FormField id="phone" label="Phone Number" required icon={Phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FormField>
                </div>
              </div>

              {/* Section: Shipment Details */}
              <div className="mb-8">
                <h2 className="text-[#0C1C2E] font-bold text-lg mb-5 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#A77428]" />
                  Shipment Details
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField id="tradeType" label="Import / Export" icon={Globe2}>
                    <select
                      id="tradeType"
                      name="tradeType"
                      value={formData.tradeType}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Select Type</option>
                      <option value="import">Import</option>
                      <option value="export">Export</option>
                      <option value="both">Both Import & Export</option>
                    </select>
                  </FormField>
                  <FormField id="cargoType" label="Cargo Type" icon={Package}>
                    <select
                      id="cargoType"
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Select Cargo Type</option>
                      {cargoTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </FormField>
                  <FormField id="originCountry" label="Origin Country" icon={MapPin}>
                    <input
                      id="originCountry"
                      name="originCountry"
                      type="text"
                      placeholder="e.g. China, USA, Germany"
                      value={formData.originCountry}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FormField>
                  <FormField id="destination" label="Destination" icon={MapPin}>
                    <input
                      id="destination"
                      name="destination"
                      type="text"
                      placeholder="e.g. Mumbai, Delhi, Chennai"
                      value={formData.destination}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FormField>
                  <FormField id="serviceRequired" label="Service Required" icon={Ship}>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Select a Service</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </FormField>
                  <FormField id="shipmentDate" label="Estimated Shipment Date" icon={Calendar}>
                    <input
                      id="shipmentDate"
                      name="shipmentDate"
                      type="date"
                      value={formData.shipmentDate}
                      onChange={handleChange}
                      className={inputClass}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </FormField>
                </div>
              </div>

              {/* Message */}
              <div className="mb-10">
                <FormField id="message" label="Additional Message / Requirements" icon={MessageSquare}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe your cargo, special requirements, or any other relevant information..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </FormField>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <Link
                  to="/"
                  id="quote-back-btn"
                  className="flex items-center gap-2 text-slate-500 hover:text-[#0C1C2E] text-sm font-medium transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
                <motion.button
                  id="quote-submit-btn"
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.03 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4a853] to-[#A77428] text-white font-bold px-10 py-4 rounded-2xl text-base shadow-lg shadow-[#A77428]/30 disabled:opacity-80 disabled:cursor-not-allowed transition-all duration-300 min-w-[220px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Quote
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>

              <p className="text-center text-slate-400 text-xs mt-6">
                By submitting, you agree that SHREE Enterprises may contact you regarding your enquiry.
                <br />We typically respond within 4–8 business hours.
              </p>
            </form>
          </motion.div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><span className="text-[#A77428]">✓</span> Licensed CHA No. 11/2244</span>
            <span className="flex items-center gap-1.5"><span className="text-[#A77428]">✓</span> No Hidden Charges</span>
            <span className="flex items-center gap-1.5"><span className="text-[#A77428]">✓</span> PAN India Coverage</span>
            <span className="flex items-center gap-1.5"><span className="text-[#A77428]">✓</span> Fast Response</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
