'use client'
import CardArmada from '@/asset/card/CardArmada'
import React, { useEffect, useState } from 'react';

function Armada() {

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
    <div className='bg-blue-300 px-40 py-8 bg-opacity-20'>
      <p className='font-bold text-4xl text-center pb-10'>Armada</p>
      <div className='flex space-x-6 mb-10'>
        {armada.length > 0 ? (
          armada.map((item) => (
            <CardArmada key={item.id} item={item} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  )
}

export default Armada