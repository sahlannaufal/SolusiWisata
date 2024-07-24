'use client';
import Navbar from '@/component/navbar/Navbar';
import { useGetPaket } from '@/hooks/PaketHooks';
import { useParams } from 'next/navigation';
import React from 'react'


export default function Paket() {
  const [paketData, isLoadingPaket] = useGetPaket();
  const { id } = useParams(); // Ambil ID paket dari params navigasi
  const paket = paketData.find(paket => paket.id === Number(id));

  if (!paket) {
    return <p>Paket not found.</p>;
  }

  return (
    <>
    <Navbar />
    <div className='container mx-auto py-8 px-4 md:px-0'>
      <div className='max-w-3xl mx-auto'>
        <header className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>{paket.nama}</h1>
          {/* <p className='text-gray-600 text-sm'>By {paket.harga}</p> */}
        </header>
        <article className='prose prose-lg'>
          <img 
            src={`http://103.149.177.42:3333/${paket.foto}`} 
            alt="Paket Image" 
            className='mb-4 rounded-lg'
          />
          <p dangerouslySetInnerHTML={{__html: paket.deskripsi}}/>
        </article>
      </div>
    </div>
    </>
  );
}
