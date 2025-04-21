"use client"

import Image from "next/image"
import {
  MapPin,
  MessageCircle,
  Star,
  Download,
  Share2,
  Clock,
  Award,
  Briefcase,
  PenToolIcon as Tool,
  Wrench,
  Hammer,
  Zap,
  Home,
  Building2,
  Factory,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useParams } from "next/navigation"
import { sellersData } from "@/data/sellers"

export default function SellerProfile() {
  const { id } = useParams()
  const sellerData = sellersData[id as keyof typeof sellersData]
  
  if (!sellerData) {
    return <div className="min-h-screen flex items-center justify-center">
      Seller not found
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8 lg:px-16 print:py-0 print:px-0">
      <div className="max-w-5xl mx-auto">
        {/* Download/Share Buttons */}
        <div className="flex justify-end mb-4 print:hidden">
          <Button variant="outline" className="flex items-center gap-2 mr-2" onClick={() => window.print()}>
            <Download size={16} />
            Export PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 size={16} />
            Share
          </Button>
        </div>

        {/* Profile Header Card */}
        <Card className="p-6 md:p-8 mb-6 border-0 shadow-md">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Profile Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={sellerData.image || "/placeholder.svg"}
                alt={sellerData.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{sellerData.name}</h1>
                  <h2 className="text-xl text-primary font-medium mb-2">{sellerData.title}</h2>

                  <div className="flex items-center justify-center md:justify-start text-gray-600 mb-2">
                    <MapPin size={18} className="mr-1" />
                    <span>{sellerData.location}</span>
                  </div>

                  <div className="flex items-center justify-center md:justify-start text-gray-600 mb-4">
                    <Clock size={18} className="mr-1" />
                    <span>{sellerData.experience}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end">
                  <Badge className="bg-green-500 hover:bg-green-600 mb-3 px-3 py-1">Available for Work</Badge>

                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                    <MessageCircle size={18} />
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-1">
            {/* Bio Section */}
            <Card className="p-6 mb-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">About Me</h3>
              <p className="text-gray-600">{sellerData.about}</p>
            </Card>

            {/* Skills Section */}
            <Card className="p-6 mb-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {sellerData.skills?.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Languages Section */}
            <Card className="p-6 mb-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">Languages</h3>
              <div className="space-y-2">
                {sellerData.languages?.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center">
                    <span className="text-gray-700">{lang.name}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={star <= lang.level ? "fill-primary text-primary" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certifications Section */}
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                Certifications & Licenses
              </h3>
              <div className="space-y-3">
                {sellerData.certifications?.map((cert) => (
                  <div key={cert.title} className="flex items-start">
                    <Award className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-gray-800">{cert.title}</p>
                      <p className="text-sm text-gray-600">{cert.issuer}, {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column (Wider) */}
          <div className="md:col-span-2">
            {/* Services Section */}
            <Card className="p-6 mb-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Services Offered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sellerData.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-start p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      {service.icon || <Tool className="text-primary" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pricing Section */}
            <Card className="p-6 mb-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Pricing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sellerData.pricing.map((price) => (
                  <div key={price.title} className="p-4 rounded-lg border border-gray-200 bg-white">
                    <h4 className="font-medium text-gray-800 mb-2">{price.title}</h4>
                    <p className="text-2xl font-bold text-primary">{price.price}</p>
                    <p className="text-sm text-gray-600 mt-1">{price.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Sample Work Section */}
            <Card className="p-6 mb-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Sample Work</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sellerData.sampleWork.map((project) => (
                  <div
                    key={project.title}
                    className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video bg-gray-100 relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-gray-800">{project.title}</h4>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{project.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Industries Section */}
            <Card className="p-6 mb-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Industries Served
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {sellerData.industries?.map((industry) => (
                  <div
                    key={industry.name}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <span className="text-primary">{industry.icon || <Building2 size={24} />}</span>
                    </div>
                    <span className="text-sm text-gray-700 text-center">{industry.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Testimonial */}
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Client Feedback
              </h3>
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 relative">
                <div className="text-primary text-lg italic">
                  "{sellerData.testimonial.text}"
                </div>
                <div className="mt-3 text-right">
                  <p className="font-medium text-gray-800">{sellerData.testimonial.author}</p>
                  <p className="text-sm text-gray-600">{sellerData.testimonial.location}</p>
                </div>
                <div className="absolute top-4 left-4 text-primary/20 text-6xl leading-none">"</div>
              </div>
            </Card>
          </div>
        </div>

        
      </div>
    </div>
  )
}