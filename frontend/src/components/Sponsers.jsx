import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Star, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
  { name: "Google", icon: <Briefcase size={40} />, color: "#4285F4" },
  { name: "Microsoft", icon: <Star size={40} />, color: "#737373" },
  { name: "Tesla", icon: <Award size={40} />, color: "#E82127" },
  { name: "Netflix", icon: <Briefcase size={40} />, color: "#E50914" },
  { name: "Adobe", icon: <Star size={40} />, color: "#F00" },
];

const Sponsors = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    gsap.to(marquee, {
      x: "-50%",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full py-16 overflow-hidden bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Sponsors
      </h2>
      <div className="relative w-full flex items-center overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap gap-16 w-max"
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 min-w-[200px]"
              style={{ borderTop: `4px solid ${sponsor.color}` }}
            >
              <div className="text-4xl mb-4" style={{ color: sponsor.color }}>
                {sponsor.icon}
              </div>
              <p className="text-lg font-semibold text-gray-700">
                {sponsor.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
