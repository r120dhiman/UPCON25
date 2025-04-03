import React from "react";

const Registration = () => {
  const pricingData = [
    { category: "Indian Author (Academia/ Industry)", earlyBird: ['INR 10800', 'INR 13160'], standard: ['INR 13160', 'INR 15520'] },
    { category: "Indian Student Attendee (Non-Author)", earlyBird: ['INR 4900', 'INR 6080'], standard: ['INR 6080', 'INR 7260'] },
    { category: "Indian Professional Attendee (Non-Author)", earlyBird: ['INR 7260', 'INR 8440'], standard: ['INR 8440', 'INR 9620'] },
    { category: "Tutorial only (Indian Student) (Rs)", earlyBird: ['INR 600', 'INR 850'], standard: ['INR 850', 'INR 1200'] },//not changed
    { category: "Foreign Author (Academia/Industry)", earlyBird: ["$375", "$435"], standard: ["$435", "$495"] },
    { category: "Foreign Student Attendee (Non-Author)", earlyBird: ["$195", "$225"], standard: ["$225", "$255"] },
    { category: "Foreign Professional Attendee (Additional Page)", earlyBird: ["$25 / page", "$25 / page"], standard: ["$25 / page", "$25 / page"] },//not changed
    { category: "Indian Professional Author/Attendee", earlyBird: ["INR 1000/page", "INR 1000/page"], standard: ["INR 1000/page", "INR 1000/page"] },//not changed
    { category: "Foreign Author Attendee (Non-Author)", earlyBird: ["$255", "$315"], standard: ["$315", "$375"] },
    { category: "Tutorial only (Foreign Student)", earlyBird: ["$30", "$45"], standard: ["$45", "$60"] },//not changed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1
        className="text-4xl sm:text-5xl py-3 font-extrabold text-center mb-10 bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent drop-shadow-lg"
      >
        Registration Details
      </h1>
      <div className="overflow-x-auto p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Important Dates</h2>
        <table className="min-w-full border border-gray-200 text-sm md:text-base text-center shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-[#5e365b] to-blue-700 text-white">
            <tr>
              <th className="border p-4 font-semibold">Event</th>
              <th className="border p-4 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200 transition">
              <td className="border p-4 font-medium">Registration Opening</td>
              <td className="border p-4">September 1, 2025</td>
            </tr>
            <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200 transition">
              <td className="border p-4 font-medium">Early Bird Closing</td>
              <td className="border p-4">September 30, 2025</td>
            </tr>
            {/* <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200 transition">
              <td className="border p-4 font-medium">Standard Registration Closing</td>
              <td className="border p-4">15th April 2025</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Registration Pricing</h2>
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
        <p className="text-center text-red-600 mt-4 text-sm font-medium">
          Rates are inclusive of GST 18%. <br /> One full author registration can register up to 2 papers.
        </p>
      </div>
    </div>
  );
};

export default Registration;
