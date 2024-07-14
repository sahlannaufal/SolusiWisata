import React from 'react'

function ButtonPesanSekarang({nama, url}) {
  const handleClick = () => {
    window.location.href = url;
  };
  return (
          <button className='bg-blue-700 text-white px-4 py-3 rounded-3xl text-xs' onClick={handleClick}>{nama}</button>
  )
}

export default ButtonPesanSekarang