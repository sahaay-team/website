"use client";

import { Search, MapPin, ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Image from "next/image";
import BgImage from "../../../public/img/hero-bg.png";
import { useState } from "react";
import EasySteps from "@/app/new-landing/components/EasySteps";
import TrustedProfessionals from "@/app/new-landing/components/TrustedProfessionals";
import LocalWorkforce from "@/app/new-landing/components/LoacalWorkforce";
import Testimonials from "@/app/new-landing/components/Testimonials";

export default function NewLanding() {
  return (
    <>
      <main className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1)", // Add this line to zoom out (1.2 = 120% scale)
            transformOrigin: "center", // Ensures scaling happens from the center
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.5)", // Darkens the image slightly for better text visibility
          }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Find Local Service Professionals
            </h1>
            <p className="text-xl text-white/90">
              Connect with verified experts for all your service needs
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-4xl flex gap-2 p-2 bg-white rounded-xl shadow-lg">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-2 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full py-3 outline-none text-gray-600"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 px-4 border-l border-gray-200">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600">Amravati</span>
            </div>

            {/* Search Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Search
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Categories Section */}
      <Categories />

      {/* Easy Steps Section */}
      <EasySteps />

      {/* Local Workforce Section */}
      <LocalWorkforce />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Trusted Professionals Section */}
      <TrustedProfessionals />
    </>
  );
}
