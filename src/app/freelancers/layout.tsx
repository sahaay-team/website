import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import { SidebarProvider } from "@/components/ui/sidebar"


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
        <SidebarProvider>
          <main className="flex">{children}</main>
        </SidebarProvider>
      </div>

  )
}
