import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Rina Wijaya",
      position: "Founder & CEO",
      bio: "With over 20 years of experience in geriatric medicine, Dr. Rina founded GreenCare with a mission to transform elderly care in Indonesia.",
      image: "https://images.pexels.com/photos/5407038/pexels-photo-5407038.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rina@greencare.com"
      }
    },
    {
      name: "Bambang Sutanto",
      position: "Chief Operations Officer",
      bio: "Bambang brings 15 years of healthcare administration experience, ensuring our care services are delivered efficiently and with the highest standards.",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "bambang@greencare.com"
      }
    },
    {
      name: "Maya Pertiwi, RN",
      position: "Director of Nursing",
      bio: "As a registered nurse with specialized training in geriatric care, Maya oversees our clinical protocols and caregiver training programs.",
      image: "https://images.pexels.com/photos/5407208/pexels-photo-5407208.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "maya@greencare.com"
      }
    }
  ];

  const careTeam = [
    {
      name: "Siti Nurhaliza",
      position: "Senior Caregiver",
      specialty: "Dementia Care",
      experience: "8 years",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
    },
    {
      name: "Budi Hartono",
      position: "Caregiver & Physical Therapy Assistant",
      specialty: "Mobility Support",
      experience: "5 years",
      image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg"
    },
    {
      name: "Dewi Sukarno",
      position: "Caregiver & Nutritionist",
      specialty: "Nutrition Care",
      experience: "4 years",
      image: "https://images.pexels.com/photos/7580795/pexels-photo-7580795.jpeg"
    },
    {
      name: "Ahmad Fauzi",
      position: "Senior Caregiver",
      specialty: "Memory Care",
      experience: "7 years",
      image: "https://images.pexels.com/photos/6303682/pexels-photo-6303682.jpeg"
    },
    {
      name: "Ratna Sari",
      position: "Caregiver",
      specialty: "Companion Care",
      experience: "3 years",
      image: "https://images.pexels.com/photos/7580757/pexels-photo-7580757.jpeg"
    },
    {
      name: "Joko Widodo",
      position: "Rehabilitation Specialist",
      specialty: "Stroke Recovery",
      experience: "6 years",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg"
    }
  ];

  const advisors = [
    {
      name: "Prof. Dr. Hadi Susanto",
      position: "Medical Advisor",
      specialty: "Geriatric Medicine",
      bio: "Professor of Geriatric Medicine at University of Indonesia with 25+ years specializing in elderly health issues.",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
    },
    {
      name: "Dr. Lina Santoso",
      position: "Nutrition Advisor",
      specialty: "Geriatric Nutrition",
      bio: "Dietitian with expertise in nutritional needs of elderly patients and therapeutic diets for chronic conditions.",
      image: "https://images.pexels.com/photos/5407040/pexels-photo-5407040.jpeg"
    },
    {
      name: "Dr. Fadli Rahman",
      position: "Mental Health Advisor",
      specialty: "Geriatric Psychology",
      bio: "Specializes in mental health issues affecting the elderly, including depression, anxiety, and cognitive disorders.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-700 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Our dedicated professionals are committed to providing exceptional care and support for your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-700 mb-6">
                Our Mission & Values
              </h2>
              <p className="text-gray-600 mb-6">
                At GreenCare, we're dedicated to enhancing the quality of life for seniors through compassionate, personalized care that respects their dignity, independence, and individual needs.
              </p>
              <div className="space-y-4">
                {[
                  {
                    value: "Compassion",
                    description: "We provide care with kindness, empathy, and respect for each individual's unique journey."
                  },
                  {
                    value: "Excellence",
                    description: "We strive for the highest standards in all aspects of our care services."
                  },
                  {
                    value: "Integrity",
                    description: "We act with honesty and transparency in all our interactions."
                  },
                  {
                    value: "Empowerment",
                    description: "We support independence and dignity for elderly individuals in our care."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <BadgeCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-700">{item.value}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[400px]">
              <Image
                src="https://images.pexels.com/photos/7551735/pexels-photo-7551735.jpeg"
                alt="Our care team in action"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-green-50">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600">
              Meet the dedicated professionals who guide our mission and ensure excellence in all we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <Card key={i} className="border-green-100 bg-white">
                <div className="relative h-64">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold">{leader.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{leader.bio}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="icon" variant="outline" asChild className="rounded-full w-8 h-8 p-0">
                    <Link href={leader.social.linkedin}>
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button size="icon" variant="outline" asChild className="rounded-full w-8 h-8 p-0">
                    <Link href={leader.social.twitter}>
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                  <Button size="icon" variant="outline" asChild className="rounded-full w-8 h-8 p-0">
                    <Link href={`mailto:${leader.social.email}`}>
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Team */}
      <section className="py-16">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Care Team
            </h2>
            <p className="text-gray-600">
              Our skilled caregivers bring expertise, compassion, and dedication to every client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {careTeam.map((member, i) => (
              <div key={i} className="bg-white border border-green-100 rounded-lg p-6 flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-green-600 text-sm font-medium mb-1">{member.position}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <span className="text-gray-700 font-medium">{member.specialty}</span> • {member.experience} experience
                </div>
                <Button asChild variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50 mt-auto">
                  <Link href="/caregivers">
                    View Profile
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/caregivers">
                View All Caregivers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 bg-green-50">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Advisory Board
            </h2>
            <p className="text-gray-600">
              Our expert advisors ensure that our care practices are based on the latest research and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, i) => (
              <Card key={i} className="border-green-100 bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-16 h-16 mr-4">
                      <AvatarImage src={advisor.image} alt={advisor.name} />
                      <AvatarFallback>{advisor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{advisor.name}</CardTitle>
                      <CardDescription className="text-green-600">
                        {advisor.position}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 text-sm">
                    <span className="font-medium">Specialty:</span> {advisor.specialty}
                  </div>
                  <p className="text-gray-600">{advisor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16">
        <div className="px-10">
          <div className="bg-white border border-green-100 rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Join Our Team
                </h2>
                <p className="text-gray-600 mb-6">
                  We're always looking for compassionate, skilled professionals to join our growing team of caregivers.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Competitive compensation</span>
                  </div>
                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Ongoing professional development</span>
                  </div>
                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Flexible scheduling options</span>
                  </div>
                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Supportive work environment</span>
                  </div>
                </div>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/careers">
                    View Open Positions
                  </Link>
                </Button>
              </div>
              
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.pexels.com/photos/7551604/pexels-photo-7551604.jpeg"
                  alt="Caregiver team meeting"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-green-50">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-600">
              Follow us on social media for the latest updates, care tips, and news about elderly care.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="#">
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="#">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="#">
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="#">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}