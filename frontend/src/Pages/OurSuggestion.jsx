import React, { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

const hotels = [
  {
    name: "Taj Ganges, Varanasi",
    image: "/hotels/taj.jpg",
    bookLink: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=200706181821376815&_uCurrency=INR&cc=IN&checkin=10162025&checkout=10172025&city=CTVNS&country=IN&filterData=STAR_RATING%7C5&guid=cb578a93-f015-47a1-9b48-12b3eb373a44&lat=25.3361&lng=82.98418&locusId=CTVNS&locusType=city&modifyDates=true&parentHostName=www.makemytrip.com&rank=5&roomStayQualifier=2e0e&searchText=Varanasi&seoDS=true&seoReq=1757568977062&viewType=PREMIUM&mtkeys=undefined",
    mapLink: "https://maps.app.goo.gl/zRzk7v8wX1n2eYHG9",
    rating: 5
  },
  {
    name: "Rivatas",
    image: "/hotels/rivatas.jpg",
    bookLink: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=201301181122262890&_uCurrency=INR&cc=IN&checkin=10162025&checkout=10172025&city=CTVNS&country=IN&filterData=STAR_RATING%7C5&guid=cb578a93-f015-47a1-9b48-12b3eb373a44&lat=25.33746&lng=82.97973&locusId=CTVNS&locusType=city&mmAreaTag=Lanka%7CARLANK&modifyDates=true&parentHostName=www.makemytrip.com&rank=4&roomStayQualifier=2e0e&searchText=Varanasi&seoDS=true&seoReq=1757568977062&viewType=PREMIUM&mtkeys=undefined",
    mapLink: "https://maps.app.goo.gl/Zj5AHSW85RBhSFfL8",
    rating: 5
  },
  {
    name: "Om Vilas Benares",
    image: "/hotels/omvilas.jpg",
    bookLink: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=202010241601174325&_uCurrency=INR&cc=IN&checkin=10162025&checkout=10172025&city=CTVNS&country=IN&filterData=STAR_RATING%7C5&guid=cb578a93-f015-47a1-9b48-12b3eb373a44&lat=25.38317&lng=82.96459&locusId=CTVNS&locusType=city&modifyDates=true&parentHostName=www.makemytrip.com&rank=1&roomStayQualifier=2e0e&searchText=Varanasi&seoDS=true&seoReq=1757568977062&viewType=PREMIUM&mtkeys=undefined",
    mapLink: "https://maps.app.goo.gl/hPcRpfzFKCfkrmqj7",
    rating: 5
  },
  {
    name: "Hotel Broadway",
    image: "/hotels/braod.jpg",
    bookLink: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=201201271055057906&_uCurrency=INR&cc=IN&checkin=10162025&checkout=10172025&city=CTVNS&country=IN&filterData=STAR_RATING%7C4&guid=cb578a93-f015-47a1-9b48-12b3eb373a44&lat=25.29695&lng=83.00265&locusId=CTVNS&locusType=city&mmPoiTag=POI%7CBanaras%20Hindu%20University%7CPOI68412%7C25.2677203%7C82.9912582%7C&modifyDates=true&parentHostName=www.makemytrip.com&rank=7&roomStayQualifier=2e0e&searchText=Varanasi&seoDS=true&seoReq=1757568977062&mtkeys=undefined",
    mapLink: "https://maps.app.goo.gl/BKiozTKWA114oQgQ9",
    rating: 4
  },
  {
    name: "Hotel Castillo",
    image: "/hotels/castillo.jpg",
    bookLink: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=201906041334385717&_uCurrency=INR&cc=IN&checkin=10162025&checkout=10172025&city=CTVNS&country=IN&filterData=STAR_RATING%7C4&guid=cb578a93-f015-47a1-9b48-12b3eb373a44&lat=25.31198&lng=82.98843&locusId=CTVNS&locusType=city&mmPoiTag=POI%7CBanaras%20Hindu%20University%7CPOI68412%7C25.2677203%7C82.9912582%7C&modifyDates=true&parentHostName=www.makemytrip.com&rank=9&roomStayQualifier=2e0e&searchText=Varanasi&seoDS=true&seoReq=1757568977062&mtkeys=undefined",
    mapLink: "https://maps.app.goo.gl/RWnoCJ1GtEVsm49D6",
    rating: 4
  },
  {
    name: "Kashi Villa",
    image: "/hotels/kashivila.jpg",
    bookLink: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=202408281010523048&_uCurrency=INR&cc=IN&checkin=10162025&checkout=10172025&city=CTVNS&country=IN&filterData=STAR_RATING%7C3&guid=cb578a93-f015-47a1-9b48-12b3eb373a44&lat=25.30822&lng=83.00105&locusId=CTVNS&locusType=city&mmAreaTag=Lanka%7CARLANK&modifyDates=true&parentHostName=www.makemytrip.com&rank=11&roomStayQualifier=2e0e&searchText=Varanasi&seoDS=true&seoReq=1757568977062&mtkeys=undefined",
    mapLink: "https://maps.app.goo.gl/jznVuhSkWsABgqXz6",
    rating: 3
  },
];

function OurSuggestion() {
  const [selectedRatings, setSelectedRatings] = useState(new Set());

  const toggleRating = (rating) => {
    setSelectedRatings((prev) => {
      const next = new Set(prev);
      if (next.has(rating)) {
        next.delete(rating);
      } else {
        next.add(rating);
      }
      return next;
    });
  };

  const filteredHotels = useMemo(() => {
    if (selectedRatings.size === 0) return hotels;
    return hotels.filter((h) => selectedRatings.has(h.rating));
  }, [selectedRatings]);

  const renderStars = (count) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: count }).map((_, i) => (
          <FaStar key={i} className="w-3 h-3 gap-1 text-yellow-500" />
        ))}
      </div>
    );
  };
  return (
    <div className="flex flex-col min-h-screen my-10 items-center w-full">
      <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white/10 via-blue-700/10 to-blue-700/20 mix-blend-multiply">
        <div
          className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
    brightness-100 mix-blend-multiply"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto mt-4 px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
          OUR SUGGESTIONS
        </h1>

        <div className="w-full mb-6 bg-white/60 backdrop-blur-xl rounded-xl p-4 shadow-sm border border-purple-400/10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-md font-semibold text-gray-700">Filter :</span>
            {[5, 4, 3].map((rating) => (
              <label key={rating} className="inline-flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-purple-700"
                  checked={selectedRatings.has(rating)}
                  onChange={() => toggleRating(rating)}
                />
                <span className="text-md text-gray-800">{rating} Star</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredHotels.map((hotel, idx) => (
            <div
              key={idx}
              className="group bg-purple-50/80 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-[360px] border-[2px] border-[#9d5097]"
            >
              <div className="relative w-full h-44 md:h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/0 to-purple-400/10" />
              </div>

              <div className="flex-1 p-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <a
                      href={hotel.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-950 font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.901 6.066 11.945 6.324 12.232a.75.75 0 0 0 1.052 0c.258-.287 6.324-7.331 6.324-12.232 0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                      <span>Location </span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    {renderStars(hotel.rating)}
                  </div>
                </div>

                <a
                  href={hotel.bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block w-full text-center bg-gradient-to-r from-[#5e365b] to-blue-700 text-white font-semibold py-2.5 
            shadow-[0_8px_20px_rgba(109,40,217,0.25)] hover:shadow-[0_16px_32px_rgba(109,40,217,0.35)] transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurSuggestion; 