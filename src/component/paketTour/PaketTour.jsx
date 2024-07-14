'use client'
import React from 'react'
import Card from '@/asset/card/Card'
import { useGetPaket } from '@/hooks/PaketHooks'
import { Button, Card as Cardd } from "flowbite-react";
import Image from 'next/image';
import Link from 'next/link';

function PaketTour() {
  const [paketData, isLoadingPaket] = useGetPaket();

  return (
    <div className='flex flex-col content-center justify-center items-center px-8 md:px-20 lg:px-40 py-8'>
      <p className='font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-10'>Paket Tour & Travel</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-4 justify-items-center'>
        { isLoadingPaket ? (
          <p>Loading...</p>
        ) : paketData ? (
          paketData.slice(0,3).map((item) => (
            <Card key={item.id} item={item}/>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className='pt-2'>
      <Link href="/paket" className=' text-blue-900 font-medium rounded-lg' >
        Paket Selengkapnya
       </Link>      
      </div>
    </div>
  )
}

export default PaketTour;
