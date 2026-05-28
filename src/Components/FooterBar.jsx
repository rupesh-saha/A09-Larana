"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const FooterBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DocAppoint Logo"
                width={140}
                height={45}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mt-2 max-w-xs">
              Elevating your healthcare experience. Book appointments with top-rated doctors effortlessly and manage your health securely.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 tracking-tight text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#0066FF] transition-colors text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-appointments" className="text-gray-500 hover:text-[#0066FF] transition-colors text-sm font-medium">
                  All Appointments
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-500 hover:text-[#0066FF] transition-colors text-sm font-medium">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 tracking-tight text-lg">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#0066FF] transition-colors text-sm font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#0066FF] transition-colors text-sm font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#0066FF] transition-colors text-sm font-medium">
                  Doctor Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 tracking-tight text-lg">Need Help?</h3>
            <p className="text-gray-500 text-sm">
              Our support team is available 24/7 to assist you.
            </p>

            <Link href="/all-appointments">
              <Button variant="flat" className="bg-[#0066FF]/10 text-[#0066FF] font-bold w-fit mt-2 hover:bg-[#0066FF]/20 transition-colors">
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium text-center md:text-left">
            © {currentYear} Larana. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a href="#" className="text-gray-400 hover:text-[#0066FF] transition-colors" aria-label="Facebook">
              <FaFacebook className="text-xl" />
            </a>
            

            <a href="#" className="text-gray-400 hover:text-black transition-colors" aria-label="X (formerly Twitter)">
              <FaXTwitter className="text-xl" />
            </a>

            <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="text-xl" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterBar;