import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

function TutorialSpeaker() {

    const speakerData = {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", // Replace with actual image URL
        name: "Prof. David Doermann",
        institution: "University at Buffalo, The State University of New York, USA",
        talkTitle: "Primary efforts in applying counter manipulation detection technology",
        dateTime: "09:30 AM – 10:00 AM (IST), December 02, 2022",
      };
      
  return (
    <div className='flex flex-col '>
      <h1 className='text-5xl text-center font-semibold mt-5'>TUTORIAL SPEAKERS</h1>
      <div className="flex justify-center flex-col gap-12 items-center">
       <SpeakerCard  speakerData={speakerData}/>
       <SpeakerCard  speakerData={speakerData}/>
       <SpeakerCard  speakerData={speakerData}/>
       <SpeakerCard  speakerData={speakerData}/>
       <SpeakerCard  speakerData={speakerData}/>
       <SpeakerCard  speakerData={speakerData}/>
      </div>
    </div>
  )
}

export default TutorialSpeaker