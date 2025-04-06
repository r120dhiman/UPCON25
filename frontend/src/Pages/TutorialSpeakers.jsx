import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

function TutorialSpeaker() {
  const speakerData = {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    name: "Prof. David Doermann",
    institution: "The State University of New York, USA",
    talkTitle: "Primary efforts in applying counter manipulation detection technology",
  };

  return (
    <div className='min-h-screen relative'>
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white/50 to-blue-600/20 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
      brightness-110 mix-blend-multiply"
        />
      </div>

      <div className='container mx-auto px-3 py-6 relative z-10'>
        <h1 className='text-2xl md:text-4xl text-center font-semibold mb-12 backdrop-blur-3xl mx-auto bg-[#8C477E]/20 rounded-2xl'>TUTORIAL SPEAKERS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SpeakerCard speakerData={speakerData} />
          <SpeakerCard speakerData={speakerData} />
          <SpeakerCard speakerData={speakerData} />
          <SpeakerCard speakerData={speakerData} />
          <SpeakerCard speakerData={speakerData} />
        </div>
      </div>
    </div>
  )
}

export default TutorialSpeaker