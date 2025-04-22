"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/freelancers?type=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Subtle background pattern */}


      <div className="container mx-auto px-4 relative z-20 max-w-[85rem]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Text and search */}
          <div className="relative">
            {/* Accent elements */}
            <div className="absolute -top-6 -left-6 md:-left-10 -z-10 hidden md:block">
              {/* <div className="bg-[#5D9DF1]/60 h-12 w-12 rounded-full"></div> */}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your chores,
              <br />
              <span className="text-[#FF5C39] relative">
                our pros
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              From plumbers to painters, find reliable service professionals for
              all your home needs.
            </p>

            {/* Search box */}
            <div className="relative max-w-xl mb-8">
              <div className="flex items-center rounded-lg overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search for any service..."
                  className="w-full px-6 py-4 outline-none text-gray-700 text-lg"
                />
                <button
                  onClick={handleSearch}
                  className="bg-[#FF5C39] text-white px-6 py-4 hover:bg-[#FF7D5F] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* "Book a Call" button */}
              <div className="mt-8 flex justify-center md:justify-start">
                <a
                  href="/book"
                  className="inline-block bg-[#FF5C39] hover:bg-[#FF7D5F] text-white text-lg font-medium px-8 py-3 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
                >
                  Book a Service
                </a>
              </div>
            </div>

            {/* Popular service tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="#"
                className="bg-white hover:bg-gray-50 transition-colors text-gray-800 px-4 py-2 rounded-full text-sm border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                AC Repair
              </a>
              <a
                href="#"
                className="bg-white hover:bg-gray-50 transition-colors text-gray-800 px-4 py-2 rounded-full text-sm border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Plumbing
              </a>
              <a
                href="/freelancers?type=Cleaning%20and%20Pest%20control"
                className="bg-white hover:bg-gray-50 transition-colors text-gray-800 px-4 py-2 rounded-full text-sm border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Cleaning
              </a>
              <a
                href="#"
                className="bg-white hover:bg-gray-50 transition-colors text-gray-800 px-4 py-2 rounded-full text-sm border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Interior Design
              </a>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="relative hidden md:block">
            {/* Small accent elements */}
            <div className="absolute top-0 right-0 z-10">
              <div className="bg-[#FFD166] h-16 w-16 rounded-full opacity-80"></div>
            </div>
            <div className="absolute bottom-12 right-12 z-10">
              <div className="bg-[#5D9DF1]/40 h-10 w-10 rounded-full"></div>
            </div>

            {/* Illustration container */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 h-[400px] flex items-center justify-center relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-20 h-20 bg-[#5D9DF1]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FF5C39]/10 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#FFD166]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="text-center p-8 relative z-10">
                <p className="text-xl font-semibold mb-4 text-gray-800">
                  Professional Services
                </p>
                <p className="text-gray-600">
                  Vetted professionals ready to help with your home needs
                </p>

                {/* Add illustration or image here */}
                <div className="mt-8 flex justify-center">
                  <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <p className="text-gray-400">Service illustration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FF5C39]">
                4.8
              </h3>
              <p className="text-gray-700 font-medium">Service Rating</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FF5C39]">
                12M+
              </h3>
              <p className="text-gray-700 font-medium">Customers</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FF5C39]">
                5K+
              </h3>
              <p className="text-gray-700 font-medium">Service Pros</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FF5C39]">
                24/7
              </h3>
              <p className="text-gray-700 font-medium">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
