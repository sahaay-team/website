"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import {
  Award,
  Building2,
  Clock,
  Download,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Star,
  PenTool,
  ChevronRight,
  Calendar,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { sellersData } from "@/data/sellers"
import Header from "@/components/Header"

export default function SellerProfile() {
  const { id } = useParams()
  const sellerData = sellersData[id as keyof typeof sellersData]

  if (!sellerData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Seller Not Found</h2>
          <p className="text-gray-600 mb-4">The seller profile you're looking for doesn't exist or has been removed.</p>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Return to Sellers</Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 h-64 md:h-72">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-end pt-6 gap-2 print:hidden">
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 transition-all duration-300"
              onClick={() => window.print()}
            >
              <Download size={16} />
              <span className="hidden sm:inline">Export</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 transition-all duration-300"
            >
              <Share2 size={16} />
              <span className="hidden sm:inline">Share</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 transition-all duration-300"
            >
              <Heart size={16} />
              <span className="hidden sm:inline">Save</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
              {/* Profile Header */}
              <div className="p-6 flex flex-col items-center text-center border-b">
                <div className="relative mb-4">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                    <AvatarImage src={sellerData.image || "/placeholder.svg"} alt={sellerData.name} />
                    <AvatarFallback className="text-2xl font-bold bg-orange-50 text-orange-600">
                      {sellerData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                    Available
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900">{sellerData.name}</h1>
                <h2 className="text-lg font-medium text-orange-500 mb-2">{sellerData.title}</h2>

                <div className="flex items-center justify-center text-gray-600 mb-1">
                  <MapPin size={16} className="mr-1.5" />
                  <span className="text-sm">{sellerData.location}</span>
                </div>

                <div className="flex items-center justify-center text-gray-600 mb-4">
                  <Clock size={16} className="mr-1.5" />
                  <span className="text-sm">{sellerData.experience}</span>
                </div>

                <div className="flex gap-2 w-full">
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600 transition-all duration-300">
                    <MessageCircle size={16} className="mr-1.5" />
                    Message
                  </Button>
                  
                </div>
              </div>

              {/* Languages */}
              <div className="p-6 border-b">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Languages</h3>
                <div className="space-y-3">
                  {sellerData.languages?.map((language) => (
                    <div key={language.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 font-medium">{language.name}</span>
                        <span className="text-sm text-gray-500">{language.level}/5</span>
                      </div>
                      <Progress
                        value={language.level * 20}
                        className="h-1.5 bg-gray-100"
                        indicatorClassName="bg-orange-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="p-6 border-b">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-1.5">
                  {sellerData.skills?.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-orange-50 hover:bg-orange-100 text-orange-600 border-orange-100 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Certifications</h3>
                <div className="space-y-4">
                  {sellerData.certifications?.map((cert) => (
                    <div key={cert.title} className="flex items-start group">
                      <div className="mt-0.5 mr-3 p-1.5 rounded-full bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-100">
                        <Award size={16} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                          {cert.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card className="border-0 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="inline-block w-6 h-0.5 bg-orange-500 mr-2"></span>
                  About Me
                </h3>
                <p className="text-gray-700 leading-relaxed">{sellerData.about}</p>
              </div>
            </Card>

            {/* Tabs Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <Tabs defaultValue="services" className="w-full">
                <TabsList className="w-full bg-orange-50/50 border-0 rounded-lg p-1 mb-6">
                  <TabsTrigger
                    value="services"
                    className="flex-1 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 transition-all duration-300"
                  >
                    Services
                  </TabsTrigger>
                  <TabsTrigger
                    value="portfolio"
                    className="flex-1 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 transition-all duration-300"
                  >
                    Portfolio
                  </TabsTrigger>
                  <TabsTrigger
                    value="pricing"
                    className="flex-1 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 transition-all duration-300"
                  >
                    Pricing
                  </TabsTrigger>
                  <TabsTrigger
                    value="industries"
                    className="flex-1 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 transition-all duration-300"
                  >
                    Industries
                  </TabsTrigger>
                </TabsList>

                <div className="bg-gray-50/50 rounded-xl p-6">
                  {/* Services Tab */}
                  <TabsContent value="services" className="mt-0 animate-in fade-in-50 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sellerData.services.map((service, index) => (
                        <div
                          key={`service-${index}-${service.name}`}
                          className="flex p-4 rounded-xl bg-white border border-gray-200/75 shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-200 group"
                        >
                          <div className="mr-4 p-3 rounded-lg bg-orange-50 text-orange-500 h-fit transition-all duration-300 group-hover:bg-orange-100">
                            <PenTool size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                              {service.name}
                            </h4>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Portfolio Tab */}
                  <TabsContent value="portfolio" className="mt-0 animate-in fade-in-50 duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                      {sellerData.sampleWork.map((project) => (
                        <div
                          key={project.title}
                          className="group overflow-hidden rounded-xl border border-gray-200/75 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-200"
                        >
                          <div className="aspect-video relative overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-3 text-white w-full">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-white text-white hover:bg-white/20 transition-colors duration-300"
                                >
                                  <ExternalLink size={14} className="mr-1" />
                                  View Project
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                              {project.title}
                            </h4>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
                                {project.tag}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 rounded-full text-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300"
                              >
                                <ChevronRight size={16} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Pricing Tab */}
                  <TabsContent value="pricing" className="mt-0 animate-in fade-in-50 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {sellerData.pricing.map((price, index) => (
                        <div
                          key={price.title}
                          className={`rounded-xl overflow-hidden border bg-white transition-all duration-300 hover:shadow-lg ${
                            index === 1 
                              ? "border-orange-200 shadow-md relative" 
                              : "border-gray-200/75 shadow-sm"
                          }`}
                        >
                          {index === 1 && (
                            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center text-xs py-1">
                              MOST POPULAR
                            </div>
                          )}
                          <div className={`p-6 ${index === 1 ? "pt-8" : ""}`}>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{price.title}</h4>
                            <div className="flex items-baseline mb-4">
                              <span className="text-3xl font-bold text-orange-500">{price.price}</span>
                              {price.price.includes("/") && (
                                <span className="text-gray-500 text-sm ml-1">
                                  {price.price.includes("hour") ? "per hour" : "per project"}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-6">{price.description}</p>
                            <Button
                              className={`w-full transition-all duration-300 ${
                                index === 1 ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-800 hover:bg-gray-900"
                              }`}
                            >
                              Select Plan
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Industries Tab */}
                  <TabsContent value="industries" className="mt-0 animate-in fade-in-50 duration-300">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {sellerData.industries?.map((industry) => (
                        <div
                          key={industry.name}
                          className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-gray-200/75 shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-200 text-center group"
                        >
                          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-orange-100">
                            <Building2 className="text-orange-500" size={24} />
                          </div>
                          <span className="text-gray-800 font-medium group-hover:text-orange-600 transition-colors duration-300">
                            {industry.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            {/* Testimonial Section */}
            <Card className="border-0 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="inline-block w-6 h-0.5 bg-orange-500 mr-2"></span>
                  Client Testimonials
                </h3>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100 relative">
                  
                  <div className="relative z-10">
                    <p className="text-gray-800 text-lg italic leading-relaxed">"{sellerData.testimonial.text}"</p>
                    <div className="mt-4 flex items-center">
                      {/* <Avatar className="h-10 w-10 mr-3 border-2 border-white">
                        <AvatarFallback className="bg-orange-100 text-orange-600">
                          {sellerData.testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar> */}
                      <div>
                        <p className="font-semibold text-gray-900">{sellerData.testimonial.author}</p>
                        <p className="text-sm text-gray-600">{sellerData.testimonial.location}</p>
                      </div>
                      <div className="ml-auto flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact CTA */}
            <Card className="border-0 shadow-md overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white transition-all duration-300 hover:shadow-lg">
              <div className="p-6 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Ready to work with {sellerData.name.split(" ")[0]}?</h3>
                  <p className="text-white/80">Get in touch today to discuss your project requirements</p>
                </div>
                <div className="flex gap-3">
                  <Button 
                  variant="outline"
                  className="border-white text-orange-600 hover:bg-white/20 transition-colors duration-300">
                    <Mail size={16} className="mr-1.5" />
                    Contact Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-orange-600 hover:bg-white/20 transition-colors duration-300"
                  >
                    <Calendar size={16} className="mr-1.5" />
                    Schedule 
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}




