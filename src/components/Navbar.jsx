"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gray-900 backdrop-blur-md shadow-md p-4 flex items-center justify-between">
      
      {/* Left: optional brand/logo or empty */}
      <div className="font-bold text-lg"> </div> {/* empty for now */}

      {/* Desktop Links (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-6 text-white">
        <Link href="/" className="hover:text-purple-600 transition-colors duration-300">Home</Link>
        <Link href="/projects" className="hover:text-purple-600 transition-colors duration-300">Projects</Link>
        <Link href="/about" className="hover:text-purple-600 transition-colors duration-300">About</Link>
      </div>

      {/* Hamburger (mobile only) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-white"
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-gray-900 shadow-md flex flex-col items-start p-4 md:hidden">
          <Link href="/" className="py-2 w-full hover:text-purple-600">Home</Link>
          <Link href="/projects" className="py-2 w-full hover:text-purple-600">Projects</Link>
          <Link href="/about" className="py-2 w-full hover:text-purple-600">About</Link>
        </div>
      )}
    </nav>
  );
}
