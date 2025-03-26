"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Navbar from '../components/Navbar'

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
    <div className='flex flex-col bg-fixed bg-[url(/BG-BHU.jpg)]  h-screen' >
      <div className="upper flex flex-row justify-between items-center px-16 pb-2
        backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
  <img src="/UPCON.png" alt="UPCON logo" className="w-24 h-24 " />
  <h1 className="text-4xl  text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-xl">
    UPCON 2025
  </h1>
  <p className="text-xl text-black font-medium bg-blue/20 px-4 py-2 rounded-lg shadow-md">
    From DD/MM To DD/MM
  </p>
</div>
<Navbar color={false} backdrop={true}/>
<div className="w-screen flex flex-row justify-between items-center backdrop-blur-xs px-16 py-10">
  
  {/* Left Section - About Content */}
  <motion.div
  ref={cardRef}
  className="bg-white/50 backdrop-blur-md rounded-3xl shadow-lg p-8 max-w-[50%] transition-all"
  whileHover={{
    y: -10,
    scale: 1.05,
    boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.3)",
  }}
  onHoverEnd={() => {
    gsap.to(cardRef.current, {
      y: 0, // Falls down smoothly
      scale: 1,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      duration: 0.5,
      ease: "power2.out",
    });
  }}
>
  <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About UPCON 2025</h1>
  <article className="text-lg text-gray-700 text-justify leading-relaxed">
    The IEEE Uttar Pradesh Section International Conference on Electrical, Electronics, and Computer
    Engineering (UPCON) is a premier annual conference covering diverse topics in Electrical,
    Computer, and Electronics Engineering. The 9th edition, organized by IIIT Allahabad, continues
    the tradition of previous editions held at institutions like IIT-BHU, MNNIT Allahabad, AMU, and
    MMMUT Gorakhpur.
  </article>
</motion.div>

  {/* Right Section - Circular Image */}
  <div className="relative w-[400px] h-[400px] flex items-center justify-center">
  
  {/* Outer Glow for 3D Effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-50 blur-3xl"></div>
  
  {/* 3D Image Container */}
  <div className="relative w-full h-full bg-[url(/About.jpg)] bg-cover bg-center rounded-full shadow-2xl border-4 border-white transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
    
    {/* Extra Layer for Depth */}
    <div className="absolute -top-4 left-4 w-full h-full rounded-full bg-white/10 blur-lg"></div>
    
  </div>
  
</div>

</div>


</div>
  )
}

export default Homepage
