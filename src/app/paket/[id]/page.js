'use client';
import Navbar from '@/component/navbar/Navbar';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

// const articles = [
//   { id: 1, title: 'First Article', content: 'Full content of the first article.' },
//   { id: 2, title: 'Second Article', content: 'Full content of the second article.' },
//   // Tambahkan artikel lainnya sesuai kebutuhan
// ];

export default function Article() {
const [paket, setPaket] = useState([]);
  const { id } = useParams(); // Ambil ID paket dari params navigasi
  const rincianPaket = paket.find(rincianPaket => rincianPaket.id === Number(id));

  

  useEffect(() => {
    const fetchPaket = async () => {
      const response = await fetch('http://103.149.177.42:3333/paket');
      console.log('responses status:', response.status);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data fetched from API:', data.data.paketPerjalanan);
      
      if (data && Array.isArray(data.data.paketPerjalanan)) {
        setPaket(data.data.paketPerjalanan);
      } else {
        console.error('Expected an array but got:', data.data.paketPerjalanan);
      }

    }

    fetchPaket();
  }, []);

  if (!rincianPaket) {
    return <p>Paket not found.</p>;
  }

  return (
    <>
    <Navbar />
    <div className='container mx-auto py-8 px-4 md:px-0'>
      <div className='max-w-3xl mx-auto'>
        <header className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>{rincianPaket.destinasi}</h1>
          <p className='text-gray-600 text-sm'>By {rincianPaket.harga}</p>
        </header>
        <article className='prose prose-lg'>
          <img 
            src={`http://103.149.177.42:3333/${rincianPaket.foto}`} 
            alt="Paket Image" 
            className='mb-4 rounded-lg'
          />
          <p>{rincianPaket.deskripsi}</p>
        </article>
      </div>
    </div>
    </>
  );
}
