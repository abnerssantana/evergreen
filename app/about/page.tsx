import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-warm-beige py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-evergreen mb-6">About Evergreen Home Care Solutions</h1>
            <p className="text-xl text-gray-700">
              A pioneering provider of humanized home care services, dedicated to enhancing the quality of life for
              patients in recovery or palliative care.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-evergreen mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Evergreen Home Care Solutions LLC was founded with a clear vision: to provide exceptional home care
                services that prioritize the dignity, comfort, and well-being of each patient we serve.
              </p>
              <p className="text-gray-700 mb-4">
                With over two decades of healthcare experience, our team brings specialized expertise in critical care,
                emergency services, occupational health, and home care to create a comprehensive approach that addresses
                the unique needs of each individual.
              </p>
              <p className="text-gray-700">
                We believe that quality healthcare should be accessible to all, which is why we're expanding our
                services across Washington, Oregon, and Florida, with a special focus on underserved communities.
              </p>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Evergreen Home Care team"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-fresh-mint/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-evergreen mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional, compassionate care that respects each patient's dignity, preferences, and
                individual needs, creating a positive impact on their quality of life and well-being.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-evergreen mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To expand access to specialized healthcare, creating meaningful impact on families, local communities,
                and the U.S. healthcare system through innovative, patient-centered home care solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-evergreen mb-4">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-evergreen mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Excellence in healthcare</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-evergreen mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Patient-centered service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-evergreen mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Innovation and continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-evergreen mr-2 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Community impact and job creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative h-80 md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Daniel Francis Siqueira"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-evergreen mb-6">Our Founder</h2>
              <h3 className="text-xl font-semibold mb-4">Mr. Daniel Francis Siqueira</h3>
              <p className="text-gray-700 mb-4">
                Daniel is an experienced healthcare professional with extensive expertise in critical care, emergency
                care, occupational health, and homecare services.
              </p>
              <p className="text-gray-700 mb-4">
                With a passion for improving patient outcomes and a vision for more accessible, high-quality healthcare,
                Daniel founded Evergreen Home Care Solutions to address the growing need for specialized home care
                services.
              </p>
              <p className="text-gray-700 mb-6">
                His leadership and commitment to excellence guide our team in delivering compassionate, patient-centered
                care that makes a meaningful difference in the lives of those we serve.
              </p>
              <Link href="/contact">
                <Button className="bg-evergreen hover:bg-evergreen/90 text-white">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-evergreen mb-4">Our Certifications & Credentials</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Committed to excellence – see our certifications and professional credentials.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for certifications - replace with actual certifications */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl font-bold">C</span>
                </div>
                <div>
                  <h3 className="font-semibold">Certification {i + 1}</h3>
                  <p className="text-sm text-gray-600">Professional healthcare certification</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-evergreen text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Care?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our services and how we can support you or your loved one.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-evergreen hover:bg-gray-100">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
