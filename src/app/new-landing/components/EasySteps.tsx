"use client";

import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "Choose from our wide range of services and describe your requirements"
  },
  {
    number: "02",
    title: "Match with professionals",
    description: "We'll connect you with verified experts in your area"
  },
  {
    number: "03",
    title: "Get it done",
    description: "Your task gets completed with quality assurance and satisfaction"
  }
];

export default function EasySteps() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 20% of the section is visible
    triggerOnce: true // Only trigger once
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - 70% */}
          <div className="w-full lg:w-[70%] pr-8">
            <motion.h2
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Sahaay</span> is as<br />easy as 1, 2, 3
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-12"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="flex items-start gap-6"
                >
                  <span className="text-4xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - 30% */}
          <div className="w-full lg:w-[30%] mt-12 lg:mt-0">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, delay: 0.4 }
                }
              }}
              className="relative h-[500px]"
            >
              <Image
                src="/img/easy-steps-illustration.svg"
                alt="illustration/Image"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
