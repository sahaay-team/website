import type { Metadata } from "next"
import { lexend } from "../../../styles/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Sahaay - Find Local Service Professionals",
  description: "Connect with verified local service providers for all your home and business needs.",
}

export default function NewLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={cn("min-h-screen font-sans antialiased", lexend.className)}>
      {children}
    </div>
  )
}
