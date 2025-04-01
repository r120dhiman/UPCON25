import React from "react";

const CommitteeSection = ({ title, members }) => {
    const getGridCols = (count) => {
        if (count === 1) return 'grid-cols-1';
        if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
        if (count === 3) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
        if (count === 4) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
    };

    return (
        <div className="my-4 mb-8 flex flex-col items-center w-full">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#5e365b] to-blue-800 bg-clip-text text-transparent">
                {title}
            </h3>
            <div className={`grid ${getGridCols(members.length)} gap-5 place-items-center justify-center`}>
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between items-center w-full max-w-[250px] p-3 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                        <div
                            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-full border-2 border-black/20 mb-4 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>
                        <p
                            className="text-md md:text-lg lg:text-xl font-semibold text-gray-800 text-center 
                                                    bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text"
                        >
                            {member.name}
                        </p>
                        {member.title && (
                            <p className="text-sm md:text-md text-center text-gray-800 mt-1">
                                {member.title}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Committee = () => {
  const committees = {
    "Chief Patron": [
      {
        name: "Prof. Amit Patra",
        title: "(Director, IIT BHU)",
        image: "/committee/amitpatra.jpg",
      },
    ],
    "Patron": [
      {
        name: "Prof. S.N. Singh",
        title: "(Director, AVB-IIITM Gwalior)",
        image: "/committee/snsingh.jpg",
      },
      {
        name: "Prof. J. Ramkumar",
        title: "(IIT Kanpur)",
        image: "/committee/jramk.jpeg",
      },
      {
        name: "Prof. S.C. Srivastava",
        title: "(IIT Kanpur)",
        image: "/committee/scsri.jpg",
      },
      {
        name: "Prof. Asheesh Kumar Singh",
        title: "(MNNIT Allahabad)",
        image: "/committee/aks.jpg",
      },
    ],
    "Honorary General Chairs": [
      {
        name: "Prof. Yogesh Singh Chauhan",
        title: "(IIT Kanpur)",
        image: "/committee/yogesh-singh-chauhan.jpg",
      },
      {
        name: "Prof. R. Mohanty",
        title: "(IIT BHU)",
        image: "/committee/rmohan.jpg",
      },
      {
        name: "Prof. Mohd Rihan",
        title: "(AMU)",
        image: "/committee/mohdrihan.jpg",
      },
      {
        name: "Prof. Akshay Rathoore",
        title: "(SIT, Singapore)",
        image: "/committee/aksrath.jpg",
      },
    ],
    "General Chairs": [
      {
        name: "Prof. R.K. Singh",
        title: "(IIT BHU)",
        image: "/committee/rksingh.png",
      },
      {
        name: "Prof. V.N. Lal",
        title: "(IIT BHU)",
        image: "/committee/vnlal.png",
      },
    ],
    "General Co-Chairs": [
      {
        name: "Prof. Satish Kumar Singh",
        title: "(IIIT Allahabad)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Prof. Varun Kakran",
        title: "(BTKIT, Dwarkahat)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Prof. Devender Singh",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Prof. Kishore P. Sarawadekar",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "Conference Secretary": [
      {
        name: "Prof. M.K. Verma",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Prof. Sandip Ghosh",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Prof. R.K. Mohanty",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Somak Bhattacharya",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Avirup Maulik",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Shivam Verma",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Atul Kumar",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Mayank Swarnkar",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. R. Kalpana",
        title: "(NIT Calicut)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "Finance Chair": [
      {
        name: "Dr. V.N. Lal",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "Publication Chair": [
      {
        name: "Dr. Jason Matthew",
        title: "(NIT Warangal)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Anubrata Das",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Subho Paul",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Arup Kumar Das",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Ranjita Patel",
        title: "(KIIT Bhubaneswar)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "Sponsorship Chair": [
      {
        name: "Dr. Shyam Kamal",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Avirup Maulik",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Dipti Saxena",
        title: "(MNIT Jaipur)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Ritesh Keshari",
        title: "(VNIT Nagpur)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "Hospitality Chair": [
      {
        name: "Dr. Naveen Yalla",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. N.K. Swami Naidu",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Prasenjit Chanak",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "Plenary Chair": [
      {
        name: "Dr. R.K. Saket",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. S.R. Mohanty",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. S.K. Singh",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. J.C. Pandey",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Sunanda Sinha",
        title: "(NIT Jaipur)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    WIE: [
      {
        name: "Dr. Kalpana Chaudhury",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Ravita Lamba",
        title: "(IIT Roorkee)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    SYP: [
      {
        name: "Dr. Kaushik Basu",
        title: "(IISC Bangalore)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "International Advisory Committee": [
      {
        name: "Dr. Brij N. Singh",
        title: "(John Deere)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Sanjit Swivedi",
        title: "(Danfoss)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Victor Veliadis",
        title: "(NCSU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Danan Dou",
        title: "(John Deere)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Subhashish Bhattacharya",
        title: "(NCSU)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "National Advisory Committee": [
      {
        name: "Dr. Bhim Singh",
        title: "(IIT Delhi)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Santanu Kumar Mishra",
        title: "(IIT Delhi)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. B.K. Panigrahi",
        title: "(IIT Delhi)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Siddhartha Mukhopadhyay",
        title: "(IIT Kharagpur)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Subhashis Basu",
        title: "(IIT Kharagpur)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Pankaj Achutan",
        title: "(NAL, Bangalore)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "Web Management": [
      {
        name: "Dr. Chinamaya KA",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Dr. Anubrata Das",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Saksham Agrawal",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
      {
        name: "Rohit Kumar",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
    "PhD Colloquium Chair": [
      {
        name: "Dr. R.K. Mishra",
        title: "(IIT BHU)",
        image: "/Speakers/Avatar.jpeg",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen items-center w-full">
    <div className="fixed inset-x-0 bottom-0 h-[80vh] -z-10 bg-gradient-to-b from-white/10 via-blue-700/10 to-blue-700/20 mix-blend-multiply">
      <div
        className="absolute inset-0 bg-[url(/build.jpg)] opacity-10 bg-bottom bg-no-repeat bg-contain 
    brightness-100 mix-blend-multiply"
      />
    </div>

    <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 flex flex-col items-center">
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#5e365b] to-blue-700 bg-clip-text text-transparent drop-shadow-lg"
      >
        ORGANIZING COMMITTEE
      </h1>

      <div className="space-y-10 w-full flex flex-col items-center">
        {Object.entries(committees).map(([title, members]) => (
          <CommitteeSection key={title} title={title} members={members} />
        ))}
      </div>
    </div>
  </div>
);
};

export default Committee;
