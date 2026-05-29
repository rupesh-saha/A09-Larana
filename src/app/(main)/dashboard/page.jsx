"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Button, Avatar, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function DashboardPage() {
  // Mock data for the UI
  const user = {
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    phone: "+880 1711-000000",
    bloodGroup: "O+",
    joined: "May 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop"
  };

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Ayesha Rahman",
      specialty: "Cardiologist",
      date: "Tomorrow, 10:00 AM",
      status: "Confirmed",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      doctor: "Dr. Tahmina Khatun",
      specialty: "Gynecologist",
      date: "June 2, 04:30 PM",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1594824436998-d88d9def9af7?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50/50 py-12 md:py-20">
      
      {/* ==========================================
          Premium Ambient Background Glows 
      ========================================== */}
      <div className="absolute top-0 left-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#0066FF]/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-blue-300/20 blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Dashboard
            </h1>
            <p className="mt-2 text-gray-500 font-medium">
              Welcome back, {user.name.split(" ")[0]}. Here is your medical overview.
            </p>
          </div>
          <Button
            as={Link}
            href="/all-appointments"
            className="bg-[#0066FF] text-white font-bold shadow-lg shadow-[#0066FF]/20"
            radius="xl"
          >
            Find a Doctor
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* ==========================================
              LEFT COLUMN: Profile Card (4 cols)
          ========================================== */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Card className="rounded-[2.5rem] border border-white/60 bg-white/40 p-8 backdrop-blur-2xl shadow-xl shadow-blue-900/5">
              <div className="flex flex-col items-center text-center">
                
                <div className="relative mb-4 h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-[#0066FF]/10">
                  <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                </div>
                
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">{user.name}</h2>
                <Chip variant="flat" className="mt-2 bg-blue-100/50 text-[#0066FF] font-bold border-none">
                  Patient
                </Chip>

                <hr className="my-6 w-full border-t border-white/60" />

                <div className="flex w-full flex-col gap-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Email</span>
                    <span className="text-sm font-bold text-gray-900">{user.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Phone</span>
                    <span className="text-sm font-bold text-gray-900">{user.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Blood Group</span>
                    <span className="text-sm font-bold text-red-500">{user.bloodGroup}</span>
                  </div>
                </div>

                <Button className="mt-8 w-full bg-white text-gray-900 font-bold border border-white shadow-sm hover:bg-gray-50" radius="xl">
                  Edit Profile
                </Button>
              </div>
            </Card>
          </div>

          {/* ==========================================
              RIGHT COLUMN: Stats & Appointments (8 cols)
          ========================================== */}
          <div className="flex flex-col gap-8 lg:col-span-8">
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              <Card className="rounded-[2rem] border border-white/60 bg-white/40 p-6 backdrop-blur-2xl shadow-lg shadow-blue-900/5 transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-[#0066FF]">
                    <Icon icon="solar:calendar-bold" className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Visits</p>
                    <p className="text-2xl font-extrabold text-gray-900">12</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[2rem] border border-white/60 bg-white/40 p-6 backdrop-blur-2xl shadow-lg shadow-blue-900/5 transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-emerald-500">
                    <Icon icon="solar:check-circle-bold" className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Completed</p>
                    <p className="text-2xl font-extrabold text-gray-900">10</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[2rem] border border-white/60 bg-white/40 p-6 backdrop-blur-2xl shadow-lg shadow-blue-900/5 transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-orange-500">
                    <Icon icon="solar:clock-circle-bold" className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Upcoming</p>
                    <p className="text-2xl font-extrabold text-gray-900">2</p>
                  </div>
                </div>
              </Card>

            </div>

            {/* Upcoming Appointments List */}
            <Card className="rounded-[2.5rem] border border-white/60 bg-white/40 p-2 backdrop-blur-2xl shadow-xl shadow-blue-900/5">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Upcoming Appointments</h2>
                  <Link href="/appointments" className="text-sm font-bold text-[#0066FF] hover:underline">
                    View All
                  </Link>
                </div>

                <div className="flex flex-col gap-4">
                  {upcomingAppointments.map((apt) => (
                    <div 
                      key={apt.id} 
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/50 p-4 transition-all hover:bg-white/80 hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar src={apt.image} size="lg" className="border-white" />
                        <div>
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors">
                            {apt.doctor}
                          </h3>
                          <p className="text-sm font-medium text-gray-500">{apt.specialty}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Icon icon="solar:calendar-date-bold" className="text-lg text-[#0066FF]" />
                          <span className="text-sm font-bold">{apt.date}</span>
                        </div>
                        
                        <Chip 
                          color={apt.status === "Confirmed" ? "success" : "warning"}
                          variant="flat" 
                          className="font-bold border-none"
                        >
                          {apt.status}
                        </Chip>
                        
                        <Button isIconOnly className="bg-white text-gray-600 shadow-sm border border-gray-100 hover:text-[#0066FF]" radius="lg">
                          <Icon icon="solar:menu-dots-bold" className="text-xl" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}