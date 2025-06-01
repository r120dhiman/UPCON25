import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'

function Navbar({ color, backdrop }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navLinks = [
    { title: "HOME", path: "/", type: "direct" },
    { title: "COMMITTEE", path: "/committee", type: "direct" },
    {
      title: "SPEAKERS",
      type: "dropdown",
      subLinks: [
        { title: "Keynote Speakers", path: "/speakers/keynote" },
        { title: "Tutorial speakers", path: "/speakers/tutorial" }
      ]
    },
    {
      title: "PROGRAM",
      type: "dropdown",
      subLinks: [
        { title: "Schedule-at-a-Glance", path: "/schedule" },
      ]
    },
    { title: "REGISTRATION", path: "/registration", type: "direct" },
    {
      title: "AUTHORS' CENTRAL",
      type: "dropdown",
      subLinks: [
        { title: "Call For Papers", path: "/callforpapers" },
        // { title: "Paper Submission", path: "/paper-submission" },
        // { title: "Guidelines", path: "/guidelines" },
        { title: "Call For Tutorials", path: "/callfortutorials" },
        { title: "Call For Workshops", path: "/callforworkshops" },
        { title: "Call For Special Sessions", path: "/callforspecialsessions" },
        { title: "Accepted Proposals", path: "/acceptedproposals" },
        { title: "Accepted Papers", path: "/acceptedpapers" },
        { title: "Registered Papers", path: "/registeredpapers" }
      ]
    },
    { title: "PHD COLLOQUIUM", path: "/phdcolloquium", type: "direct" },
    {
      "title": "AWARDS",
      "type": "dropdown",
      "subLinks": [
        { "title": "Best PhD Award", "path": "/awards/bestPhD" },
        { "title": "Best Paper Award", "path": "/awards/bestPaper" },
        { "title": "Best Poster Award", "path": "/awards/bestPoster" },
        { "title": "Malviya Student Travel Award", "path": "/awards/malviyaStudentTrouvel" }
      ]
    },
    { title: "SPONSORS", path: "/sponsors", type: "direct" },
    {
      title: "PREVIOUS UPCON's",
      type: "dropdown",
      subLinks: [
        { title: "UPCON 2024", path: "https://upcon.srmcem.ac.in/" },
        { title: "UPCON 2023", path: "https://amity.edu/upcon2023/" },
        { title: "UPCON 2022", path: "https://upcon2022.iiita.ac.in/" },
        { title: "UPCON 2021", path: "https://conferencealerts.com/show-event?id=235180" },
        { title: "UPCON 2020", path: "https://www.mnnit.ac.in/upcon2020/" },
      ]
    },
    { title: "CONTACT", path: "/contact", type: "direct" },
  ]

  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null) {
        const activeRef = dropdownRefs.current[activeDropdown];
        if (activeRef && !activeRef.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const DesktopNavItem = ({ link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    if (link.type === "direct") {
      return (
        <Link
          to={link.path}
          onClick={handleClick}
          className={`text-gray-50 hover:text-white px-0.5 py-2 rounded-md text-md 
            font-medium transition-all duration-300 relative
            before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-b 
            before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity
            hover:before:opacity-100 
            ${color
              ? "hover:bg-gradient-to-b hover:from-[#a44499] hover:to-[#5c2857] hover:shadow-lg hover:shadow-purple-800/20"
              : "hover:bg-gradient-to-b hover:from-[#6e4169]/70 hover:to-[#542d50]/70 hover:shadow-lg hover:shadow-purple-900/20"
            }`}
        >
          {link.title}
        </Link>
      )
    }

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={`text-gray-50 hover:text-white px-1 py-2 rounded-md text-md 
            font-medium transition-all duration-200 flex items-center cursor-pointer
            ${color
              ? "hover:bg-gradient-to-b hover:from-[#5e365b] hover:to-[#442542] hover:shadow-md"
              : "hover:bg-gradient-to-b hover:from-[#5e365b]/60 hover:to-[#442542]/60 hover:shadow-md"
            }`}
        >
          {link.title}
          <svg
            className={`w-4 h-4 ml-0.5 transform transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </button>
        <div
          className={`absolute z-50 left-0 mt-0 w-48 rounded-md 
            shadow-xl shadow-purple-700/20
            bg-gradient-to-b from-[#793570]/90 to-[#7c2a74]/90
            backdrop-blur-xl transform transition-all duration-300 origin-top
            border border-purple-400/10
            before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-b 
            before:from-white/10 before:to-transparent
            ${isHovered
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-2 invisible'}`}
        >
          <div className="py-1">
            {link.subLinks.map((subLink) => (
              subLink.path.startsWith('http') ? (
                <a
                  key={subLink.title}
                  href={subLink.path}
                  onClick={handleClick}
                  className={`block px-4 py-2 text-sm text-gray-100 hover:text-white 
                    font-medium transition-all duration-200 relative
                    before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-b 
                    before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity
                    hover:before:opacity-100
                    ${color
                      ? "hover:bg-gradient-to-b hover:from-[#683765] hover:to-[#542d50] hover:shadow-md"
                      : "hover:bg-gradient-to-b hover:from-[#683765] hover:to-[#542d50] hover:shadow-md"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {subLink.title}
                </a>
              ) : (
                <Link
                  key={subLink.title}
                  to={subLink.path}
                  onClick={handleClick}
                  className={`block px-4 py-2 text-sm text-gray-100 hover:text-white 
                    font-medium transition-all duration-200 relative
                    before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-b 
                    before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity
                    hover:before:opacity-100
                    ${color
                      ? "hover:bg-gradient-to-b hover:from-[#683765] hover:to-[#542d50] hover:shadow-md"
                      : "hover:bg-gradient-to-b hover:from-[#683765] hover:to-[#542d50] hover:shadow-md"}`}
                >
                  {subLink.title}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    )
  }

  const MobileNavItem = ({ link, index }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    if (link.type === "direct") {
      return (
        <a
          href={link.path}
          onClick={handleClick}
          className="text-gray-300 hover:bg-[#442542] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          {link.title}
        </a>
      )
    }

    return (
      <div>
        <button
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          className="w-full flex items-center text-gray-300 hover:bg-[#442542] hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer"
        >
          {link.title}
          <svg
            className={`w-4 h-4 ml-0.5 transform transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </button>
        {isSubMenuOpen && (
          <div className={`pl-4 ${color ? "bg-[#442542]" : "bg-gray-600/50"}`}>
            {link.subLinks.map((subLink) => (
              subLink.path.startsWith('http') ? (
                <a
                  key={subLink.title}
                  href={subLink.path}
                  onClick={handleClick}
                  className="text-gray-300 hover:bg-[#5e365b] hover:text-white block px-3 py-2 rounded-md text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {subLink.title}
                </a>
              ) : (
                <a
                  key={subLink.title}
                  href={subLink.path}
                  onClick={handleClick}
                  className="text-gray-300 hover:bg-[#5e365b] hover:text-white block px-3 py-2 rounded-md text-sm"
                >
                  {subLink.title}
                </a>
              )
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <div className="bg-yellow-400 text-black text-center py-2 text-2xl font-semibold">
        Conference will be held only in <span className='font-extrabold text-red-700 underline underline-offset-2'>PHYSICAL MODE</span>
      </div>
      <nav className={`${color ? "bg-gradient-to-b from-[#57254f]/85 to-[#682761]/85" : "bg-gradient-to-b from-[#57254f]/80 to-[#682761]/80"} 
  backdrop-blur-md sticky w-full z-50 
  ${backdrop ? "backdrop-blur-4xl" : ""} 
  shadow-lg shadow-purple-900/30
  border-b border-purple-400/10
  transition-all duration-300`}>
      <div className="w-screen mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 lg:hidden ml-2 mix-blend-lighten">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src='/UPCON.png' width={44}></img>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-baseline space-x-4 font-semibold">
              {navLinks.map((link, index) => (
                <DesktopNavItem key={link.title} link={link} index={index} />
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#4e2a4b] focus:outline-none"
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <MobileNavItem key={link.title} link={link} index={index} />
            ))}
          </div>
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar