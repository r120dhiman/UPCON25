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
    <div className='flex flex-col min-h-screen relative'>
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white to-blue-700/40 via-[#97148c]/40 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-20 bg-bottom bg-no-repeat bg-contain 
      brightness-100 mix-blend-multiply"
        />
      </div>

      <div className="upper flex flex-col sm:flex-row justify-center md:justify-between items-center px-6 sm:px-8 md:px-10 pb-2 shadow-lg transition-all duration-300 gap-2 md:gap-6 border-b border-purple-100 bg-gradient-to-r from-[#89107f]/20 via-white to-[#89107f]/20" >

        <img
          src="/UPCON.png"
          alt="UPCON logo"
          className="w-28 sm:w-36 md:w-44 hover:scale-105 transition-transform duration-300 pt-4"
          style={{ clipPath: 'inset(0 0 27% 0)' }}
        />


        <img src="/Logos/IEEE.webp" alt="IEEE logo"
          className="h-20 sm:h-28 md:h-32 hover:scale-105 transition-transform duration-300" />

        <img src="/Logos/IITBHU.png" alt="IIT BHU logo"
          className="w-24 sm:w-32 md:w-36 hover:scale-105 transition-transform duration-300" />

      </div>
      <div className="upper flex flex-row justify-center items-center px-2 py-4 gap-4 transition-all duration-300 bg-gradient-to-r from-purple-100/50 to-blue-100/50 shadow-md">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform">
          UPCON 2025
        </h1>
        <div className="flex flex-col items-center gap-2 rounded-2xl p-2 transition-all duration-300 hover:scale-105">
          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            13-15 December'25
          </p>
        </div>
      </div>
      <div className="sticky top-0 z-50">
        <Navbar color={false} backdrop={true} />
      </div>
      <div className="main w-screen">
        <div className="w-screen flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 py-10 gap-8">
          {/* Text Section */}
          <motion.div
            ref={cardRef}
            className="bg-white/50 backdrop-blur-3xl rounded-3xl shadow-lg p-6 sm:p-8 max-w-full lg:max-w-[60%] transition-all hover:bg-white/60"
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 hover:text-blue-900 transition-colors">
              About UPCON 2025
            </h1>
            <article className="text-base sm:text-lg text-black text-justify leading-relaxed font-medium italic hover:text-blue-900 transition-colors">
              The 11th "IEEE Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON-2023)" will be held at IIT BHU, Varanasi, India from 13-15 December 2025. UPCON is the top notch International conference covering broad topics in the areas of Electrical, Computer, and Electronics Engineering.
              <br /><br />
              UPCON conference is organized annually at various locations in Uttar Pradesh (UP). Prior to this, first ten series of UPCON conferences were organized at GCET, Greater Noida (2014), Indian Institute of Information Technology Allahabad (2015), IIT BHU Varanasi (2016), GLA University Mathura (2017), MMMUT Gorakhpur (2018), AMU Aligarh (2019), MNNIT Allahabad (2020), Tula’s Institute Dehradun (2021), IIIT Allahabad (2022), Amity University (2023), and SRMCEM (2024).
              <br /><br />
              The conference is technically and financially sponsored by IEEE UP Section. There are multiple tracks in the conference covering almost all areas of Electrical, Computer & Electronics Engineering. Conference Proceedings will be abstracted and indexed by IEEE Xplore.
            </article>
          </motion.div>

          {/* Image Section */}
          <div className="relative w-72 sm:w-96 lg:w-[450px] h-72 sm:h-96 lg:h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-50 blur-3xl"></div>
            <div className="relative w-full h-full bg-[url(/About.jpg)] bg-cover bg-center rounded-full shadow-2xl border-4 border-white transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
              <div className="absolute -top-4 left-4 w-full h-full rounded-full bg-white/10 blur-lg"></div>
            </div>
          </div>
        </div>



        <div className="flex justify-center mt-12 mb-10">
          <button className="group relative w-1/2 bg-gradient-to-r from-[#5e365b] to-blue-700 text-white font-bold py-4 text-xl rounded-full 
            shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.4)] 
            transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer">
              
            <span className="relative z-10">Paper Submission Template</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        <div className="w-full px-2 sm:px-4 lg:px-6 py-8 bg-gradient-to-b from-transparent to-white/10">
          <div className="max-w-7xl w-full mx-auto">

            <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 self-center items-center justify-items-center">
              <Card
                title={"Call for Papers"}
                logoImage={"/watermark.jpg"}
                speakerImage={"/watermark.jpg"}
                description={"lorem20"}
                className="mx-auto max-w-sm w-full"
              />
              <Card
                title={"Call for Proposals"}
                logoImage={"/watermark.jpg"}
                speakerImage={"/watermark.jpg"}
                description={"lorem20"}
                className="mx-auto max-w-sm w-full"
              />
              <Card
                title={"Call for Tutorials"}
                logoImage={"/watermark.jpg"}
                speakerImage={"/watermark.jpg"}
                description={"lorem20"}
                className="mx-auto max-w-sm w-full"
              />
              <Card
                title={"Important Dates"}
                logoImage={"/watermark.jpg"}
                speakerImage={"/watermark.jpg"}
                description={"lorem20"}
                className="mx-auto max-w-sm w-full"
              />
            </div>
          </div>
        </div>
        <SponsorsSection />
        <TourismGallery />
      </div>
    </div>

  )
}

export default Homepage
