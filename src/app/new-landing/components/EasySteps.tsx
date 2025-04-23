// TODO: Main idea of this page was to have a full background image for this section. 
// The image will have people oin the far right side and rest of hte left side would be plain and thats where the text would be.
// Currently iamge is not

"use client";

import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EasyStepsBGImg from "../../../../public/img/easysteps_img.jpg";

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
    title: "Get it done!",
    description: "Your task gets completed with quality assurance and satisfaction"
  }
];

export default function EasySteps() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
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
    <section id="easy-steps" className="relative h-screen flex items-center" ref={ref}>
      <div className="absolute inset-0 z-0">
        <Image
          src={EasyStepsBGImg}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col h-full justify-center">
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
            className="text-left mb-12"
          >
            <span className="text-white text-7xl font-bold block mb-2">Sahaay</span>
            <span className="text-white text-5xl font-bold block">is as easy as 1, 2, 3</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-16 w-full max-w-4xl"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="flex items-start gap-8"
              >
                <span className="text-7xl font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-white border-b-2 border-white inline-block pb-2">
                    {step.title}
                  </h3>
                  <p className="text-white text-xl leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}









