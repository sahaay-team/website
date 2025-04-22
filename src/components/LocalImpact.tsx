"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, Shield } from "lucide-react";

type ImpactStatProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
};

const ImpactStat = ({ icon, title, value, description }: ImpactStatProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 text-[#FF5C39]">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <div className="text-3xl font-bold text-[#FF5C39] my-2">{value}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default function LocalImpact() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle background */}
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-6 -left-6 -z-10 hidden md:block">
              <div className="bg-[#5D9DF1]/60 h-10 w-10 rounded-full"></div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden border-2 border-white shadow-lg">
              <Image
                src="/images/local-impact.jpg"
                alt="Local service professionals"
                fill
                className="object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-md">
                <p className="text-sm font-medium text-gray-800">
                  Supporting local communities since 2025
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Text and stats */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Empowering
                <span className="text-[#FF5C39] relative mx-2">
                  local
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
                </span>
                workforce
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We're committed to supporting local professionals and small
                businesses in your community. Our platform connects skilled
                workers with the people who need them most.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <ImpactStat
                  icon={<MapPin className="h-8 w-8" />}
                  title="Cities Covered"
                  value="50+"
                  description="Across major Indian cities and growing"
                />
                <ImpactStat
                  icon={<Users className="h-8 w-8" />}
                  title="Local Professionals"
                  value="5,000+"
                  description="Skilled workers earning a living"
                />
                <ImpactStat
                  icon={<Shield className="h-8 w-8" />}
                  title="Trust Rating"
                  value="98%"
                  description="Customer satisfaction rate"
                />
              </div>

              <a
                href="/about-us"
                className="inline-block bg-white hover:bg-gray-50 text-[#FF5C39] border border-[#FF5C39] text-lg font-medium px-8 py-3 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300"
              >
                Learn About Our Impact
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
