"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Navbar from '../components/Navbar'
import Card from "../components/Brochure_Card";
import SponsorsSection from "../components/Sponsers";
import TourismGallery from "../components/TourismGallery";

function Homepage() {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: -50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
    );
  }, []);
  return (
    <div className='flex flex-col bg-fixed bg-[url(/BG-BHU.jpg)] min-h-screen' >
      <div className="upper flex flex-row justify-between items-center px-16 pb-2
      backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <img src="/UPCON.png" alt="UPCON logo" className="w-28 h-28 hover:scale-105 transition-transform duration-300" />
        <img src="/Logos/IEEE.webp" alt="UPCON logo" className="h-28 w-56 hover:scale-105 transition-transform duration-300" />
        <img src="/Logos/IITBHU.png" alt="UPCON logo" className="w-28 h-28 hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="upper flex flex-row justify-center items-center px-11 py-2
      backdrop-blur-3xl gap-5 hover:backdrop-blur-2xl transition-all duration-300">
        <h1 className="text-4xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-600 to-[#a7179d] drop-shadow-xl hover:scale-105 transition-transform">
          UPCON 2025
        </h1>
        <p className="text-xl text-black font-medium bg-blue/20 px-4 py-2 rounded-lg shadow-md hover:shadow-xl hover:bg-blue/30 transition-all duration-300">
          From DD/MM To DD/MM
        </p>
      </div>
      <Navbar color={false} backdrop={true} />
      <div className="main w-screen backdrop-blur-xs">
        <div className="w-screen flex flex-row justify-between items-center px-12 py-10">
          <motion.div
            ref={cardRef}
            className="bg-white/50 backdrop-blur-3xl rounded-3xl shadow-lg p-8 max-w-[60%] transition-all hover:bg-white/60"
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.3)",
            }}
            onHoverEnd={() => {
              gsap.to(cardRef.current, {
                y: 0,
                scale: 1,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                duration: 0.5,
                ease: "power2.out",
              });
            }}
          >
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4 hover:text-blue-900 transition-colors">About UPCON 2025</h1>
            <article className="text-lg text-black text-justify leading-relaxed font-semibold italic hover:text-gray-900 transition-colors">
              The 11th "IEEE Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON-2023)" will be held at IIT BHU, Varanasi, India from 13-15 December 2025. UPCON is the top notch International conference covering broad top topics in the areas of Electrical, Computer and Electronics Engineering. UPCON conference is organized annually at various locations in Uttar Pradesh (UP). Prior to this, first ten series of UPCON conferences were organized at GCET, Greater Noida (2014), Indian Institute of Information Technology Allahabad (IIITA), Allahabad (2015), Indian Institute of Technology (IIT-BHU) Varanasi (2016) and GLA University (GLAU) Mathura (2017), MMMUT Gorakhpur (2018), AMU Aligarh (2019), MNNIT Allahabad (2020) and Tula’s Institute Dehradun (2021), IIIT Allahabad (2022), Amity University (2023), and SRMCEM (2024) respectively. This conference will provide an excellent platform to the researchers to present their research work and is known as the UP-section's conference.
              The conference is technically and financially sponsored by IEEE UP Section. There are multiple tracks in the conference covering almost all areas of Electrical, Computer & Electronics Engineering. Uttar Pradesh Section is located in Region 10 and is represented at the India Council. This Section organizes various activities throughout the year. Conference Proceedings will be abstracted and indexed by IEEE xplore.
            </article>
          </motion.div>

          <div className="relative w-[450px] h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-50 blur-3xl"></div>
            <div className="relative w-full h-full bg-[url(/About.jpg)] bg-cover bg-center rounded-full shadow-2xl border-4 border-white transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
              <div className="absolute -top-4 left-4 w-full h-full rounded-full bg-white/10 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
        <button className="w-1/2 bg-gradient-to-r text-white font-bold py-4 text-xl mt-8 from-[#9e1792] to-[#b70ca9] transition-all duration-300 shadow-lg rounded-full hover:shadow-2xl hover:scale-105 hover:from-[#b70ca9] hover:to-[#9e1792] cursor-pointer">
          Paper Submission Template
        </button>
      </div>
      <div className="cards flex flex-row justify-evenly items-center flex-wrap my-8 gap-6">
        <Card title={"Call for Papers"} logoImage={"/watermark.jpg"} speakerImage={"/watermark.jpg"} description={"lorem20"} />
        <Card title={"Call for Proposals"} logoImage={"/watermark.jpg"} speakerImage={"/watermark.jpg"} description={"lorem20"} />
        <Card title={"Call for Tutorials"} logoImage={"/watermark.jpg"} speakerImage={"/watermark.jpg"} description={"lorem20"} />
        <Card title={"Important Dates"} logoImage={"/watermark.jpg"} speakerImage={"/watermark.jpg"} description={"lorem20"} />
      </div>
      <SponsorsSection />
      <TourismGallery />
    </div>

  )
}

export default Homepage
