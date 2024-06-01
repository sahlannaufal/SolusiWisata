import React from 'react'
function Footer() {
  return (
    <div className='h-80 bg-blue-900'>
    <div className='px-40 flex py-10 justify-center items-center space-x-36'>
      <div className='flex h-fit'>
        <img className='h-24' src="/logo_solusi.png" alt="logo"/>
      </div>
      <div className='flex-col w-80 h-fit space-y-4 text-white text-base'>
        <div className=''>
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
    <div class="w-4/5 border-t border-gray-300 mx-auto"></div>
    <div className=''>
      <p className='pt-7 text-center text-white'>© 2023 Solusi Wisata</p>
    </div>
    </div>
  )
}

export default Footer