import Link from "next/link";
import { Heart, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-green-50 dark:bg-green-950 border-t">
      <div className="px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl text-green-600">GreenCare</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Professional and compassionate home care services for your loved ones.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-green-600 mr-2" />
                <span>+62 123 4567 890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-green-600 mr-2" />
                <span>info@greencare.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-green-600 mr-2 mt-1" />
                <span>Jl. Kesehatan No. 123, Jakarta Selatan, Indonesia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-green-600 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/caregivers" className="hover:text-green-600 transition-colors">
                  Find a Caregiver
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-green-600 transition-colors">
                  Health Articles
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-green-600 transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/personal-care" className="hover:text-green-600 transition-colors">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href="/services/medication-management" className="hover:text-green-600 transition-colors">
                  Medication Management
                </Link>
              </li>
              <li>
                <Link href="/services/mobility-assistance" className="hover:text-green-600 transition-colors">
                  Mobility Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/companionship" className="hover:text-green-600 transition-colors">
                  Companionship
                </Link>
              </li>
              <li>
                <Link href="/services/specialized-care" className="hover:text-green-600 transition-colors">
                  Specialized Care
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and elderly care tips.
            </p>
            <div className="flex flex-col space-y-2">
              <Input placeholder="Your email" className="border-green-600/50 focus-visible:ring-green-600" />
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GreenCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}