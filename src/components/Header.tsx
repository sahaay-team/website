"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Search, MapPin } from "lucide-react";

export default function Header() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [locationPlaceholder, setLocationPlaceholder] =
    useState("123 Main St, Pune");

  // Array of service types to cycle through
  const serviceTypes = [
    "electrician",
    "cook",
    "plumber",
    "maid",
    "Car mechanic",
    "Water Purifier service",
  ];

  // Fetch location based on IP address
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.city && data.region) {
          setLocationPlaceholder(`${data.city}, ${data.region}`);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        // Keep default placeholder if there's an error
      }
    };

    fetchLocation();
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentWord = serviceTypes[currentIndex];

    // Handle the typing and deleting animation
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        // If we've completed typing the word
        if (displayText.length === currentWord.length) {
          // Pause at the end of typing before starting to delete
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          // Normal typing speed
          setTypingSpeed(50);
        }
      } else {
        // Deleting mode
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        // If we've deleted the entire word
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % serviceTypes.length);
          // Slight pause before typing the next word
          setTypingSpeed(0);
        } else {
          // Faster deletion speed
          setTypingSpeed(30);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, serviceTypes, typingSpeed]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm ">
      <div className="container mx-auto px-4 py-4 max-w-[85rem]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-kamerik text-primary">Sahaay</h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/categories"
              className="text-gray-700 hover:text-primary transition-colors font-kamerik font-normal"
            >
              Categories
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-primary transition-colors font-kamerik font-normal"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors font-kamerik font-normal"
            >
              About Us
            </Link>
          </nav>

          {/* Search Bars - Now inline with navbar */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-4">
            {/* Location Search with IP-based placeholder */}
            <div className="relative flex-1">
              <MapPin
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder={locationPlaceholder}
                className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-0 text-gray-900"
              />
            </div>

            {/* Service Search with animated placeholder */}
            <div className="relative flex-1">
              <Search
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder={`Search ${displayText}`}
                className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-gray-900"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden sm:inline-block text-gray-700 hover:text-primary transition-colors font-kamerik font-normal"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors font-kamerik font-normal"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Search Bars */}
        <div className="md:hidden flex flex-col gap-2 mt-4">
          <div className="relative">
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder={locationPlaceholder}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
            />
          </div>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder={`Search ${displayText}`}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
