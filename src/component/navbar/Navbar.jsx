import React from 'react';
import Link from 'next/link';

const NavButton = ({nama, href}) => {
  return (
    <Link href={href} className='flex align-middle p-2'>
    {nama}
    </Link>
  )
}

function Navbar() {
  return (
    <div className='flex flex-row font-semibold align-middle bg-white justify-between py-2 bg-gradient-to-b from-blue-800 px-40 pb-20 pt-5'>
    <div className=''>
      <img className='flex h-20' src="/logo_solusi.png" alt="logo"/>
    </div>
    <div className='flex align-middle space-x-6 m-8 '>
      <NavButton nama="Home" href="/" />
      <NavButton nama="Paket Tour" href="/paketTour" />
      <NavButton nama="Armada" href="/armada" />
      <NavButton nama="Gallery" href="/gallery" />
      <NavButton nama="Articles" href="/article" />
    </div>
    </div>
  ) 
}

export default Navbar