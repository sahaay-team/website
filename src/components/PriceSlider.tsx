'use client'

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"

export function PriceSlider() {
  const [selectedPrice, setSelectedPrice] = useState(50)
  const minPrice = 50
  const maxPrice = 1000

  return (
    <div className="px-2">
      <div className="relative h-16 mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPrice}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-0"
          >
            <div className="bg-primary/10 rounded-xl p-3 shadow-sm border border-primary/20">
              <div className="flex items-center justify-center gap-1">
                <span className="text-primary text-sm font-medium">₹</span>
                <span className="text-2xl font-bold text-primary">{selectedPrice}</span>
                <span className="text-primary text-sm font-medium">/hr</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-muted rounded-full"></div>
        <motion.div 
          className="absolute inset-y-0 left-0 bg-primary rounded-full" 
          style={{ width: `${((selectedPrice - minPrice) / (maxPrice - minPrice)) * 100}%` }}
          initial={false}
          animate={{ width: `${((selectedPrice - minPrice) / (maxPrice - minPrice)) * 100}%` }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
        <Slider 
          defaultValue={[50]} 
          min={minPrice}
          max={maxPrice}
          step={10} 
          className="relative z-10"
          onValueChange={(value) => {
            setSelectedPrice(value[0]);
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>₹{minPrice}</span>
        <span>₹{maxPrice}+</span>
      </div>
    </div>
  )
}


