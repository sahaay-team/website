"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  service: string;
  image?: string;
};

const TestimonialCard = ({
  quote,
  name,
  role,
  service,
  image,
}: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full min-h-[260px] flex flex-col min-w-[300px] md:min-w-[600px] mx-2 mb-6">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white mr-4 shadow-md">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
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
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
          <div className="text-sm text-gray-600 flex items-center">
            <span>{role}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-primary font-medium">{service}</span>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="relative mb-4">
          <svg
            className="absolute -top-4 -left-2 h-8 w-8 text-primary/20"
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

      <div className="flex items-center mt-4 text-primary">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      quote:
        "The plumber arrived on time and fixed our leaking pipe in less than an hour. Very professional and that too affordable! I've already recommended Sahaay to my neighbors.",
      name: "Rajesh Kumar",
      role: "Homeowner",
      service: "Plumbing",
    },
    {
      quote:
        "I was impressed by how quickly the electrician diagnosed and fixed the wiring issue. Great service at a fair price. The booking process was seamless and the technician was very knowledgeable.",
      name: "Priya Sharma",
      role: "Business Owner",
      service: "Electrical",
    },
    {
      quote:
        "The carpenter did an amazing job with our custom shelving. The quality of work exceeded our expectations. He was punctual, professional, and cleaned up everything before leaving.",
      name: "Amit Patel",
      role: "Apartment Resident",
      service: "Carpentry",
    },
    {
      quote:
        "Finding a reliable AC repair service used to be a nightmare until I discovered Sahaay. The technician was certified, courteous, and fixed our unit in one visit. Excellent service!",
      name: "Meera Joshi",
      role: "Office Manager",
      service: "AC Repair",
    },
    {
      quote:
        "The painter was meticulous and patient. He helped us choose the right colors and finished the job ahead of schedule. Our home looks brand new now!",
      name: "Vikram Singh",
      role: "Homeowner",
      service: "Painting",
    },
  ];

  // Double the testimonials array to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isHovered) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position += speed;

      // Reset position when we've scrolled the width of the original set
      const firstSetWidth = carousel.scrollWidth / 2;
      if (position >= firstSetWidth) {
        position = 0;
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft = position;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what people across India are
            saying about our service providers.
          </p>
        </motion.div>

        {/* Continuous Horizontal Carousel */}
        <div className="relative overflow-hidden mb-2">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden items-stretch"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                service={testimonial.service}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="/testimonials"
            className="inline-flex items-center bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
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
    </section>
  );
}
