import React from 'react'

function Homepage() {
  return (
    <div className='flex flex-col'>
      <div className="upper flex flex-row justify-between items-center px-16 pb-2  backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
  <img src="/UPCON.png" alt="UPCON logo" className="w-24 h-24 " />
  <h1 className="text-4xl  text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-xl">
    UPCON 2025
  </h1>
  <p className="text-xl text-black font-medium bg-blue/20 px-4 py-2 rounded-lg shadow-md">
    From DD/MM To DD/MM
  </p>
</div>
    </div>
  )
}

export default Homepage
