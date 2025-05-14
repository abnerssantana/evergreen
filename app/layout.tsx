import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evergreen Home Care Solutions LLC",
  description: "Compassionate, specialized in-home care services you can trust. Providing personalized caregiving solutions for seniors and individuals with special needs.",
  keywords: "home care, senior care, caregiving, special needs, in-home care, healthcare, Evergreen Care, home healthcare",
  authors: [{ name: "Evergreen Home Care Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evergreenhomecare.com",
    title: "Evergreen Home Care Solutions LLC",
    description: "Compassionate, specialized in-home care services you can trust. Providing personalized caregiving solutions for seniors and individuals with special needs.",
    siteName: "Evergreen Home Care Solutions",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Evergreen Home Care Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen Home Care Solutions LLC",
    description: "Compassionate, specialized in-home care services you can trust.",
    images: ["/images/twitter-image.jpg"]
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#1a4634" // Evergreen dark green color from project palette
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
