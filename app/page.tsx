"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Heart, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute inset-0 bg-evergreen/60 z-10" />
          <Image
            src="/cuidadora.jpg"
            alt="Professional caregiver"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="w-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-4/5 lg:w-full"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 }
                }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block font-semibold"
                >
                  Compassionate Care
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="block"
                >
                  You Can Trust
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full md:w-3/4 lg:w-2/3"
            >
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Delivering high-quality, patient-centered healthcare across Washington, Oregon, and Florida with empathy and expertise.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-white text-evergreen font-medium py-3.5 px-8 rounded-lg transition-all flex items-center justify-center group shadow-md"
                >
                  Request a Consultation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="bg-transparent hover:bg-white/20 text-white border border-white font-medium py-3.5 px-8 rounded-lg transition-all flex items-center justify-center shadow-sm"
                >
                  Learn More About Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated decoration elements */}
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-fresh-mint/20 z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div
          className="absolute top-20 left-20 w-24 h-24 rounded-full bg-fresh-mint/10 z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </section>

      {/* Quick Highlights */}
      <section className="py-20 bg-gradient-to-b from-warm-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-fresh-mint font-medium">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-evergreen mt-3 mb-4">The Evergreen Difference</h2>
            <div className="w-20 h-1 bg-fresh-mint mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over two decades of experience, we provide compassionate, expert care tailored to each patient's
              unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-6 w-6 text-evergreen" />,
                title: "20+ Years Experience",
                description: "Over two decades of healthcare expertise and quality service.",
              },
              {
                icon: <Users className="h-6 w-6 text-evergreen" />,
                title: "Licensed Professionals",
                description: "Our team includes RNs, LPNs, Home Health Aides, and Physical Therapists.",
              },
              {
                icon: <Heart className="h-6 w-6 text-evergreen" />,
                title: "Personalized Care",
                description: "Customized care plans designed for each patient's unique needs.",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-evergreen" />,
                title: "Quality Assurance",
                description: "Rigorous standards and continuous monitoring ensure exceptional care.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-fresh-mint/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fresh-mint/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-evergreen mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-fresh-mint font-medium">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-evergreen mt-3 mb-4">Comprehensive Care Solutions</h2>
            <div className="w-20 h-1 bg-fresh-mint mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive in-home healthcare solutions delivered with compassion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-fresh-mint/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fresh-mint/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-evergreen mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-fresh-mint mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.id}`}
                  className="text-evergreen font-medium hover:text-fresh-mint transition-colors flex items-center group-hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/services"
                className="bg-evergreen hover:bg-evergreen/90 text-white font-medium py-3.5 px-8 rounded-lg transition-all inline-flex items-center shadow-sm"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-fresh-mint/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-fresh-mint font-medium">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-evergreen mt-3 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-fresh-mint mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from families who have experienced our compassionate care firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-fresh-mint/20">
                    <Image
                      src={testimonial.imageSrc || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-evergreen text-lg">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 left-0 text-fresh-mint/30 text-6xl">"</div>
                  <blockquote className="text-gray-600 relative z-10 pt-2">{testimonial.quote}</blockquote>
                  <div className="absolute -bottom-8 right-0 text-fresh-mint/30 text-6xl">"</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-evergreen text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-fresh-mint/80 font-medium">GET STARTED</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-3">Ready to Experience Exceptional Care?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
              Contact us today to discuss how we can create a personalized care plan for you or your loved one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="bg-white text-evergreen hover:bg-fresh-mint hover:text-evergreen transition-colors font-medium py-3.5 px-8 rounded-lg flex items-center justify-center shadow-sm"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/about"
                  className="bg-transparent border border-white hover:bg-white/10 transition-colors font-medium py-3.5 px-8 rounded-lg flex items-center justify-center"
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Data
const services = [
  {
    id: "nursing-rn",
    title: "In-Home Nursing Care",
    description: "Professional nursing care delivered in the comfort of your home.",
    icon: (
      <svg className="w-8 h-8 text-evergreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    benefits: [
      "Skilled medical assessment and monitoring",
      "Medication management and administration",
      "Wound care and dressing changes",
      "Health education for patients and families",
    ],
  },
  {
    id: "palliative",
    title: "Palliative Care",
    description: "Specialized care focused on comfort and quality of life.",
    icon: (
      <svg className="w-8 h-8 text-evergreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    benefits: [
      "Pain and symptom management",
      "Emotional and spiritual support",
      "Coordination with medical team",
      "Family support and education",
    ],
  },
  {
    id: "health-aide",
    title: "Home Health Aide Support",
    description: "Assistance with daily activities and personal care needs.",
    icon: (
      <svg className="w-8 h-8 text-evergreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    benefits: ["Personal hygiene assistance", "Meal preparation", "Light housekeeping", "Medication reminders"],
  },
]

const testimonials = [
  {
    quote:
      "Evergreen gave our family peace of mind and exceptional care when we needed it most. Their team was professional, compassionate, and truly cared about my father's well-being.",
    author: "Sarah Johnson",
    role: "Family Member",
    imageSrc: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The personalized care plan they created addressed all of my mother's needs. Their attention to detail and genuine compassion made all the difference in her recovery.",
    author: "Michael Thompson",
    role: "Family Member",
    imageSrc: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As a healthcare professional myself, I have high standards for care. Evergreen exceeded my expectations with their expertise, professionalism, and heart-centered approach.",
    author: "Dr. Lisa Chen",
    role: "Healthcare Partner",
    imageSrc: "/placeholder.svg?height=80&width=80",
  },
]
