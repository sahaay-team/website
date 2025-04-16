"use client"

import { Shield, Calendar } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PriceSlider } from "@/components/PriceSlider"
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

interface FilterSidebarProps {
  selectedDate: 'today' | 'tomorrow' | Date | null
  isCalendarOpen: boolean
  onDateSelect: (date: 'today' | 'tomorrow' | Date | null) => void
  onCalendarToggle: () => void
  getButtonClass: (type: 'today' | 'tomorrow' | 'schedule') => string
}

export function FilterSidebar({
  selectedDate,
  isCalendarOpen,
  onDateSelect,
  onCalendarToggle,
  getButtonClass
}: FilterSidebarProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit shadow-md">
      <div className="space-y-8">
        {/* Date filter */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Date</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <button 
              className={getButtonClass('today')}
              onClick={() => onDateSelect('today')}
            >
              Today
            </button>
            <button 
              className={getButtonClass('tomorrow')}
              onClick={() => onDateSelect('tomorrow')}
            >
              Tomorrow
            </button>
          </div>
          <div className="relative">
            <button 
              className={getButtonClass('schedule')}
              onClick={onCalendarToggle}
            >
              {selectedDate && typeof selectedDate === 'object' 
                ? format(selectedDate, 'dd MMM yyyy')
                : (
                  <>
                    <Calendar size={16} className="mr-2" />
                    Schedule Day
                  </>
                )}
            </button>
            
            {isCalendarOpen && (
              <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                <DayPicker
                  mode="single"
                  selected={selectedDate instanceof Date ? selectedDate : undefined}
                  onSelect={(date) => onDateSelect(date)}
                  fromDate={new Date()}
                  modifiers={{
                    disabled: { before: new Date() }
                  }}
                  className="bg-white"
                />
              </div>
            )}
          </div>
        </div>

        {/* Time of day */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-semibold mb-4 text-lg">Time of day</h3>
          <div className="space-y-4">
            {['morning', 'afternoon', 'evening'].map((time) => (
              <div key={time} className="flex items-center space-x-3">
                <Checkbox 
                  id={time} 
                  className="border-2 border-gray-300" 
                />
                <label
                  htmlFor={time}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {time === 'morning' && 'Morning (8am - 12pm)'}
                  {time === 'afternoon' && 'Afternoon (12pm - 5pm)'}
                  {time === 'evening' && 'Evening (5pm - 9:30pm)'}
                </label>
              </div>
            ))}
          </div>

          <div className="relative flex py-6 items-center mt-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-500">or choose a specific time</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <Select defaultValue="flexible">
            <SelectTrigger className="w-full border-gray-300 hover:border-orange-500 focus:border-orange-500 shadow-sm">
              <SelectValue placeholder="I'm Flexible" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-lg">
              {['flexible', 'morning', 'afternoon', 'evening'].map((time) => (
                <SelectItem 
                  key={time} 
                  value={time} 
                  className="hover:bg-orange-50 data-[state=checked]:text-orange-500"
                >
                  {time === 'flexible' ? "I'm Flexible" : time.charAt(0).toUpperCase() + time.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-semibold mb-6 text-lg">Price</h3>
          <PriceSlider />
          <div className="text-sm text-center mt-6 text-gray-600">
            The average hourly rate is ₹450/hr
          </div>
        </div>

        {/* Type */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-semibold mb-4 text-lg">Type</h3>
          <div className="flex items-center space-x-3">
            <Checkbox id="elite" className="border-2 border-gray-300" />
            <label
              htmlFor="elite"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sahaay Premium
            </label>
          </div>
        </div>

        {/* Security Note */}
        <div className="border-t border-gray-200 pt-6 flex items-start gap-4">
          <div className="mt-1 text-orange-500">
            <Shield size={24} />
          </div>
          <div>
            <p className="text-sm">
              Always have peace of mind. All Sahaay Freelancers undergo Aadhaar verification and background checks.{" "}
              <a href="#" className="text-orange-500 hover:underline font-medium">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}