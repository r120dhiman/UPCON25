import { Link } from 'react-router';
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#573054]/80 to-blue-900/80  text-white w-full font-semibold">
      <div className="max-w-7xl mx-auto px-2 sm:px-5 lg:px-6 flex-col justify-between items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-lg md:text-md font-semibold mb-4">UPCON 25</h3>
            <p className="text-gray-200 text-sm mb-4 hover:text-[#ffffe0]">
              IEEE Conference IIT BHU 2025
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#ffffe0]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ffffe0]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ffffe0]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.98 3.98 0 0 0-3.97 3.97A3.98 3.98 0 0 0 12 15.92a3.98 3.98 0 0 0 3.97-3.97A3.98 3.98 0 0 0 12 7.98z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center justify-start">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#ffffe0] text-sm">Home</Link></li>
              <li><Link to="/registration" className="text-gray-300 hover:text-[#ffffe0] text-sm">Registration</Link></li>
              <li><Link to="/responses-closed" className="text-gray-300 hover:text-[#ffffe0] text-sm">Call For Papers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#ffffe0] text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:upcon25@iitbhu.ac.in">upcon25@iitbhu.ac.in</a>
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <p className="text-gray-300 text-sm flex items-center">
                <a href="mailto:helpupcon25@iitbhu.ac.in">helpupcon25@iitbhu.ac.in</a>
              </p>
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <p className="text-gray-300 text-sm flex items-center">
                <a href="https://forms.gle/3Zx4Rw2yTpna6RFi9" target="blank">Ask your query by clicking here</a>
              </p>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 py-3">
          <p className="text-center text-gray-300 text-sm md:text-md">
            &copy; {new Date().getFullYear()} UPCON 25. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer