import React from 'react';
import { FaEnvelope, FaGlobe, FaTwitter } from 'react-icons/fa';

function ProfileCard() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Card Container */}
      <div className="w-[360px] bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Background Image */}
        <div className="relative h-48">
          <img
            src="/background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="relative -mt-12 flex flex-col items-center px-4">
          {/* Logo */}
          <div className="bg-white p-2 rounded-full shadow-md">
            <img src="/logo.png" alt="Cascade Realty" className="w-12 h-12" />
          </div>
          
          {/* Name & Title */}
          <h2 className="text-xl font-bold mt-2">FIRST LAST</h2>
          <p className="text-gray-500 text-sm">TITLE</p>
          <p className="text-gray-600 italic">Cascade Realty</p>

          {/* Description */}
          <p className="text-gray-700 text-center mt-2 px-4 text-sm">
            Experts in commercial and residential realty.
          </p>

          {/* Contact Section */}
          <div className="flex flex-col gap-2 mt-4 w-full">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md w-full hover:bg-gray-200">
              <FaEnvelope className="text-blue-500" />
              <span>Office@Cascade.Realty</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md w-full hover:bg-gray-200">
              <FaGlobe className="text-blue-500" />
              <span>Visit Our Website</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md w-full hover:bg-gray-200">
              <FaTwitter className="text-blue-500" />
              <span>Follow Us</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-around items-center py-4 border-t mt-4">
          <img src="/realtor.png" alt="Realtor Logo" className="h-8" />
          <img src="/equal-housing.png" alt="Equal Housing Logo" className="h-8" />
          <img src="/cascade-logo.png" alt="Cascade Commercial" className="h-8" />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;