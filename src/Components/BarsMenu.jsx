"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bars, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Icon } from "@iconify/react";

export function BarsMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: Magnifier, label: "All Appointments", href: "/all-appointments" },
    { icon: Person, label: "Dashboard", href: "/dashboard" },
  ];

  const handleNavigation = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  const handleLogout = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  return (
    <>
      <button 
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2 -ml-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors flex items-center justify-center"
        aria-label="Open Menu"
      >
        <Bars className="size-7 text-gray-900" />
      </button>

      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header className="border-b border-gray-100 pb-4 pt-6">
                <Image
                  src={'/logo.png'}
                  alt='Larana logo'
                  width={130}
                  height={40}
                  priority
                  className="object-contain"
                />
              </Drawer.Header>

              <Drawer.Body className="pt-5 px-1">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.href)}
                      className="flex items-center gap-4 rounded-xl px-3 py-2 text-base font-semibold text-gray-700 transition-colors hover:bg-[#0066FF]/10 hover:text-[#0066FF] w-full text-left"
                      type="button"
                    >
                      <item.icon className="size-6 text-gray-500" />
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-auto border-t border-gray-100 pt-6 pb-8 flex flex-col gap-3">
                  {isPending ? (
                    <div className="h-14 w-full bg-gray-200 animate-pulse rounded-xl"></div>
                  ) : session ? (
                    <div className="flex items-center gap-3 w-full">
                      <Link href="/dashboard" onClick={() => setIsOpen(false)} className="shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 hover:border-[#0066FF] transition-all">
                        <Image
                          src={user?.image || "https://placehold.co/400.png"}
                          alt={user?.name || "User"}
                          width={100}
                          height={100}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      
                      <Button color="danger" variant="danger" className="flex-1 font-extrabold py-6" onPress={handleLogout} >
                        <Icon icon="solar:logout-2-bold-duotone" className="text-lg" />
                        Log Out
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Button
                        onPress={() => handleNavigation('/login')}
                        variant="flat"
                        className="bg-[#0066FF]/10 text-[#0066FF] font-bold w-full py-6 text-lg hover:bg-[#0066FF]/20"
                      >
                        Log In
                      </Button>
                      <Button
                        onPress={() => handleNavigation('/register')}
                        className="bg-[#0066FF] text-white font-bold shadow-md shadow-blue-500/30 w-full py-6 text-lg hover:bg-blue-700"
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}