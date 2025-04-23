"use client";

import { useState } from "react";
import { sellersData } from "@/data/sellers";
import {
  User,
  Settings,
  BarChart3,
  MessageSquare,
  Calendar,
  FileText,
  Home,
  LogOut,
  Bell,
  Star,
  Briefcase,
  Users,
  Clock,
  DollarSign,
  Plus,
  Edit,
  Trash2,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardNavbar from "../components/DashboardNavbar";

export default function SellerServices() {
  // For demo purposes, we'll use the first seller in the data
  const sellerId = Object.keys(sellersData)[0];
  const seller = sellersData[sellerId];

  const [showAddServiceModal, setShowAddServiceModal] = useState(false);

  // Combine services from all sellers for a more comprehensive list
  const allServices = [];
  Object.values(sellersData).forEach((seller) => {
    seller.services.forEach((service) => {
      if (!allServices.some((s) => s.name === service.name)) {
        allServices.push(service);
      }
    });
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar seller={seller} />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen p-5">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-3">
              <Image
                src={seller.image || "/placeholder.svg?height=80&width=80"}
                alt={seller.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800">{seller.name}</h3>
            <p className="text-sm text-gray-500">{seller.title}</p>
          </div>

          <nav className="flex-1 space-y-1">
            <Link
              href="/sellers_dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <BarChart3 size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/sellers_dashboard/profile"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
            <Link
              href="/sellers_dashboard/bookings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Calendar size={20} />
              <span>Bookings</span>
            </Link>
            <Link
              href="/sellers_dashboard/services"
              className="flex items-center space-x-3 px-4 py-3 text-orange-500 bg-orange-50 rounded-lg"
            >
              <Briefcase size={20} />
              <span>Services</span>
            </Link>
            <Link
              href="/sellers_dashboard/messages"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <MessageSquare size={20} />
              <span>Messages</span>
            </Link>
            <Link
              href="/sellers_dashboard/earnings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <DollarSign size={20} />
              <span>Earnings</span>
            </Link>
            <Link
              href="/sellers_dashboard/settings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="pt-4 mt-4 border-t border-gray-200">
            <button className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 pt-20 md:ml-64">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">My Services</h1>
              <p className="text-gray-600">
                Manage your service offerings and pricing
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-64"
                />
              </div>

              <Button
                onClick={() => setShowAddServiceModal(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Plus size={18} className="mr-2" />
                Add New Service
              </Button>
            </div>
          </div>

          {/* Active Services */}
          <Card className="border-0 shadow-md mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Active Services
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seller.services.map((service, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 bg-gray-100 relative">
                      <Image
                        src="/placeholder.svg?height=160&width=320"
                        alt={service.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 flex space-x-2">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                          <Edit size={16} className="text-gray-600" />
                        </button>
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                          <Trash2 size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-medium text-gray-800 mb-1">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {service.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                        <span className="text-lg font-bold text-orange-500">
                          {seller.pricing[0].price.split("-")[0]}/hr
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Service Suggestions */}
          <Card className="border-0 shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Suggested Services to Add
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Based on your skills and popular services in your area
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allServices
                  .filter(
                    (service) =>
                      !seller.services.some((s) => s.name === service.name)
                  )
                  .slice(0, 3)
                  .map((service, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-50"
                    >
                      <div className="h-40 bg-gray-100 relative opacity-70">
                        <Image
                          src="/placeholder.svg?height=160&width=320"
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="p-3 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors">
                            <Plus size={24} className="text-white" />
                          </button>
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-medium text-gray-800 mb-1">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {service.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <Badge className="bg-blue-100 text-blue-800">
                            Suggested
                          </Badge>
                          <span className="text-sm text-gray-500">
                            High demand in your area
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Card>

          {/* Service Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="border-0 shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">
                  Most Booked Service
                </h3>
                <div className="p-2 rounded-full bg-blue-100">
                  <Star className="text-blue-500" size={20} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">
                {seller.services[0].name}
              </h4>
              <p className="text-sm text-gray-600">
                42 bookings in the last 30 days
              </p>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className="text-sm font-medium text-green-500">
                    98%
                  </span>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">
                  Highest Rated Service
                </h3>
                <div className="p-2 rounded-full bg-yellow-100">
                  <Star className="text-yellow-500" size={20} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">
                {seller.services[1].name}
              </h4>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0 (28 reviews)</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Client Return Rate
                  </span>
                  <span className="text-sm font-medium text-green-500">
                    76%
                  </span>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Service Growth</h3>
                <div className="p-2 rounded-full bg-green-100">
                  <TrendingUp className="text-green-500" size={20} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">+18%</h4>
              <p className="text-sm text-gray-600">Booking growth this month</p>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">New Clients</span>
                  <span className="text-sm font-medium text-green-500">
                    12 this month
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>

      {/* Add Service Modal */}
      {showAddServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Add New Service
                </h3>
                <button
                  onClick={() => setShowAddServiceModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="e.g. Deep Cleaning"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Describe your service in detail"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Cleaning</option>
                  <option>Maintenance</option>
                  <option>Repair</option>
                  <option>Installation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Base Price (₹)
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. 500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Unit
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Per Hour</option>
                    <option>Per Day</option>
                    <option>Per Job</option>
                    <option>Per Sq.ft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-orange-500 transition-colors cursor-pointer">
                  <Camera className="mx-auto text-gray-400" size={24} />
                  <p className="text-sm text-gray-500 mt-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG or JPEG (max. 2MB)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowAddServiceModal(false)}
              >
                Cancel
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Add Service
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
