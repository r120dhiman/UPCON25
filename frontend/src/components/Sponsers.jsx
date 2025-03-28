import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sponsors = [
  { name: "IEE IAS", logo: "/Logos/IEEE_IAS.png" },
  { name: "IEEE IES", logo: "/Logos/IEEE_IES.png" },
  { name: "IEEE PELS", logo: "/Logos/IEEE_PELS.png" },
  { name: "IEEE", logo: "/Logos/IEEE.webp" },
  { name: "IIT BHU", logo: "/Logos/IITBHU.png" }
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
    <section className="relative w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-14 tracking-tight">
          Trusted By Industry Leaders
        </h2>
        
        <div 
          ref={containerRef} 
          className="relative w-full overflow-hidden"
        >
          <div 
            ref={marqueeRef} 
            className="flex items-center justify-center w-[200%]"
          >
            {/* First set of sponsors */}
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="mx-4 md:mx-6 lg:mx-9 flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-14 md:h-20 lg:h-24 w-auto transition-all duration-300"
                />
              </motion.div>
            ))}
            {/* Second set of sponsors for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="mx-4 md:mx-6 lg:mx-9 flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-14 md:h-20 lg:h-24 w-auto transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-0 w-14 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-14 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default SponsorsSection;