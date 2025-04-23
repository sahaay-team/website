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
  Filter,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardNavbar from "../components/DashboardNavbar";

export default function SellerBookings() {
  // For demo purposes, we'll use the first seller in the data
  const sellerId = Object.keys(sellersData)[0];
  const seller = sellersData[sellerId];

  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock data for bookings
  const bookings = {
    upcoming: [
      {
        id: "BK-1234",
        client: "Rahul Sharma",
        service: "Deep Cleaning",
        date: "Today",
        time: "2:00 PM - 5:00 PM",
        location: "Andheri West, Mumbai",
        status: "Confirmed",
        price: "₹1,200",
        clientImage: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "BK-1233",
        client: "Priya Patel",
        service: "Kitchen Cleaning",
        date: "Tomorrow",
        time: "10:00 AM - 12:00 PM",
        location: "Bandra, Mumbai",
        status: "Pending",
        price: "₹800",
        clientImage: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "BK-1235",
        client: "Vikram Mehta",
        service: "Office Sanitization",
        date: "23 May, 2023",
        time: "9:00 AM - 1:00 PM",
        location: "Powai, Mumbai",
        status: "Confirmed",
        price: "₹2,500",
        clientImage: "/placeholder.svg?height=40&width=40",
      },
    ],
    completed: [
      {
        id: "BK-1232",
        client: "Ananya Singh",
        service: "Bathroom Cleaning",
        date: "15 May, 2023",
        time: "4:00 PM - 6:00 PM",
        location: "Juhu, Mumbai",
        status: "Completed",
        price: "₹900",
        rating: 5,
        clientImage: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "BK-1231",
        client: "Rajesh Kumar",
        service: "Deep Cleaning",
        date: "10 May, 2023",
        time: "11:00 AM - 3:00 PM",
        location: "Malad, Mumbai",
        status: "Completed",
        price: "₹1,800",
        rating: 4,
        clientImage: "/placeholder.svg?height=40&width=40",
      },
    ],
    cancelled: [
      {
        id: "BK-1230",
        client: "Neha Gupta",
        service: "Window Cleaning",
        date: "5 May, 2023",
        time: "3:00 PM - 4:00 PM",
        location: "Goregaon, Mumbai",
        status: "Cancelled",
        price: "₹500",
        cancelReason: "Client requested cancellation",
        clientImage: "/placeholder.svg?height=40&width=40",
      },
    ],
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];

    for (let i = -3; i < 11; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Check if there's a booking on this date
      const hasBooking = bookings.upcoming.some((booking) => {
        if (booking.date === "Today" && i === 0) return true;
        if (booking.date === "Tomorrow" && i === 1) return true;
        return (
          booking.date.includes(date.getDate().toString()) &&
          booking.date.includes(
            [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ][date.getMonth()]
          )
        );
      });

      days.push({
        date,
        day: date.getDate(),
        weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
          date.getDay()
        ],
        isToday: i === 0,
        hasBooking,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

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
              className="flex items-center space-x-3 px-4 py-3 text-orange-500 bg-orange-50 rounded-lg"
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
        <main className="flex-1 p-6 pt-20 md:ml-64">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bookings</h1>
              <p className="text-gray-600">
                Manage your appointments and service schedule
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-300"
              >
                <Filter size={16} />
                Filter
              </Button>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Plus size={18} className="mr-2" />
                Add Availability
              </Button>
            </div>
          </div>

          {/* Calendar View */}
          <Card className="border-0 shadow-md mb-6 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Calendar</h3>
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <span className="text-gray-600 font-medium">May 2023</span>
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-x-auto">
              <div className="flex space-x-4 min-w-max">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-colors min-w-[80px] ${
                      selectedDate.getDate() === day.date.getDate()
                        ? "bg-orange-50 border border-orange-200"
                        : "hover:bg-gray-50"
                    } ${
                      day.hasBooking
                        ? "ring-2 ring-orange-500 ring-offset-2"
                        : ""
                    }`}
                    onClick={() => setSelectedDate(day.date)}
                  >
                    <span className="text-sm font-medium text-gray-500">
                      {day.weekday}
                    </span>
                    <span
                      className={`text-2xl font-bold ${
                        day.isToday ? "text-orange-500" : "text-gray-800"
                      }`}
                    >
                      {day.day}
                    </span>
                    {day.hasBooking && (
                      <div className="mt-1 w-2 h-2 rounded-full bg-orange-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Booking Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button
                className={`pb-4 px-1 font-medium ${
                  activeTab === "upcoming"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("upcoming")}
              >
                Upcoming
                <span className="ml-2 bg-orange-100 text-orange-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {bookings.upcoming.length}
                </span>
              </button>
              <button
                className={`pb-4 px-1 font-medium ${
                  activeTab === "completed"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("completed")}
              >
                Completed
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {bookings.completed.length}
                </span>
              </button>
              <button
                className={`pb-4 px-1 font-medium ${
                  activeTab === "cancelled"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("cancelled")}
              >
                Cancelled
                <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {bookings.cancelled.length}
                </span>
              </button>
            </div>
          </div>

          {/* Bookings List */}
          <div className="space-y-4">
            {bookings[activeTab].map((booking, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={booking.clientImage}
                        alt={booking.client}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800">
                        {booking.client}
                      </h4>
                      <p className="text-sm text-gray-500">{booking.service}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 md:gap-8">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Date & Time</p>
                      <div className="flex items-center">
                        <Calendar size={16} className="text-gray-400 mr-1" />
                        <span className="text-sm font-medium text-gray-700">
                          {booking.date}, {booking.time}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <div className="flex items-center">
                        <MapPin size={16} className="text-gray-400 mr-1" />
                        <span className="text-sm font-medium text-gray-700">
                          {booking.location}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-1">Amount</p>
                      <div className="flex items-center">
                        <DollarSign size={16} className="text-gray-400 mr-1" />
                        <span className="text-sm font-medium text-gray-700">
                          {booking.price}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-1">Status</p>
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
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {activeTab === "upcoming" && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-gray-600 border-gray-300"
                        >
                          Reschedule
                        </Button>
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          View Details
                        </Button>
                      </>
                    )}

                    {activeTab === "completed" && (
                      <div className="flex flex-col items-end">
                        <div className="flex mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className={
                                star <= booking.rating
                                  ? "fill-yellow-500 text-yellow-500"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-gray-600 border-gray-300"
                        >
                          View Invoice
                        </Button>
                      </div>
                    )}

                    {activeTab === "cancelled" && (
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Reason:</span>{" "}
                        {booking.cancelReason}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {bookings[activeTab].length === 0 && (
              <div className="text-center py-12">
                <Calendar className="mx-auto text-gray-300" size={48} />
                <h3 className="mt-4 text-lg font-medium text-gray-800">
                  No {activeTab} bookings
                </h3>
                <p className="text-gray-500">
                  You don't have any {activeTab} bookings at the moment.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
