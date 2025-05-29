import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, UserCheck, Clock, Heart, Activity, ThumbsUp, Pill, Brain } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "personal-care",
      title: "Personal Care",
      icon: UserCheck,
      description: "Our personal care services assist with activities of daily living such as bathing, dressing, grooming, and toileting. Our caregivers provide dignified and respectful assistance.",
      features: [
        "Bathing and personal hygiene assistance",
        "Grooming and dressing help",
        "Mobility assistance",
        "Toileting and incontinence care"
      ],
      image: "https://images.pexels.com/photos/7551741/pexels-photo-7551741.jpeg"
    },
    {
      id: "medication-management",
      title: "Medication Management",
      icon: Pill,
      description: "We help ensure that medications are taken as prescribed and on schedule. Our caregivers can provide medication reminders and monitor for side effects.",
      features: [
        "Medication reminders",
        "Prescription pickups",
        "Medication organization",
        "Side effect monitoring"
      ],
      image: "https://images.pexels.com/photos/7655118/pexels-photo-7655118.jpeg"
    },
    {
      id: "companionship",
      title: "Companionship",
      icon: Heart,
      description: "Our companionship services provide emotional support, meaningful conversation, and engagement in activities that bring joy and purpose to daily life.",
      features: [
        "Conversation and companionship",
        "Recreational activities",
        "Cognitive stimulation",
        "Emotional support"
      ],
      image: "https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg"
    },
    {
      id: "specialized-care",
      title: "Specialized Care",
      icon: Brain,
      description: "We offer specialized care for conditions such as dementia, Parkinson's, stroke recovery, and other chronic conditions requiring specific expertise.",
      features: [
        "Dementia and Alzheimer's care",
        "Parkinson's care",
        "Stroke recovery",
        "Chronic illness management"
      ],
      image: "https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg"
    },
  ];

  const carePackages = [
    {
      title: "Basic Care",
      price: "Rp 500.000",
      duration: "per week",
      description: "Essential care services for elderly with assistance needs",
      features: [
        "2 visits per week (3 hours each)",
        "Personal care assistance",
        "Light housekeeping",
        "Medication reminders",
        "Companionship",
        "Specialized care"
      ]
    },
    {
      title: "Standard Care",
      price: "Rp 1.150.000",
      duration: "per week",
      description: "Comprehensive care for elderly requiring regular assistance",
      features: [
        "4 visits per week (4 hours each)",
        "All Basic Care services",
        "Meal preparation",
        "Grocery shopping",
        "Transportation to appointments",
        "Physical exercise assistance"
      ],
      featured: true
    },
    {
      title: "Premium Care",
      price: "Rp 2.500.000",
      duration: "per week",
      description: "Full-service care for elderly with advanced needs",
      features: [
        "Daily visits (6 hours each)",
        "All Standard Care services",
        "Specialized care (dementia, etc.)",
        "Coordination with healthcare team",
        "24/7 on-call support",
        "Advanced care planning"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-700 mb-6">
              Our Care Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We offer a comprehensive range of elderly care services tailored to meet individual needs and preferences.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="#care-packages">
                View Care Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="w-full lg:w-3/5 order-2 lg:order-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <service.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-green-700">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/contact">
                        Inquire About Service
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="w-full lg:w-2/5 relative h-64 order-1 lg:order-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>

                {index < services.length && (
                  <div className="border-b border-gray-200 my-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Packages */}
      <section id="care-packages" className="py-16 bg-green-50 scroll-mt-20">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Care Packages
            </h2>
            <p className="text-gray-600">
              Choose from our tailored care packages designed to meet different levels of need and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.featured ? 'border-green-600 shadow-lg' : 'border-green-100'}`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">{pkg.price}</p>
                    <p className="text-sm text-gray-500">{pkg.duration}</p>
                  </div>
                  <div className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full ${pkg.featured ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600/90 hover:bg-green-600'}`}
                  >
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Care CTA */}
      <section className="py-16">
        <div className="px-10">
          <div className="bg-white border border-green-100 rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Need a Custom Care Plan?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We understand that every individual has unique needs. Contact us to create a personalized care plan tailored specifically for your loved one.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}