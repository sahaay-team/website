import React from "react";
import Image from "next/image";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  service: string;
};

const TestimonialCard = ({ quote, name, role, service }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4 text-primary">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <div className="text-sm text-gray-600">
            <span>{role}</span> •{" "}
            <span className="text-primary">{service}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The plumber arrived on time and fixed our leaking pipe in less than an hour. Very professional and affordable!",
      name: "Rajesh Kumar",
      role: "Homeowner",
      service: "Plumbing",
    },
    {
      quote:
        "I was impressed by how quickly the electrician diagnosed and fixed the wiring issue. Great service at a fair price.",
      name: "Priya Sharma",
      role: "Business Owner",
      service: "Electrical",
    },
    {
      quote:
        "The carpenter did an amazing job with our custom shelving. The quality of work exceeded our expectations.",
      name: "Amit Patel",
      role: "Apartment Resident",
      service: "Carpentry",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people across India are
            saying about our service providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              service={testimonial.service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
