import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EntryModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const alerts = [
    "🚨 Conference will be held only in PHYSICAL MODE.",
    "Acceptance notification has been sent.",
    " Last date of submission for PhD Colloquium is 31st October.",
    "Registration is till 31st October for Early Bird and 15th November for Standard.",
    "Early Bird registration is open now.",
    "Camera Ready submission is open now (Deadline: 31st October 2025).",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={handleClose}
          />
          
          <motion.div
            className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-white/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-6 pb-4 border-b border-purple-100 bg-gradient-to-r from-[#89107f]/10 via-white/50 to-fuchsia-700/10 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/upcon-logo.png"
                    alt="UPCON logo"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
                      UPCON 2025
                    </h2>
                    <p className="text-lg font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                      13-15 December'25
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleClose}
                  className="group relative w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-fuchsia-800 text-white hover:from-red-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 bg-pink-50">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Important Announcements
                </h3>
              </div>

              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-4 bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 border-l-4 border-fuchsia-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-2">
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {alert}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EntryModal;