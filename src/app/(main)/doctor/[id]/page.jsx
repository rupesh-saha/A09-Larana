import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Card, Chip } from "@heroui/react";
import BookingModal from "@/Components/BookingModal";

export const metadata = {
  title: "Doctor Details",
  description: "Depth insights",
};

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
    <div className="min-h-screen bg-[#FAFAFA] py-12 md:py-20 font-sans text-gray-900 pt-26 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-10 flex items-center text-sm font-semibold text-gray-400">
          <Link href="/all-appointments" className="hover:text-gray-900 transition-colors">
            All Doctors
          </Link>
          <Icon icon="solar:alt-arrow-right-linear" className="mx-2 text-lg" />
          <span className="text-gray-900">{doctor.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-4">

          <div className="flex flex-col lg:col-span-5">
            <Card className="group relative h-[500px] w-full flex flex-col justify-between overflow-hidden bg-[#F2F2F7] border-none shadow-none p-6 lg:h-[650px] lg:p-8 rounded-xl">

              <div className="absolute inset-0 z-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  priority
                  className="object-cover object-top opacity-95 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute top-0 w-full h-48 bg-linear-to-b from-white/10 via-[#0066ff]/20 to-transparent"></div>
                <div className="absolute bottom-0 w-full h-48 bg-linear-to-t from-black/70 via-[#0066ff]/20 to-transparent"></div>
              </div>

              {/* Top Left Text */}
              <div className="relative z-10 flex flex-col">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight lg:text-4xl">
                  {doctor.name}
                </h1>
                <p className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white border border-white/20 shadow-sm w-fit mt-2 glass">
                  {doctor.specialty}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap">
                <div className="flex flex-col">
                  <span className="mt-1 flex flex-wrap items-center gap-1.5 font-extrabold text-white sm:flex-nowrap">
                    <Icon icon="solar:wallet-money-linear" className="text-lg shrink-0" />
                    <span>Consultation</span>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs uppercase tracking-widest font-extrabold border border-white/20 shadow-sm glass text-white">
                      BDT {doctor.fee}
                    </span>
                  </span>
                </div>

                {/* The Extracted Client Component */}
                <BookingModal slot={doctor.availability} doctorName={doctor.name} fee={doctor.fee} />
                
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-7">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Card className="flex flex-row items-center gap-5 rounded-xl bg-[#F2F2F7] border-none shadow-none p-6 lg:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm">
                  <Icon icon="solar:medal-star-linear" className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-gray-900">{doctor.experience}</span>
                  <span className="text-sm font-semibold text-gray-500">Experience</span>
                </div>
              </Card>

              <Card className="flex flex-row items-center gap-5 rounded-xl bg-[#F2F2F7] border-none shadow-none p-6 lg:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-emerald-500 shadow-sm">
                  <Icon icon="solar:verified-check-bold" className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-gray-900">Verified</span>
                  <span className="text-sm font-semibold text-gray-500">BMDC Registered</span>
                </div>
              </Card>
            </div>

            <Card className="flex-1 bg-white border border-gray-100 shadow-sm shadow-black/3 p-4 rounded-xl lg:p-5">

              <div className="mb-10">
                <h2 className="mb-3 text-xl font-extrabold text-gray-900">Background</h2>
                <p className="text-base font-medium text-justify leading-relaxed text-gray-500">
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

              <div className="mt-auto pt-6 border-t border-gray-100">
                <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">Available Slots</h2>
                <div className="flex flex-wrap gap-3">
                  {doctor.availability?.map((slot, index) => (
                    <Chip key={index} variant="flat" radius="full" className="h-12 bg-[#F2F2F7] px-4 font-bold text-gray-900 transition-colors hover:bg-gray-200 cursor-pointer">
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