import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SponsorCard = ({ name, logo, logo1, logo2, size = 'md', role, isTitle }) => {
  // Updated card sizes for better visual balance
  const sizeClasses = {
    xl: 'h-60 w-[28rem]',   // Title Sponsor: slightly larger
    lg: 'h-48 w-96',        // Diamond Sponsor: larger
    md: 'h-40 w-80',        // Gold Sponsor: moderately larger
    sm: 'h-32 w-64',        // Silver Sponsor: visibly larger
  }

  // Dual logo cards are about 20–25% larger than base
  const dualLogoSizeClasses = {
    xl: 'h-72 w-[32rem]',
    lg: 'h-56 w-[28rem]',
    md: 'h-48 w-96',
    sm: 'h-40 w-80',
  }

  const cardSizeClass = logo1 && logo2 ? dualLogoSizeClasses[size] : sizeClasses[size]

  return (
    <div className={`flex items-center justify-center`}>
      <div
        className={`sponsor-card flex flex-col items-center justify-center rounded-3xl bg-white/40 backdrop-blur-md border border-white/30 shadow-lg px-6 py-5 text-center transition-transform duration-300 ease-in-out cursor-pointer ${cardSizeClass} ${
          isTitle ? 'title-float hover:scale-105 hover:shadow-2xl' : 'hover:scale-105 hover:shadow-2xl'
        }`}
        onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power1.out' })}
        onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power1.out' })}
      >
        {logo1 && logo2 ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white shadow-lg p-4 w-full h-full">
            <img
              src={logo1}
              alt={`${name} logo 1`}
              className={`object-contain max-h-full max-w-full sm:w-1/2 w-3/4 ${logo1?.includes('tektronix.svg') ? 'filter invert' : ''}`}
            />
            <img
              src={logo2}
              alt={`${name} logo 2`}
              className="object-contain max-h-full max-w-full sm:w-1/2 w-3/4"
            />
          </div>
        ) : logo ? (
          <img src={logo} alt={`${name} logo`} className="object-contain max-h-full max-w-full" />
        ) : (
          <div className="flex items-center justify-center bg-gray-100 text-gray-600 rounded-xl h-full w-full">
            <span className="text-sm font-medium">{name}</span>
          </div>
        )}
        {/* {role && <div className="mt-2 text-xs text-gray-700">{role}</div>} */}
      </div>
    </div>
  )
}

function Sponsor() {
  const containerRef = useRef(null)
  // Updated sponsor data as per instructions

  const titleSponsor = [{ name: 'HIOKI', logo: '/sponsor-logo/hioki.jpeg', size: 'xl', role: 'Title Sponsor' }]

  const diamondSponsors = [
    { name: 'Tektronix with Convergent', logo1: '/sponsor-logo/tektronix.svg', logo2: '/sponsor-logo/convergent.png', size: 'lg' },
    { name: 'KEYSIGHT with Agmatel', logo1: '/sponsor-logo/keysight.svg', logo2: '/sponsor-logo/agmatel.png', size: 'lg' },
    { name: 'SCIENTIFIC', logo: '/sponsor-logo/scientific.png', size: 'lg' },
  ]

  const goldSponsors = [
    { name: 'QUARBZ with Typhoon', logo1: '/sponsor-logo/quarbz.jpeg', logo2: '/sponsor-logo/typoon.png', size: 'md' },
    { name: 'FLUKE with SPI', logo1: '/sponsor-logo/fluke.jpeg', logo2: '/sponsor-logo/spi.png', size: 'md' },
    { name: 'SYNGIENT', logo: '/sponsor-logo/syngient.png', size: 'md' },
    { name: 'K n B Pvt. Ltd', logo: '/sponsor-logo/k&b.png', size: 'md' },
  ]

  const silverSponsors = [
    { name: 'dSPACE', logo: '/sponsor-logo/dspace.svg', size: 'sm' },
    { name: 'REVINE (REGOL + ITECH)', logo: '/sponsor-logo/revine.jpeg',  size: 'sm' },
    { name: 'V INSTRUMENT', logo: '/sponsor-logo/vinstruments.png', size: 'sm' },
    { name: 'OPAL RT', logo: '/sponsor-logo/opal-rt.png', size: 'sm' },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate headings
      gsap.from('.sponsor-heading', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      })

      // Animate all sponsor cards with a subtle stagger
      gsap.from('.sponsor-card', {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        },
      })

      // Float the title sponsor gently
      gsap.to('.title-float', {
        y: -6,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])


  

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white to-blue-700/15 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
      brightness-100 mix-blend-multiply rounded-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <header className="mb-10 text-center">
          <h1 className="sponsor-heading text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Our Sponsors
          </h1>
          <p className="sponsor-heading mt-3 text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            We thank the organisations and individuals who support UPCON 2025.
          </p>
        </header>

        {/* Title Sponsor */}
        <section className="mb-16 sponsors-section px-4">
          <h2 className="sponsor-heading uppercase tracking-wide font-semibold text-sky-700 text-xl md:text-2xl border-l-4 pl-2 border-sky-500 mb-8">
            Title Sponsor
          </h2>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 grid place-items-center">
              {titleSponsor.map((s) => (
                <SponsorCard key={s.name} name={s.name} logo={s.logo} size={s.size} role={s.role} isTitle />
              ))}
            </div>
          </div>
        </section>

        {/* Diamond Sponsors */}
        <section className="mb-16 sponsors-section px-4">
          <h3 className="sponsor-heading uppercase tracking-wide font-semibold text-sky-700 text-xl md:text-2xl border-l-4 pl-2 border-sky-500 mb-8">
            Diamond Sponsors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
            {diamondSponsors.map((s) => (
              <SponsorCard key={s.name} name={s.name} logo={s.logo} logo1={s.logo1} logo2={s.logo2} size={s.size} />
            ))}
          </div>
        </section>

        {/* Gold Sponsors */}
        <section className="mb-16 sponsors-section px-4">
          <h3 className="sponsor-heading uppercase tracking-wide font-semibold text-sky-700 text-xl md:text-2xl border-l-4 pl-2 border-sky-500 mb-8">
            Gold Sponsors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-4">
            {goldSponsors.map((s) => (
              <SponsorCard key={s.name} name={s.name} logo={s.logo} logo1={s.logo1} logo2={s.logo2} size={s.size} />
            ))}
          </div>
        </section>

        {/* Silver Sponsors */}
        <section className="mb-16 sponsors-section px-4">
          <h3 className="sponsor-heading uppercase tracking-wide font-semibold text-sky-700 text-xl md:text-2xl border-l-4 pl-2 border-sky-500 mb-8">
            Silver Sponsors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 p-4">
            {silverSponsors.map((s) => (
              <SponsorCard key={s.name} name={s.name} logo={s.logo} logo1={s.logo1} logo2={s.logo2} size={s.size} />
            ))}
          </div>
        </section>
        {/* Bronze Sponsors */}
        {/* <section className="mb-16 sponsors-section px-4">
          <h3 className="sponsor-heading uppercase tracking-wide font-semibold text-sky-700 text-xl md:text-2xl border-l-4 pl-2 border-sky-500 mb-8">
            Bronze Sponsors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 p-4">
            {silverSponsors.map((s) => (
              <SponsorCard key={s.name} name={s.name} logo={s.logo} logo1={s.logo1} logo2={s.logo2} size={s.size} />
            ))}
          </div>
        </section> */}
      </div>
    </div>
  )
}

export default Sponsor
