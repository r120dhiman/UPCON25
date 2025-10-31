import React from 'react';
import { FaBed, FaCalendarAlt, FaLink } from 'react-icons/fa';

function StudentAcc() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
          <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white to-blue-700/15 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
      brightness-100 mix-blend-multiply"
        />
      </div>
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8 border border-fuchsia-200">
        <div className="flex items-center gap-3 mb-6">
          <FaBed className="text-3xl text-fuchsia-800" />
          <h1 className="text-2xl font-bold text-gray-800">Student Accommodation for UPCON 2025</h1>
        </div>

        <p className="text-gray-700 mb-4">
          Students who are submitting papers for <strong>IEEE UPCON 2025</strong>  are eligible to request accommodation through the same form.
        </p>

        <div className="bg-purple-50 border border-fuchsia-200 rounded-lg p-4 mb-6">
          <p className="text-fuchsia-900">
            🛏️ To avail accommodation, please ensure that:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
            <li>Your paper has been submitted and accepted.</li>
            <li>Accommodation requests must be made through the same form only.</li>
          </ul>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-3">Important Dates</h2>
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <FaCalendarAlt className="text-fuchsia-800" />
          <span><strong>Deadline:</strong> 5th November 2025</span>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://forms.gle/jh3Uc5abHVkigHFw5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-700 hover:bg-fuchsia-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md"
          >
            <FaLink />
            Fill Form
          </a>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-yellow-800">
            <strong>Note:</strong> Accommodation will be provided only to students who complete the form and fulfill all eligibility criteria.
            Priority will be given to award applicants presenting papers at the conference.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentAcc;
