import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Tech = () => {
  const sectionRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    // Animate section on load
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5, // Add slight delay after page load
      }
    );

    // Animate list items sequentially on load
    const items = document.querySelectorAll('.topic-item');
    gsap.fromTo(
      items,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1, // Add stagger effect between items
        delay: 0.8, // Start after section animation
      }
    );
  }, []);

  const topics = [
    'Cyber-physical systems and networks',
    'Applied machine learning and deep learning',
    'EM propagation, material properties, and measurements',
    'Microwave/mm-Wave communication and imaging',
    'Aerospace energy conversion systems',
    'Sustainable electric mobility and charging infrastructure',
    'Power converter technologies, modulation, and control',
    'Renewable energy sources, distributed generation and Grid forming techniques',
    'Multilevel and multi-output converters for electric drives',
    'Industrial motor drives and automation',
    'Digital twins, cloud design, and simulation techniques for energy conversion systems',
    'Green hydrogen and storage technologies for sustainable energy systems',
    'Smart grid and microgrid technologies',
    'Evolving technologies for stability assessment and protection of IBR-penetrated power networks',
    'Energy management and trading in modern power systems',
    'Robust control, decentralized control, and networked control systems',
    'Non-linear control',
    'Condition monitoring, high-voltage,insulation engineering, FACTS, HVDC and MTDC systems',
    'Devices, FPGA, VLSI and Embedded systems',
    'Signal Processing',
  ];

  return (
    <section ref={sectionRef} className="py-12 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#82127c] to-blue-700 text-white py-4 rounded-xl shadow-lg">
        Conference Tracks
      </h2>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <p className="text-lg mb-8 leading-relaxed text-gray-700 text-center">
          The conference seeks technical papers on any subject pertaining to the
          scope of the conference. The topics of interest include but are not
          limited to the following:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="topic-item bg-gradient-to-r from-white to-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-fuchsia-800 hover:scale-102"
            >
              <span className="font-medium text-gray-800">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
