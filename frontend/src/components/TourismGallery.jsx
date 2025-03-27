import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const attractions = [
  { name: "Ganga Aarti", image: "/ganga-aarti.jpg" },
  { name: "Ganga Ghats", image: "/ganga-ghats.jpg" },
  { name: "Vishwanath Temple", image: "/Kashi_Vishwanath.jpg" },
  { name: "Sarnath", image: "/sarnath.jpg" },
  { name: "Ramnagar Fort", image: "/ramnagarfort.jpg" },
  { name: "BHU", image: "/bhu.jpg" },
];

function TourismGallery() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marquee, {
      x: "-50%",
      duration: 12,
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
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-screen py-10 overflow-hidden bg-gray-600/60 my-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-100 mb-10 backdrop-blur-5xl">
          Explore Varanasi
        </h2>
        
        <div 
          ref={containerRef} 
          className="relative w-full overflow-hidden"
        >
          <div 
            ref={marqueeRef} 
            className="flex items-center justify-center w-full"
          >
            {[...attractions, ...attractions].map((attraction, index) => (
              <motion.div
                key={index}
                className="mx-4 md:mx-6 lg:mx-10 flex flex-col items-center justify-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 border-black/60 border-2 cursor-pointer"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-100">
                  {attraction.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourismGallery;
