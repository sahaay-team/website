import type { Metadata } from "next"
import "./globals.css"
import { lexend } from "../../styles/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: "Sahaay - Find Local Service Professionals",
  description: "Connect with verified local service providers for all your home and business needs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          lexend.className
        )}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
