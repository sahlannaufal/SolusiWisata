import Link from 'next/link'
import React from 'react'

function Card({item}) {
  return (
    <div className=' w-96 rounded-3xl border-2'>
        <div className='relative h-80 overflow-hidden rounded-t-3xl'>
          <img className='absolute' src={`http://103.149.177.42:3333/${item.foto}`} alt="foto" />
        </div>
        <div className='space-y-4 mx-4 my-4'>
          <div className='space-y-1'>
            <p className='font-bold text-xl leading-tight'>{item.judul}</p>
            <p className='text-base text-gray-600'>{item.konten}</p>
            <Link href={`/article/${item.id}`} className='font-medium text-base text-blue-700'>Read More
            </Link>
          </div>
          <div className='flex content-center justify-between'>
          </div>
        </div>
      </div>
  )
}

export default Card