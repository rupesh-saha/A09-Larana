"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar, FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    location: "Patient • Dhaka",
    initials: "RU",
    text: "Booked an appointment within 2 minutes. The doctor was punctual and professional. Highly recommend!",
  },
  {
    id: 2,
    name: "Sadia Begum",
    location: "Patient • Chittagong",
    initials: "SB",
    text: "Managing my family's health appointments has never been easier. The platform is very intuitive.",
  },
  {
    id: 3,
    name: "Karim Ahmed",
    location: "Patient • Sylhet",
    initials: "KA",
    text: "Finally a reliable system for booking specialist doctors. No more long phone wait times!",
  },
  {
    id: 4,
    name: "Farhana Rahman Medha",
    location: "Patient • Dhaka",
    initials: "FI",
    text: "The user interface is spotless. I found a top-rated sexy cardiologist in seconds. Outstanding service.",
  },
];

const RatingMarquee = () => {
  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <p className="text-[#0066FF] font-bold tracking-widest uppercase text-sm mb-2 text-center">
          What Patients Say
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight text-center">
          Patient Testimonials
        </h2>
      </div>

      {/* React Fast Marquee Implementation */}
      <Marquee 
        pauseOnHover={true} 
        gradient={false} 
        speed={45}
        className="py-4 overflow-hidden"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative w-[350px] shrink-0 bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-xl group mx-4"
          >
            {/* Background Watermark Quote */}
            <FaQuoteRight className="absolute top-6 right-6 text-7xl text-slate-200/50 -rotate-12 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110" />

            {/* Review Text */}
            <p className="relative z-10 text-gray-600 font-medium leading-relaxed mb-8 italic">
              " {testimonial.text} "
            </p>

            {/* Bottom Section: Avatar, Name, and Stars */}
            <div className="relative z-10 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center font-bold text-lg border border-[#0066FF]/20">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* 5-Star Rating */}
              <div className="flex text-amber-400 text-sm gap-0.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default RatingMarquee;