import React from "react";

const SpeakerCard = ({ speakerData }) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white/30 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto max-w-sm w-full min-h-[16rem] cursor-default">
      <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 p-1 rounded-full">
        <img 
          src={speakerData.imageUrl} 
          alt={speakerData.name} 
          className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" 
        />
      </div>
      <div className="text-center w-full mt-4">
        <h2 className="text-2xl font-bold text-gray-900">{speakerData.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{speakerData.institution}</p>
        {/* <div className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium">
          Talk: {speakerData.talkTitle}
        </div> */}
      </div>
    </div>
  );
};

export default SpeakerCard;
