'use client'
import React, { useEffect, useState } from 'react'
import Card from '@/asset/card/Card'

function PaketTour() {

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
    <div className='px-40'>
      <p className='font-bold text-4xl text-center pb-10'>Paket Tour & Travel</p>
      <div className='flex space-x-6 mb-20'>
        {paket.length > 0 ? (
          paket.map((item) => (
            <Card key={item.id} item={item}/>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  )
}

export default PaketTour