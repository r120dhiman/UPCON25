import React from 'react'
import { Link } from 'react-router'

const ResponsesClosed = () => {
  return (
    <div className="min-h-screen text-black relative bg-white">
      {/* Background Watermark */}
      <div 
        className="absolute inset-0 z-0 brightness-120 opacity-45"
        style={{
          backgroundImage: `url('/watermark.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Main Content */}
      <div className="relative z-10 py-8 px-4">
        <div className="flex flex-col justify-center items-center min-h-[80vh] space-y-8">
          
          {/* Main Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#82127c] via-blue-800 to-blue-900 drop-shadow-lg">
              Responses Closed
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#82127c] to-blue-700 mx-auto rounded-full"></div>
          </div>

          {/* Message Card */}
          <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-8 max-w-4xl text-center border border-white/20">
            <div className="space-y-6">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#82127c] to-blue-700 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Main Message */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                The paper submission link has been closed.
                </h2>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-800 text-sm md:text-base">
                  Thank you for your interest in UPCON 2025. We appreciate all the submissions we received during the open period.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600">
              Have any questions or need assistance?
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#82127c] to-blue-700 text-white font-bold text-lg rounded-xl hover:from-[#6a0f65] hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="flex space-x-4">
            <div className="w-3 h-3 bg-[#82127c] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-blue-900 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsesClosed 