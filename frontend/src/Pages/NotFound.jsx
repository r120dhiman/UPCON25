import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (<div className='relative'>
    <div className="  min-h-screen flex flex-col items-center justify-center bg-[url(/watermark.jpg)] opacity-50 overflow-hidden object-cover bg-no-repeat bg-cover">
    </div>
      <div className=" absolute min-h-screen flex items-center top-0 flex-col justify-center w-screen text-center space-y-4 z-10">
        <h2 className="text-2xl font-semibold text-gray-600">Not found </h2>
        <p className="text-gray-500">This page is under construction and will be available soon.</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
      </div>
  )
}

export default NotFound

