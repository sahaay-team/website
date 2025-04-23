"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  service: string;
  location: string;
  image: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "The mural artist transformed my living room wall into a stunning piece of art! He perfectly understood my vision of incorporating traditional Indian motifs with modern design. The attention to detail was exceptional.",
    name: "Shweta Agarwal",
    role: "Homeowner",
    service: "Mural Painting",
    location: "Mumbai",
    image: "https://media.istockphoto.com/id/2040161210/photo/photo-of-young-girl-wearing-t-shirt-isolated-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=2jgu82RaGLzttcA8czrN_5lCL6hinpWXlZtDcHXF2w4=",
  },
  {
    quote: "Had major electrical issues in my 3BHK apartment. The electrician diagnosed and fixed everything in just one day. Very professional, used quality materials, and the pricing was transparent. Highly recommended!",
    name: "Rahul Sharma",
    role: "Software Engineer",
    service: "Electrical Work",
    location: "Bangalore",
    image: "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=612x612&w=0&k=20&c=CncNUTbw6mzGsbojks2Vt0kV85N_pQaI3zaSkBQJFTc=",
  },
  {
    quote: "Found an excellent house painter through this platform. The team completed my 2BHK flat painting in just 3 days. They used Asian Paints as requested and the finish is flawless. The cleanup was thorough too!",
    name: "Priya Patel",
    role: "Bank Manager",
    service: "House Painting",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1653379673398-ef3ce96555c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
  },
  {
    quote: "The AC technician was extremely knowledgeable. He serviced both my ACs, fixed the cooling issue, and even gave useful maintenance tips. The best part was the 3-month service guarantee!",
    name: "Amit Khanna",
    role: "Business Owner",
    service: "AC Repair",
    location: "Delhi",
    image: "https://media.istockphoto.com/id/1261733611/photo/portrait-of-happy-middle-eastern-man-with-beard.jpg?s=612x612&w=0&k=20&c=3gYfAZ0V1RWHPCuTkIcZNe7175fyTNKjjouLE5hv4lo=",
  },
  {
    quote: "Got custom modular kitchen cabinets made. The carpenter's craftsmanship was outstanding! He suggested space-saving designs and even helped choose the right materials within my budget.",
    name: "Sunita Rao",
    role: "Teacher",
    service: "Carpentry",
    location: "Hyderabad",
    image: "https://media.istockphoto.com/id/2157976320/photo/portrait-of-young-indian-woman-cheerful-smiling-looking-away-in-neon-light-against-blue.jpg?s=612x612&w=0&k=20&c=-5Gwec8XdhjFBZp7Xv2WJVsRCSlE_sIFCA5v5hFbnKg=",
  },
  {
    quote: "The plumber fixed our bathroom leakage issue that other professionals couldn't solve for months. He was punctual, professional, and even helped prevent future plumbing issues with some basic tips.",
    name: "Rajesh Kumar",
    role: "IT Professional",
    service: "Plumbing",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1636700312896-6ed5091ae696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluZGlhbiUyMG1hbiUyMHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pb-10 bg-gray-50 sm:py-16 lg:pb-24 lg:pt-40">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div 
          className="lg:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600">
            Real experiences from customers across India
          </p>

          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <blockquote>
              <p className="text-2xl leading-relaxed text-black md:leading-relaxed md:text-3xl">
                "{testimonials[activeIndex].quote}"
              </p>
            </blockquote>
            <div className="flex items-center mt-16">
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-black">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                </p>
              </div>
              <span className="ml-4 px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full">
                {testimonials[activeIndex].service}
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center mt-12 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center w-24 h-24 rounded-full ring-2 cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'ring-orange-600' : 'ring-transparent hover:ring-orange-300'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
