import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "nursing-rn",
    title: "In-Home Nursing Care (RN)",
    description: "Professional registered nursing care delivered in the comfort of your home.",
    imageSrc: "/care1.jpg?height=400&width=600",
    benefits: [
      "Skilled medical assessment and monitoring",
      "Medication management and administration",
      "Wound care and dressing changes",
      "Health education for patients and families",
    ],
    fullDescription:
      "Our Registered Nurses provide comprehensive medical care in your home environment, including skilled assessments, medication management, wound care, and health education. They coordinate with your healthcare team to ensure continuity of care and optimal health outcomes.",
  },
  {
    id: "nursing-lpn",
    title: "In-Home Nursing Care (LPN)",
    description: "Licensed practical nursing support for daily medical needs.",
    imageSrc: "/care2.jpg?height=400&width=600",
    benefits: [
      "Routine health monitoring",
      "Medication administration",
      "Basic wound care",
      "Assistance with activities of daily living",
    ],
    fullDescription:
      "Our Licensed Practical Nurses deliver essential nursing care under the supervision of RNs, providing medication administration, routine health monitoring, basic wound care, and assistance with daily activities to support your health and independence at home.",
  },
  {
    id: "palliative",
    title: "Palliative Care",
    description: "Specialized care focused on comfort and quality of life for patients with serious illnesses.",
    imageSrc: "/care3.jpg?height=400&width=600",
    benefits: [
      "Pain and symptom management",
      "Emotional and spiritual support",
      "Coordination with medical team",
      "Family support and education",
    ],
    fullDescription:
      "Our palliative care services focus on improving quality of life for patients with serious illnesses. We provide expert pain and symptom management, emotional support, and coordination with your medical team, while offering guidance and support to family members.",
  },
  {
    id: "health-aide",
    title: "Home Health Aide Support",
    description: "Assistance with daily activities and personal care needs.",
    imageSrc: "/care4.jpg?height=400&width=600",
    benefits: ["Personal hygiene assistance", "Meal preparation", "Light housekeeping", "Medication reminders"],
    fullDescription:
      "Our Home Health Aides provide compassionate assistance with daily activities including personal hygiene, meal preparation, light housekeeping, and medication reminders. They offer reliable support that enhances independence and quality of life at home.",
  },
  {
    id: "recovery",
    title: "Recovery Support Services",
    description: "Specialized care to support recovery after hospitalization or surgery.",
    imageSrc: "/care5.jpg?height=400&width=600",
    benefits: [
      "Post-surgical care",
      "Rehabilitation support",
      "Medication management",
      "Progress monitoring and reporting",
    ],
    fullDescription:
      "Our recovery support services are designed to facilitate healing after hospitalization or surgery. We provide post-surgical care, rehabilitation support, medication management, and regular progress monitoring to ensure a smooth recovery process.",
  },
  {
    id: "personal",
    title: "Personal Care Services",
    description: "Compassionate assistance with personal care and daily living activities.",
    imageSrc: "/care6.jpg?height=400&width=600",
    benefits: ["Bathing and grooming assistance", "Mobility support", "Companionship", "Errands and transportation"],
    fullDescription:
      "Our personal care services offer dignified assistance with bathing, grooming, mobility, and other daily activities. We also provide companionship and help with errands and transportation, supporting independence and enhancing quality of life.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-fresh-mint/20 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-evergreen mb-6">Our Services</h1>
            <p className="text-xl text-gray-700">
              Comprehensive, compassionate home care services tailored to meet your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-evergreen mb-12 text-center">Detailed Service Information</h2>

          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`py-12 ${index !== 0 ? "border-t border-gray-200" : ""}`}>
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className={`${index % 2 === 0 ? "order-1" : "order-1 md:order-2"}`}>
                  <h3 className="text-2xl font-bold text-evergreen mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.fullDescription}</p>
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-evergreen mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-evergreen hover:bg-evergreen/90 text-white">
                      Inquire About This Service
                    </Button>
                  </Link>
                </div>
                <div className={`relative h-64 md:h-80 ${index % 2 === 0 ? "order-2" : "order-2 md:order-1"}`}>
                  <Image
                    src={service.imageSrc || "/care6.jpg"}
                    alt={service.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personalized Care Plans */}
      <section className="py-16 bg-fresh-mint/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-evergreen mb-6">Personalized Care Plans</h2>
              <p className="text-gray-700 mb-4">
                At Evergreen Home Care Solutions, we understand that every patient has unique needs and preferences.
                That's why we develop personalized care plans tailored specifically to each individual we serve.
              </p>
              <p className="text-gray-700 mb-4">
                Our comprehensive assessment process takes into account medical needs, personal preferences, home
                environment, and family dynamics to create a holistic care plan that addresses all aspects of
                well-being.
              </p>
              <p className="text-gray-700 mb-6">
                We regularly review and adjust care plans as needs change, ensuring that our services continue to
                provide the right level of support at every stage.
              </p>
              <Link href="/contact">
                <Button className="bg-evergreen hover:bg-evergreen/90 text-white">Schedule a Care Assessment</Button>
              </Link>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/care7.jpg?height=600&width=800"
                alt="Personalized care planning"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-evergreen text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your needs and learn how our services can support you or your loved one.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-evergreen hover:bg-gray-100">Request a Consultation</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
