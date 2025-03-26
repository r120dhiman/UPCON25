import React from 'react';
import { Link } from 'react-router';

function PHDColloquium() {
  return (
    <div className='flex flex-col w-screen'>
      <div className="upper relative h-[70vh] bg-[url(/phd.jpg)] bg-no-repeat bg-cover">
        <div className="data absolute left-8 bottom-8">
          <p className='text-3xl text-[#ffffff] font-extrabold'>PhD Colloquium</p>
          <Link 
            to="/" 
            className="text-xl font-bold text-white bg-transparent hover:bg-amber-200 hover:text-black rounded-2xl px-4 transition-transform transform duration-600 ease-in-out hover:scale-110 shadow-md"
          >
            Home
          </Link>
          <span className='px-5 text-white'>PHD COLLOQUIUM</span>
        </div>
      </div>
    </div>
  );
}

export default PHDColloquium;