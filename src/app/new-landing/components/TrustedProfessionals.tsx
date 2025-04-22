// TODO: ADD IMAGES FOR THE DIFF PEOPLE


"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function ExpertsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  // Set up the infinite scrolling effect
  useEffect(() => {
    const scrollContainer = carouselRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled the width of one item
      if (scrollPosition >= 320) {
        scrollPosition = 0
        if (scrollContainer.firstElementChild) {
          scrollContainer.appendChild(scrollContainer.firstElementChild)
        }
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Team members data
  const experts = [
    {
      name: "Kessonga Giscombe",
      title: "Meditation and Mindfulness Teacher",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-emerald-500",
    },
    {
      name: "Rosie Acosta",
      title: "Meditation and Mindfulness Teacher",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-orange-500",
    },
    {
      name: "Arturo Morales",
      title: "Licensed Marriage and Family Therapist",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-amber-500",
    },
    {
      name: "Dr. Neeru Bakshi",
      title: "Board-Certified Psychiatrist and Mental Health Advocate",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-emerald-500",
    },
    {
      name: "Dora Kamau",
      title: "Meditation and Mindfulness Teacher",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-slate-400",
    },
    {
      name: "Expert Six",
      title: "Certified Coach",
      image: "/placeholder.svg?height=400&width=300",
      bgColor: "bg-yellow-500",
    },
  ]

  return (
    <section className="w-full py-20 overflow-hidden">
      {/* Heading and description */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h2 className="text-6xl font-bold text-gray-800 mb-6">
          Your <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Time Matters.</span> 
          <br />
          That's Why We Show Up
        </h2>
        <p className="text-lg text-gray-600 mb-8">
        We connect you with trusted freelancers and skilled workers. Easily schedule jobs, negotiate terms, and get quality service, all in one place.
        </p>
        <button className="bg-gray-800 text-white font-medium py-3 px-8 rounded-full hover:bg-gray-700 transition-colors">
          Learn more
        </button>
      </div>

      {/* Infinite carousel */}
      <div className="relative w-full overflow-hidden">
        <div ref={carouselRef} className="flex whitespace-nowrap" style={{ willChange: "transform" }}>
          {/* Duplicate the experts array to ensure continuous scrolling */}
          {[...experts, ...experts].map((expert, index) => (
            <div
              key={index}
              className={`inline-flex flex-col relative w-[300px] h-[350px] ${expert.bgColor} mx-2 rounded-lg overflow-hidden flex-shrink-0`}
            >
              <Image
                src={expert.image || "/placeholder.svg"}
                alt={expert.name}
                width={300}
                height={300}
                className="w-full h-[250px] object-cover object-center"
              />
              <div className="p-4 text-white">
                <h3 className="text-2xl font-bold">{expert.name}</h3>
                <p className="text-sm whitespace-normal">{expert.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
