import React from 'react'

function Sponsers() {
  return (
    <div className="mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-transparent bg-clip-text">Sponsorship Opportunities</h2>
      <div className="overflow-x-auto w-[90vw] mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gradient-to-r from-purple-700 to-pink-600 text-white">
              <th className="py-3 px-4 border border-gray-300 font-semibold text-center">Category</th>
              <th className="py-3 px-4 border border-gray-300 font-semibold text-center">Title Sponsor</th>
              <th className="py-3 px-4 border border-gray-300 font-semibold text-center">Diamond</th>
              <th className="py-3 px-4 border border-gray-300 font-semibold text-center">Gold</th>
              <th className="py-3 px-4 border border-gray-300 font-semibold text-center">Silver</th>
              <th className="py-3 px-4 border border-gray-300 font-semibold text-center">Bronze</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100 transition">
              <td className="py-2 px-4 border border-gray-300 bg-gray-50 font-semibold text-left">Amount (INR)</td>
              <td className="py-2 px-4 border border-gray-300 text-center">₹4 Lakh*</td>
              <td className="py-2 px-4 border border-gray-300 text-center">₹2 Lakh*</td>
              <td className="py-2 px-4 border border-gray-300 text-center">₹1 Lakh*</td>
              <td className="py-2 px-4 border border-gray-300 text-center">₹0.5 Lakh*</td>
              <td className="py-2 px-4 border border-gray-300 text-center">₹0.25 Lakh*</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="py-2 px-4 border border-gray-300 bg-gray-50 font-semibold text-left">Free Attendee Registrations</td>
              <td className="py-2 px-4 border border-gray-300 text-center">6</td>
              <td className="py-2 px-4 border border-gray-300 text-center">5</td>
              <td className="py-2 px-4 border border-gray-300 text-center">3</td>
              <td className="py-2 px-4 border border-gray-300 text-center">2</td>
              <td className="py-2 px-4 border border-gray-300 text-center">1</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100 transition">
              <td className="py-2 px-4 border border-gray-300 bg-gray-50 font-semibold text-left">Invitation to Expert Talk</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">—</td>
              <td className="py-2 px-4 border border-gray-300 text-center">—</td>
              <td className="py-2 px-4 border border-gray-300 text-center">—</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="py-2 px-4 border border-gray-300 bg-gray-50 font-semibold text-left">Logo Placement (as provided by sponsor)</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100 transition">
              <td className="py-2 px-4 border border-gray-300 bg-gray-50 font-semibold text-left">Exhibition Booth</td>
              <td className="py-2 px-4 border border-gray-300 text-center">6m×6m</td>
              <td className="py-2 px-4 border border-gray-300 text-center">6m×3m</td>
              <td className="py-2 px-4 border border-gray-300 text-center">3m×3m</td>
              <td className="py-2 px-4 border border-gray-300 text-center">2m×3m</td>
              <td className="py-2 px-4 border border-gray-300 text-center">—</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="py-2 px-4 border border-gray-300 bg-gray-50 font-semibold text-left">Sponsor’s Brochure/Flyer in Conference Kit</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">✓</td>
              <td className="py-2 px-4 border border-gray-300 text-center">—</td>
              <td className="py-2 px-4 border border-gray-300 text-center">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm text-red-600 font-medium text-center">
        *GST exclusive rates
      </div>

      <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 shadow-md">
        <h3 className="text-2xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-transparent bg-clip-text">For Sponsorship, contact Sponsorship Chairs:</h3>
        <ul className="space-y-3 text-gray-800 text-center">
          <li>
            <span className="font-medium">📧 Dr. Rajeev Kumar Singh</span> – <a href="mailto:rksingh.eee@iitbhu.ac.in" className="text-blue-600 underline">rksingh.eee@iitbhu.ac.in</a>
          </li>
          <li>
            <span className="font-medium">📧 Dr. Arup Kumar Das</span> – <a href="mailto:arupdas.eee@itbhu.ac.in" className="text-blue-600 underline">arupdas.eee@itbhu.ac.in</a>
          </li>
          <li>
            <span className="font-medium">📧 Dr. Anubrata Das</span> – <a href="mailto:anubrata.eee@iitbhu.ac.in" className="text-blue-600 underline">anubrata.eee@iitbhu.ac.in</a>
          </li>
          <li>
            <span className="font-medium">📧 Prof. Sandip Ghosh</span> – <a href="mailto:sghosh.eee@iitbhu.ac.in" className="text-blue-600 underline">sghosh.eee@iitbhu.ac.in</a>
          </li>
          <li>
            <span className="font-medium">📧 Dr. Subho Pal</span> – <a href="mailto:subho.eee@itbhu.ac.in" className="text-blue-600 underline">subho.eee@itbhu.ac.in</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sponsers
