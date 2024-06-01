import CardArmada from '@/asset/card/CardArmada'
import React from 'react'
function Armada() {
  return (
    <div className='bg-blue-300 px-40 py-8 bg-opacity-20'>
      <p className='font-bold text-4xl text-center pb-10'>Armada</p>
      <div className='flex space-x-6 mb-10'>
      <CardArmada />
      <CardArmada />
      <CardArmada />
      <CardArmada />
      </div>
    </div>
  )
}

export default Armada