import HeroBanner from "@/Components/HeroBanner";
import HowItWorks from "@/Components/HowItWorks";
import RatingMarquee from "@/Components/RatingMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <HowItWorks/>
      <RatingMarquee/>
      
    </div>
  );
}
