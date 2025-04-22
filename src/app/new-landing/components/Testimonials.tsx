"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

type TestimonialProps = {
  quote: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  service: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote:
      "I was amazed by how quickly they responded. The plumber arrived within an hour and fixed my leaking pipe without any hassle.",
    name: "Priya Sharma",
    location: "Mumbai",
    image: "/testimonials/person1.jpg",
    rating: 5,
    service: "Plumbing",
  },
  {
    quote:
      "The electrician was professional, courteous and extremely knowledgeable. He explained everything before starting the work.",
    name: "Rajesh Kumar",
    location: "Delhi",
    image: "/testimonials/person2.jpg",
    rating: 4,
    service: "Electrical",
  },
  {
    quote:
      "I've used many home service apps, but this one stands out for its reliability. The professionals are always on time and well-trained.",
    name: "Anita Desai",
    location: "Bangalore",
    image: "/testimonials/person3.jpg",
    rating: 5,
    service: "Home Cleaning",
  },
  {
    quote:
      "The carpenter did an excellent job with my custom furniture. The quality of work exceeded my expectations.",
    name: "Vikram Singh",
    location: "Hyderabad",
    image: "/testimonials/person4.jpg",
    rating: 5,
    service: "Carpentry",
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-[#FFD166] fill-[#FFD166]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Don't Take Our
            <span className="text-[#FF5C39] relative mx-2">
              Word
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
            </span>
            For It
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear what our customers have to say about their experiences with our
            service professionals.
          </p>
        </motion.div>

        {/* Desktop testimonials */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="mb-4 text-[#FF5C39]">
                  <Quote className="h-8 w-8 opacity-50" />
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  {testimonial.quote}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                      <div className="mt-1">
                        <RatingStars rating={testimonial.rating} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile testimonial carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
            >
              <div className="mb-4 text-[#FF5C39]">
                <Quote className="h-8 w-8 opacity-50" />
              </div>
              <p className="text-gray-700 mb-4">
                {testimonials[activeIndex].quote}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonials[activeIndex].location}
                    </p>
                    <div className="mt-1">
                      <RatingStars rating={testimonials[activeIndex].rating} />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {testimonials[activeIndex].service}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
