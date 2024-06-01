import React from 'react'
import ButtonPesanSekarang from '../button/ButtonPesanSekarang'

ButtonPesanSekarang
function Card() {
  return (
    <div className=' w-96 rounded-3xl border-2'>
        <div className='relative h-80 overflow-hidden rounded-t-3xl'>
          <img className='absolute' src="./foto4.jpg" alt="foto" />
        </div>
        <div className='space-y-4 mx-4 my-4'>
          <div className='space-y-1'>
            <p className='font-bold text-xl leading-tight'>Padang - Twin Lake - Batusangkar - Bukittinggi</p>
            <p className='text-base text-gray-600'>4 Days - 3 Nights</p>
            <p className='font-medium text-base text-blue-700'>Read More</p>
          </div>
          <div className='flex content-center justify-between'>
            <div className='space-y-1'>
              <p className='text-base font-medium'>Harga</p>
              <p><span className='font-bold'>RP 1.500.000</span><span className='text-sm'>/Orang</span></p>
            </div>
            <div className=''>
            <ButtonPesanSekarang nama="Pesan Sekarang" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card