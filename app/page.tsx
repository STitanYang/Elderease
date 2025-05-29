'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Clock, HeartHandshake, ShieldCheck, Star, Users } from "lucide-react";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth' // Optional: for smooth scrolling
  });
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="px-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-700 mb-6">
              Professional Home Care for Your Elderly
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We provide compassionate and reliable elderly care services in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={scrollToBottom} // Added onClick handler
              >
                Contact Us {/* Or change text to "Scroll to Bottom" if more appropriate */}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Why Choose Elderease?
            </h2>
            <p className="text-gray-600">
              We're committed to providing the highest quality of care with trained professionals and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-delay-1 border-green-100 bg-white">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-green-700">Trained Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our caregivers are certified, extensively trained, and passionate about providing exceptional care.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-delay-2 border-green-100 bg-white">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <HeartHandshake className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-green-700">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We develop customized care plans tailored to the unique needs and preferences of each client.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-delay-3 border-green-100 bg-white">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-green-700">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our dedicated team is available around the clock to ensure your elderly receive care whenever needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              We offer a wide range of home care services to meet the diverse needs of our elderly clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Care",
                description: "Assistance with daily activities like bathing, dressing, and grooming.",
                icon: Users,
              },
              {
                title: "Medication Management",
                description: "Ensuring medications are taken as prescribed and on schedule.",
                icon: BadgeCheck,
              },
              {
                title: "Companionship",
                description: "Meaningful conversation, activities, and emotional support.",
                icon: HeartHandshake,
              },
            ].map((service, i) => (
              <div key={i} className="service-card border rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-green-600 font-medium hover:underline flex items-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              What Families Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Hear from families who have experienced our care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The caregivers from GreenCare have been a blessing for our family. They treat my mother with dignity and compassion.",
                name: "Anita Wijaya",
                role: "Daughter",
              },
              {
                quote: "I was impressed by how quickly the team understood my father's needs. The personalized care has made all the difference.",
                name: "Budi Santoso",
                role: "Son",
              },
              {
                quote: "The peace of mind that comes from knowing my aunt is in good hands is priceless. Thank you GreenCare team!",
                name: "Diana Putri",
                role: "Niece",
              },
            ].map((testimonial, i) => (
              <div key={i} className="border rounded-lg overflow-hidden bg-white p-6 shadow-sm">
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}