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
    "Patrons": [
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
        name: "Prof. R. Mahanty",
        title: "(IIT BHU)",
        image: "/committee/rmy.png",
      },
      {
        name: "Prof. Mohd Rihan",
        title: "(Aligharh Muslim University)",
        image: "/committee/mohdrihan.jpg",
      },
      {
        name: "Prof. Akshay Rathore",
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
        name: "Dr. V.N. Lal",
        title: "(IIT BHU)",
        image: "/committee/vnlal.png",
      },
    ],
    "General Co-Chairs": [
      {
        name: "Prof. Satish Kumar Singh",
        title: "(IIIT Allahabad)",
        image: "/committee/skus.png",
      },
      {
        name: "Prof. Varun Kakar",
        title: "(BTKIT, Dwarahat)",
        image: "/committee/varunkk.jpg",
      },
      {
        name: "Prof. Devender Singh",
        title: "(IIT BHU)",
        image: "/committee/deveku.jpg",
      },
      {
        name: "Prof. Kishore P. Sarawadekar",
        title: "(IIT BHU)",
        image: "/committee/kishorep.jpg",
      },
    ],
    "Conference Secretaries": [
      {
        name: "Prof. M.K. Verma",
        title: "(IIT BHU)",
        image: "/committee/mkverma.jpg",
      },
      {
        name: "Prof. Sandip Ghosh",
        title: "(IIT BHU)",
        image: "/committee/sandipgh.jpeg",
      },
      {
        name: "Dr. Somak Bhattacharya",
        title: "(IIT BHU)",
        image: "/committee/somakbh.jpg",
      },
      {
        name: "Dr. Avirup Maulik",
        title: "(IIT BHU)",
        image: "/committee/avirup.jpg",
      },
      {
        name: "Dr. Shivam Verma",
        title: "(IIT BHU)",
        image: "/committee/shivamvm.png",
      },
      {
        name: "Dr. Atul Kumar",
        title: "(IIT BHU)",
        image: "/committee/Atul.jpg",
      },
      {
        name: "Dr. Mayank Swarnkar",
        title: "(IIT BHU)",
        image: "/committee/mayanksw.jpg",
      },
    ],
    "Finance Chair": [
      {
        name: "Dr. V.N. Lal",
        title: "(IIT BHU)",
        image: "/committee/vnlal.png",
      },
    ],
    "Publication Chairs/Technical Program Committee": [
      {
        name: "Prof. Jaison Mathew",
        title: "(GEC Thrissur)",
        image: "/committee/Jaison.png",
      },
      {
        name: "Dr. Anubrata Das",
        title: "(IIT BHU)",
        image: "/committee/anubrata.jpg",
      },
      {
        name: "Dr. Subho Paul",
        title: "(IIT BHU)",
        image: "/committee/subhopaul.jpg",
      },
      {
        name: "Dr. Arup Kumar Das",
        title: "(IIT BHU)",
        image: "/committee/arupkudas.jpg",
      },
      {
        name: " Dr. Chirodip Bakil",
        title: "(IIT Kharagpur)",
        image: "/committee/chirodeep.jpeg",
      },
      {
        name: "Dr. Asha Rani",
        title: "(NIT  Silchar)",
        image: "/committee/asha_Rani.jpg",
      },
      {
        name: "Prof. Phaneendra Babu Bobba",
        title: "(GRIET Hyderabad)",
        image: "/committee/Phaneendra.jpeg",
      },
      {
        name: "Dr. Raghvendra Kumar Chaudhary",
        title: "(IIT Kanpur)",
        image: "/committee/Rag.jpg",
      },
      {
        name: "Dr. Manoj Kumar Debnath",
        title: "(SOA University)",
        image: "/committee/Manoj.jpeg",
      },
    ],
    "Sponsorship Chairs": [
      {
        name: "Dr. Shyam Kamal",
        title: "(IIT BHU)",
        image: "/committee/shyamka.jpg",
      },
      {
        name: "Dr. Avirup Maulik",
        title: "(IIT BHU)",
        image: "/committee/avirup.jpg",
      },
      {
        name: "Dr. Dipti Saxena",
        title: "(MNIT Jaipur)",
        image: "/committee/diptisx.png",
      },
      {
        name: "Dr. Ritesh Keshari",
        title: "(VNIT Nagpur)",
        image: "/committee/riteshks.jpg",
      },
      
    ],
    "Hospitality Chairs": [
      {
        name: "Dr. Naveen Yalla",
        title: "(IIT BHU)",
        image: "/committee/naveeny.jpeg",
      },
      {
        name: "Dr. N.K. Swami Naidu",
        title: "(IIT BHU)",
        image: "/committee/nksn.jpg",
      },
      {
        name: "Dr. Prasenjit Chanak",
        title: "(IIT BHU)",
        image: "/committee/prasan.jpg",
      },
    ],
    "Plenary Chairs": [
      {
        name: "Prof. R.K. Saket",
        title: "(IIT BHU)",
        image: "/committee/rksaket.jpg",
      },
      {
        name: "Prof. S.R. Mohanty",
        title: "(IIT BHU)",
        image: "/committee/rmh.png",
      },
      {
        name: "Prof. S.K. Singh",
        title: "(IIT BHU)",
        image: "/committee/sksingh.jpg",
      },
      {
        name: "Dr. J.C. Pandey",
        title: "(IIT BHU)",
        image: "/committee/jcpan.jpg",
      },
      {
        name: "Dr. Sunanda Sinha",
        title: "(MNIT Jaipur)",
        image: "/committee/sunanda.png",
      },
      {
        name: "Dr. Akhilesh Tiwari",
        title: "(IIIT Allahabad)",
        image: "/committee/akh.jpeg",
      },
      {
        name: "Prof. Avadhesh Kumar",
        title: "(Galgotias University)",
        image: "/committee/av.jpeg",
      },
      {
        name: "Dr. Prabhakar Tiwari",
        title: "(MMMUT Gorakhpur)",
        image: "/committee/pr.jpeg",
      },
    ],
    "WIE Chairs": [
      {
        name: "Prof. Kalpana Chaudhary",
        title: "(IIT BHU)",
        image: "/committee/kalcha.jpg",
      },
      {
        name: "Dr. Ravita Lamba",
        title: "(IIT Roorkee)",
        image: "/committee/ravitala.jpg",
      },
    ],
    "SYP Chair": [
      {
        name: "Dr. Kaushik Basu",
        title: "(IISC Bangalore)",
        image: "/committee/kaushikba.jpg",
      },
    ],
    "International Advisory Committee": [
      {
        name: "Dr. Brij N. Singh",
        title: "(John Deere)",
        image: "/committee/brijn.jpeg",
      },
      {
        name: "Dr. Sanjeet Dwivedi",
        title: "(Siemens Gamesa Renewable Energy A/S Denmark)",
        image: "/committee/Sanjeet.jpg",
      },
      {
        name: "Prof. Victor Veliadis",
        title: "(North Carolina State University)",
        image: "/committee/victorve.jpg",
      },
      {
        name: "Dr. Danan Dou",
        title: "(John Deere)",
        image: "/committee/danon.jpeg",
      },
      {
        name: "Prof. Subhashish Bhattacharya",
        title: "(North Carolina State University)",
        image: "/committee/shbh.jpg",
      },
    ],
    "National Advisory Committee": [
      {
        name: "Prof. Bhim Singh",
        title: "(IIT Delhi)",
        image: "/committee/bhimsingh.png",
      },
      {
        name: "Prof. Santanu Kumar Mishra",
        title: "(IIT Delhi)",
        image: "/committee/santanukm.jpeg",
      },
      {
        name: "Prof. B.K. Panigrahi",
        title: "(IIT Delhi)",
        image: "/committee/bkpanigrahi.jpg",
      },
      {
        name: "Prof. Siddhartha Mukhopadhyay",
        title: "(IIT Kharagpur)",
        image: "/committee/siddmu.jpg",
      },
      {
        name: "Prof. Subhashis Basu",
        title: "(IIT Kharagpur)",
        image: "/committee/subhbasu.jpeg",
      },
      {
        name: "Prof. K. V. Srivastava",
        title: "(IIT Kanpur)",
        image: "/committee/KV.jpg",
      },
      {
        name: "Dr. Pankaj Achutan",
        title: "(NAL, Bangalore)",
        image: "/committee/pankac.png",
      },
    ],
    "Web Management": [
      {
        name: "Dr. Chinamaya KA",
        title: "(IIT BHU)",
        image: "/committee/chinmaya.jpg",
      },
      {
        name: "Dr. Anubrata Das",
        title: "(IIT BHU)",
        image: "/committee/anubrata.jpg",
      },
      {
        name: "Saksham Agrawal",
        title: "(IIT BHU)",
        image: "/committee/saksham.jpeg",
      },
      {
        name: "Rohit Kumar",
        title: "(IIT BHU)",
        image: "/committee/rohitkumar.jpeg",
      },
    ],
    "PhD Colloquium Chair": [
      {
        name: "Prof. R.K. Mishra",
        title: "(IIT BHU)",
        image: "/committee/Rk.jpeg",
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
