import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Schedule", path: "/schedule" },
    { title: "Speakers", path: "/speakers" },
    { title: "Tracks", path: "/tracks" },
    { title: "Registration", path: "/registration" },
    { title: "Sponsors", path: "/sponsors" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <nav className="bg-[#054f89] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-xl">UPCON 25</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.path}
                  className="text-gray-300 hover:bg-[#076ab8] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#076ab8] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                className="text-gray-300 hover:bg-[#076ab8] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar