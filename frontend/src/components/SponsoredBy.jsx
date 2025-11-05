import React from 'react'
function SponsoredBy({ imageUrl }) {
  if (!imageUrl) return null

  return (
    <div>
        <h1 className='text-center text-3xl text-purple-700/80'>Soponsored By</h1>
      <img
        src={imageUrl}
        alt="Sponsored By"
        className="mx-auto my-4 max-h-36 object-contain"
      />
    </div>
  )
}

export default SponsoredBy
