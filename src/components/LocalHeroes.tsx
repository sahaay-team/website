"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type LocalHeroProps = {
  name: string;
  profession: string;
  experience: string;
  location: string;
  image: string;
  bgColor: string;
};

const localHeroes: LocalHeroProps[] = [
  {
    name: "Ramesh Patel",
    profession: "Electrician",
    experience: "15+ years",
    location: "Mumbai",
    image: "/heroes/electrician.jpg",
    bgColor: "bg-[#FF5C39]",
  },
  {
    name: "Lakshmi Devi",
    profession: "Plumber",
    experience: "8 years",
    location: "Bangalore",
    image: "/heroes/plumber.jpg",
    bgColor: "bg-[#5D9DF1]",
  },
  {
    name: "Arjun Singh",
    profession: "Carpenter",
    experience: "20+ years",
    location: "Delhi",
    image: "/heroes/carpenter.jpg",
    bgColor: "bg-[#FFD166]",
  },
  {
    name: "Priya Sharma",
    profession: "Interior Designer",
    experience: "12 years",
    location: "Hyderabad",
    image: "/heroes/designer.jpg",
    bgColor: "bg-emerald-500",
  },
  {
    name: "Rajiv Mehta",
    profession: "AC Technician",
    experience: "10+ years",
    location: "Chennai",
    image: "/heroes/technician.jpg",
    bgColor: "bg-amber-500",
  },
  {
    name: "Anita Desai",
    profession: "House Cleaner",
    experience: "7 years",
    location: "Pune",
    image: "/heroes/cleaner.jpg",
    bgColor: "bg-slate-500",
  },
];

export default function LocalHeroes() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Set up the infinite scrolling effect
  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled the width of one item
      if (scrollPosition >= 320) {
        scrollPosition = 0;
        if (scrollContainer.firstElementChild) {
          scrollContainer.appendChild(scrollContainer.firstElementChild);
        }
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-[#F8F9FC] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E5E5E5 1px, transparent 1px), linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.3,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-full">
        <div className="relative mb-12 text-center">
          {/* Accent elements */}
          <div className="absolute -top-6 -left-6 -z-10 hidden md:block">
            <div className="bg-[#5D9DF1]/60 h-10 w-10 rounded-full"></div>
          </div>
          <div className="absolute top-10 right-10 -z-10 hidden md:block">
            <div className="bg-[#FFD166] h-8 w-8 rounded-full opacity-70"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Empowering
              <span className="text-[#FF5C39] relative mx-2">
                local workforce
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
              </span>
              since 2025
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Meet the local heroes who are transforming communities through
              their skills and dedication.
            </p>
          </motion.div>
        </div>

        {/* Infinite carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            {/* Duplicate the heroes array to ensure continuous scrolling */}
            {[...localHeroes, ...localHeroes].map((hero, index) => (
              <div
                key={index}
                className={`inline-flex flex-col relative w-[300px] h-[350px] ${hero.bgColor} mx-2 rounded-lg overflow-hidden flex-shrink-0`}
              >
                <Image
                  src={hero.image || "/placeholder.svg"}
                  alt={hero.name}
                  width={300}
                  height={300}
                  className="w-full h-[250px] object-cover object-center"
                />
                <div className="p-4 text-white">
                  <h3 className="text-2xl font-bold">{hero.name}</h3>
                  <p className="text-sm whitespace-normal">{hero.profession}</p>
                  <div className="flex items-center text-sm mt-1">
                    <span>{hero.location}</span>
                    <span className="mx-2">•</span>
                    <span>{hero.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
              {/* Left content */}
              <div className="p-8 md:p-10 md:w-1/2 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#5D9DF1]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FF5C39]/10 rounded-full transform translate-x-1/4 translate-y-1/4"></div>

                <div className="flex items-center mb-6 relative z-10">
                  <div className="bg-gradient-to-r from-[#FFD166] to-[#FF5C39] p-4 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">
                    Join our community of
                    <span className="text-[#FF5C39] relative ml-2">
                      professionals
                      <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
                    </span>
                  </h3>

                  <p className="text-gray-700 mb-8 text-lg text-left">
                    Are you a skilled professional looking to grow your
                    business? Join our platform and connect with customers in
                    your area.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <a
                      href="/join"
                      className="inline-flex items-center bg-[#FF5C39] text-white px-8 py-3 rounded-lg hover:bg-[#FF7D5F] transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      Become a Service Provider
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>

                    <a
                      href="/learn-more"
                      className="inline-flex items-center bg-white text-[#5D9DF1] border border-[#5D9DF1] px-8 py-3 rounded-lg hover:bg-[#5D9DF1]/10 transition-all duration-300 font-medium"
                    >
                      Learn More
                    </a>
                  </div>

                  <div className="mt-8text-left">
                    <div className="mt-10 mb-4 flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#5D9DF1]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Verified Identity</span>
                    </div>
                    <div className="mb-4 flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#5D9DF1]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Flexible Schedule</span>
                    </div>
                    <div className="mb-4 flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#5D9DF1]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Secure Payments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right image */}
              <div className="md:w-1/2 relative">
                <Image
                  src="/images/service-provider.jpg"
                  alt="Service Provider"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C39]/20 to-transparent mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#FF5C39]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-black font-medium">
                      Join 5000+ professionals on our platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
