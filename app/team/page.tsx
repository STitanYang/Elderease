import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Rina Wijaya",
      position: "Founder & CEO",
      bio: "With over 20 years of experience in geriatric medicine, Dr. Rina founded GreenCare with a mission to transform elderly care in Indonesia.",
      image: "/ourteam_drrina.jpg",
    },
    {
      name: "Bambang Sutanto",
      position: "Chief Operations Officer",
      bio: "Bambang brings 15 years of healthcare administration experience, ensuring our care services are delivered efficiently and with the highest standards.",
      image: "/ourteam_bambang.jpg",
    },
    {
      name: "Maya Pertiwi",
      position: "Director of Nursing",
      bio: "As a registered nurse with specialized training in geriatric care, Maya oversees our clinical protocols and caregiver training programs.",
      image: "/ourteam_maya.jpg",
    }
  ];

  const careTeam = [
    {
      name: "Chiquita",
      position: "Senior Caregiver",
      specialty: "Dementia Care",
      experience: "8 years",
      image: "/1.jpeg"
    },
    {
      name: "Miko Usecase",
      position: "Caregiver & Physical Therapy Assistant",
      specialty: "Mobility Support",
      experience: "5 years",
      image: "/2.jpeg"
    },
    {
      name: "Evelyn",
      position: "Caregiver & Nutritionist",
      specialty: "Nutrition Care",
      experience: "4 years",
      image: "/3.jpeg"
    },
    {
      name: "Musumi",
      position: "Senior Caregiver",
      specialty: "Memory Care",
      experience: "7 years",
      image: "/4.jpeg"
    },
    {
      name: "Nana Naravit",
      position: "Caregiver",
      specialty: "Companion Care",
      experience: "3 years",
      image: "/5.jpeg"
    },
    {
      name: "Momo Momo",
      position: "Rehabilitation Specialist",
      specialty: "Stroke Recovery",
      experience: "6 years",
      image: "/6.jpeg"
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
              Our dedicated professionals are committed to providing exceptional care and support for your elderly.
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
                src="/ourteam_ourmission.jpg"
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
                  <AvatarImage src={member.image} alt={member.name} className="object-cover object-center w-full h-full"/>
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-green-600 text-sm font-medium mb-1">{member.position}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <span className="text-gray-700 font-medium">{member.specialty}</span> • {member.experience} experience
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}