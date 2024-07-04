"use client";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Homepage from "@/component/homepage/Homepage";
import PaketTour from "@/component/paketTour/PaketTour";
import Armada from "@/component/armada/Armada";
import Gallery from "@/component/gallery/Gallery";

export default function Home() {
  return (
  <div className=''>
    <Navbar />
    <Homepage />
    <PaketTour />
    <Armada />
    <Gallery />
    <Footer />
  </div>
  );
}
