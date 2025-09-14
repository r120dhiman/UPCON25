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
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="data absolute left-8 bottom-8 bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg"
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <p className="text-4xl font-extrabold text-gray-900">PhD Colloquium</p>
          <motion.div 
            whileHover={{ scale: 1 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              to="/" 
              className="inline-block mt-3 text-lg font-bold text-white bg-gray-800 hover:bg-fuchsia-700 rounded-2xl px-6 py-3 transition-all duration-300 ease-in-out shadow-md"
            >
              Home
            </Link>
            
          </motion.div>
          <a  href="https://docs.google.com/forms/d/e/1FAIpQLSeHFb6a_dOWY917QeKIeJo-FCTD7_Z0T49gEFKOAQxXEw5Ueg/viewform?usp=dialog"
              target="_blank"
            whileHover={{ scale: 1 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHFb6a_dOWY917QeKIeJo-FCTD7_Z0T49gEFKOAQxXEw5Ueg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-lg font-bold text-white bg-gray-800 hover:bg-fuchsia-700 rounded-2xl px-6 py-3 transition-all duration-300 ease-in-out shadow-md"
            >
              PhD Colloquium Submission
            </a>
          </a>
          <span className="block mt-2 text-gray-700 text-sm">UPCON 2025 - PhD Colloquium</span>
        </motion.div>
      </motion.div>

      {/* Content Section with Smooth Scroll Effect */}
      <motion.div 
        className="lower w-screen md:w-[70vw] mx-auto px-6"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-4xl text-center font-bold my-10 text-gray-900">
          PhD Colloquium
        </h1>
        <article className="my-5 text-justify text-gray-800 leading-relaxed bg-white p-6 rounded-xl shadow-lg">
          <p>
            UPCON 2025 will also provide a platform for budding PhD scholars who are pursuing cutting-edge research work at various Research Institutes or Universities within India and Abroad, in the broad area of Electrical, Electronics and Computer Engineering.
          </p>
           <div
            className="bg-gradient-to-r  m-auto px-auto my-5 from-[#5e365b] w-fit to-blue-600 hover:from-black hover:to-blue-500 text-white font-bold py-3.5 px-7 rounded-full shadow-lg text-[1rem]"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHFb6a_dOWY917QeKIeJo-FCTD7_Z0T49gEFKOAQxXEw5Ueg/viewform?usp=dialog"
            target="_blank">PHD Colloquium Submission</a>
          </div>
          <p className="mt-4">
            This scheme is open for PhD scholars from Institutes of National importance like IITs, IIITs, NITs, and other Research Institutes or Universities.
            The final selection will be based on the technical relevance of the PhD problem to the conference theme and the quality of the proposed working model.
          </p>
          
          {/* Prize Table Section */}
          {/* Submission Deadline Alert */}
          <motion.div
            className="mt-8 p-4 rounded-lg bg-red-100 border border-red-300 text-red-800 text-center font-semibold shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Last date of submission for PhD Colloquium is <span className="font-bold">31st October</span>.
          </motion.div>
          <motion.div
            className="mt-10 p-6 rounded-xl bg-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Prizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl shadow-md">
                <p className="text-xl font-bold">1st Prize</p>
                <p className="text-3xl font-extrabold mt-2">₹10,000</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-xl shadow-md">
                <p className="text-xl font-bold">2nd Prize</p>
                <p className="text-3xl font-extrabold mt-2">₹5,000</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-xl shadow-md">
                <p className="text-xl font-bold">3rd Prize</p>
                <p className="text-3xl font-extrabold mt-2">₹3,000</p>
              </div>
            </div>
          </motion.div>

          {/* Animated Info Section */}
          <motion.div 
            className="mt-10 p-6 rounded-xl bg-gray-200 shadow-md"
            initial={{ scale: 1 }}
            transition={{ duration: 0 }}
          >
            <p className="text-2xl font-semibold text-gray-900">Few Points to be noted:</p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
              <li>Selected candidates must register for the conference at a special rate and present a poster.</li>
              <li>Registered candidates will receive free access to all UPCON2025 sessions, including dinner and cultural programs.</li>
            </ul>
          </motion.div>
        </article>
        
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHFb6a_dOWY917QeKIeJo-FCTD7_Z0T49gEFKOAQxXEw5Ueg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-gradient-to-r from-[#5e365b] to-blue-600 hover:from-black hover:to-blue-500 text-white font-bold py-3.5 px-7 rounded-full shadow-lg transition-all duration-300 ease-in-out animate-pulse"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            PhD Colloquium Submission
          </motion.a>
      </motion.div>
    </div>
  );
}

export default PHDColloquium;
