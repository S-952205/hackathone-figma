import Dresstyle from "@/components/dresstyle";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Herosub from "@/components/herosub";
import Navbar from "@/components/navbar";
import Review from "@/components/review";
import Reviewsection from "@/components/reviewsection";
import Topheader from "@/components/topheader";
import Newarrivals from "@/components/newarrivals";
import Sales from "@/components/sales";
import Salesrates from "@/components/salesrates";

export default function Home() {
  return (
    <div>
      <Topheader/>
      <Navbar/>
      <Hero/>
      <Herosub/>
      <Newarrivals/>
      <Sales/>
      <Salesrates/>
      <Dresstyle/> 
      <Review/>
      <Reviewsection/>
      <Footer/>
    </div>
  );
}
