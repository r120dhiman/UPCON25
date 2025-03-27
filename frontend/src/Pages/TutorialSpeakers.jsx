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
    <div className='relative'>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sp.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.8'
        }}
      />

      <div className='container mx-auto px-3 py-6 relative z-10'>
        <h1 className='text-2xl md:text-4xl text-center font-semibold mb-12 backdrop-blur-3xl mx-auto'>TUTORIAL SPEAKERS</h1>
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