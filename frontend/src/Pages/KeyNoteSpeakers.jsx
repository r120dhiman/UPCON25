import React from 'react'
import SpeakerCard from '../components/SpeakerCard'

function KeynoteSpeaker() {
  const speakerData =[
    {
      imageUrl: "/Speakers/Gourab.jpeg",
      name: "Dr. Gaurab Majumdar",
      institution: "Mitsubishi Electric Corporation, Japan",
      talkTitle: "Will be updated soon...",
    },
    {
   imageUrl: "/Speakers/Shankar.jpeg",
   name: "Dr. Shankar Venugopal",
   institution: "Mahindra & Mahindra, India",
   talkTitle: "Will be updated soon...",
 },
    {
   imageUrl: "/Speakers/sjayaram.png",
   name: "Dr. Shesha Jayram",
   institution: "University of Waterloo, Canada",
   talkTitle: "Will be updated soon...",
 },
 {
imageUrl: "/Speakers/Brij.jpeg",
name: "Dr. Brij N. Singh",
institution: "John Deere & Company, USA",
talkTitle: "Will be updated soon...",
},
{
imageUrl: "/Speakers/Akshay.png",
name: "Dr. Askhay Kumar Rathore",
institution: "Singapore Institute of Technology, Singapore",
talkTitle: "Will be updated soon...",
},
     {
    imageUrl: "/Speakers/dines.png",
    name: "Dr. Dinesh Kumar",
    institution: "Lead Power Electronics & Simulation Specialist at Danfoss Drives A/S, Denmark",
    talkTitle: "Will be updated soon...",
  },
     {
    imageUrl: "/Speakers/anand.gif",
    name: "Dr. Anand Sathyan",
    institution: "ONSEMI, Phoenix, AZ, USA, and  Adjunct Assistant Professor, McMaster University, Hamilton, ON, Canada",
    talkTitle: "Will be updated soon...",
  },
  {
 imageUrl: "/Speakers/Tapan.jpeg",
 name: "Dr. Tapan Kumar Sahoo ",
 institution: "Maruti Suzuki India Limited ",
 talkTitle: "Will be updated soon...",
},
{
  imageUrl: "/Speakers/Sanjeet.jpg",
  name: "Dr. Sanjeet Dwivedi",
  institution: "Siemens Gamesa Renewable Energy A/S Denmark",
  talkTitle: "Will be updated soon...",
},

{
  imageUrl: "/Speakers/sn.jpg",
  name: "Dr. S. N. Singh",
  institution: "Director, ABV-IIITM, Gwalior, India",
  talkTitle: "Will be updated soon...",
},
{
imageUrl: "/Speakers/Prasad.jpg",
name: "Dr. Prasad Enjeti",
institution: "Texas A&M University, USA",
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