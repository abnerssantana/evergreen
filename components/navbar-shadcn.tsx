"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl relative z-10">
          <span className="text-evergreen">EVERGREEN</span>
          <span className="block text-xs font-light tracking-widest text-fresh-mint">
            HOME CARE SOLUTIONS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full uppercase text-sm tracking-wider transition-all duration-300 text-evergreen hover:bg-fresh-mint/20"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Nav (Shadcn Sheet) */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-evergreen hover:text-fresh-mint transition-colors p-2 rounded-full hover:bg-evergreen/10">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="!bg-gradient-to-br from-evergreen to-fresh-mint">
            <SheetHeader className="text-center">
              <SheetTitle className="text-white">EVERGREEN</SheetTitle>
              <SheetDescription className="text-fresh-mint">
                HOME CARE SOLUTIONS
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-4 p-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block w-full text-center text-white text-xl font-medium py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
