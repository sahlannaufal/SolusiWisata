import React from 'react';

const NavButton = ({nama}) => {
  return (
    <a className='flex align-middle p-2' href="/">{nama}</a>
  )
}

function Navbar() {
  return (
    <div className='flex flex-row font-semibold align-middle bg-white justify-between py-2 bg-gradient-to-b from-blue-800 px-40 pb-20 pt-5'>
    <div className=''>
      <img className='flex h-20' src="/logo_solusi.png" alt="logo"/>
    </div>
    <div className='flex align-middle space-x-6 m-8 '>
      <NavButton nama="Home" />
      <NavButton nama="Paket Tour" />
      <NavButton nama="Armada" />
      <NavButton nama="Gallery" />
    </div>
    </div>
  ) 
}

export default Navbar