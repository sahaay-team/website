"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Home Services", href: "/services/home" },
        { name: "Professional Services", href: "/services/professional" },
        { name: "Business Services", href: "/services/business" },
        { name: "Health & Wellness", href: "/services/health" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety", href: "/safety" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/"
                className="text-3xl font-bold mb-4 inline-block text-gray-900"
              >
                Sahaay
              </Link>
              <p className="text-gray-600 mt-4 mb-6 max-w-md">
                Connecting you with trusted local service professionals. Find
                the help you need, when you need it.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-[#FF5C39] hover:text-white text-gray-600 p-2 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: columnIndex * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#FF5C39] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 pt-8 mt-8"
        >
          <div className="flex flex-wrap justify-between items-center gap-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-5 w-5 text-[#FF5C39] mr-2" />
                <a
                  href="mailto:contact@sahaay.com"
                  className="text-gray-600 hover:text-[#FF5C39] transition-colors"
                >
                  contact@sahaay.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-5 w-5 text-[#FF5C39] mr-2" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 hover:text-[#FF5C39] transition-colors"
                >
                  +91 98765 43210
                </a>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-5 w-5 text-[#FF5C39] mr-2" />
                <span className="text-gray-600">Bangalore, India</span>
              </motion.div>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sahaay. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
