import Header from "./componets/Header";
import Hero from "./componets/Hero";
import First_buy from "./componets/First_buy";
import Our_service from "./componets/Our_service";
import Testimonial from "./componets/Testimonial";
import About_us from "./componets/About_us";
import Price from "./componets/Price";
import PetCare from "./componets/PetCare";
import Special from "./componets/Special";
import Map from "./componets/Map";
import Footer from "./componets/Footer";

export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <First_buy />
    <Our_service />
    <About_us />
    <Price />
    <PetCare />
    <Special />
    <Testimonial />
    <Map />
    <Footer />
   </>
  );
}
