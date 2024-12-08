import Dresstyle from "@/components/dresstyle";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Herosub from "@/components/herosub";
import Navbar from "@/components/navbar";
import Review from "@/components/review";
import Reviewsection from "@/components/reviewsection";
import Topheader from "@/components/topheader";

export default function Home() {
  return (
    <div>
      <Topheader/>
      <Navbar/>
      <Hero/>
      <Herosub/>
      <Dresstyle/> 
      <Review/>
      <Reviewsection/>
      <Footer/>
    </div>
  );
}
