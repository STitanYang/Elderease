"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';
import { Heart, Menu, Phone } from "lucide-react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/articles", label: "Articles" },
  { href: "/chatbot", label: "Telegram Chatbot" },
  { href: "/team", label: "Our Team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white dark:bg-background shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="px-10 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
           <Image
            src="/logo.png" // Path relative to the 'public' folder
            alt="Elderease Logo"
            className="h-6 w-6" // You can also use Tailwind classes for size
            width={100} 
            height={100}
          />
          <span className="font-bold text-xl text-green-600">Elderease</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                pathname === route.href
                  ? "text-green-600"
                  : "text-foreground/80"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="http://wa.me/6285700277534">
            <Button className="bg-green-600 hover:bg-green-700">
              Book Now
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 py-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-green-600",
                    pathname === route.href
                      ? "text-green-600"
                      : "text-foreground/80"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <Button className="mt-4 bg-green-600 hover:bg-green-700">
                Book Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}