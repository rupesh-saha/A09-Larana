"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from "@heroui/react";
import NavLink from './NavLink';
import { BarsMenu } from './BarsMenu';

const NavBar = () => {
  return (
    <div className="navbar rounded-2xl max-w-[93%] md:max-w-[97%] mx-auto bg-white/70 backdrop-blur-md border border-white/20 fixed top-4 left-0 right-0 z-50 text-gray-800 shadow-xl px-3 lg:px-6 glass">

      <div className="navbar-start">
        <div className="lg:hidden flex items-center">
          <BarsMenu />
        </div>

        <Link href={'/'} className="ml-2 lg:ml-0">
          <Image
            src={'/logo.png'}
            alt='Larana logo'
            width={130}
            height={40}
            priority
            className="object-contain"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex lg:w-1/3 justify-center">
        <ul className="menu menu-horizontal px-1 font-semibold tracking-wide gap-2">
          <li>
            <NavLink href="/" className="hover:text-[#0066FF] hover:bg-blue-50/50 transition-colors px-4 py-2 rounded-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/all-appointments" className="hover:text-[#0066FF] hover:bg-blue-50/50 transition-colors px-4 py-2 rounded-lg">
              All Appointments
            </NavLink>
          </li>
          <li>
            <NavLink href="/dashboard" className="hover:text-[#0066FF] hover:bg-blue-50/50 transition-colors px-4 py-2 rounded-lg">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex flex-wrap gap-3">

        <Link href="/login">
          <Button variant="flat" className="bg-[#0066FF]/10 text-[#0066FF] font-extrabold px-6 hover:bg-[#0066FF]/20 transition-colors hidden md:flex">
            Log In
          </Button>
        </Link>

        <Link href="/register">
          <Button className="bg-[#0066FF] text-white font-extrabold px-6 shadow-md shadow-blue-500/30 hover:bg-blue-700 transition-colors hidden md:flex">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  )
};

export default NavBar;