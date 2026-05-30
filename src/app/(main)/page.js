import FeaturedSection from "@/Components/FeaturedSection";
import HeroBanner from "@/Components/HeroBanner";
import HowItWorks from "@/Components/HowItWorks";
import RatingMarquee from "@/Components/RatingMarquee";
import Image from "next/image";

export const metadata = {
  title: "Larana - Your Trusted Doctor Appointment Platform",
  description: "Book appointments with top-rated doctors in Bangladesh. Fast, easy, and secure medical appointment booking system.",
  keywords: "doctor appointment, book doctor, medical, healthcare, Bangladesh, Dhaka",
  openGraph: {
    title: "Larana - Your Trusted Doctor Appointment Platform",
    description: "Book appointments with top-rated doctors in Bangladesh.",
    siteName: "Larana",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <FeaturedSection/>
      <HowItWorks/>
      <RatingMarquee/>
      
    </div>
  );
}
