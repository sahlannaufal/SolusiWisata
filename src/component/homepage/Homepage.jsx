import React from 'react'

const Tombol = ({nama}) => {
  return (
    <button className='bg-slate-800 text-white px-9 py-4 rounded-2xl' href="/">{nama}</button>
  )
}

function Homepage() {
  return (
    <div className='flex flex-row justify-between pb-52 px-40'>
      <div className='w-1/2 space-y-8 h-fit'>
            <div className=' space-y-4'>
                  <div className=''>
                    <p className='leading-tight font-bold text-5xl'>Nikmati liburanmu bersama <br/><span className='text-blue-600 border-white'>Solusi Wisata</span></p>
                  </div>
                <p className='w-96 text-justify leading-normal'>Travel agent yang telah berpengalaman dalam melayani banyak wisatawan lokal maupun asing dalam hal layanan tour di Sumatera Barat</p>
            </div>
          <Tombol nama="Contact"/>
      </div>
        <div className='max-h-96	'>
            <div className='max-h-fit relative -left-60 -top-16 rounded-2xl'>
              <div className='h-80 w-96 rounded-2xl overflow-hidden relative  shadow-xl'>
                <img className='w-auto absolute -top-36 left-6 scale-125' src="./foto2.jpg" alt="logo"/>
              </div>
            </div>
            <div className='relative left-40 -top-80 pt-6  rounded-2xl'>
              <div className='h-64 w-48 -top-2 rounded-2xl overflow-hidden relative shadow-xl '>
                <img className='w-auto absolute scale-125' src="./foto1.jpg" alt="logo"/>
              </div>
            </div>
            <div className='relative -left-44 -top-80 pt-6 rounded-2xl'>
        <div className='h-56 w-80 rounded-2xl overflow-hidden relative shadow-xl -top-6 left-8'>
          <img className='w-auto absolute -top-36 left-6 scale-125' src="./foto3.jpg" alt="logo"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage