import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

function YoungProffesional() {
  const speakerData1 = {
    imageUrl: "/Speakers/young/gururaj.jpeg",
    name: "Prof. Gururaj Mirle Vishwanath",
    institution: "IIT Kanpur",
    // talkTitle: "Primary efforts in applying counter manipulation detection technology",
  };
  const speakerData2 = {
    imageUrl: "/Speakers/young/rama.jpg",
    name: "Prof. Ramanuja Panigrahi",
    institution: "Professor, IIT Roorkee",
    // talkTitle: "Primary efforts in applying counter manipulation detection technology",
  };
  const speakerData3 = {
    imageUrl: "/Speakers/young/subho.jpg",
    name: "Prof. subho Paul",
    institution: "IIT BHU",
    // talkTitle: "Primary efforts in applying counter manipulation detection technology",
  };
  const speakerData4 = {
    imageUrl: "/Speakers/young/mayank.jpg",
    name: "Prof. Mayank Swarnkar",
    institution: "IIT BHU",
    // talkTitle: "Primary efforts in applying counter manipulation detection technology",
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
        <h1 className='text-2xl md:text-4xl text-center font-semibold mb-12 backdrop-blur-3xl mx-auto bg-[#8C477E]/20 rounded-2xl'>YOUNG PROFESSIONAL SPEAKERS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SpeakerCard speakerData={speakerData1} />
          <SpeakerCard speakerData={speakerData2} />
          <SpeakerCard speakerData={speakerData3} />
          <SpeakerCard speakerData={speakerData4} />
        </div>
      </div>
    </div>
  )
}

export default YoungProffesional