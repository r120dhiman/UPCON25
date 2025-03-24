import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navLinks = [
    { title: "Home", path: "/", type: "direct" },
    { 
      title: "About", 
      type: "dropdown",
      subLinks: [
        { title: "About Conference", path: "/about-conference" },
        { title: "About Institute", path: "/about-institute" },
        { title: "Previous UPCON", path: "https://sefet.in/" }
      ]
    },
    { 
      title: "Committee", 
      type: "dropdown",
      subLinks: [
        { title: "Technical Committee", path: "/committee/Technical" },
        { title: "Advisory Committee", path: "/committee/advisory" },
        { title: "Organizing Committee", path: "/committee/organizing" }
      ]
    },
    { title: "Speakers", path: "/speakers", type: "direct" },
    { 
      title: "Program", 
      type: "dropdown",
      subLinks: [
        { title: "Call for Papers", path: "/callforpapers" },
        { title: "Track 2", path: "/track-2" },
        { title: "Track 3", path: "/track-3" }
      ]
    },
    { title: "Registration", path: "/registration", type: "direct" },
    { 
      title: "Authors", 
      type: "dropdown",
      subLinks: [
        { title: "Paper Submission", path: "/paper-submission" },
        { title: "Guidelines", path: "/guidelines" }
      ]
    },
    { title: "Sponsors", path: "/sponsors", type: "direct" },
    { title: "Contact", path: "/contact", type: "direct" },
  ]

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const DesktopNavItem = ({ link, index }) => {
    if (link.type === "direct") {
      return (
        <a
          href={link.path}
          className="text-gray-300 hover:bg-[#076ab8] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
        >
          {link.title}
        </a>
      )
    }

    return (
      <div className="relative">
      <button
        onClick={() => handleDropdown(index)}
        className="text-gray-300 hover:bg-[#076ab8] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center cursor-pointer"
      >
        {link.title}
        <svg className={`w-4 h-4 ml-0.5 transform transition-transform ${activeDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </button>
      {activeDropdown === index && (
        <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white">
        <div className="py-1">
          {link.subLinks.map((subLink) => (
          <a
            key={subLink.title}
            href={subLink.path}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#054f89] hover:text-white"
          >
            {subLink.title}
          </a>
          ))}
        </div>
        </div>
      )}
      </div>
    )
  }

  const MobileNavItem = ({ link, index }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  
    if (link.type === "direct") {
      return (
        <a
          href={link.path}
          className="text-gray-300 hover:bg-[#076ab8] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          {link.title}
        </a>
      )
    }

    return (
      <div>
        <button
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          className="w-full flex items-center text-gray-300 hover:bg-[#076ab8] hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer"
        >
          {link.title}
          <svg 
            className={`w-4 h-4 ml-0.5 transform transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </button>
        {isSubMenuOpen && (
          <div className="pl-4 bg-[#043d6a]">
            {link.subLinks.map((subLink) => (
              <a
                key={subLink.title}
                href={subLink.path}
                className="text-gray-300 hover:bg-[#076ab8] hover:text-white block px-3 py-2 rounded-md text-sm"
              >
                {subLink.title}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className="bg-[#054f89] sticky w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-xl">UPCON 25</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <DesktopNavItem key={link.title} link={link} index={index} />
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
          {navLinks.map((link, index) => (
            <MobileNavItem key={link.title} link={link} index={index} />
          ))}
        </div>
      </div>
      )}
    </nav>
  )
}

export default Navbar