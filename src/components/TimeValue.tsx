"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Zap, Shield } from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 p-3 bg-[#FF5C39]/10 rounded-lg text-[#FF5C39]">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default function TimeValue() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full clip-path-diagonal"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[85rem]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Your
                <span className="text-[#FF5C39] relative mx-2">
                  Time
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
                </span>
                Matters. That's Why We Show Up.
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Connect instantly with trusted offline freelancers who respect
                your schedule and deliver quality service when you need it most.
              </p>

              <div className="space-y-6 mb-8">
                <Feature
                  icon={<Clock className="h-6 w-6" />}
                  title="On-time professionals"
                  description="Our service providers arrive within the scheduled time window, guaranteed."
                />
                <Feature
                  icon={<Zap className="h-6 w-6" />}
                  title="Quick response times"
                  description="Most service requests are confirmed within 30 minutes."
                />
                <Feature
                  icon={<Shield className="h-6 w-6" />}
                  title="Verified and trusted"
                  description="Every professional is background-checked and skill-verified."
                />
              </div>

              <a
                href="/book"
                className="inline-block bg-[#FF5C39] hover:bg-[#FF7D5F] text-white text-lg font-medium px-8 py-3 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                Book a Service Now
              </a>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 -z-10 hidden md:block">
              <div className="bg-[#FFD166] h-10 w-10 rounded-full opacity-70"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden border-2 border-white shadow-lg h-[400px]"
            >
              <Image
                src="/images/time-value.jpg"
                alt="Professional arriving on time"
                fill
                className="object-cover"
              />

              {/* Time indicator overlay */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-md flex items-center">
                <Clock className="h-5 w-5 text-[#FF5C39] mr-2" />
                <p className="text-sm font-medium text-gray-800">
                  Average response time:{" "}
                  <span className="font-bold">28 minutes</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
