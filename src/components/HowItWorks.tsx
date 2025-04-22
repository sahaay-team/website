"use client";

import React, { useEffect, useRef } from "react";
import { Search, Calendar, UserCheck, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

const Step = ({ number, title, description, icon, index }: StepProps) => {
  const stepRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stepRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2 * index,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={stepRef} className="flex flex-col items-center text-center">
      <div className="relative mb-6 overflow-hidden">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2 hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold shadow-sm hover:scale-110 transition-transform duration-200">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Connector component to show the flow between steps
const Connector = ({ index }: { index: number }) => {
  const connectorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(connectorRef.current, {
        scaleX: 0,
        duration: 1.5,
        delay: 0.3 * index + 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: connectorRef.current,
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div className="hidden md:block w-full h-0.5 bg-gray-200 relative">
      <div
        ref={connectorRef}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      ></div>
    </div>
  );
};

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the section background
      gsap.from(sectionRef.current, {
        backgroundColor: "#ffffff",
        borderRadius: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate the title and description
      gsap.from(titleRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
        },
      });

      // Button animation
      gsap.from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      });

      // Create a hover animation for the button
      const button = buttonRef.current;
      if (button) {
        button.addEventListener("mouseenter", () => {
          gsap.to(button.querySelector("svg"), {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button.querySelector("svg"), {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: 1,
      title: "Select a Service",
      description:
        "Browse through our wide range of services and choose what you need.",
      icon: <Search className="h-8 w-8" />,
    },
    {
      number: 2,
      title: "Book an Appointment",
      description: "Choose a convenient date and time slot that works for you.",
      icon: <Calendar className="h-8 w-8" />,
    },
    {
      number: 3,
      title: "Get Expert Service",
      description:
        "Our aadhar verified professional will arrive at your location on time.",
      icon: <UserCheck className="h-8 w-8" />,
    },
    {
      number: 4,
      title: "Pay Securely",
      description:
        "Rate the service and make a secure payment only when satisfied.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 mt-12 bg-[#FFF3F1] max-w-[95rem] mx-auto rounded-2xl transform-gpu"
    >
      <div className="container mx-auto py-4 px-10">
        <div className="mb-14 text-left">
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl text-gray-900 mb-4"
          >
            How It Works
          </h2>
          <p ref={descRef} className="text-gray-600 max-w-2xl text-lg">
            Getting help is easy with Sahaay. Follow these simple steps to
            connect with skilled professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="md:col-span-1">
                <Step {...step} index={index} />
              </div>
              {index < steps.length - 1 && <Connector index={index} />}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            ref={buttonRef}
            href="/how-it-works"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
