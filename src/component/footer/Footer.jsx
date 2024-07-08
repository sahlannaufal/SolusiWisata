'use client'
import React from 'react'

function Footer() {
  return (
    <div className='h-auto bg-blue-900'>
      <div className='px-4 md:px-20 lg:px-40 py-10 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-36'>
        <div className='flex h-fit justify-center md:justify-start'>
          <img className='h-24' src="/logo_solusi.png" alt="logo"/>
        </div>
        <div className='flex-col w-full md:w-80 h-fit space-y-4 text-white text-base text-center md:text-left'>
          <div>
            <p>Jl. Soekarno Hatta Samping RM Minang Asli, Kelurahan Parit Rantang, Kec Payakumbuh Barat, Kota Payakumbuh, Sumatera Barat.</p>
          </div>
          <div>
            <p>+62 822 8563 9035</p>
          </div>
          <div>
            <p>solusiwisata@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-4/5 border-t border-gray-300 mx-auto"></div>
      <div className=''>
        <p className='pt-7 text-center text-white'>© 2023 Solusi Wisata</p>
      </div>
    </div>
  )
}

export default Footer;
