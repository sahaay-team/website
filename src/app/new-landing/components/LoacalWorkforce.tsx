"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type StatProps = {
  value: string;
  title: string;
  description: string;
};

const Stat = ({ value, title, description }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center w-full md:w-1/3 px-4 lg:px-8"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-7xl font-bold text-black tracking-tight">{value}</h3>
        <p className="mt-6 text-xl font-medium text-gray-900">{title}</p>
        <p className="text-base mt-1 text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default function LocalWorkforce() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <Image
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt="Female professional 1"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
              <Image
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                alt="Male professional"
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
              <Image
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                alt="Female professional 2"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl"
          >
            Empowering local talent and businesses{" "}
            <span className="relative">
              <span className="relative z-10">since 2025</span>
              <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 to-yellow-400"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10"
          >
            We're committed to supporting local professionals and small businesses
            in your community. Our platform connects skilled workers with the
            people who need them most.
          </motion.p>

          {/* Stats section with proper centering */}
          <div className="w-full max-w-5xl mx-auto mt-16">
            <div className="flex flex-col md:flex-row items-center justify-center space-x-24">
              <Stat
                value="50K+"
                title="Active Professionals"
                description="Skilled workers across India"
              />
              <Stat
                value="₹2.5Cr+"
                title="Monthly Earnings"
                description="Generated for our community"
              />
              <Stat
                value="92%"
                title="Booking Rate"
                description="Success rate for verified pros"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}