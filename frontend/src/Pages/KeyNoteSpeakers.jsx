import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

function KeynoteSpeaker() {
  const speakerData =[
     {
    imageUrl: "/Speakers/milos.jpg",
    name: "Dr. Milos Manic",
    institution: "Virginia Commonwealth University, United States",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Pericles.jpeg",
    name: "Dr. Pericle Zanchetta",
    institution: "University of Pavia, Italy",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Avoki-Omekanda.jpg",
    name: "Dr.Avoki Omekanda",
    institution: "General Motors, Michigan, USA",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Prasad.jpg",
    name: "Dr. Prasad Enjeti",
    institution: "Texas A&M University, USA",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Kaushik.jpg",
    name: "Dr. Kasuhik Rajashekara",
    institution: "University of Houston, Texas",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Sairaj.jpeg",
    name: "Dr. Sairaj Dhople",
    institution: "University of Minnesota Minneapolis, United States",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Shankar.jpeg",
    name: "Dr. Shankar Venugopal",
    institution: "Mahindra & Mahindra, India",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Akshay.png",
    name: "Dr. Askhay Rathore",
    institution: "Singapore Institute of Technology, Singapore",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Vinod.jpg",
    name: "Dr. Vinod Khadkikar",
    institution: "Khalifa University of Science and Technology, Abu Dhabi",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Subhashish.jpg",
    name: "Dr. Subhashis Bhattacharya",
    institution: "North Carolina State University, USA",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Brij.jpeg",
    name: "Dr. Brij N. Singh",
    institution: "John Deere & Company, USA",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Sanjeet.jpg",
    name: "Dr. Sanjeet Dwivedi",
    institution: "Siemens Gamesa Renewable Energy A/S Denmark",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Tapan.jpeg",
    name: "Dr. Tapan Kumar Sahoo ",
    institution: "Maruti Suzuki India Limited ",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Arvind.jpeg",
    name: "Dr. Arvind Kumar Tiwari ",
    institution: "GE Research Center, USA",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/Gourab.jpeg",
    name: "Dr. Gaurab Majumdar",
    institution: "Mitsubishi Electric Corporation, Japan",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/JainSun.webp",
    name: "Dr. Jian Sun",
    institution: "Rensselaer Polytechnique Institute Troy, New York, USA",
    talkTitle: "Will be updated soon...",
  },
];

  return (
    <div className='min-h-screen relative'>
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white/50 to-blue-600/20 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
      brightness-110 mix-blend-multiply"
        />
      </div>

      <div className='container mx-auto px-3 py-6 relative z-10'>
        <h1 className='text-2xl md:text-4xl text-center font-semibold mb-12 backdrop-blur-3xl mx-auto bg-[#6a2a5d]/20 rounded-2xl'>KEYNOTE SPEAKERS</h1>
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