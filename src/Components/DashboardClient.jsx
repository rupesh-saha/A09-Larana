"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import UpdateModal from "./UpdateModal";

export default function DashboardClient({ appointments, session }) {
  const [activeTab, setActiveTab] = useState("bookings");



  const user = session.user;

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 pt-28 pb-20 px-4 lg:px-8">
      <div className="mx-auto max-w-[98%] md:max-w-[97%] flex flex-col md:flex-row gap-4">

        <div className="w-full md:w-[280px] shrink-0 flex flex-col gap-3">
          <div className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-4 shadow-sm">
            <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden bg-gray-100">
              <Image src={user.image} alt={user.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-gray-900 leading-tight">{user.name}</span>
              <span className="text-xs font-medium text-gray-500 break-all">{user.email}</span>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col gap-1 shadow-sm">
            <button onClick={() => setActiveTab("bookings")} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors ${activeTab === "bookings" ? "bg-[#F0F5FF] text-[#0066FF]" : "text-gray-600 hover:bg-gray-50"
              }`}>
              <Icon icon="solar:calendar-bold-duotone" className="text-lg" />
              My Appointments
            </button>

            <button onClick={() => setActiveTab("profile")} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors ${activeTab === "profile" ? "bg-[#F0F5FF] text-[#0066FF]" : "text-gray-600 hover:bg-gray-50"
              }`}>
              <Icon icon="solar:user-bold-duotone" className="text-lg" />
              My Profile
            </button>
          </div>
        </div>


        <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 md:p-6 shadow-sm min-h-[500px]">

          {activeTab === "bookings" && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 md:mb-8">My Appointments</h2>

              {appointments.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-gray-500 font-medium">No appointments found.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {appointments.map((apt) => (
                    <div
                      key={apt._id}
                      className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-5 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex flex-col gap-3">
                        <span className="font-extrabold text-gray-900 text-lg">{apt.doctorName}</span>
                        {/* ✅ Fix: Added flex-wrap and gap-y-2 for mobile wrapping */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-gray-600">
                          {/* ✅ Fix: Added whitespace-nowrap to prevent ugly text breaking */}
                          <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <Icon icon="solar:calendar-linear" className="text-[#0066FF]" />
                            {apt.date}
                          </span>
                          <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <Icon icon="solar:clock-circle-linear" className="text-[#0066FF]" />
                            {apt.slot}
                          </span>
                          <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <Icon icon="solar:dollar-minimalistic-linear" className="text-[#0066FF]" />
                            BDT {apt.fee}
                          </span>
                        </div>
                      </div>


                      <div className="flex flex-wrap items-center gap-2 mt-2 xl:mt-0">

                        <UpdateModal apt={apt} session={session}/>

                        <button className="flex-1 xl:flex-none px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-sm rounded-lg transition-colors text-center">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* MY PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900">My Profile</h2>
                <button className="w-full sm:w-auto px-5 py-2 bg-[#0066ff] text-white font-bold text-sm rounded-lg hover:scale-105 active:scale-95 transition-all">
                  Edit Profile
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-[#F2F2F7] rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  {/* ✅ Fix: Added shrink-0 to prevent the profile image from squeezing */}
                  <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden bg-white border border-gray-200">
                    <Image src={user.image} alt={user.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center sm:mt-2">
                    <h3 className="text-xl font-extrabold text-gray-900">{user.name}</h3>
                    <p className="text-gray-500 font-medium break-all">{user.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-xl p-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Full Name</p>
                    <p className="font-extrabold text-gray-900">{user.name}</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</p>
                    <p className="font-extrabold text-gray-900 break-all">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}