import React from "react";

const SpeakerCard = ({ speakerData }) => {  
  return (
    <div className="flex flex-col items-center px-3 py-4 bg-white rounded-lg hover:shadow-xl transition-shadow mx-auto cursor-default max-w-3/4">
      <img 
        src={speakerData.imageUrl} 
        alt={speakerData.name} 
        className="w-44 rounded-full h-44 object-cover mb-4" 
      />
      <div className="text-center w-full">
        <h2 className="text-xl font-bold text-[#054f89] mb-2">{speakerData.name}</h2>
        <p className="text-gray-700 text-sm mb-2.5">{speakerData.institution}</p>
        <p className="text-gray-800 font-semibold text-sm">
          Talk : {speakerData.talkTitle}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;