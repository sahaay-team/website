"use client"

import Image from "next/image"
import Link from "next/link"
import { Zap, Star, Award, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FreelancerCardProps {
  name: string
  image: string
  price: number
  rating: number
  reviews: number
  taskCount: number
  totalTasks: number
  description: string
  review: {
    author: string
    date: string
    text: string
  }
  badges: string[]
  id?: string // Add this prop
}

export function FreelancerCard({
  name,
  image,
  price,
  rating,
  reviews,
  taskCount,
  totalTasks,
  description,
  review,
  badges,
  id // Add this prop
}: FreelancerCardProps) {
  // Generate the ID from name if not provided
  const sellerId = id || name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-8 grid md:grid-cols-[180px_1fr_auto] gap-8">
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-md">
            <Image
              src={image}
              alt={name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <Link 
            href={`/sellers/${name.toLowerCase().replace(/\s+/g, '-').replace(/\.$/g, '')}`}
            className="text-orange-500 text-sm font-medium text-center hover:underline"
          >
            View Profile
          </Link>
          <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
            Select & Continue
          </Button>
          <div className="flex flex-col mt-6 text-sm text-gray-500 space-y-3">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center">
                {badge === 'Fast Response' && <Zap size={16} className="text-orange-500 mr-2" />}
                {badge === 'Deep Clean Expert' && <Award size={16} className="text-orange-500 mr-2" />}
                {badge === 'Top Rated Cleaner' && <ThumbsUp size={16} className="text-orange-500 mr-2" />}
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <div className="text-2xl font-bold text-orange-500">₹{price}/hr</div>
          </div>
          <div className="text-sm text-green-700 font-medium mb-3">2 HOUR MINIMUM</div>
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <span className="text-lg font-medium">{rating} <span className="text-gray-500 font-normal">({reviews} reviews)</span></span>
          </div>
          <div className="text-sm mb-1">{taskCount} Home Cleaning tasks</div>
          <div className="text-sm text-gray-500 mb-6">{totalTasks} Cleaning tasks overall</div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-lg">How I can help:</h3>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>

          <div className="flex items-start gap-4 mt-6 bg-gray-50 p-6 rounded-lg shadow-inner">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-300 shadow-md">
              <Image
                src="/img/default_pic.png"
                alt="Client"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="text-sm mb-1">
                <span className="font-semibold">{review.author}</span> on {review.date}
              </div>
              <p className="text-sm leading-relaxed">{review.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



