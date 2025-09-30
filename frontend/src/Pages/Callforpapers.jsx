import React, { useState, useEffect, useRef } from 'react';
import Tech from '../components/Technical';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import AlertRotator from '../components/Alert';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Callforpapers = () => {
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
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white/20 to-blue-700/15 via-[#97148c]/15 mix-blend-multiply">
        <div className="absolute inset-0 bg-[url(/build.jpg)] opacity-15 bg-bottom bg-no-repeat bg-contain brightness-100 mix-blend-multiply" />
      </div>

      <div className="bg-red-100 border-4 border-red-600 text-red-900 font-bold text-xl text-center p-2 mt-5 w-full max-w-4xl mx-auto mb-6 rounded-lg shadow-lg">
        🚨 The maximum limit for digest submission is <u>5 pages</u>! 🚨
      </div>

      <h1 ref={headingRef} className="text-5xl font-bold mb-10 w-screen text-center py-4 bg-gradient-to-r from-[#82127c] to-blue-700 text-white">
        Call For Papers
      </h1>

      <div ref={contentRef} className="content flex text-lg italic flex-col items-center px-6 sm:px-8 md:px-10 pb-2 shadow-lg transition-all duration-300 gap-2 md:gap-6 border-b border-purple-100 bg-gradient-to-r from-[#89107f]/20 via-white to-[#89107f]/20">
        The 12th UPCON (UPCON 2025) will be held at IIT BHU, Varanasi, India, from December 13 to December 15, 2025. UPCON 2025 will feature both industry-driven and application-oriented technical sessions. The conference will bring together practicing engineers, researchers, and other professionals to have interactive and multidisciplinary discussions on the latest advances in energy conversion. The extended version of the accepted papers would be further considered for publication in IEEE Transactions on Industry Application/Industry Application Magazine. UPCON 2025 authors are encouraged to participate as reviewers for the double-blind peer review process.
      </div>
      <div ref={headingRef}>

        <Tech />
      </div>
      <div ref={datesRef} className="bg-white/50 mt-16 backdrop-blur-3xl shadow-lg rounded-3xl p-8 w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl underline font-extrabold mb-6 text-center bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
          IMPORTANT DATES
        </h2>
        <table className="w-full border-collapse text-lg">
          <tbody>
            <tr>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold">Digest Submission Deadline</td>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold text-fuchsia-800">Aug 31, 2025</td>
            </tr>
            <tr>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold">Acceptance Notification</td>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold text-blue-700">Oct 10, 2025</td>
            </tr>
            <tr>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold">Camera Ready Paper Submission</td>
              <td className="border-gray-300 px-6 py-4 text-center font-semibold text-fuchsia-800">Oct 20, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10 w-full max-w-5xl px-6">
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg border-l-4 border-fuchsia-800">
          <div className="mt-1 text-fuchsia-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          </div>
          <div className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-fuchsia-800 mb-1">Note on Peer Review System:</p>
            <p>
              The Microsoft CMT service is used for managing the peer-reviewing process for this conference. This service is provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>
      </div>
       <div className="bg-red-100 border-4 border-red-600 text-red-900 font-bold text-xl text-center p-2 mt-5 w-full max-w-4xl mx-auto mb-6 rounded-lg shadow-lg">
        🚨 The maximum limit for digest submission is <u>5 pages</u>! 🚨
      </div>
      <button type="button" className="group relative bg-gradient-to-r mt-10 from-[#5e365b] to-blue-700 text-white font-bold py-4 px-12 text-3xl md:text-5xl rounded-full shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.4)] transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer">
        <Link to="/responses-closed" className="relative z-10">
          Digest Submission Portal
        </Link>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
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


        </div>
      </div>

    </div>
  );
};

export default Callforpapers;
