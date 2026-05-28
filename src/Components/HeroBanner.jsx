"use client";

import React from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles (Mandatory for it to look right)
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { Button } from "@heroui/react";

const HeroBanner = () => {

  const slides = [
    {
      id: 1,
      title: "Expert Healthcare, Just a Click Away",
      subtitle: "Book appointments with top-rated doctors in your city effortlessly.",
      image: "/cover5.avif",
    },
    {
      id: 2,
      title: "Your Health Is Our Top Priority",
      subtitle: "Experience seamless scheduling and manage your medical records securely.",
      image: "/cover2.avif",
    },
    {
      id: 3,
      title: "Connect With Specialists Instantly",
      subtitle: "Find the right doctor for your specific needs and get care faster.",
      image: "/cover1.jpeg",
    },
    {
      id: 4,
      title: "Elevating your health, one appointment at a time.",
      subtitle: "Experience world-class medical consultation in spaces designed for your comfort and well-being.",
      image: "/cover4.avif",
    },
    {
      id: 5,
      title: "Health First - Always",
      subtitle: "Check your health immediately and secure youre health & future.",
      image: "/cover3.avif",
    }
  ];

  return (
    <section className="w-full h-[93vh] relative bg-content1">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        loop={true}
        speed={1500} 
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60 z-10"></div>
              
              <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start text-white">
                <h1 className="text-5xl md:text-6xl font-bold max-w-2xl leading-tight mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button 
                    size="lg"
                    style={{ backgroundColor: "#0066FF", color: "#FFFFFF" }}
                    className="font-semibold shadow-lg shadow-blue-500/30 px-8"
                  >
                    <Link href={'/all-appointments'}>
                      Book Appointment
                    </Link>
                    
                  </Button>
                  <Button
                    size="lg"
                    variant="bordered"
                    className="glass font-semibold text-white bg-white/10 border-white hover:bg-white hover:text-black px-8"
                  >
                    <Link href={'/dashboard'}>
                      My Dashboard
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default HeroBanner;