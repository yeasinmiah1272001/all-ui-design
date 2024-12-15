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
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={"/"}>
            <div className="text-2xl font-bold uppercase">Ui Design</div>
          </Link>

          <div className="hidden md:flex space-x-6 uppercase">
            <Link href="/" passHref>
              <p className="hover:text-gray-300">Card Slide</p>
            </Link>
            <Link href="/bannerpage" passHref>
              <p className="hover:text-gray-300">Banner</p>
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
