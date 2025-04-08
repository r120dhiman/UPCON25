import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router';

const Card = ({ 
  title, 
   path,
  speakerImage, 
  logoImage 
}) => {

  const frontRef = useRef(null);


  return (
    <>
    <Link to={path} className="cursor-pointer">
      <div  

        className="w-72 relative h-[500px] perspective-1000 cursor-pointer"
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
              <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
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

        </div>
      </div></Link>
    </>
  );
};

export default Card;