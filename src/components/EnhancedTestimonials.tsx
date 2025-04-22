"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  service: string;
  image?: string;
  rating: number;
};

const testimonials: TestimonialProps[] = [
  {
    quote:
      "The plumber arrived on time and fixed our leaking pipe in less than an hour. Very professional and affordable! I've already recommended Sahaay to my neighbors.",
    name: "Rajesh Kumar",
    role: "Homeowner",
    service: "Plumbing",
    image: "/testimonials/person1.jpg",
    rating: 5,
  },
  {
    quote:
      "I was impressed by how quickly the electrician diagnosed and fixed the wiring issue. Great service at a fair price. The booking process was seamless.",
    name: "Priya Sharma",
    role: "Business Owner",
    service: "Electrical",
    image: "/testimonials/person2.jpg",
    rating: 5,
  },
  {
    quote:
      "The carpenter did an amazing job with our custom shelving. The quality of work exceeded our expectations. He was punctual and professional.",
    name: "Amit Patel",
    role: "Apartment Resident",
    service: "Carpentry",
    image: "/testimonials/person3.jpg",
    rating: 4,
  },
  {
    quote:
      "Finding a reliable AC repair service used to be a nightmare until I discovered Sahaay. The technician was certified, courteous, and fixed our unit in one visit.",
    name: "Meera Joshi",
    role: "Office Manager",
    service: "AC Repair",
    image: "/testimonials/person4.jpg",
    rating: 5,
  },
  {
    quote:
      "The painter was meticulous and patient. He helped us choose the right colors and finished the job ahead of schedule. Our home looks brand new now!",
    name: "Vikram Singh",
    role: "Homeowner",
    service: "Painting",
    image: "/testimonials/person5.jpg",
    rating: 5,
  },
];

const TestimonialCard = ({
  quote,
  name,
  role,
  service,
  image,
  rating,
}: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full min-h-[260px] flex flex-col min-w-[300px] md:min-w-[400px] mx-3 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-[#5D9DF1]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FF5C39]/10 rounded-full transform translate-x-1/4 translate-y-1/4"></div>

      <div className="flex items-center mb-6 relative z-10">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-white mr-4 shadow-md overflow-hidden border-2 border-gray-100">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#FF5C39] to-[#FF7D5F] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
          <div className="text-sm text-gray-600 flex items-center flex-wrap">
            <span>{role}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-[#FF5C39] font-medium">{service}</span>
          </div>
        </div>
      </div>

      <div className="flex-grow relative z-10">
        <div className="relative mb-4">
          <svg
            className="absolute -top-4 -left-2 h-8 w-8 text-[#FFD166]/50"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-6.42c-.326.082-.659.14-1 .17V22c0 1.65-1.35 3-3 3H10c-1.65 0-3-1.35-3-3V12c0-1.65 1.35-3 3-3h6.58c-.03-.34-.09-.674-.17-1H10z M23 3c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" />
          </svg>
          <p className="text-gray-700 text-lg leading-relaxed italic pl-6">
            {quote}
          </p>
        </div>
      </div>

      <div className="flex items-center mt-4 text-[#FFD166] relative z-10">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              i < rating ? "text-[#FFD166]" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default function EnhancedTestimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && carouselRef.current) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

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

      <div className="container mx-auto px-4 relative z-10 max-w-[85rem]">
        <div className="relative mb-12 text-center md:text-left">
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
              When it's done by
              <span className="text-[#FF5C39] relative ml-2">
                experts
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
              </span>
              , it shows
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto md:mx-0 text-lg">
              Real stories from real customers who experienced the difference of
              working with verified professionals.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  if (carouselRef.current) {
                    const scrollAmount = index * (300 + 24); // card width + margin
                    carouselRef.current.scrollLeft = scrollAmount;
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#FF5C39] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/testimonials"
              className="inline-flex items-center bg-white text-[#FF5C39] border border-[#FF5C39] px-6 py-3 rounded-lg hover:bg-[#FF5C39] hover:text-white transition-colors duration-300 font-medium hover:shadow-md"
            >
              View All Testimonials
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
          </motion.div>
        </div>
      </div>

      {/* Add custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
