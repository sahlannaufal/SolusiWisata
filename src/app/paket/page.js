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
        throw new Error('Network response wa not ok');
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
    <div className='container mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl font-bold mb-8'>Armada</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {paket.length > 0 ? (
          paket.map((item) => (
            <Card key={item.id} item={item}/>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
