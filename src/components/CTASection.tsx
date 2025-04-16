import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started with reliable service professionals?
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Join thousands of satisfied customers across India who trust
              Sahaay for their blue-collar service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="bg-white text-[#FD8447] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Sign Up Now
              </Link>
              <Link
                href="/services"
                className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              For Service Providers
            </h3>
            <p className="text-gray-600 mb-6">
              Are you a skilled professional? Join our platform to connect with
              customers and grow your business.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Access to thousands of customers</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Flexible working hours</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Secure and timely payments</span>
              </li>
            </ul>
            <Link
              href="/providers/register"
              className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              Join as a Provider
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
