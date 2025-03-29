import React from "react";
import { motion } from "framer-motion";

const attractions = [
  { name: "Ganga Aarti", image: "/ganga-aarti.jpg" },
  { name: "Ganga Ghats", image: "/ganga-ghats.jpg" },
  { name: "Vishwanath Temple", image: "/Kashi_Vishwanath.jpg" },
  { name: "Sarnath", image: "/sarnath.jpg" },
  { name: "Ramnagar Fort", image: "/ramnagarfort.jpg" },
  {name:"Tulsi Manas", image:"/tulsimanas.jpeg"},
  {name:"The Lal Khan Tomb", image:"/lalKhanTomb.jpg"},
  {name:"The Thai Temple", image:"/thaiTemple.webp"},
  {name:"Alamgir Masjid", image:"/alamgir.jpg"},
  {name:"Sarnath Museum", image:"/Sarnath_Museum_Front.jpg"},

];

function TourismGallery() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#573054]/50 to-[#3d1f2c]/50 my-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#ffffe0] mb-12 bg-black/30 px-6 sm:px-10 py-2 w-fit mx-auto rounded-3xl shadow-lg">
          Explore Varanasi
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center w-full"
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white cursor-pointer group">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center px-2 sm:px-3">
                    {attraction.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourismGallery;