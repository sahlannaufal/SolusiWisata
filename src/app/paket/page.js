'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from '@/asset/card/Card'

export default function Articles() {

const [paket, setPaket] = useState([]);

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

  return (
    <>
    <div className='md:px-0 lg:px-40 mb-16'>
      <h1 className='text-4xl text-center font-bold mb-8'>Paket Tour</h1>
      <div className='content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
      {paket.length > 0 ? (
          paket.map((item) => (
            <Card key={item.id} item={item}/>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
    </>
  );
}
