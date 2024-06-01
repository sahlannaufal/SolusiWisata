import React from 'react'
import ButtonPesanSekarang from '@/asset/button/ButtonPesanSekarang'
import Card from '@/asset/card/Card'

function PaketTour() {
  return (
    <div className='px-40'>
      <p className='font-bold text-4xl text-center pb-10'>Paket Tour & Travel</p>
      <div className='flex space-x-6 mb-20'>
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default PaketTour