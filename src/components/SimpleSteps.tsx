"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Coffee } from "lucide-react";

type StepCardProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const StepCard = ({
  number,
  title,
  description,
  icon,
  color,
}: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div
        className={`bg-white rounded-xl border border-gray-200 shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}
      >
        <div
          className={`absolute -top-5 -right-5 w-10 h-10 ${color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}
        >
          {number}
        </div>
        <div
          className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${color} bg-opacity-10`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default function SimpleSteps() {
  const steps = [
    {
      number: 1,
      title: "Search",
      description:
        "Find the service you need from our wide selection of professional offerings.",
      icon: <Search className="h-8 w-8 text-[#FF5C39]" />,
      color: "bg-[#FF5C39]",
    },
    {
      number: 2,
      title: "Schedule",
      description:
        "Book an appointment at a time that works best for your busy schedule.",
      icon: <Calendar className="h-8 w-8 text-[#5D9DF1]" />,
      color: "bg-[#5D9DF1]",
    },
    {
      number: 3,
      title: "Relax!",
      description:
        "Sit back while our verified professionals take care of everything.",
      icon: <Coffee className="h-8 w-8 text-[#FFD166]" />,
      color: "bg-[#FFD166]",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Fun background */}
      <div className="absolute inset-0 bg-[#F8F9FC] z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#FF5C39]/20"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-[#5D9DF1]/20"></div>
          <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-[#FFD166]/30"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[85rem]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Help as Easy as
            <span className="text-[#FF5C39] relative mx-2">
              1, 2, 3
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We've simplified the process of finding and booking professional
            services. Just three simple steps and you're done!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              color={step.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
