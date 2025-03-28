import React from "react";

const attractions = [
  { name: "Ganga Aarti", image: "/ganga-aarti.jpg" },
  { name: "Ganga Ghats", image: "/ganga-ghats.jpg" },
  { name: "Vishwanath Temple", image: "/Kashi_Vishwanath.jpg" },
  { name: "Sarnath", image: "/sarnath.jpg" },
  { name: "Ramnagar Fort", image: "/ramnagarfort.jpg" }
];

function TourismGallery() {
  return (
    <section className="py-10 bg-[#573054]/40 my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#ffffe0] mb-12 backdrop-blur-5xl bg-black/30 rounded-4xl">
          Explore Varanasi
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <div className="relative h-72 w-72 rounded-full overflow-hidden shadow-lg group cursor-pointer border-4 border-white">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white text-center px-2">
                    {attraction.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourismGallery;
