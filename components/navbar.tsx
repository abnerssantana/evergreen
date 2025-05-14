"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] bg-white/90 backdrop-blur-md transition-all duration-300 ${
      scrolled ? "shadow-md py-2" : "py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl relative z-10">
          <span className="text-evergreen">EVERGREEN</span>
          <span className="block text-xs font-light tracking-widest text-fresh-mint">HOME CARE SOLUTIONS</span>
        </Link>
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
        <button 
          className="md:hidden text-evergreen hover:text-fresh-mint transition-colors p-2 rounded-full hover:bg-evergreen/10" 
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gradient-to-br from-evergreen to-fresh-mint z-[9999] flex flex-col justify-center items-center p-6"
        >
          <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6">
            <div className="font-bold text-xl">
              <span className="text-white">EVERGREEN</span>
              <span className="block text-xs font-light tracking-widest text-fresh-mint">HOME CARE SOLUTIONS</span>
            </div>
            <button 
              className="text-white hover:text-fresh-mint transition-colors p-2 rounded-full hover:bg-white/10" 
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-4 w-full max-w-sm">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="block w-full text-center text-white text-xl font-medium py-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
