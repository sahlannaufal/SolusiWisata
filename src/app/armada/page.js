'use client'
import CardArmada from '@/asset/card/CardArmada';
import Navbar from '@/component/navbar/Navbar';
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
    <>
    <Navbar />
    <div className='container mx-auto pb-8 md:px-0 lg:px-40'>
      <h1 className='text-4xl text-center font-bold mb-8'>Armada</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {armada.length > 0 ? (
          armada.map((item) => (
            <CardArmada key={item.id} item={item} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
    </>
  );
}
