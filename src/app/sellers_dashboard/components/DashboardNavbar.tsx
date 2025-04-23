"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, Menu, X } from "lucide-react";

interface DashboardNavbarProps {
  seller: any;
}

export default function DashboardNavbar({ seller }: DashboardNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <div className="flex-shrink-0 md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
            <Link href="/" className="flex items-center ml-4 md:ml-0">
              <span className="text-2xl font-bold text-orange-500">Sahaay</span>
            </Link>
          </div>

          {/* Navigation Links - Hidden on Mobile */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                href="/sellers_dashboard"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-500"
              >
                Dashboard
              </Link>
              <Link
                href="/sellers_dashboard/bookings"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-500"
              >
                Bookings
              </Link>
              <Link
                href="/sellers_dashboard/messages"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-500"
              >
                Messages
              </Link>
              <Link
                href="/sellers_dashboard/earnings"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-500"
              >
                Earnings
              </Link>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="text-gray-500 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-gray-700">
                    {seller.name}
                  </span>
                  <span className="text-xs text-gray-500">{seller.title}</span>
                </div>
                <div className="h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src={seller.image || "/placeholder.svg?height=32&width=32"}
                    alt={seller.name}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <span className="text-2xl font-bold text-orange-500">Sahaay</span>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/sellers_dashboard"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-orange-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/sellers_dashboard/bookings"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-orange-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bookings
            </Link>
            <Link
              href="/sellers_dashboard/messages"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-orange-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Messages
            </Link>
            <Link
              href="/sellers_dashboard/earnings"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-orange-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Earnings
            </Link>
            <Link
              href="/sellers_dashboard/profile"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-orange-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/sellers_dashboard/settings"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-orange-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
