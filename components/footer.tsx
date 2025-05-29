import Link from "next/link";
import Image from "next/image";
import { Heart, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-green-50 dark:bg-green-950 border-t">
      <div className="px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png" // Path relative to the 'public' folder
                alt="Elderease Logo"
                className="h-6 w-6" // You can also use Tailwind classes for size
                width={100} 
                height={100}
              />
              <span className="font-bold text-xl text-green-600">Elderease</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              A digital platform offering accessible, reliable, and compassionate homecare services for the elderly. We are dedicated to improving the quality of life, health, and overall well-being of seniors through personalized care delivered directly to their homes.
            </p>
          </div>
          
          <div className="mx-auto">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-green-600 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-green-600 transition-colors">
                  Health Articles
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="hover:text-green-600 transition-colors">
                  Chatbot
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-green-600 transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="http://wa.me/6285700277534" className="hover:text-green-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col ml-auto">
            <h3 className="font-medium text-lg mb-2">Contact Us</h3>
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-green-600 mr-2" />
              <span>+62 857 0027 7534</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-green-600 mr-2" />
              <span>elderease@gmail.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 text-green-600 mr-2 mt-1" />
              <span>Jl. Kesehatan No. 123, Jakarta Selatan, Indonesia</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Elderease. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}