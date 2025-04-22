"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ExpertCardProps = {
  name: string;
  role: string;
  image: string;
  skills: string[];
};

const ExpertCard = ({ name, role, image, skills }: ExpertCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col h-full min-w-[280px] md:min-w-[320px] mx-3 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative mb-4 overflow-hidden rounded-lg h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-[#FF5C39] font-medium mb-3">{role}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#F8F9FC] text-gray-700 px-3 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function ExpertShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const experts = [
    {
      name: "Rajesh Kumar",
      role: "Plumbing Expert",
      image: "/images/experts/expert1.jpg",
      skills: ["Pipe Fitting", "Leak Repair", "Bathroom Installation"],
    },
    {
      name: "Priya Sharma",
      role: "Electrician",
      image: "/images/experts/expert2.jpg",
      skills: ["Wiring", "Circuit Repair", "Lighting Installation"],
    },
    {
      name: "Amit Patel",
      role: "Carpenter",
      image: "/images/experts/expert3.jpg",
      skills: ["Custom Furniture", "Woodworking", "Cabinet Installation"],
    },
    {
      name: "Meera Joshi",
      role: "Interior Designer",
      image: "/images/experts/expert4.jpg",
      skills: ["Space Planning", "Color Consultation", "Decor Selection"],
    },
    {
      name: "Vikram Singh",
      role: "Painter",
      image: "/images/experts/expert5.jpg",
      skills: ["Wall Painting", "Texture Work", "Exterior Painting"],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = 340; // Approximate card width + margin

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Playful background with subtle patterns */}
      <div className="absolute inset-0 bg-[#FFF8E7] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#FF5C39 2px, transparent 2px), radial-gradient(#5D9DF1 2px, transparent 2px)",
            backgroundSize: "40px 40px, 30px 30px",
            backgroundPosition: "0 0, 20px 20px",
            opacity: 0.1,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[85rem]">
        <div className="relative mb-12">
          {/* Accent elements */}
          <div className="absolute -top-6 -left-6 -z-10 hidden md:block">
            <div className="bg-[#5D9DF1]/60 h-10 w-10 rounded-full"></div>
          </div>
          <div className="absolute top-10 right-10 -z-10 hidden md:block">
            <div className="bg-[#FFD166] h-8 w-8 rounded-full opacity-70"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              When it's done by
              <span className="text-[#FF5C39] relative ml-2">
                experts
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
              </span>
              , it shows
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
              Our professionals bring years of experience and dedication to
              every job. Meet some of our top-rated service providers.
            </p>
          </motion.div>
        </div>

        {/* Carousel navigation */}
        <div className="flex justify-end mb-6 gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {experts.map((expert, index) => (
              <ExpertCard
                key={index}
                name={expert.name}
                role={expert.role}
                image={expert.image}
                skills={expert.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
