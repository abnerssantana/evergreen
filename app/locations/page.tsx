import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

const locations = [
  {
    id: "seattle",
    name: "Seattle, WA",
    description: "Main Headquarters (HubZone area)",
    address: "Bothell, WA, USA",
    phone: "+1 (206) 880-5849",
    email: "danielfrancissiqueira@hotmail.com",
    mapSrc: "/placeholder.svg?height=400&width=600",
    primary: true,
  },
  {
    id: "portland",
    name: "Portland, OR",
    description: "Expansion Site (3rd year)",
    address: "Portland, OR, USA",
    phone: "+1 (206) 880-5849",
    email: "danielfrancissiqueira@hotmail.com",
    mapSrc: "/placeholder.svg?height=400&width=600",
    primary: false,
  },
  {
    id: "tampa",
    name: "Tampa, FL",
    description: "Expansion Site (5th year)",
    address: "Tampa, FL, USA",
    phone: "+1 (206) 880-5849",
    email: "danielfrancissiqueira@hotmail.com",
    mapSrc: "/placeholder.svg?height=400&width=600",
    primary: false,
  },
]

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-warm-beige py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-evergreen mb-6">Our Locations</h1>
            <p className="text-xl text-gray-700">
              Serving communities across Washington, Oregon, and Florida with compassionate home care.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12">
            {locations.map((location) => (
              <div key={location.id} id={location.id} className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <div className="inline-block bg-fresh-mint/20 px-3 py-1 rounded-full text-sm font-medium text-evergreen mb-4">
                    {location.primary ? "Main Headquarters" : "Expansion Site"}
                  </div>
                  <h2 className="text-3xl font-bold text-evergreen mb-4">{location.name}</h2>
                  <p className="text-gray-700 mb-6">{location.description}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-evergreen mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{location.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-evergreen mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{location.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-evergreen mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{location.email}</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-evergreen hover:bg-evergreen/90 text-white">Contact This Location</Button>
                  </Link>
                </div>
                <div className="relative h-64 md:h-80">
                  <Image
                    src={location.mapSrc || "/placeholder.svg"}
                    alt={`Map of ${location.name}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-fresh-mint/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-evergreen mb-4">Our Service Areas</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              We provide comprehensive home care services throughout the following regions:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-evergreen mb-4">Washington</h3>
              <p className="text-gray-700 mb-4">
                Serving Seattle and surrounding areas, including Bothell, Bellevue, Kirkland, Redmond, and more.
              </p>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Washington service area"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <Link href="/contact" className="text-evergreen font-medium hover:underline">
                Inquire about services in Washington →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-evergreen mb-4">Oregon</h3>
              <p className="text-gray-700 mb-4">
                Serving Portland and surrounding areas, providing quality home care throughout the region.
              </p>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Oregon service area"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <Link href="/contact" className="text-evergreen font-medium hover:underline">
                Inquire about services in Oregon →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-evergreen mb-4">Florida</h3>
              <p className="text-gray-700 mb-4">
                Serving Tampa and surrounding areas, bringing compassionate home care to the Sunshine State.
              </p>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Florida service area"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <Link href="/contact" className="text-evergreen font-medium hover:underline">
                Inquire about services in Florida →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Expansion plans"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-evergreen mb-6">Our Expansion Plans</h2>
              <p className="text-gray-700 mb-4">
                At Evergreen Home Care Solutions, we're committed to expanding access to quality home care services
                across the United States.
              </p>
              <p className="text-gray-700 mb-4">
                Our strategic expansion plan focuses on bringing our compassionate care to underserved communities,
                creating jobs, and making a positive impact on local healthcare systems.
              </p>
              <p className="text-gray-700 mb-6">
                We're particularly focused on HubZone areas, where we can contribute to economic development while
                providing essential healthcare services.
              </p>
              <Link href="/contact">
                <Button className="bg-evergreen hover:bg-evergreen/90 text-white">Partner With Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-evergreen text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Home Care Services?</h2>
          <p className="max-w-2xl mx-auto mb-8">Contact us today to learn more about our services in your area.</p>
          <Link href="/contact">
            <Button className="bg-white text-evergreen hover:bg-gray-100">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
