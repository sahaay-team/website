"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Array of customers with their details
const customers = [
  { type: "image", src: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-1.jpg" },
  { type: "image", src: "/img/proffesionals/img2.jpg" },
  { type: "image", src: "/img/proffesionals/img3.jpg" },
  { type: "image", src: "/img/proffesionals/img4.jpg" },
  { 
    type: "info", 
    name: "Priya Singh",
    role: "Cleaner",
    bgColor: "bg-orange-500"
  },
  { type: "image", src: "/img/proffesionals/img6.jpg" },
  { type: "image", src: "/img/proffesionals/img7.jpg" },
  { type: "image", src: "/img/proffesionals/img8.jpg" },
  { type: "image", src: "/img/proffesionals/img9.jpg" },
  { type: "image", src: "/img/proffesionals/img10.jpg" },
  { type: "image", src: "/img/proffesionals/img11.jpg" },
  { type: "image", src: "/img/proffesionals/img12.jpg" },
  { type: "image", src: "/img/proffesionals/img13.jpg" },
  { 
    type: "info", 
    name: "Rahul Sharma",
    role: "Pottery Artist",
    bgColor: "bg-blue-500"
  },
  { type: "image", src: "/img/proffesionals/img14.jpg" },
  { type: "image", src: "/img/proffesionals/img15.jpg" },
  { type: "image", src: "/img/proffesionals/img16.jpg" },
  { type: "image", src: "/img/proffesionals/img17.jpg" },
  { 
    type: "info", 
    name: "Ananya Patel",
    role: "Mehndi Artist",
    bgColor: "bg-gray-700"
  },
  { type: "image", src: "/img/proffesionals/img18.jpg" },
  { type: "image", src: "/img/proffesionals/img19.jpg" },
  { type: "image", src: "/img/proffesionals/img20.jpg" },
  { type: "image", src: "/img/proffesionals/img21.jpg" },
  { type: "image", src: "/img/proffesionals/img22.jpg" },
  { type: "image", src: "/img/proffesionals/img23.jpg" },
  { type: "image", src: "/img/proffesionals/img24.jpg" },
  { type: "image", src: "/img/proffesionals/img25.jpg" },
  { 
    type: "info", 
    name: "Vikram Malhotra",
    role: "Mural Artist",
    bgColor: "bg-green-400"
  },
  { type: "image", src: "/img/proffesionals/img26.jpg" },
  { type: "image", src: "/img/proffesionals/img27.jpg" },
  { type: "image", src: "/img/proffesionals/img28.jpg" },
  { 
    type: "info", 
    name: "Arjun Kapoor",
    role: "Photographer",
    bgColor: "bg-red-500"
  },
  { type: "image", src: "/img/proffesionals/img29.jpg" },
  { type: "image", src: "/img/proffesionals/img30.jpg" },
  { 
    type: "info", 
    name: "Neha Agarwal",
    role: "Textile Artisan",
    bgColor: "bg-gray-800"
  },
  { type: "image", src: "/img/proffesionals/img31.jpg" },
  { type: "image", src: "/img/proffesionals/img32.jpg" },
  { type: "image", src: "/img/proffesionals/img33.jpg" },
  { type: "image", src: "/img/proffesionals/img34.jpg" },
  { type: "image", src: "/img/proffesionals/img35.jpg" },
  { 
    type: "info", 
    name: "Rohan Desai",
    role: "Wood Carver",
    bgColor: "bg-indigo-500"
  },
  { type: "image", src: "/img/proffesionals/img36.jpg" },
  { type: "image", src: "/img/proffesionals/img37.jpg" },
  { type: "image", src: "/img/proffesionals/img38.jpg" }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function CustomerGrid() {
  // Calculate column count based on screen size
  const getColumnCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 11; // xl:grid-cols-11
      if (window.innerWidth >= 768) return 6;   // md:grid-cols-6
      return 4;                                 // grid-cols-4
    }
    return 11; // default to largest size
  };

  return (
    <section className="pt-16">
      {/* Heading and description */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-10 px-4"
      >
        <h2 className="text-6xl font-bold text-gray-800 mb-6">
          Your <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Time Matters.</span> 
          <br />
          That's Why We Show Up
        </h2>
        <p className="text-lg text-gray-600">
          We connect you with trusted freelancers and skilled workers. Easily schedule jobs, negotiate terms, and get quality service, all in one place.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-11"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {customers.map((customer, index) => {
          const colIndex = index % getColumnCount();
          return (
            <motion.div 
              key={index} 
              custom={colIndex}
              variants={{
                hidden: { 
                  opacity: 0,
                  x: -20
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: colIndex * 0.05 // Delay based on column position only
                  }
                }
              }}
              className="aspect-square"
            >
              <motion.div 
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {customer.type === "image" ? (
                  <Image
                    src={customer.src}
                    alt=""
                    width={100}
                    height={100}
                    className={`w-full h-full object-cover ${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}
                  />
                ) : (
                  <div className={`${customer.bgColor} p-3 sm:p-5 w-full h-full flex flex-col justify-center`}>
                    <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                      {customer.name}
                    </p>
                    <p className="mt-2 text-sm text-white truncate">{customer.role}</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}



