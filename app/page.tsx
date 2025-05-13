"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    setMenuOpen(false)
    const ref = sectionRefs[section as keyof typeof sectionRefs]
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-white font-bold text-xl relative z-10">
            <span className="text-white">EVERGREEN</span>
            <span className="block text-xs font-light tracking-widest">HOME CARE SOLUTIONS</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["home", "about", "services", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-white uppercase text-sm tracking-wider ${
                  activeSection === section ? "opacity-100" : "opacity-50"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-evergreen z-50 flex flex-col justify-center items-center">
          <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col space-y-8">
            {["home", "about", "services", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white uppercase text-2xl tracking-wider"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={sectionRefs.home} className="relative min-h-screen flex items-center overflow-hidden bg-evergreen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-evergreen/90 to-evergreen/70"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-7 lg:col-span-6"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                Care
                <br />
                <span className="text-fresh-mint">Redefined</span>
              </h1>
              <p className="text-white/80 text-xl mb-8 max-w-lg">
                Evergreen Home Care Solutions delivers compassionate, specialized in-home care that enhances quality of
                life.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-evergreen px-8 py-4 rounded-full inline-flex items-center font-medium hover:bg-fresh-mint transition-colors"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block md:col-span-5 lg:col-span-6 relative"
            >
              <div className="absolute top-[-50px] right-[-100px] w-[500px] h-[500px] rounded-full border-2 border-fresh-mint/30"></div>
              <div className="absolute bottom-[-100px] left-[50px] w-[300px] h-[300px] rounded-full border-2 border-fresh-mint/20"></div>
              <div className="relative z-10 transform rotate-3">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Compassionate care"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <button onClick={() => scrollToSection("about")} className="text-white animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-5xl md:text-7xl font-bold text-evergreen mb-8">
                  Our
                  <br />
                  <span className="text-fresh-mint">Story</span>
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Evergreen Home Care Solutions LLC was founded with a clear vision: to provide exceptional home care
                  services that prioritize the dignity, comfort, and well-being of each patient we serve.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  With over two decades of healthcare experience, our team brings specialized expertise in critical
                  care, emergency services, occupational health, and home care to create a comprehensive approach that
                  addresses the unique needs of each individual.
                </p>
                <div className="flex space-x-6">
                  <div>
                    <div className="text-4xl font-bold text-evergreen">20+</div>
                    <div className="text-gray-500">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-evergreen">500+</div>
                    <div className="text-gray-500">Families Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-evergreen">3</div>
                    <div className="text-gray-500">State Coverage</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-span-12 md:col-span-6 relative">
              <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full bg-fresh-mint/10"></div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 transform -rotate-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Our story"
                    width={600}
                    height={450}
                    className="rounded-3xl shadow-xl"
                  />
                </div>
                <div className="absolute top-[-30px] right-[-30px] bg-evergreen p-6 rounded-3xl shadow-lg z-20">
                  <div className="text-white text-lg font-medium">Mr. Daniel Francis Siqueira</div>
                  <div className="text-fresh-mint text-sm">Founder</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 transform -translate-y-1/2"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gray-100 transform -translate-x-1/2"></div>
      </section>

      {/* Services Section */}
      <section ref={sectionRefs.services} className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gray-200"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-fresh-mint/5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-evergreen mb-6">
              Our <span className="text-fresh-mint">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive, compassionate home care services tailored to meet your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-fresh-mint/20 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-evergreen mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-fresh-mint mr-2">•</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gray-200"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-evergreen/5 rounded-tr-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-evergreen mb-6">
              Client <span className="text-fresh-mint">Stories</span>
            </h2>
            <p className="text-gray-600 text-lg">Hear from families who have experienced our compassionate care.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <svg className="h-10 w-10 text-fresh-mint mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-6 text-lg italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={testimonial.imageSrc || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-evergreen">{testimonial.author}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-20 md:py-32 bg-evergreen relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-fresh-mint/10"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-fresh-mint/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Get in <span className="text-fresh-mint">Touch</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Contact us today to learn more about our services and how we can support you or your loved one.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-fresh-mint mr-4 mt-1" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-white/80">+1 (206) 880-5849</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-fresh-mint mr-4 mt-1" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-white/80 break-all">danielfrancissiqueira@hotmail.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-fresh-mint mr-4 mt-1" />
                  <div>
                    <div className="text-white font-medium">Main Office</div>
                    <div className="text-white/80">Bothell, WA, USA</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-evergreen mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fresh-mint focus:border-fresh-mint"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fresh-mint focus:border-fresh-mint"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fresh-mint focus:border-fresh-mint"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fresh-mint focus:border-fresh-mint"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-evergreen text-white py-4 rounded-lg hover:bg-evergreen/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-evergreen">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                      <path
                        d="M12 2L4 6v12l8 4 8-4V6l-8-4z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 14v4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="text-lg font-bold text-evergreen">Evergreen</span>
                  <span className="block text-xs text-fresh-mint">HOME CARE SOLUTIONS</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-evergreen transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-evergreen transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-evergreen transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-evergreen transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Evergreen Home Care Solutions LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
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
    imageSrc: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "The personalized care plan they created addressed all of my mother's needs. Their attention to detail and genuine compassion made all the difference in her recovery.",
    author: "Michael Thompson",
    role: "Family Member",
    imageSrc: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "As a healthcare professional myself, I have high standards for care. Evergreen exceeded my expectations with their expertise, professionalism, and heart-centered approach.",
    author: "Dr. Lisa Chen",
    role: "Healthcare Partner",
    imageSrc: "/placeholder.svg?height=48&width=48",
  },
]
