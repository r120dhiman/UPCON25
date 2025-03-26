import React from 'react'
import { Link } from 'react-router'

function NotFound() {
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
      
      <div className="relative z-10 py-4">
        <div className="flex flex-col justify-center items-center h-[80vh] space-y-6">
          <div className="relative">
            <h2 className="text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 drop-shadow-lg">
              Coming Soon
            </h2>
          </div>
          <div className="flex space-x-4">
            <div className="w-2 h-2 md:w-4 md:h-4 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 md:w-4 md:h-4 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 md:w-4 md:h-4 bg-blue-900 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound

