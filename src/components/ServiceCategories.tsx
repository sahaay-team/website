import React from "react";
import Link from "next/link";
import { serviceCategories } from "@/data/categories";

type ServiceCategoryProps = {
  icon: React.ElementType;
  title: string;
  href: string;
};

// refer to data/categories.ts for icon and title

const ServiceCategory = ({ icon: Icon, title, href }: ServiceCategoryProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all group"
    >
      <div className="mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-sm text-center text-gray-800">{title}</h3>
    </Link>
  );
};

export default function ServiceCategories() {
  return (
    <section className="py-12 mt-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-left">
          <h2 className="mb-14 text-3xl md:text-5xl text-gray-900">
            Explore by Sections
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {serviceCategories.map((category, index) => (
            <ServiceCategory
              key={index}
              icon={category.icon}
              title={category.title}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
