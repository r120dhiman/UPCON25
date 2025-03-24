"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, FileDown } from "lucide-react";
import gsap from "gsap";
import Sponsors from "../components/Sponsers";

function Homepage() {
  const sectionRef = useRef(null);
  const datesRef = useRef([]);
  const dates = [
    { title: "Call for Paper Opens", date: "15 January, 2025" },
    { title: "Rolling Acceptance (Round 1)", date: "28 February, 2025" },
    { title: "Rolling Acceptance (Round 2)", date: "31 March, 2025" },
    { title: "Rolling Acceptance (Round 3)", date: "30 April, 2025" },
    { title: "Final Submission Deadline", date: "15 May, 2025" },
    { title: "Early Bird Registration Deadline", date: "10 June, 2025" },
    { title: "Camera Ready Submission", date: "25 June, 2025" },
    { title: "Late Registration (Extra fee)", date: "10 July, 2025" },
  ];

  const downloads = [
    { title: "Conference Brochure", link: "#" },
    { title: "Paper Submission", link: "#" },
    { title: "Templates & Instructions", link: "#" },
  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      datesRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <div className="bg-[url(/BG-BHU.jpg)] bg-cover w-screen h-[80vh] flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl text-orange-500 font-semibold">IEEE UP SECTION INTERNATIONAL CONFERENCE</h2>
        <h2 className="text-3xl pt-4">-----TOPIC OF IEEE-----</h2>
        <motion.h3
          className="text-3xl text-blue-500 flex items-center gap-6 mt-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Calendar /> Starting from <span className="text-2xl">DD/MM/YYYY</span>
        </motion.h3>
      </div>
      
      <div ref={sectionRef} className="bg-white my-10 gap-12 flex flex-col w-screen items-center">
        <h1 className="text-5xl">About IEEE UPCON</h1>
        <p className="w-[80%] text-justify text-gray-700">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae cumque labore a ratione corrupti dicta? Ratione impedit quia esse aspernatur nesciunt, nobis eius modi optio quam nihil possimus ipsam fugiat quisquam eos, iure ullam tempora reiciendis ut laboriosam quaerat. Adipisci, quaerat labore! Provident officiis tempore similique. At iusto saepe cum, quas sint sit earum illo amet natus quod fugiat necessitatibus exercitationem repellendus. Eum, incidunt non. Laboriosam perspiciatis unde minus vitae maiores, accusantium ea repellendus nesciunt quaerat libero perferendis officia totam magni asperiores rem pariatur eos esse cupiditate expedita ut corporis voluptas magnam et necessitatibus. Corrupti quod velit a maiores facilis culpa ullam in! Placeat atque maxime nemo dolores tenetur delectus et qui, doloribus veritatis recusandae dolor quasi aperiam unde quidem beatae amet debitis magnam rerum. Facere itaque molestiae velit praesentium eligendi officia quo id? Iste aliquid voluptas ducimus soluta minima ut debitis animi dignissimos quis, blanditiis eius cupiditate deleniti repellat adipisci assumenda modi, enim corrupti officia unde repudiandae rerum veritatis dolores laudantium? Quidem inventore reiciendis atque exercitationem. Similique distinctio minima id ipsa. Repellat incidunt quo quod beatae nulla asperiores cum, repudiandae molestias, officiis temporibus consequatur quidem, totam ratione. Consequatur, perspiciatis minus libero quibusdam voluptatum porro saepe nam exercitationem similique.
        </p>
      </div>

      <div className="max-w-4xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white bg-gradient-to-r from-[#FE744D] to-[#FC4A1A] py-3 rounded-t-lg">
          Important Dates
        </h2>
        <div className="divide-y divide-gray-300">
          {dates.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (datesRef.current[index] = el)}
              className={`flex justify-between items-center px-6 py-4 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <p className="text-gray-700 font-medium">{item.title}</p>
              <p className="text-gray-900 font-semibold">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-10 mb-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Resources</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {downloads.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            >
              <FileDown className="w-5 h-5" /> {item.title}
            </motion.a>
          ))}
        </div>
      </div>

      <Sponsors />
    </>
  );
}

export default Homepage;
