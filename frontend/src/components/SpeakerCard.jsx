import React from "react";

const SpeakerCard = ({ speakerData }) => {  
  return (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-lg w-full max-w-2xl">
      <img src={speakerData.imageUrl} alt={speakerData.name} className="w-24 h-24 rounded-lg object-cover" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-blue-600">{speakerData.name}</h2>
        <p className="text-gray-600 uppercase text-sm">{speakerData.institution}</p>
        <p className="mt-1 font-medium">
          <span className="font-semibold">Talk: </span>
          {speakerData.talkTitle}
        </p>
        <p className="mt-2 text-sm font-medium">
          <span className="font-semibold">Date/Time: </span>
          <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
            {speakerData.dateTime}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;