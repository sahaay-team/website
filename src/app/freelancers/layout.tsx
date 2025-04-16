import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import "../../app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Find Service Providers",
  description: "Find skilled service providers for your tasks",
}

export default function FreelancersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={inter.className}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}


