import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const AboutUPCON = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      delay: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-center justify-between w-screen px-12 py-10 gap-10 bg-white/50 backdrop-blur-md rounded-xl shadow-lg"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2" ref={textRef}>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          About UPCON 2025
        </h1>
        <article className="text-lg text-gray-800 bg-white/50 p-4 rounded-lg shadow-md leading-relaxed">
          The 9th "IEEE Uttar Pradesh Section International Conference on
          Electrical, Electronics and Computer Engineering (UPCON-2022)" is a
          top-level International Conference covering broad topics in Electrical,
          Computer, and Electronics Engineering. This year, it is organized by
          IIIT Allahabad, India...
        </article>
      </div>

      {/* Right Image */}
      <motion.div
        ref={imageRef}
        className="w-80 h-80 bg-[url('/About.jpg')] bg-cover bg-center rounded-full shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      ></motion.div>
    </div>
  );
};

export default AboutUPCON;