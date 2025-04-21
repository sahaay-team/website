import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arjun M - Professional Carpenter",
  description:
    "Professional portfolio of Arjun M, a skilled carpenter specializing in custom furniture, home renovations, and woodworking.",
}

export default function SellersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={inter.className}>
      <main>{children}</main>
    </div>
  )
}
