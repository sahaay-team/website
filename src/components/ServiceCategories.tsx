"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { serviceCategories } from "@/data/categories";

type ServiceCategoryProps = {
  icon: React.ElementType;
  title: string;
  href: string;
  index: number;
};

const ServiceCategory = ({
  icon: Icon,
  title,
  href,
  index,
}: ServiceCategoryProps) => {
  return (
    <div className="group">
      <Link
        href={href}
        className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 
                 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-12 h-12 bg-[#5D9DF1]/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#FF5C39]/5 rounded-full transform translate-x-1/4 translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="mb-4 relative z-10 transform transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-8 w-8 text-[#FF5C39] group-hover:text-[#FF7D5F] transition-colors" />
        </div>
        <h3 className="text-sm text-center text-gray-800 group-hover:text-gray-900 transition-colors relative z-10">
          {title}
        </h3>
      </Link>
    </div>
  );
};

export default function ServiceCategories() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle background pattern */}
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

      <div className="container mx-auto px-4 relative z-20 max-w-[85rem]">
        <div className="relative mb-12">
          {/* Accent elements */}
          <div className="absolute -top-6 -left-6 -z-10 hidden md:block">
            <div className="bg-[#5D9DF1]/60 h-10 w-10 rounded-full"></div>
          </div>
          <div className="absolute top-10 right-10 -z-10 hidden md:block">
            <div className="bg-[#FFD166] h-8 w-8 rounded-full opacity-70"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 relative">
            Explore by
            <span className="text-[#FF5C39] relative ml-2">
              Sections
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD166]/30 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            Find the perfect service professional for all your home and
            lifestyle needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {serviceCategories.map((category, index) => (
            <ServiceCategory
              key={index}
              icon={category.icon}
              title={category.title}
              href={category.href}
              index={index}
            />
          ))}
        </div>

        {/* View all services button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-block bg-white hover:bg-gray-50 text-[#FF5C39] border border-[#FF5C39] text-lg font-medium px-8 py-3 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
