import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Card = ({ 
  title, 
  description, 
  speakerImage, 
  logoImage 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const front = frontRef.current;
    const back = backRef.current;

    gsap.set(back, { rotationY: -180 });

    const flipTimeline = gsap.timeline({ paused: true });
    flipTimeline
      .to(front, { rotationY: 180, duration: 0.6, ease: "power1.inOut" })
      .to(back, { rotationY: 0, duration: 0.6, ease: "power1.inOut" }, 0);

    card.addEventListener('mouseenter', () => flipTimeline.play());
    card.addEventListener('mouseleave', () => flipTimeline.reverse());

    return () => {
      card.removeEventListener('mouseenter', () => flipTimeline.play());
      card.removeEventListener('mouseleave', () => flipTimeline.reverse());
    };
  }, []);
 
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div 
        ref={cardRef} 
        className="w-80 relative h-[500px] perspective-1000 cursor-pointer"
      >
        <div className="relative w-full h-full transition-transform duration-600 transform-style-3d">
          {/* Front of the Card */}
          <div 
            ref={frontRef}
            className="absolute w-full h-full backface-hidden bg-white/40 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <img 
                  src={logoImage} 
                  alt="Conference Logo" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
              <div className="mt-4 relative">
                <img 
                  src={speakerImage} 
                  alt="Conference Speaker" 
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Back of the Card */}
          <div 
            ref={backRef}
            className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-2xl p-6"
          >
            <h3 className="text-xl font-bold text-purple-800 mb-4">
              Details
            </h3>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="text-sm font-semibold text-purple-700">Description</h4>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className=" inset-0  bg-opacity-90 flex items-center justify-center z-[9999] overflow-hidden"
          onClick={(e) => {
            // Close modal if clicking outside the modal content
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-2xl w-[80vw] h-[80vh] relative overflow-y-auto"
            // Prevent modal from closing when clicking inside it
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button with improved styling */}
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4 text-purple-800 text-center">
              Events Details
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;