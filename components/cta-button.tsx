import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CtaButtonProps {
  href: string
  className?: string
  variant?: "default" | "outline" | "secondary"
  children: React.ReactNode
}

export default function CtaButton({ href, className, variant = "default", children }: CtaButtonProps) {
  return (
    <Link href={href}>
      <Button
        variant={variant}
        className={cn(
          "rounded-full transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]",
          variant === "default" ? "bg-gradient-to-r from-evergreen to-fresh-mint text-white hover:bg-evergreen/90" : "",
          variant === "outline" ? "border-evergreen text-evergreen hover:bg-evergreen/10" : "",
          variant === "secondary" ? "bg-fresh-mint hover:bg-fresh-mint/90 text-evergreen" : "",
          className,
        )}
      >
        {children}
      </Button>
    </Link>
  )
}
