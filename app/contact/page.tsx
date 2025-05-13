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
          <Image src="/placeholder.svg?height=600&width=1920" alt="Contact us" fill className="object-cover" priority />
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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-evergreen mb-8">Get in Touch</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center shadow-md">
                  <div className="mx-auto mb-6 rounded-full bg-green-100 p-3 w-fit">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Thank You!</h3>
                  <p className="text-green-700 mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-evergreen to-fresh-mint hover:shadow-md text-white rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-md">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="rounded-lg border-gray-200 focus:border-evergreen focus:ring-evergreen"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="rounded-lg border-gray-200 focus:border-evergreen focus:ring-evergreen"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="rounded-lg border-gray-200 focus:border-evergreen focus:ring-evergreen"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="rounded-lg border-gray-200 focus:border-evergreen focus:ring-evergreen"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-evergreen to-fresh-mint hover:shadow-md text-white rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-evergreen mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="rounded-full bg-fresh-mint/20 p-3 mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-evergreen" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">+1 (206) 880-5849</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-fresh-mint/20 p-3 mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-evergreen" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700 break-all">danielfrancissiqueira@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-fresh-mint/20 p-3 mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-evergreen" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Main Office</h3>
                    <p className="text-gray-700">Bothell, WA, USA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-fresh-mint/20 p-3 mr-4 shrink-0">
                    <Clock className="h-6 w-6 text-evergreen" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours of Operation</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                    <p className="text-sm text-gray-500 mt-2">24/7 care services available for clients</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-8 bg-gradient-to-br from-evergreen to-fresh-mint rounded-2xl shadow-md text-white">
                <h3 className="font-semibold text-xl mb-4">Request a Consultation</h3>
                <p className="mb-6 text-white/90">
                  Prefer to speak with us directly? Schedule a free consultation to discuss your home care needs.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-evergreen hover:bg-white/90 rounded-full">Schedule a Call</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-fresh-mint/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-evergreen mb-4">Our Locations</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Serving communities across Washington, Oregon, and Florida.
            </p>
          </div>

          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Map of our locations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-evergreen mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-700">Find answers to common questions about our services.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-evergreen">What areas do you serve?</h3>
              <p className="text-gray-700">
                We currently provide services in Washington (Seattle area), Oregon (Portland area), and Florida (Tampa
                area). Contact us to confirm service availability in your specific location.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-evergreen">How do I get started with your services?</h3>
              <p className="text-gray-700">
                Simply contact us by phone, email, or through our website to schedule an initial consultation. We'll
                discuss your needs, answer your questions, and develop a personalized care plan.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-evergreen">Are your caregivers licensed and insured?</h3>
              <p className="text-gray-700">
                Yes, all our healthcare professionals are fully licensed, insured, and have undergone thorough
                background checks. We maintain strict standards for our team to ensure the highest quality of care.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
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
