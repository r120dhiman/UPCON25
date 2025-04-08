import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const sectionRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    listItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);

  const topics = [
    'Cyber-physical systems and networks',
    'Applied machine learning and deep learning',
    'EM propagation, material properties, and measurements',
    'Microwave/mm-Wave communication and imaging',
    'Aerospace energy conversion systems',
    'Sustainable electric mobility and charging infrastructure',
    'Power converter technologies, modulation, and control',
    'Grid-forming techniques',
    'Renewable energy sources, distributed generation, and grid interconnection',
    'Multilevel and multi-output converters for electric drives',
    'Industrial motor drives and automation',
    'Digital twins, cloud design, and simulation techniques for energy conversion systems',
    'Green hydrogen and storage technologies for sustainable energy systems',
    'Smart grid and microgrid technologies',
    'Evolving technologies for stability assessment and protection of IBR-penetrated power networks',
    'Energy management and trading in modern power systems',
    'Robust control, decentralized control, and networked control systems',
    'Non-linear control',
    'Condition monitoring, high-voltage, and insulation engineering',
    'FACTS, HVDC, MTDC systems',
  ];

  return (
    <section
      ref={sectionRef}
      className=" py-16 px-6 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-lg mb-6 leading-relaxed">
          The conference is technically and financially sponsored by IEEE UP Section. There are multiple tracks in the
          conference covering almost all areas of Electrical, Computer & Electronics Engineering.
        </p>

        <div className="mt-10">
          <h3 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-purple-300 pb-2">
            Topics of Interest Include (but are not limited to):
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-lg pl-4">
            {topics.map((topic, index) => (
              <li
                key={index}
                ref={(el) => (listItemsRef.current[index] = el)}
              >
                {topic}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Tech;
