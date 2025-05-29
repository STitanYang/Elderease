"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Heart, Star, User } from "lucide-react";

type Specialization = "General Care" | "Dementia Care" | "Stroke Recovery" | "Physical Therapy" | "Nutrition";
type Experience = "1-3 years" | "3-5 years" | "5+ years";
type Availability = "Full-time" | "Part-time" | "Weekends" | "Nights";
type Language = "Indonesian" | "English" | "Javanese" | "Sundanese" | "Mandarin";

interface Caregiver {
  id: number;
  name: string;
  image: string;
  specializations: Specialization[];
  experience: Experience;
  rating: number;
  reviews: number;
  availability: Availability[];
  languages: Language[];
  bio: string;
  telepon:string;
}

export default function CaregiversPage() {
  const caregivers: Caregiver[] = [
    {
      id: 1,
      name: "Siti Nurhaliza",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
      specializations: ["General Care", "Dementia Care"],
      experience: "5+ years",
      rating: 4.9,
      reviews: 27,
      availability: ["Full-time", "Weekends"],
      languages: ["Indonesian", "English", "Javanese"],
      bio: "With over 8 years of experience in elderly care, I specialize in creating comfortable routines and providing compassionate support for seniors with various needs.",
      telepon: "http://wa.me/6282337995025"
    },
    {
      id: 2,
      name: "Budi Hartono",
      image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600",
      specializations: ["Physical Therapy", "Stroke Recovery"],
      experience: "3-5 years",
      rating: 4.8,
      reviews: 19,
      availability: ["Part-time", "Weekends"],
      languages: ["Indonesian", "English"],
      bio: "As a former physical therapy assistant, I bring specialized knowledge to help seniors regain mobility and strength after strokes or injuries.",
      telepon: "http://wa.me/628981408856"
    }
  ];

  const [filters, setFilters] = useState({
    specialization: "",
    experience: "",
    availability: "",
    language: ""
  });

  const filteredCaregivers = caregivers.filter(caregiver => {
    let isMatch = true;
    
    if (filters.specialization && !caregiver.specializations.includes(filters.specialization as Specialization)) {
      isMatch = false;
    }
    
    if (filters.experience && caregiver.experience !== filters.experience) {
      isMatch = false;
    }
    
    if (filters.availability && !caregiver.availability.includes(filters.availability as Availability)) {
      isMatch = false;
    }
    
    if (filters.language && !caregiver.languages.includes(filters.language as Language)) {
      isMatch = false;
    }
    
    return isMatch;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-700 mb-6">
              Find Your Perfect Caregiver
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Browse our team of professional caregivers and find the perfect match for your loved one's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="px-10">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Filter Caregivers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                <Select 
                  value={filters.specialization}
                  onValueChange={(value) => setFilters({...filters, specialization: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Specializations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ll">All Specializations</SelectItem>
                    <SelectItem value="General Care">General Care</SelectItem>
                    <SelectItem value="Dementia Care">Dementia Care</SelectItem>
                    <SelectItem value="Stroke Recovery">Stroke Recovery</SelectItem>
                    <SelectItem value="Physical Therapy">Physical Therapy</SelectItem>
                    <SelectItem value="Nutrition">Nutrition</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <Select 
                  value={filters.experience}
                  onValueChange={(value) => setFilters({...filters, experience: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3 years">1-3 years</SelectItem>
                    <SelectItem value="3-5 years">3-5 years</SelectItem>
                    <SelectItem value="5+ years">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <Select 
                  value={filters.availability}
                  onValueChange={(value) => setFilters({...filters, availability: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Weekends">Weekends</SelectItem>
                    <SelectItem value="Nights">Nights</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                <Select 
                  value={filters.language}
                  onValueChange={(value) => setFilters({...filters, language: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Indonesian">Indonesian</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Javanese">Javanese</SelectItem>
                    <SelectItem value="Sundanese">Sundanese</SelectItem>
                    <SelectItem value="Mandarin">Mandarin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                onClick={() => setFilters({
                  specialization: "",
                  experience: "",
                  availability: "",
                  language: ""
                })}
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Caregivers List */}
      <section className="py-16">
        <div className="px-10">
          <h2 className="text-2xl font-bold text-green-700 mb-8">
            {filteredCaregivers.length > 0 
              ? `${filteredCaregivers.length} Caregivers Available` 
              : "No caregivers match your filters"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaregivers.map((caregiver) => (
              <Card key={caregiver.id} className="caregiver-card overflow-hidden border-green-100">
                <div className="relative h-56">
                  <Image
                    src={caregiver.image}
                    alt={caregiver.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{caregiver.rating}</span>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold">{caregiver.name}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {caregiver.specializations.map((spec, i) => (
                      <Badge key={i} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{caregiver.bio}</p>
                  
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-green-600 mr-2" />
                      <span>{caregiver.experience} experience</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-green-600 mr-2" />
                      <span>{caregiver.availability.join(", ")}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-2" />
                      <span>{caregiver.reviews} reviews</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                      <Link href={`${caregiver.telepon}`}>
                        View Profile
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" className="border-green-600 text-green-600 hover:bg-green-50">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-green-50">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              How to Choose Your Caregiver
            </h2>
            <p className="text-gray-600">
              We make it easy to find the perfect match for your loved one's care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Browse Profiles",
                description: "Review our caregiver profiles to find those with the right experience and specializations."
              },
              {
                step: "2",
                title: "Schedule an Interview",
                description: "Meet your preferred caregivers in person or via video call to ensure they're a good fit."
              },
              {
                step: "3",
                title: "Start Care",
                description: "Once you've found the perfect match, we'll handle all the paperwork to begin care quickly."
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="px-10">
          <div className="bg-white border border-green-100 rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Need Help Finding the Right Caregiver?
            </h2>
            <p className="text-gray-600 mb-6">
              Our care coordinators can help match you with the perfect caregiver based on your specific needs and preferences.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}