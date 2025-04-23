"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, MapPin, Users } from "lucide-react";

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  index: number;
};

const StatCard = ({
  icon,
  title,
  value,
  description,
  index,
}: StatCardProps) => {
  return (
    <motion.div
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
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="mb-4 text-[#FF5C39]">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <div className="text-3xl font-bold text-[#FF5C39] my-2">{value}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default function LocalWorkforce() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Local Professionals",
      value: "5,000+",
      description: "Skilled workers earning a living through our platform",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Years of Impact",
      value: "Since 2025",
      description: "Supporting communities and small businesses",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Cities Covered",
      value: "50+",
      description: "Across major Indian cities and growing",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[85rem]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text and stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Empowering
                <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent relative mx-2">
                  local workforce
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
                </span>
                since 2025
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We're committed to supporting local professionals and small
                businesses in your community. Our platform connects skilled
                workers with the people who need them most.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    icon={stat.icon}
                    title={stat.title}
                    value={stat.value}
                    description={stat.description}
                    index={index}
                  />
                ))}
                
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="/about-us"
                  className="inline-block bg-white hover:bg-gray-50 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent border border-[#FF5C39] text-lg font-medium px-8 py-3 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300"
                >
                  Learn About Our Impact
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <div className="relative order-first md:order-last">
            <div className="absolute -top-6 -right-6 -z-10 hidden md:block"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden border-2 border-white shadow-lg"
            >
              <Image
                src="/images/local-heroes.jpg"
                alt="Local service professionals"
                fill
                className="object-cover"
              />

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-md">
                <p className="text-sm font-medium text-gray-800">
                  Local heroes in action
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Building trust & community impact
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
