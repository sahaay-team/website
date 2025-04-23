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
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardNavbar from "./components/DashboardNavbar";

export default function SellerDashboard() {
  // For demo purposes, we'll use the first seller in the data
  const sellerId = Object.keys(sellersData)[0];
  const seller = sellersData[sellerId];

  // Mock data for dashboard metrics
  const metrics = [
    {
      title: "Total Bookings",
      value: "124",
      icon: <Calendar className="text-blue-500" />,
      change: "+12%",
    },
    {
      title: "Completed Jobs",
      value: "98",
      icon: <Briefcase className="text-green-500" />,
      change: "+8%",
    },
    {
      title: "Active Inquiries",
      value: "17",
      icon: <MessageSquare className="text-orange-500" />,
      change: "+5%",
    },
    {
      title: "Avg. Rating",
      value: "4.8",
      icon: <Star className="text-yellow-500" />,
      change: "+0.2",
    },
  ];

  // Mock data for recent bookings
  const recentBookings = [
    {
      id: "BK-1234",
      client: "Rahul Sharma",
      service: "Deep Cleaning",
      date: "Today, 2:00 PM",
      status: "Confirmed",
    },
    {
      id: "BK-1233",
      client: "Priya Patel",
      service: "Kitchen Cleaning",
      date: "Tomorrow, 10:00 AM",
      status: "Pending",
    },
    {
      id: "BK-1232",
      client: "Vikram Mehta",
      service: "Office Sanitization",
      date: "23 May, 9:00 AM",
      status: "Completed",
    },
    {
      id: "BK-1231",
      client: "Ananya Singh",
      service: "Bathroom Cleaning",
      date: "25 May, 4:00 PM",
      status: "Cancelled",
    },
  ];

  // Mock data for earnings
  const earnings = {
    thisMonth: "₹24,500",
    lastMonth: "₹22,800",
    pending: "₹8,200",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar seller={seller} />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen p-5">
          <div className="flex flex-col items-center mb-8 mt-14">
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
              className="flex items-center space-x-3 px-4 py-3 text-orange-500 bg-orange-50 rounded-lg"
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
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
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
        <main className="flex-1 p-6 mt-14">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {seller.name}! Here's what's happening with your
              services.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 border-0 shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {metric.title}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">
                      {metric.value}
                    </h3>
                    <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">
                      {metric.change} from last month
                    </span>
                  </div>
                  <div className="p-3 rounded-full bg-gray-100">
                    {metric.icon}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Bookings */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Recent Bookings
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3 text-left">Booking ID</th>
                        <th className="px-6 py-3 text-left">Client</th>
                        <th className="px-6 py-3 text-left">Service</th>
                        <th className="px-6 py-3 text-left">Date & Time</th>
                        <th className="px-6 py-3 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {booking.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {booking.client}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {booking.service}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {booking.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge
                              className={`
                              ${
                                booking.status === "Confirmed"
                                  ? "bg-blue-100 text-blue-800"
                                  : ""
                              }
                              ${
                                booking.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : ""
                              }
                              ${
                                booking.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : ""
                              }
                              ${
                                booking.status === "Cancelled"
                                  ? "bg-red-100 text-red-800"
                                  : ""
                              }
                            `}
                            >
                              {booking.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-gray-200 bg-gray-50 text-right">
                  <Link
                    href="/sellers_dashboard/bookings"
                    className="text-sm font-medium text-orange-500 hover:text-orange-600"
                  >
                    View all bookings
                  </Link>
                </div>
              </Card>
            </div>

            {/* Earnings Summary */}
            <div>
              <Card className="border-0 shadow-md h-full">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Earnings Summary
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">This Month</p>
                    <div className="flex items-center">
                      <h4 className="text-2xl font-bold text-gray-800">
                        {earnings.thisMonth}
                      </h4>
                      <span className="ml-2 text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full">
                        +7.4%
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Last Month</p>
                    <h4 className="text-xl font-semibold text-gray-700">
                      {earnings.lastMonth}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Pending Payments
                    </p>
                    <h4 className="text-xl font-semibold text-gray-700">
                      {earnings.pending}
                    </h4>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <Link href="/sellers_dashboard/earnings">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        View Earnings Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <Calendar className="text-blue-500" size={20} />
                  </div>
                  <h4 className="font-medium text-gray-800">
                    Add Availability
                  </h4>
                </div>
              </Card>

              <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <FileText className="text-green-500" size={20} />
                  </div>
                  <h4 className="font-medium text-gray-800">Create Invoice</h4>
                </div>
              </Card>

              <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <Briefcase className="text-purple-500" size={20} />
                  </div>
                  <h4 className="font-medium text-gray-800">Add Service</h4>
                </div>
              </Card>

              <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <Users className="text-orange-500" size={20} />
                  </div>
                  <h4 className="font-medium text-gray-800">View Clients</h4>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
