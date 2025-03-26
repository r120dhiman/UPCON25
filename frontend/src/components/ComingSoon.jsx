import React from 'react'

function ComingSoon({ title }) {
    return (
    <div className="min-h-screen text-black relative bg-white">
      <div 
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `url('/watermark.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="relative z-10 py-5">
        <h1 className="text-5xl font-bold text-center pt-4 text-blue-950 drop-shadow-sm">{title}</h1>
        <div className="flex flex-col justify-center items-center h-[80vh] space-y-10">
          <div className="relative">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 drop-shadow-lg">
              Coming Soon
            </h2>
          </div>
          <p className="text-lg text-blue-950 max-w-xl text-center font-medium drop-shadow-sm">
            We're working hard to get everything ready. Check back soon!
          </p>
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