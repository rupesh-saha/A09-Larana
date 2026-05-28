import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AllAppointmentsPage = async () => {

  let doctors = [];
  try {
    const res = await fetch('http://localhost:5002/doctors');
    doctors = await res.json();
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-35">
      <div className="max-w-[93%] md:max-w-[97%] mx-auto px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-[#0066FF] font-bold tracking-widest uppercase text-sm mb-3">
            Our Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Find Your Doctor
          </h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Browse our extensive list of top-rated healthcare professionals and book your appointment effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group relative col-span-1 h-[380px] w-full flex flex-col justify-between overflow-hidden rounded-3xl border-none shadow-sm hover:scale-101 transition-all duration-500"
            >
              <Image
                alt={doctor.name}
                aria-hidden="true"
                width={400}
                height={500}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                src={doctor.image}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/10 z-0 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-start p-5">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white border border-white/20 shadow-sm">
                  {doctor.specialty}
                </span>
              </div>

              <div className="relative z-10 mt-auto flex flex-col p-5 gap-4">
                <div className="flex flex-col gap-0.5">
                  <div className="text-xl font-bold text-white tracking-tight leading-tight">
                    {doctor.name}
                  </div>
                  <div className="text-sm font-medium text-white/70 line-clamp-1">
                    {doctor.hospital}
                  </div>
                  <div className="text-xs font-medium text-white/50 mt-1">
                    {doctor.experience} Experience • BDT {doctor.fee}
                  </div>
                </div>

                <Link href={`/doctor/${doctor.id}`} className="flex h-10 w-full items-center justify-center rounded-xl bg-white px-3 text-sm font-bold text-[#0066FF] shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#0066FF]/80 hover:text-white hover:font-extrabold active:bg-[#0066FF]/80 active:text-white active:font-extrabold active:scale-95 glass">
                  View Details
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default AllAppointmentsPage;