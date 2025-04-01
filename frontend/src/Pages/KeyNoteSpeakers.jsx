import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

function KeynoteSpeaker() {
  const speakerData =[
     {
    imageUrl: "/Speakers/milos.jpg",
    name: "Dr. Milos Manic",
    institution: "University of Pavia, Italy",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr.Avoki Omekanda",
    institution: "General Motors",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Prasad Enjeti",
    institution: "Texas A&M",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Kasuhik Rajashekara",
    institution: "University of Houston, Texas",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Sairaj Dhople",
    institution: "University of Minnesota Minneapolis",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Shankar Venugopal",
    institution: "Mahindra & Mahindra",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Askhay Rathore",
    institution: "IIT BHU",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Vinod Khadkikar",
    institution: "Khalifa University",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Subhashis Bhattacharya",
    institution: "NCSU",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Brij N. Singh",
    institution: "John Deere",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Sanjeet Dwivedi",
    institution: "Danfoss",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avatar.jpeg",
    name: "Dr. Tapan Kumar Sahoo ",
    institution: "Maruti",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Arvind.jpeg",
    name: "Dr. Arvind Kumar Tiwari ",
    institution: "GE Research",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Gourab.jpeg",
    name: "Dr. Gaurab Majumdar",
    institution: "Mitshubishi",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/JainSun.webp",
    name: "Dr. Jian Sun",
    institution: "Rensselaer Polytechnique Institute",
    talkTitle: "Will be updated soon...",
  },
];

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
        <h1 className='text-2xl md:text-4xl text-center font-semibold mb-12 backdrop-blur-3xl mx-auto bg-[#8C477E]/20 rounded-2xl'>KEYNOTE SPEAKERS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakerData.map((speaker, index) => (
            <SpeakerCard key={index} speakerData={speaker} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeynoteSpeaker