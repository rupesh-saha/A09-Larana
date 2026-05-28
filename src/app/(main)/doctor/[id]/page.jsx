import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Card, Button, Chip } from "@heroui/react";

const DoctorDetails = async ({ params }) => {
  const { id } = await params;

  const getDoctor = async (id) => {
    try {
      const response = await fetch(`http://localhost:5002/doctors/${id}`, { cache: 'no-store' });
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch doctor details:", error);
      return null;
    }
  };

  const doctor = await getDoctor(id);

  if (!doctor) return null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 md:py-20 font-sans text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-10 flex items-center text-sm font-semibold text-gray-400">
          <Link href="/all-appointments" className="hover:text-gray-900 transition-colors">
            All Doctors
          </Link>
          <Icon icon="solar:alt-arrow-right-linear" className="mx-2 text-lg" />
          <span className="text-gray-900">{doctor.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

          {/* ==========================================
              LEFT COLUMN: The "NEO" Style Reference Card
          ========================================== */}
          <div className="flex flex-col lg:col-span-5">
            <Card className="group relative h-[500px] w-full flex flex-col justify-between overflow-hidden bg-[#F2F2F7] border-none shadow-none p-6 lg:h-[650px] lg:p-8 rounded-xl">
              
              {/* Background Image Setup */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  priority
                  className="object-cover object-top opacity-95 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Smoothed gradients to prevent harsh cutoffs */}
                <div className="absolute top-0 w-full h-48 bg-linear-to-b from-black/10 via-[#0066ff]/10 to-transparent"></div>
                <div className="absolute bottom-0 w-full h-48 bg-linear-to-t from-black/10 via-[#0066ff]/20 to-transparent"></div>
              </div>

              {/* Top Left Text */}
              <div className="relative z-10 flex flex-col">
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight lg:text-3xl">
                  {doctor.name}
                </h1>
                <p className="mt-1 text-base font-semibold text-gray-500">
                  {doctor.specialty}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="relative z-10 flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-gray-900 tracking-tight lg:text-xl">
                    Available today
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-gray-500">
                    <Icon icon="solar:wallet-money-linear" className="text-lg" />
                    Consultation ৳{doctor.fee}
                  </span>
                </div>
                
                {/* Fixed HeroUI Button height sizing */}
                <Button 
                  radius="full"
                  className="h-14 bg-white px-8 font-bold text-gray-900 shadow-sm border border-gray-200 hover:scale-105 transition-transform"
                >
                  Book now
                </Button>
              </div>
            </Card>
          </div>

          {/* ==========================================
              RIGHT COLUMN: Minimalist Clinical Details
          ========================================== */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            
            {/* Quick Stats Banner - Fixed for mobile wrapping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="flex flex-row items-center gap-5 rounded-[2rem] bg-[#F2F2F7] border-none shadow-none p-6 lg:p-8">
                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm">
                   <Icon icon="solar:medal-star-linear" className="text-2xl" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xl font-extrabold text-gray-900">{doctor.experience}</span>
                   <span className="text-sm font-semibold text-gray-500">Experience</span>
                 </div>
              </Card>

              <Card className="flex flex-row items-center gap-5 rounded-[2rem] bg-[#F2F2F7] border-none shadow-none p-6 lg:p-8">
                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-emerald-500 shadow-sm">
                   <Icon icon="solar:verified-check-bold" className="text-2xl" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xl font-extrabold text-gray-900">Verified</span>
                   <span className="text-sm font-semibold text-gray-500">BMDC Registered</span>
                 </div>
              </Card>
            </div>

            {/* Main Info Card */}
            <Card className="flex-1 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm shadow-black/[0.03] p-8 lg:p-10">
              
              <div className="mb-10">
                <h2 className="mb-3 text-lg font-extrabold text-gray-900">Background</h2>
                <p className="text-base font-medium leading-relaxed text-gray-500">
                  {doctor.description}
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-3 text-lg font-extrabold text-gray-900">Practice Location</h2>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold text-gray-900">{doctor.hospital}</span>
                  <span className="text-base font-medium text-gray-500">{doctor.location}</span>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">Select a Time</h2>
                <div className="flex flex-wrap gap-3">
                  {doctor.availability?.map((slot, index) => (
                    <Chip
                      key={index}
                      variant="flat"
                      radius="full"
                      className="h-12 bg-[#F2F2F7] px-4 font-bold text-gray-900 transition-colors hover:bg-gray-200 cursor-pointer"
                    >
                      {slot}
                    </Chip>
                  ))}
                </div>
              </div>

            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;