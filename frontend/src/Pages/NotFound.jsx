import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-600">Page Not Found</h2>
        <p className="text-gray-500">The page you're looking for doesn't exist.</p>
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
