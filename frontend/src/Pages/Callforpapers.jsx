import React, { useState, useEffect, useRef } from 'react';
import Tech from '../components/Technical';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Callforpapers = () => {
  const [technicalTracks, setTechnicalTracks] = useState(false);
  
  const techRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const datesRef = useRef(null);
  const templatesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: headingRef.current, start: 'top 90%', toggleActions: 'play none none reverse' } }
    );

    gsap.fromTo(contentRef.current, 
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: contentRef.current, start: 'top 90%', toggleActions: 'play none none reverse' } }
    );

    gsap.fromTo(datesRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: datesRef.current, start: 'top 90%', toggleActions: 'play none none reverse' } }
    );

    gsap.fromTo(templatesRef.current, 
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: templatesRef.current, start: 'top 90%', toggleActions: 'play none none reverse' } }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col justify-center items-center min-h-screen p-4">
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white/20 to-blue-700/20 via-[#97148c]/20 mix-blend-multiply">
        <div className="absolute inset-0 bg-[url(/build.jpg)] opacity-15 bg-bottom bg-no-repeat bg-contain brightness-100 mix-blend-multiply" />
      </div>

      <h1 ref={headingRef} className="text-5xl font-bold mb-10 w-screen text-center py-4 bg-gradient-to-r from-[#82127c] to-blue-700 text-white">
        Call For Papers
      </h1>

      <div ref={contentRef} className="content flex text-lg italic flex-col items-center px-6 sm:px-8 md:px-10 pb-2 shadow-lg transition-all duration-300 gap-2 md:gap-6 border-b border-purple-100 bg-gradient-to-r from-[#89107f]/20 via-white to-[#89107f]/20">
      The 12th UPCON (UPCON 2025) will be held at IIT BHU, Varanasi, India, from December 13 to December 15, 2025. UPCON 2025 will feature both industry-driven and application-oriented technical sessions. The conference will bring together practicing engineers, researchers, and other professionals to have interactive and multidisciplinary discussions on the latest advances in energy conversion. The extended version of all the accepted papers would be further considered for publication in IEEE Transactions on Industry Application/Industry Application Magazine. UPCON 2025 authors are encouraged to participate as reviewers for the double-blind peer review process.
      </div>

      <div ref={datesRef} className="bg-white/50 mt-16 backdrop-blur-3xl shadow-lg rounded-3xl p-8 w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl underline font-extrabold mb-6 text-center bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
          IMPORTANT DATES
        </h2>
        <table className="w-full border-collapse text-lg">
          <tbody>
            <tr>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold">Digest Submission Deadline</td>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold text-purple-700">May 31, 2025</td>
            </tr>
            <tr>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold">Acceptance Notification</td>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold text-blue-700">Aug 10, 2025</td>
            </tr>
            <tr>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold">Camera Ready Paper Submission</td>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold text-purple-700">Sep 10, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref={templatesRef} className="mt-14 rounded-3xl p-8 w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl underline font-extrabold mb-6 text-center bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
          Template For Digest Submission
        </h2>
        <div className="temp2 flex md:flex-row flex-col justify-center items-center gap-10">
          <button type="button" className="group relative bg-gradient-to-r from-[#5e365b] to-blue-700 text-white font-bold py-3 px-6 text-lg rounded-full shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.4)] transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer">
            <a href="/Temp/UPCON 2025 Digest_Word.docx" className="relative z-10" download={true}>
              Template For Digest Submission - Word
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button type="button" className="group relative bg-gradient-to-r from-[#5e365b] to-blue-700 text-white font-bold py-3 px-6 text-lg rounded-full shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.4)] transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer">
            <a href="/Temp/UPCON 2025 Digest_Latex.zip" className="relative z-10" download={true}>
              Template For Digest Submission - Latex
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative bg-gradient-to-r from-[#5e365b] to-blue-700 text-white font-bold py-3 px-6 text-lg rounded-full shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.4)] transition-all duration-300 hover:scale-105 hover:text-white overflow-hidden cursor-pointer" onClick={() => setTechnicalTracks(true)}>
            <p className="relative z-10">Technical Tracks</p>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {technicalTracks && (
          <div 
            ref={techRef} 
            className="relative mt-10 transition-all duration-700 overflow-hidden"
            style={{ height: 'auto' }}
          ><div>
            <span>&nbsp;</span>
            <button
              className="absolute top-0 right-0 text-gray-700 hover:text-red-600  transition-colors"
              onClick={() => {
                const el = techRef.current;
                if (!el) return;
                
                const height = el.offsetHeight;
                gsap.set(el, { height });
                gsap.to(el, {
                  opacity: 0,
                  height: 0,
                  duration: 0.7,
                  ease: 'power2.inOut',
                  onComplete: () => {
                    setTechnicalTracks(false);
                    if (templatesRef.current) {
                      gsap.to(window, {
                        scrollTo: { y: templatesRef.current.offsetTop - 100 },
                        duration: 1,
                        ease: 'power2.inOut'
                      });
                    }
                  }
                });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            </div>
            <Tech />
          </div>
        )}
      </div>
    </div>
  );
};

export default Callforpapers;