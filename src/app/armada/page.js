'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Articles() {

    const [armada, setArmada] = useState([]);

    useEffect(() => {
      const fetchArmada = async () => {
        try {
          const response = await fetch('http://103.149.177.42:3333/rental');
          console.log('Response status:', response.status);
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('Data fetched from API:', data.data.rental); 
          // Ensure data.rental is an array
          if (data && Array.isArray(data.data.rental)) {
            setArmada(data.data.rental);
          } else {
            console.error('Expected an array but got:', data.rental);
          }
        } catch (error) {
          console.error('Fetch failed:', error);
        }
      };
  
      fetchArmada();
    }, []);

  return (
    <div className='container mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl font-bold mb-8'>Armada</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {armada.map(armada => (
          <div key={armada.id} className='border rounded-lg p-4 shadow-md'>
            <h2 className='text-2xl font-bold mb-2'>{armada.merk} ({armada.jenis})</h2>
            <p className='text-gray-600 mb-4'>{armada.harga}</p>
            <Link href={`/armada/${armada.id}`}>
            <div className='text-blue-600 hover:underline cursor-pointer'>Read More</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
