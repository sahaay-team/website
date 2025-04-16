"use client"

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FilterSidebar } from '@/components/Sidebar/FilterSidebar'
import { FreelancerCard } from '@/components/Freelancer/FreelancerCard'

export default function SellerListPage() {
  const [selectedDate, setSelectedDate] = useState<'today' | 'tomorrow' | Date | null>(null)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleDateSelect = (date: 'today' | 'tomorrow' | Date | null) => {
    setSelectedDate(date)
    if (date !== 'today' && date !== 'tomorrow') {
      setIsCalendarOpen(false)
    }
  }

  const getButtonClass = (type: 'today' | 'tomorrow' | 'schedule') => {
    const baseClass = "border rounded-full py-2 px-4 text-sm transition-colors shadow-sm flex items-center justify-center"

    if (type === 'schedule') {
      return `${baseClass} w-full border-gray-300 hover:bg-orange-50 hover:border-orange-300`
    }

    if (
      (type === 'today' && selectedDate === 'today') ||
      (type === 'tomorrow' && selectedDate === 'tomorrow')
    ) {
      return `${baseClass} bg-orange-500 text-white border-orange-500`
    }

    return `${baseClass} border-gray-300 hover:bg-orange-50 hover:border-orange-300`
  }

  const freelancers = [
    {
      name: "Priya S.",
      image: "/img/priya.jpg",
      price: 550,
      rating: 4.9,
      reviews: 341,
      taskCount: 580,
      totalTasks: 459,
      description: "Namaste! With 10 years of experience in home cleaning, I ensure your space sparkles like new. I use eco-friendly products and pay attention to every detail. From dusting to mopping, I'll make your home shine. Specialized in deep cleaning and sanitization techniques for bathrooms and kitchens. If you need a thorough clean, book me!",
      review: {
        author: "Rahul M.",
        date: "Wed, Apr 16",
        text: "Priya did an excellent job! My flat looks spotless. Will definitely book her again."
      },
      badges: ["Fast Response", "Deep Clean Expert", "Top Rated Cleaner"]
    },
    {
      name: "Amit K.",
      image: "/img/amit.jpg",
      price: 450,
      rating: 4.8,
      reviews: 769,
      taskCount: 1487,
      totalTasks: 1308,
      description: "I have 8 years of experience in cleaning homes, offices, and commercial spaces across Delhi NCR. I'm skilled in deep cleaning, regular maintenance, and specialized tasks like carpet cleaning. I bring my own eco-friendly cleaning supplies and ensure a thorough job every time.",
      review: {
        author: "Neha S.",
        date: "Mon, Apr 14",
        text: "Amit is very professional and thorough. He cleaned my 3BHK apartment perfectly. Highly recommended!"
      },
      badges: ["Fast Response", "Deep Clean Expert", "Top Rated Cleaner"]
    }
  ]

  return (
    <>
      {/* Navbar */}
      {/* <nav className="bg-red-500 h-16 flex items-center justify-between px-4 md:px-8">
        <div className="w-32 h-10 bg-green-500 rounded"></div>
        <div className="w-48 h-10 bg-blue-500 rounded"></div>
      </nav> */}

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Sort by:</span>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-48 border-gray-300 hover:border-orange-500 focus:border-orange-500 shadow-sm">
                <SelectValue placeholder="Recommended" />
              </SelectTrigger>
              <SelectContent className="bg-white w-48 shadow-lg">
                <SelectItem value="recommended" className="hover:bg-orange-50 data-[state=checked]:text-orange-500">Recommended</SelectItem>
                <SelectItem value="price-low" className="hover:bg-orange-50 data-[state=checked]:text-orange-500">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="hover:bg-orange-50 data-[state=checked]:text-orange-500">Price: High to Low</SelectItem>
                <SelectItem value="rating" className="hover:bg-orange-50 data-[state=checked]:text-orange-500">Highest Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <FilterSidebar
            selectedDate={selectedDate}
            isCalendarOpen={isCalendarOpen}
            onDateSelect={handleDateSelect}
            onCalendarToggle={() => setIsCalendarOpen(!isCalendarOpen)}
            getButtonClass={getButtonClass}
          />

          <div className="space-y-8">
            {freelancers.map((freelancer, index) => (
              <FreelancerCard key={index} {...freelancer} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


