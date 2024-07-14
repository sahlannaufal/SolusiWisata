import Image from 'next/image'
import React from 'react'

function CardGallery({ item }) {
  return (
    
    <div>
            <Image
            src={`http://103.149.177.42:3333/${item.foto}`}
            alt="home"
            height={300}
            width={300}
            className='rounded-lg'
            />
            <h5 className="text-lg text-center font-bold tracking-tight text-gray-900">
            {item.judul}
          </h5>
          </div>
  )
}

export default CardGallery
