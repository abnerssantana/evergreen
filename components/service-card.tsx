import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  imageSrc: string
  icon: React.ReactNode
}

export default function ServiceCard({ id, title, description, imageSrc, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-fresh-mint/20 rounded-full flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={`/services#${id}`} className="text-evergreen font-medium inline-flex items-center">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
