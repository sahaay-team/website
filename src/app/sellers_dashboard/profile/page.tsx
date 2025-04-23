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
  MapPin,
  Edit,
  Camera,
  Save,
  CheckCircle,
  Award,
  ExternalLink,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardNavbar from "../components/DashboardNavbar";

export default function SellerProfile() {
  // For demo purposes, we'll use the first seller in the data
  const sellerId = Object.keys(sellersData)[0];
  const seller = sellersData[sellerId];

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar seller={seller} />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen p-5 shadow-sm">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 group">
              <Image
                src={seller.image || "/placeholder.svg?height=96&width=96"}
                alt={seller.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {seller.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{seller.title}</p>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
              Online
            </Badge>
          </div>

          <nav className="flex-1 space-y-2">
            <Link
              href="/sellers_dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
            >
              <BarChart3 size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/sellers_dashboard/profile"
              className="flex items-center space-x-3 px-4 py-3 text-orange-500 bg-orange-50 rounded-lg font-medium"
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
            <Link
              href="/sellers_dashboard/bookings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
            >
              <Calendar size={20} />
              <span>Bookings</span>
            </Link>
            <Link
              href="/sellers_dashboard/services"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
            >
              <Briefcase size={20} />
              <span>Services</span>
            </Link>
            <Link
              href="/sellers_dashboard/messages"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
            >
              <MessageSquare size={20} />
              <span>Messages</span>
            </Link>
            <Link
              href="/sellers_dashboard/earnings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
            >
              <DollarSign size={20} />
              <span>Earnings</span>
            </Link>
            <Link
              href="/sellers_dashboard/settings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="pt-4 mt-4 border-t border-gray-200">
            <button className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-500 rounded-lg w-full transition-colors">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 mt-14">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Profile Header */}
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              {/* Cover Image */}
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600 relative">
                <Button
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
                  size="sm"
                >
                  <Camera size={16} className="mr-2" /> Change Cover
                </Button>
              </div>

              {/* Profile Info */}
              <div className="bg-white p-6 pb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="relative -mt-20 mb-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Image
                          src={
                            seller.image ||
                            "/placeholder.svg?height=128&width=128"
                          }
                          alt={seller.name}
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600 transition-colors">
                        <Camera size={16} />
                      </button>
                    </div>
                    <Badge className="bg-green-500 text-white hover:bg-green-600 mb-3 px-3 py-1">
                      Available for Work
                    </Badge>
                  </div>

                  {/* Profile Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-800">
                          {seller.name}
                        </h1>
                        <h2 className="text-xl text-orange-500 font-medium">
                          {seller.title}
                        </h2>
                      </div>
                      <Button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white">
                        <Edit size={16} className="mr-2" /> Edit Profile
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-2 text-orange-500" />
                        <span>{seller.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={18} className="mr-2 text-orange-500" />
                        <span>{seller.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Star className="h-5 w-5 mr-2 fill-orange-500 text-orange-500" />
                        <span className="text-lg font-medium">
                          {seller.rating}{" "}
                          <span className="text-gray-500 font-normal">
                            ({seller.reviews} reviews)
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users size={18} className="mr-2 text-orange-500" />
                        <span>
                          {seller.completedJobs || "120+"} jobs completed
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {seller.badges?.map((badge: string, idx: number) => (
                        <Badge
                          key={idx}
                          className="bg-orange-50 text-orange-600 border border-orange-100 hover:bg-orange-100"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      About Me
                    </h3>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-orange-500 border-orange-500 hover:bg-orange-50"
                      >
                        <Edit size={16} className="mr-2" /> Edit
                      </Button>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {seller.about}
                  </p>
                </Card>

                {/* Services Offered */}
                <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Services Offered
                    </h3>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-orange-500 border-orange-500 hover:bg-orange-50"
                      >
                        <Edit size={16} className="mr-2" /> Edit
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {seller.services?.map((service: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="bg-green-100 p-2 rounded-full">
                          <CheckCircle className="text-green-500" size={18} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {service.description ||
                              "Professional service with attention to detail"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Sample Work */}
                <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Sample Work
                    </h3>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-orange-500 border-orange-500 hover:bg-orange-50"
                      >
                        <Edit size={16} className="mr-2" /> Edit
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {seller.sampleWork?.map((work: any, idx: number) => (
                      <div
                        key={idx}
                        className="group rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="relative">
                          <Image
                            src={work.image || "/placeholder.svg"}
                            alt={work.title}
                            width={400}
                            height={225}
                            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                            <div className="p-4 w-full">
                              <Button
                                size="sm"
                                className="w-full bg-white/80 text-gray-800 hover:bg-white backdrop-blur-sm"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="font-medium text-gray-800 mb-1">
                            {work.title}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {work.date || "2023"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Pricing */}
                <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Pricing
                    </h3>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-orange-500 border-orange-500 hover:bg-orange-50"
                      >
                        <Edit size={16} className="mr-2" /> Edit
                      </Button>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="text-gray-700">Hourly Rate</div>
                      <div className="text-xl font-bold text-orange-600">
                        {seller.pricing?.hourly}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="text-gray-700">Day Rate</div>
                      <div className="text-xl font-bold text-orange-600">
                        {seller.pricing?.day}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="text-gray-700">Project Based</div>
                      <div className="text-xl font-bold text-orange-600">
                        {seller.pricing?.project}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Skills */}
                <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Skills
                    </h3>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-orange-500 border-orange-500 hover:bg-orange-50"
                      >
                        <Edit size={16} className="mr-2" /> Edit
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {seller.skills?.map((skill: string, idx: number) => (
                      <Badge
                        key={idx}
                        className="bg-orange-100 text-orange-700 border border-orange-200 hover:bg-orange-200 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Languages */}
                <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Languages
                    </h3>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-orange-500 border-orange-500 hover:bg-orange-50"
                      >
                        <Edit size={16} className="mr-2" /> Edit
                      </Button>
                    )}
                  </div>
                  <div className="space-y-3">
                    {seller.languages?.map((lang: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-700 font-medium">
                          {lang.name}
                        </span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className={
                                star <= lang.level
                                  ? "fill-orange-500 text-orange-500"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Certifications */}
                <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Certifications
                    </h3>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-orange-500 border-orange-500 hover:bg-orange-50"
                      >
                        <Edit size={16} className="mr-2" /> Edit
                      </Button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {seller.certifications?.map((cert: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
                      >
                        <div className="bg-orange-100 p-2 rounded-full">
                          <Award className="text-orange-500" size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {cert.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {cert.issuer}, {cert.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
