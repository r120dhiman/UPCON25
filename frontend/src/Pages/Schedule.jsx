import React from 'react'

function Schedule() {
  return (
     <div  className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white to-blue-700/15 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
      brightness-100 mix-blend-multiply rounded-3xl"
        />
      </div>

       <h1 className=" text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-6">
             Tentative Schedule
          </h1>

  <iframe src="/schedule_details/schedule.pdf" className="w-full h-[80vh] rounded-xl shadow-lg" title="Conference Schedule"></iframe>
  <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-8 mt-10 w-full max-w-3xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-4">
      Templates
    </h2>
    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6">
      <a href="/schedule_details/PPT_Template_UPCON.pptx" download className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-xl transition">
        <i className="fa-regular fa-file-powerpoint"></i> PPT Template
      </a>
      <a href="/schedule_details/Poster_Template_UPCON.pptx" download className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-xl transition">
        <i className="fa-regular fa-image"></i> Poster Template (A0 size)
      </a>
    </div>
  </div>
    
    </div>
  )
}

export default Schedule
