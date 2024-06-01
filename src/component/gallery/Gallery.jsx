import CardGallery from '@/asset/card/CardGallery'
import React from 'react'
function Gallery() {
  return (
    <div className='px-40 py-8 mb-10 '>
      <div>
      <p className='font-bold text-4xl text-center pb-10'>Gallery</p>
      </div>
      <div className='grid grid-cols-3 gap-x-16 gap-y-10'>
        <CardGallery nama='Family Gathering' foto='foto5' />
        <CardGallery nama='Paket Tour Pulau' foto='foto4'/>
        <CardGallery nama='Outbond Training' foto='foto3'/>
        <CardGallery nama='Company Outing' foto='foto2'/>
        <CardGallery nama='Family Gathering' foto='foto1'/>
        <CardGallery nama='Sewa Bus Pariwisata' foto='foto5'/>

      </div>
    </div>
  )
}

export default Gallery