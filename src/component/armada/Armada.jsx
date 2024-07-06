'use client'
import CardArmada from '@/asset/card/CardArmada'
import { useGetArmada } from '@/hooks/ArmadaHooks';
import React, { useEffect, useState } from 'react';

function Armada() {

  const [armadaData, isLoadingArmada] = useGetArmada();

  return (
    <div className='bg-blue-300 px-40 py-8 bg-opacity-20'>
      <p className='font-bold text-4xl text-center pb-10'>Armada</p>
      <div className='flex space-x-6 mb-10'>
        {isLoadingArmada ? (
          <p>Loading...</p>
        ) : armadaData ? (
          armadaData.map((item) => (
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