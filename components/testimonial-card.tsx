import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  imageSrc?: string
}

export default function TestimonialCard({ quote, author, role, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg">
      <svg className="h-8 w-8 text-evergreen mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <Image
            src={imageSrc || "/placeholder.svg?height=48&width=48"}
            alt={author}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  )
}
