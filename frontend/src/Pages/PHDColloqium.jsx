import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

function PHDColloquium() {
  return (
    <div className="flex flex-col w-screen bg-gray-100 min-h-screen">
      
      <motion.div 
        className="upper relative h-[70vh] bg-[url(/phd.jpg)] object-center bg-no-repeat bg-cover flex items-center justify-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="data absolute left-8 bottom-8 bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg"
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-4xl font-extrabold text-gray-900">PhD Colloquium</p>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              to="/" 
              className="inline-block mt-3 text-lg font-bold text-white bg-gray-800 hover:bg-amber-400 hover:text-black rounded-2xl px-6 py-3 transition-all duration-300 ease-in-out shadow-md"
            >
              Home
            </Link>
          </motion.div>
          <span className="block mt-2 text-gray-700 text-sm">UPCON 2025 - PhD Colloquium</span>
        </motion.div>
      </motion.div>

      {/* Content Section with Smooth Scroll Effect */}
      <motion.div 
        className="lower w-screen md:w-[70vw] mx-auto px-6"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl text-center font-bold my-10 text-gray-900">
          PhD Colloquium
        </h1>
        <article className="my-5 text-justify text-gray-800 leading-relaxed bg-white p-6 rounded-xl shadow-lg">
          <p>
            UPCON 2025 will also provide a platform for budding PhD scholars who are pursuing cutting-edge research work at various Research Institutes or Universities within India and Abroad, in the broad area of Electrical, Electronics and Computer Engineering.
          </p>
          <p className="mt-4">
            This scheme is open for PhD scholars from Institutes of National importance like IITs, IIITs, NITs, and other Research Institutes or Universities.
            The final selection will be based on the technical relevance of the PhD problem to the conference theme and the quality of the proposed working model.
          </p>
          
          {/* Animated Info Section */}
          <motion.div 
            className="mt-10 p-6 rounded-xl bg-gray-200 shadow-md"
            initial={{ scale: 0.9 }} 
            whileInView={{ scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-semibold text-gray-900">Few Points to be noted:</p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
              <li>Selected candidates must register for the conference at a special rate and present a poster.</li>
              <li>Registered candidates will receive free access to all UPCON2025 sessions, including dinner and cultural programs.</li>
            </ul>
          </motion.div>
        </article>
      </motion.div>
    </div>
  );
}

export default PHDColloquium;