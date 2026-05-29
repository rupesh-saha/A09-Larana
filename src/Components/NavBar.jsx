"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Avatar } from "@heroui/react";
import NavLink from './NavLink';
import { BarsMenu } from './BarsMenu';
import { authClient } from '@/lib/auth-client';

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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

      <div className="navbar-end flex items-center gap-3">
        {isPending ? (
          /* Loading Skeleton */
          <div className="w-24 h-10 bg-gray-200/60 animate-pulse rounded-full hidden md:block"></div>
        ) : session ? (
          /* Logged In State */
          <>
            <Link href="/dashboard" className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-[#0066FF] transition-all">
              <Image
                src={session.user?.image || "https://placehold.co/400.png"}
                alt={user?.name || "User"}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </Link>

            <Button
              color="danger"
              variant="danger"
              className="font-extrabold px-6 hidden md:flex"
              onPress={async () => await authClient.signOut()}
            >
              Log Out
            </Button>
          </>
        ) : (
          /* Logged Out State */
          <>
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
          </>
        )}
      </div>
    </div>
  )
};

export default NavBar;