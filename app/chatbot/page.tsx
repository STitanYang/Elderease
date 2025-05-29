import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Clock, MessageCircle, MessagesSquare, Phone, Shield, ThumbsUp } from "lucide-react";

export default function ChatbotPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-700 mb-6">
              Kelompok 5 Telegram Chatbot
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Get instant assistance, information, and support through our easy-to-use Telegram chatbot.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Open Chatbot in Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Why Use Our Chatbot?
            </h2>
            <p className="text-gray-600">
              Our Telegram chatbot provides quick, reliable assistance for all your elderly care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Availability",
                description: "Get answers and support any time of day or night, even on weekends and holidays.",
                icon: Clock,
              },
              {
                title: "Quick Responses",
                description: "Receive immediate answers to your questions without waiting on hold or for email responses.",
                icon: MessageCircle,
              },
              {
                title: "Care Tips",
                description: "Access a library of helpful care tips and advice for common eldercare situations.",
                icon: ThumbsUp,
              },
              {
                title: "Appointment Scheduling",
                description: "Book consultations or care services directly through the chatbot interface.",
                icon: BadgeCheck,
              },
              {
                title: "Emergency Contact",
                description: "Quickly connect with a live representative in urgent situations.",
                icon: Phone,
              },
              {
                title: "Private & Secure",
                description: "Your conversations and personal information are encrypted and secure.",
                icon: Shield,
              },
            ].map((benefit, i) => (
              <Card key={i} className="border-green-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-700">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
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
              How It Works
            </h2>
            <p className="text-gray-600">
              Getting started with our Telegram chatbot is simple and takes just a few seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Open Telegram",
                    description: "Open the Telegram app on your smartphone or access Telegram web on your computer."
                  },
                  {
                    step: "2",
                    title: "Search for GreenCare Bot",
                    description: "In the search field, type @GreenCareBot and select our official chatbot."
                  },
                  {
                    step: "3",
                    title: "Start the Conversation",
                    description: "Tap the 'Start' button or send a message to begin interacting with our chatbot."
                  },
                  {
                    step: "4",
                    title: "Choose from Menu Options",
                    description: "Select from available menu options or type your question in natural language."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Try the Chatbot Now
                </Button>
              </div>
            </div>
            
            <div className="relative h-[500px] shadow-lg rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5417675/pexels-photo-5417675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Chatbot interface"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Chatbot Features
            </h2>
            <p className="text-gray-600">
              Our intelligent chatbot offers a variety of features to enhance your eldercare experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Ask Questions</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-3 mr-4">
                    <MessagesSquare className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 flex-1">
                    <p className="font-medium">How often should medications be reviewed for elderly patients?</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 rounded-lg p-3 mr-4">
                    <MessagesSquare className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <p>Medication reviews for elderly patients should typically be conducted every 3-6 months, or whenever there is a change in health status or after hospitalization. Regular reviews help prevent adverse drug interactions and ensure medications remain appropriate as health needs change.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Book Services</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-3 mr-4">
                    <MessagesSquare className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 flex-1">
                    <p className="font-medium">I need to schedule a caregiver visit this weekend</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 rounded-lg p-3 mr-4">
                    <MessagesSquare className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <p>I'd be happy to help you schedule a caregiver visit. Please select a preferred date:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Button variant="outline" size="sm" className="text-xs">Saturday, June 10</Button>
                      <Button variant="outline" size="sm" className="text-xs">Sunday, June 11</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-green-50">
        <div className="px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our Telegram chatbot service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Is the chatbot available 24/7?",
                answer: "Yes, our chatbot is available 24 hours a day, 7 days a week, including holidays."
              },
              {
                question: "Is my information secure?",
                answer: "Absolutely. All conversations are encrypted, and we adhere to strict privacy policies to protect your personal information."
              },
              {
                question: "Can I speak to a real person through the chatbot?",
                answer: "Yes, you can request to speak with a human representative at any time during your conversation with the chatbot."
              },
              {
                question: "What languages does the chatbot support?",
                answer: "Currently, our chatbot supports English and Indonesian languages, with plans to add more languages in the future."
              },
              {
                question: "Can I use the chatbot to schedule appointments?",
                answer: "Yes, you can schedule consultations, caregiver visits, and other services directly through the chatbot."
              },
              {
                question: "Does it cost anything to use the chatbot?",
                answer: "No, our Telegram chatbot is completely free to use for all our clients and their families."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-green-100">
                <h3 className="text-lg font-semibold text-green-700 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="px-10">
          <div className="bg-green-600 rounded-xl p-8 md:p-12 text-white text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Try Our Telegram Chatbot Today
            </h2>
            <p className="mb-8 text-green-50 max-w-xl mx-auto">
              Experience faster support, easy scheduling, and instant information about elderly care services.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-green-50">
              Launch Telegram Chatbot
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}