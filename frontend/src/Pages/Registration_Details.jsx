import React from 'react'

function Registration_Details() {
      const pricingData = [
    { category: "Indian Author (Academia/ Industry)", earlyBird: ['INR 10800', 'INR 13160'], standard: ['INR 13160', 'INR 15520'] },
    { category: "Indian Student Attendee (Non-Author)", earlyBird: ['INR 4900', 'INR 6080'], standard: ['INR 6080', 'INR 7260'] },
    { category: "Indian Professional Attendee (Non-Author)", earlyBird: ['INR 7260', 'INR 8440'], standard: ['INR 8440', 'INR 9620'] },
    { category: "Tutorial only (Indian Student) (Rs)", earlyBird: ['INR 600', 'INR 850'], standard: ['INR 850', 'INR 1200'] },//not changed
    { category: "Foreign Author (Academia/Industry)", earlyBird: ["$375", "$435"], standard: ["$435", "$495"] },
    { category: "Foreign Student Attendee (Non-Author)", earlyBird: ["$195", "$225"], standard: ["$225", "$255"] },
    // { category: "Foreign Professional Attendee (Additional Page)", earlyBird: ["$25 / page", "$25 / page"], standard: ["$25 / page", "$25 / page"] },//not changed
    // { category: "Indian Professional Author/Attendee", earlyBird: ["INR 1000/page", "INR 1000/page"], standard: ["INR 1000/page", "INR 1000/page"] },//not changed
    { category: "Foreign Author Attendee (Non-Author)", earlyBird: ["$255", "$315"], standard: ["$315", "$375"] },
    { category: "Tutorial only (Foreign Student)", earlyBird: ["$30", "$45"], standard: ["$45", "$60"] },//not changed
  ];
  //account 
//   32778803937
// IFSC SBIN0011445
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 min-h-screen relative'>
         <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white to-blue-700/15 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
      brightness-100 mix-blend-multiply"
        />
      </div>
      <table className="min-w-full border border-gray-200 text-sm md:text-base text-center shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-[#5e365b] to-blue-700 text-white">
            <tr>
              <th className="border p-4">Category</th>
              <th className="border p-4">Early Bird (IEEE)</th>
              <th className="border p-4">Early Bird (Non-IEEE)</th>
              <th className="border p-4">Standard (IEEE)</th>
              <th className="border p-4">Standard (Non-IEEE)</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200 transition">
                <td className="border p-4 font-semibold">{item.category}</td>
                <td className="border p-4">{item.earlyBird[0]}</td>
                <td className="border p-4">{item.earlyBird[1]}</td>
                <td className="border p-4">{item.standard[0]}</td>
                <td className="border p-4">{item.standard[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8 p-6 bg-white/80 shadow-md rounded-lg border border-gray-300 max-w-3xl mx-auto">
  <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">Bank Account Details</h2>
  <div className="space-y-2 text-gray-700">
    <p><span className="font-semibold">Account Name:</span> Institute Development Fund</p>
    <p><span className="font-semibold">Account Number:</span> 32778803937</p>
    <p><span className="font-semibold">IFSC Code:</span> SBIN0011445</p>
    <p><span className="font-semibold">SWIFT Code:</span> SBININBB501</p>
    <p><span className="font-semibold">MICR Code:</span> 221002036</p>
  </div>
</div>
<div className="finalregistration text-center mt-8">
  <a
    href="https://forms.gle/jh3Uc5abHVkigHFw5"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition-all font-semibold"
  >
    Fill Registration Details
  </a>
</div>
    </div>
  )
}

export default Registration_Details
