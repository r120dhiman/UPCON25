import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Disable eslint for this import as the actual paths would be replaced with real logo paths
/* eslint-disable */
const sponsors = [
  { name: "IEE IAS", logo: "/Logos/IEEE_IAS.png" },
  { name: "IEEE IES", logo: "/Logos/IEEE_IES.png" },
  { name: "IEEE PELS", logo: "/Logos/IEEE_PELS.png" },
  { name: "IEEE", logo: "/Logos/IEEE.webp" },
  { name: "IIT BHU", logo: "/Logos/IITBHU.png" }
];
/* eslint-enable */

gsap.registerPlugin(ScrollTrigger);

const SponsorsSection = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const container = containerRef.current;

    // Infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marquee, {
      x: "-50%",
      duration: 10,
      ease: "linear"
    }).to(marquee, {
      x: "0%",
      duration: 0,
      immediateRender: true
    });

    // Responsive scroll trigger
    const handleResize = () => {
      if (window.innerWidth < 640) {
        tl.pause();
      } else {
        tl.play();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
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
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="mx-8 md:mx-12 lg:mx-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-12 md:h-16 lg:h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default SponsorsSection;