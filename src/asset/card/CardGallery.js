import React from 'react'

function CardGallery({item}) {
  return (
    <div className='relative'>
      <div className='space-y-6 flex flex-col items-center justify-center'>
        <div className='h-80 w-80 overflow-hidden rounded-3xl flex items-center justify-center'>
          <img 
            className='h-full w-full object-cover' 
            src={`http://103.149.177.42:3333/${item.foto}`} 
            alt="foto" 
          />
        </div>
        <p className='text-center font-medium text-2xl font-black'>{item.judul_foto}</p>
      </div>
    </div>
  )
}

export default CardGallery
