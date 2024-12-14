"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">MyLogo</div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" passHref>
              <p className="hover:text-gray-300">Home</p>
            </Link>
            <Link href="/" passHref>
              <p className="hover:text-gray-300">About</p>
            </Link>
            <Link href="/" passHref>
              <p className="hover:text-gray-300">Services</p>
            </Link>
            <Link href="/" passHref>
              <p className="hover:text-gray-300">Contact</p>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <Link href="/" passHref>
            <p
              className="block px-4 py-2 text-white hover:bg-blue-800"
              onClick={toggleMobileMenu}
            >
              Home
            </p>
          </Link>
          <Link href="/" passHref>
            <p
              className="block px-4 py-2 text-white hover:bg-blue-800"
              onClick={toggleMobileMenu}
            >
              About
            </p>
          </Link>
          <Link href="/" passHref>
            <p
              className="block px-4 py-2 text-white hover:bg-blue-800"
              onClick={toggleMobileMenu}
            >
              Services
            </p>
          </Link>
          <Link href="/" passHref>
            <p
              className="block px-4 py-2 text-white hover:bg-blue-800"
              onClick={toggleMobileMenu}
            >
              Contact
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
