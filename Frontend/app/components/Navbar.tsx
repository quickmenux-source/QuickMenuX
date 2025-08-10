// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaUtensils } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl group"
        >
          <FaUtensils className="text-orange-500" />
          <span className="tracking-tight transition duration-300 group-hover:text-glow">
            <span className="text-[#006400]">Quick</span>
            <span className="text-[#013220]">Menu</span>
            <span className="text-[#006400]">X</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {["Features", "Learn", "Blog", "Pricing", "FAQ", "Login"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black relative font-medium hover:text-orange-500 transition duration-300 group"
              >
                {item}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300 ease-in-out" />
              </Link>
            )
          )}

          {/* Contact Us Button */}
          <Link
            href="#contact"
            className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300 hover:shadow-orange-glow"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Custom styles for glow */}
      <style jsx>{`
        .group-hover\\:text-glow:hover {
          text-shadow: 0 0 8px rgba(255, 165, 0, 0.8), 0 0 16px rgba(255, 165, 0, 0.6);
        }
        .hover\\:shadow-orange-glow:hover {
          box-shadow: 0 0 10px rgba(255, 165, 0, 0.7), 0 0 20px rgba(255, 165, 0, 0.5);
        }
      `}</style>
    </nav>
  );
}
