import React from 'react';
import ButtonPesanSekarang from '../button/ButtonPesanSekarang';
import Link from 'next/link';

function Card({ item }) {
  return (
    <div className='w-96 rounded-3xl border-2'>
      <div className='relative h-80 overflow-hidden rounded-t-3xl'>
        <img className='absolute w-full h-full object-cover' src={`http://103.149.177.42:3333/${item.foto}`} alt="foto" />
      </div>
      <div className='space-y-4 mx-4 my-4'>
        <div className='space-y-1'>
          <p className='font-bold text-xl leading-tight'>{item.destinasi}</p>
          <p className='text-base text-gray-600'>{item.waktu}</p>
          <Link href={`/paket/${item.id}`} className='font-medium text-base text-blue-700'>Read More</Link>
        </div>
        <div className='flex justify-between items-center'>
          <div className='space-y-1'>
            <p className='text-base font-medium'>Harga</p>
            <p><span className='font-bold'>{item.harga}</span><span className='text-sm'>/Orang</span></p>
          </div>
          <div>
            <ButtonPesanSekarang nama="Pesan Sekarang" url="https://wa.me/6282285639035"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
