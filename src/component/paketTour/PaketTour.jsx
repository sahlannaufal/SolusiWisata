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
      <div className='flex flex-wrap space-x-4 space-y-4 justify-center'>
        { isLoadingPaket ? (
          <p>Loading...</p>
        ) : paketData ? (
          paketData.map((item) => (
            // <Card key={item.id} item={item}/>
            <Cardd key={item.id}
              className="max-w-xs"
              renderImage={() => <Image width={500} height={500} src={`http://103.149.177.42:3333/${item.foto}`} alt="image 1" />}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.destinasi}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.waktu}
              </p>
              <div className='flex justify-between'>
                  <div>
                    <p className='text-base font-medium'>Harga</p>
                    <p><span className='font-bold'>{item.harga}</span><span className='text-sm'>/Orang</span></p>
                  </div>
                <Button as={Link} color="dark" href="https://wa.me/6282285639035" className=''>
                  Pesan Sekarang
                </Button>
              </div>
            </Cardd>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  )
}

export default PaketTour;
