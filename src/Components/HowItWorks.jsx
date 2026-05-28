import React from "react";
import { FaMagnifyingGlass, FaCalendarDays, FaClipboardCheck, FaUserDoctor } from "react-icons/fa6";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Find a Doctor",
      description: "Browse specialists by category, location, or availability.",
      icon: FaMagnifyingGlass,
    },
    {
      id: 2,
      title: "Choose a Slot",
      description: "Pick a date and time that works best for your schedule.",
      icon: FaCalendarDays,
    },
    {
      id: 3,
      title: "Confirm Booking",
      description: "Fill in your details and confirm your appointment instantly.",
      icon: FaClipboardCheck,
    },
    {
      id: 4,
      title: "See the Doctor",
      description: "Visit at your scheduled time and get the care you need.",
      icon: FaUserDoctor,
    },
  ];

  return (
    <section className="py-20 bg-blue-300/10 w-full">
      <div className="max-w-[93%] md:max-w-[97%] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-[#0066FF] font-bold tracking-widest uppercase text-sm mb-2">
            Simple Steps
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Background Connecting Line (Visible only on Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>

          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative z-10 flex flex-col bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow hover:scale-110 transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="w-12 h-12 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-blue-500/20">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mb-5 text-[#0066FF]/80">
                <step.icon className="w-8 h-8" />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;