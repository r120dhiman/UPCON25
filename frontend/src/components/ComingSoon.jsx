import React from 'react'

function ComingSoon({ title }) {
    return (
    <div className="min-h-screen text-black relative bg-white">
      <div 
        className="absolute inset-0 z-0 brightness-120 opacity-45"
        style={{
          backgroundImage: `url('/watermark.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="relative z-10 py-5">
        <h1 className="text-2xl md:text-6xl font-extrabold text-center pt-4 text-blue-900 drop-shadow-sm">{title}</h1>
        <div className="flex flex-col justify-center items-center h-[80vh] space-y-8">
          <div className="relative">
            <h2 className="text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 drop-shadow-lg">
              Coming Soon
            </h2>
          </div>
          <div className="flex space-x-4">
            <div className="w-4 h-4 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 bg-blue-900 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon