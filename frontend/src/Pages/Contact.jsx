import React from 'react'

const Contact = () => {
  const generalChairs = [
    {
      name: "Prof. R.K. Singh",
      title: "(IIT BHU)",
    },
    {
      name: "Prof. V.N. Lal",
      title: "(IIT BHU)",
    },
  ];

  return (
    <div className="relative flex flex-col items-center h-screen p-3 md:p-6">
      {/* Background Gradient and Watermark */}
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white/10 to-blue-700/10 via-[#97148c]/10 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
          brightness-100 mix-blend-multiply"
        />
      </div>

      {/* Content Section */}
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-2 p-auto mb-6 md:mb-10 w-screen text-center py-3 md:py-4 bg-gradient-to-r from-[#82127c] to-blue-700 text-white'>
        Contact Us
      </h1>

      {/* General Chairs Section */}
      <div className="bg-white/50 backdrop-blur-3xl shadow-sm rounded-xl p-4 md:p-8 w-full max-w-5xl mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl underline font-extrabold mb-4 md:mb-6 text-center bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
          General Chairs
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 md:gap-8">
          {generalChairs.map((chair, index) => (
            <div key={index} className="text-center p-4 hover:bg-white/30 rounded-xl transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#5e365b]">{chair.name}</h3>
              <p className="text-lg md:text-xl text-blue-700">{chair.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Email Contact Section */}
      <div className="bg-white/50 backdrop-blur-3xl shadow-sm rounded-xl p-4 md:p-8 w-full max-w-5xl mt-6 md:mt-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl underline font-extrabold mb-4 md:mb-6 text-center bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
          Email
        </h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-8">
          <a 
            href="mailto:upcon25@iitbhu.ac.in" 
            className="text-lg md:text-xl font-semibold text-[#5e365b] hover:text-blue-700 transition-colors duration-300 hover:scale-105"
          >
            upcon25@iitbhu.ac.in
          </a>
          <a 
            href="mailto:helpupcon25@iitbhu.ac.in"
            className="text-lg md:text-xl font-semibold text-[#5e365b] hover:text-blue-700 transition-colors duration-300 hover:scale-105"
          >
            helpupcon25@iitbhu.ac.in
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact