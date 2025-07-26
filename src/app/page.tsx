"use client";

import { Search, MapPin, ArrowRight } from "lucide-react";
import Navbar from "./new-landing/components/Navbar";
import Categories from "./new-landing/components/Categories";
import Image from "next/image";
import BgImage from "../../public/img/hero-bg.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import EasySteps from "@/app/new-landing/components/EasySteps";
import LocalWorkforce from "@/app/new-landing/components/LoacalWorkforce";
import Testimonials from "@/app/new-landing/components/Testimonials";
import Footer from "@/app/new-landing/components/Footer";
import CustomerGrid from './new-landing/components/CustomerGrid';

export default function NewLanding() {
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
    <>
      <main className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1)",
            transformOrigin: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.5)",
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What service do you need?"
                className="w-full py-3 outline-none text-gray-600"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 px-4 border-l border-gray-200">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600">Amaravati</span>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
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
      <CustomerGrid />

      {/* Testimonials Section */}
      <Testimonials />



      {/* Footer Section */}
      <Footer />
    </>
  );
}