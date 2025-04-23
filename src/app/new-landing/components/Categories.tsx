// TODO: Current animations are fine. But can be better.  

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

const ServiceCategory = ({ icon: Icon, title, href, index }: ServiceCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: index * 0.05,
          duration: 0.4 
        }
      }}
      viewport={{ once: true }}
      className="aspect-square"
    >
      <Link
        href={href}
        className="flex flex-col items-center justify-center h-full p-4 bg-white rounded-xl border border-gray-100 
                   hover:shadow-sm transition-all group"
      >
        <motion.div 
          className="mb-3"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="h-8 w-8 text-gray-700 group-hover:text-gray-900 transition-colors" />
        </motion.div>
        <h3 className="text-sm text-center text-gray-700 group-hover:text-gray-900 line-clamp-2 transition-colors">
          {title}
        </h3>
      </Link>
    </motion.div>
  );
};

export default function ServiceCategories() {
  return (
    <section className="py-12 mt-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-8 text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-14 text-3xl md:text-5xl text-gray-900">
            Explore by Sections
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
      </div>
      {/* Spacer div */}
      <div className="h-16"></div>
    </section>
  );
}
