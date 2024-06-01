import React from 'react'
import ButtonPesanSekarang from '../button/ButtonPesanSekarang'

function CardArmada() {
  return (
    <div className=' w-80 rounded-3xl border-2'>
        <div className='relative h-80 overflow-hidden rounded-t-3xl'>
          <img className='absolute' src="./foto4.jpg" alt="foto" />
        </div>
        <div className='space-y-4 mx-8 my-4'>
          <div className='space-y-1'>
            <p className='font-bold text-xl leading-tight'>Bus Pariwisata (Big Bus)</p>
                <ul class="list-disc text-base text-gray-600">
                    <li>Kapasitas 45 seat</li>
                    <li>TV, Audio, Karaoke</li>
                    <li>Full AC</li>
                    <li>Tarif (silahkan hubungi kami)</li>
                </ul>
          </div>
          <div className='flex justify-end'>
            
            <div className=''>
            <ButtonPesanSekarang nama="Pesan Armada" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default CardArmada