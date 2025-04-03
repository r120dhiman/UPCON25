import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sponsors = [
  { name: "IEE IAS", logo: "/Logos/IEEE_IAS.png" },
  { name: "IEEE IES", logo: "/Logos/IEEE_IES.png" },
  { name: "IEEE PELS", logo: "/Logos/IEEE_PELS.png" },
  { name: "IEEE", logo: "/Logos/IEEE.webp" },
  { name: "IIT BHU", logo: "/Logos/IITBHU.png" },
  { name: "IEEE EPS", logo: "/Logos/eps-logo.png" },
];

gsap.registerPlugin(ScrollTrigger);

const SponsorsSection = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Infinite scroll animation
    const tl = gsap.timeline({
      repeat: -1, // Set to -1 for infinite loops
      defaults: {
        ease: "none"
      }
    });

    tl.to(marquee, {
      x: "-50%",
      duration: 15,
      ease: "linear"
    });

  }, []);

  return (
    <section className="relative w-full py-10 bg-gradient-to-br from-gray-100/70 to-gray-200/70 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-10 tracking-tight font-stretch-semi-expanded">
         SPONSORS
        </h2>
        
        <div 
          ref={containerRef} 
          className="relative w-full overflow-hidden"
        >
          <div 
            ref={marqueeRef} 
            className="flex items-center justify-center w-[200%]"
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="mx-4 md:mx-6 lg:mx-8 flex items-center justify-center opacity-95 hover:opacity-100 transition-all duration-300"
              >
                <div className="complete ">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-32 sm:h-36 md:h-40 lg:h-44 w-auto min-w-[120px] object-contain mix-blend-multiply filter contrast-125 brightness-95"
                />
                <p className="text-center ">UP Chapter</p>
                </div>
              </motion.div>
            ))}
  
            {/* Second set with same styles */}
            {sponsors.map((sponsor, index) => (

              <motion.div
                key={`second-${index}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="mx-4 md:mx-6 lg:mx-8 flex items-center justify-center opacity-95 hover:opacity-100 transition-all duration-300"
              >
                <div className="complete">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-32 sm:h-36 md:h-40 lg:h-44 w-auto min-w-[120px] object-contain mix-blend-multiply filter contrast-125 brightness-95"
                />
                <p className="text-center ">UP Chapter</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Subtle gradient overlay with reduced width */}
      <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-gray-100/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-gray-100/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}

export default SponsorsSection;