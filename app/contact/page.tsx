"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-evergreen/90 to-evergreen/70"></div>
          <Image src="/care8.jpg?height=600&width=1920" alt="Contact us" fill className="object-cover opacity-30" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              We're here to answer your questions and help you get the care you need.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center bg-evergreen-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center h-full">
              <div className="bg-evergreen-100 p-3 rounded-full mb-4">
                <Phone className="h-6 w-6 text-evergreen" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-evergreen">Phone</h3>
              <p className="text-gray-700 mb-4">Available from 9 AM to 5 PM</p>
              <a href="tel:+12065550123" className="text-evergreen hover:underline font-medium">+1 (206) 555-0123</a>
            </div>
            <div className="flex flex-col items-center bg-evergreen-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center h-full">
              <div className="bg-evergreen-100 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-evergreen" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-evergreen">Email</h3>
              <p className="text-gray-700 mb-4">We will respond within 24 hours</p>
              <a href="mailto:contact@evergreen.com" className="text-evergreen hover:underline font-medium">contact@evergreen.com</a>
            </div>
            <div className="flex flex-col items-center bg-evergreen-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center h-full">
              <div className="bg-evergreen-100 p-3 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-evergreen" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-evergreen">Office</h3>
              <p className="text-gray-700 mb-4">Visit us by appointment</p>
              <address className="text-gray-700 not-italic">123 Care Street, Suite 456, Seattle, WA 98101</address>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-evergreen-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-evergreen mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-700">Find answers to common questions about our services.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-evergreen">What areas do you serve?</h3>
              <p className="text-gray-700">
                We currently provide services in Washington (Seattle area), Oregon (Portland area), and Florida (Tampa
                area). Contact us to confirm service availability in your specific location.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-evergreen">How do I get started with your services?</h3>
              <p className="text-gray-700">
                Simply contact us by phone, email, or through our website to schedule an initial consultation. We'll
                discuss your needs, answer your questions, and develop a personalized care plan.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-evergreen">Are your caregivers licensed and insured?</h3>
              <p className="text-gray-700">
                Yes, all our healthcare professionals are fully licensed, insured, and have undergone thorough
                background checks. We maintain strict standards for our team to ensure the highest quality of care.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-evergreen">Do you accept insurance?</h3>
              <p className="text-gray-700">
                We work with various insurance providers and can help determine your coverage options. Contact us for a
                detailed discussion about payment options and insurance acceptance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-evergreen to-evergreen/90 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Exceptional Home Care?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-white/90">
                Contact us today to schedule a consultation and learn how we can support you or your loved one with
                compassionate, specialized care.
              </p>
              <Button
                className="bg-white text-evergreen hover:bg-gray-100 rounded-full px-6"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get in Touch Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
