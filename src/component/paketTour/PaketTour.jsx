'use client'
import React, { useEffect, useState } from 'react'
import Card from '@/asset/card/Card'
import { useGetPaket } from '@/hooks/PaketHooks'

function PaketTour() {
  const [paketData, isLoadingPaket] = useGetPaket();

  return (
    <div className='px-40'>
      <p className='font-bold text-4xl text-center pb-10'>Paket Tour & Travel</p>
      <div className='flex space-x-6 mb-20'>
        { isLoadingPaket ? (
          <p>Loading...</p>
        ) : paketData ? (
          paketData.map((item) => (
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