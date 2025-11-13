import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

function WIE() {
  const speakerData1 = {
    imageUrl: "/Speakers/wie/kalpna.jpg",
    name: "Prof. Kalpana Chaudhary",
    institution: "IIT BHU",
    // talkTitle: "Primary efforts in applying counter manipulation detection technology",
  };
  const speakerData2 = {
    imageUrl: "/Speakers/wie/dipti.png",
    name: "Prof. Dipti Saxena",
    institution: "MNIT Jaipur",
    // talkTitle: "Primary efforts in applying counter manipulation detection technology",
  };
  const speakerData3 = {
    imageUrl: "/Speakers/wie/tripta.jpeg",
    name: "Prof. Tripta Thakur",
    institution: "Former DG NPTI & present VC UTU",
    // talkTitle: "Primary efforts in applying counter manipulation detection technology",
  };
  const speakerData4 = {
    imageUrl: "/Speakers/wie/karabi.jpeg",
    name: "Prof. Karabi Vishwas",
    institution: "IIT Kharagpur",
    // talkTitle: "Primary efforts in applying counter manipulation detection technology",
  };
  const speakerData5 = {
    imageUrl: "/Speakers/wie/hsubhdra.jpeg",
    name: " Prof. Harivardhagini Subhadra",
    institution: "2025 IEEE WIE COMMITTEE - Voting Member,Prof and Head, CVR College of Engineering, Hyderabad, Telangana",
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
        {/* <h1 className='text-2xl md:text-4xl text-center font-semibold mb-12 backdrop-blur-3xl mx-auto bg-[#8C477E]/20 rounded-2xl'>WIE SPEAKERS</h1> */}
        <h1 className='text-2xl md:text-4xl text-center font-semibold mb-12 backdrop-blur-3xl mx-auto bg-[#8C477E]/20 rounded-2xl'>WIE Keynote Speakers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SpeakerCard speakerData={speakerData3} />
          <SpeakerCard speakerData={speakerData4} />
        </div>
        <h1 className='text-2xl md:text-4xl mt-8 text-center font-semibold mb-12 backdrop-blur-3xl mx-auto bg-[#8C477E]/20 rounded-2xl'>WIE PANEL</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SpeakerCard speakerData={speakerData3} />
          <SpeakerCard speakerData={speakerData1} />
          <SpeakerCard speakerData={speakerData2} />
          <SpeakerCard speakerData={speakerData5} />
        </div>
      </div>
    </div>
  )
}

export default WIE