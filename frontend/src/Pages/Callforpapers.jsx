import React from 'react';

const Callforpapers = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen p-4">
      {/* Background Gradient and Watermark */}
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white to-blue-700/40 via-[#97148c]/40 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-20 bg-bottom bg-no-repeat bg-contain 
          brightness-100 mix-blend-multiply"
        />
      </div>

      {/* Content Section */}
      <h1 className='text-5xl font-bold  p-auto mb-10 w-screen text-center py-4  bg-gradient-to-r from-purple-600 to-blue-600 text-white'>Call For Papers </h1>
      <div className="content flex text-lg italic flex-col items-center px-6 sm:px-8 md:px-10 pb-2 shadow-lg transition-all duration-300 gap-2 md:gap-6 border-b border-purple-100 bg-gradient-to-r from-[#89107f]/20 via-white to-[#89107f]/20">
      The 12th UPCON (UPCON 2025) will be held at IIT BHU, Varanasi, India, from December 13 to December 15, 2025.  UPCON 2025 will feature both industry-driven and application-oriented technical sessions. The conference will bring together practicing engineers, researchers, and other professionals to have interactive and multidisciplinary discussions on the latest advances in energy conversion. The extended version of all the accepted papers would be further considered for publication in IEEE Transactions on Industry Application/Industry Application Magazine. 

UPCON 2025 authors are encouraged to participate as reviewers for the double-blind peer review process.
      </div>
      <div className="bg-white/50 mt-20 backdrop-blur-3xl shadow-lg rounded-3xl p-8 w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl underline font-extrabold mb-6 text-center bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
          IMPORTANT DATES
        </h2>
        <table className="w-full border-collapse   text-lg">
          <thead>
            {/* <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <th className="border border-gray-300 px-6 py-4 text-xl">Event</th>
              <th className="border border-gray-300 px-6 py-4 text-xl">Date</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td className=" border-gray-300 px-6 py-4 text-center font-semibold">
                Digest Submission Deadline
              </td>
              <td className=" border-gray-300 px-6 py-4 text-center font-semibold text-purple-700">
                May 31, 2025
              </td>
            </tr>
            <tr className="">
              <td className=" border-gray-300 px-6 py-4 text-center font-semibold">
                Acceptance Notification
              </td>
              <td className=" border-gray-300 px-6 py-4 text-center font-semibold text-blue-700">
                Aug 10, 2025
              </td>
            </tr>
            <tr>
              <td className=" border-gray-300 px-6 py-4 text-center font-semibold">
                Camera Ready Paper Submission
              </td>
              <td className=" border-gray-300 px-6 py-4 text-center font-semibold text-purple-700">
                Sep 10, 2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Announcement Section */}
      {/* <div className="mt-8 text-center">
        <p className="text-lg sm:text-xl font-bold text-purple-700">
          ANNOUNCEMENT: <span className="text-blue-700">DIGEST SUBMISSION DEADLINE</span> FINAL EXTENSION TILL <span className="text-red-600">MARCH 19, 2025</span>
        </p>
      </div> */}

      {/* Submission Button */}
      {/* <div className="flex justify-center mt-8">
        <button
          className="group relative w-1/2 bg-gradient-to-r from-[#5e365b] to-blue-700 text-white font-bold py-4 text-xl rounded-full 
          shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.4)] 
          transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
        >
          <span className="relative z-10">DIGEST SUBMISSION IS CLOSED</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div> */}


<div className="mt-20  rounded-3xl p-8 w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl underline font-extrabold mb-6 text-center bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
        Template For Digest Submission
        </h2>
        <div className="temp2 flex flex-row justify-center items-center gap-10">
  <button
    type="button"
    className="group relative bg-gradient-to-r from-[#5e365b] to-blue-700 text-white font-bold py-3 px-6 text-lg rounded-full 
    shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.4)] 
    transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
  >
    <a
      href="/Temp/UPCON 2025 Digest_Word.docx"
      className="relative z-10"
      download={true}
    >
      Template For Digest Submission - Word
    </a>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
  <button
    type="button"
    className="group relative bg-gradient-to-r from-[#5e365b] to-blue-700 text-white font-bold py-3 px-6 text-lg rounded-full 
    shadow-[0_10px_20px_rgba(109,40,217,0.3)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.4)] 
    transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
  >
    <a
      href="/Temp/UPCON 2025 Digest_Latex.zip"
      className="relative z-10"
      download={true}
    >
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
