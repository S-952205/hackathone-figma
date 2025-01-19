import Dresstyle from "@/components/dresstyle";
import Hero from "@/components/hero";
import Herosub from "@/components/herosub";
import Review from "@/components/review";
import Reviewsection from "@/components/reviewsection";
import Topselling from "@/components/topselling";
import Divider from "@/components/divider";
import NewArrival from "@/components/newArrival";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Herosub/>
      <NewArrival/>
      <Divider/>
      <Topselling/>
      <Dresstyle/> 
      <Review/>
      <Reviewsection/>
    </div>
  );
}
