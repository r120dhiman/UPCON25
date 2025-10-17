import React from 'react';
import { FaAward, FaFilePdf, FaUniversity, FaUserGraduate } from 'react-icons/fa';

function StudentAward() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
         <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white to-blue-700/15 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
      brightness-100 mix-blend-multiply"
        />
      </div>
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8 border border-blue-200">
        <div className="flex items-center gap-3 mb-6">
          <FaAward className="text-3xl text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Malviya Student Travel Award 2025</h1>
        </div>

        <p className="text-gray-700 mb-4">
          The organizing committee of <span className="font-semibold text-blue-700">IEEE UPCON 2025</span> invites nominations for the prestigious <strong>Malviya Student Travel Award</strong>.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 font-medium">🏆 <strong>5 Awards</strong> — ₹10,000 each</p>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-3">Submission Requirements</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <FaFilePdf className="text-blue-600 mt-1" />
            <span>
              One single PDF containing the following documents <strong>in sequential order</strong>:
              <ol className="list-decimal ml-6 mt-2 space-y-1">
                <li>Cover letter mentioning the need for travel support.</li>
                <li>Letter on institute/college/university letterhead endorsed by HoD or supervisor with official stamp.</li>
<li>
  Curriculum Vitae (max 2 pages).{' '}
  <a
    href="/Biodata_Format.docx"
    download
    className="inline text-xs text-blue-700 hover:underline"
  >
    Click here to download format
  </a>
</li>
                <li>PDF of the final accepted paper in UPCON 2025.</li>
              </ol>
            </span>
          </li>
        </ul>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Award Presentation</h2>
          <p className="text-gray-700">
            Awards will be presented during the <strong>Valedictory & Award Ceremony</strong>. Students must attend and present their paper in person to qualify.
          </p>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-yellow-800">
            <strong>Note:</strong> Awards will be granted based on the <strong>quality of work, student merit, need,</strong> and <strong>distance traveled</strong>.
            Full author registration is required for the student to avail the travel award.
          </p>
        </div>

        <div className="mt-8 text-center">
             {/* <a
      href="https://forms.gle/jh3Uc5abHVkigHFw5"
      target="_blank"
      rel="noopener noreferrer"> */}
          <button onClick={() => {
            alert("Opening soon...")
          }
          } className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md">
            Submit Nomination
          </button>
           {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default StudentAward;
