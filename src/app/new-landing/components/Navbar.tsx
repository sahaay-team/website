// TODO : NAVNBAR ON SCROLL LOOKS AWFULL , needs to be fixed.

"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Check if scrolled past threshold (e.g., 50px)
      setScrolled(currentScrollY > 800)

      // Always show navbar at the top of the page
      if (currentScrollY < 50) {
        setVisible(true)
      } 
      // When scrolled down, show on scroll down, hide on scroll up
      else {
        if (currentScrollY > lastScrollY) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-sm bg-black/10' 
          : 'bg-transparent'
      } ${
        visible 
          ? 'translate-y-0' 
          : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="relative flex items-center justify-center">
          {/* Left side - positioned closer to center */}
          <div className="absolute left-[27%] top-1/2 -translate-y-1/2 flex items-center gap-6">
            <Link 
              href="/services" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-black hover:text-orange-500' 
                  : 'text-white hover:text-orange-200'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/categories" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-black hover:text-orange-500' 
                  : 'text-white hover:text-orange-200'
              }`}
            >
              Categories
            </Link>
          </div>

          {/* Center - Logo */}
          <Link 
            href="/" 
            className={`text-4xl font-bold transition-colors ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Sahaay
          </Link>

          {/* Right side - positioned closer to center */}
          <div className="absolute right-[29%] top-1/2 -translate-y-1/2 flex items-center gap-6">
            <Link 
              href="/about" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-black hover:text-orange-500' 
                  : 'text-white hover:text-orange-200'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/new-landing/login" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-black hover:text-orange-500' 
                  : 'text-white hover:text-orange-200'
              }`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}





