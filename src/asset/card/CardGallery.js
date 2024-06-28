import React from 'react'

function CardGallery({nama,foto}) {
  return (
    <div className='space-y-6 flex flex-col items-center justify-center'>
        <div className='h-80 w-80 overflow-hidden rounded-3xl flex items-center justify-center'>
        <img className='' src={`${foto}`} alt="foto" />
        </div>
            <p className='text-center font-medium text-2xl'>{nama}</p>
    </div>
  )
}

export default CardGallery