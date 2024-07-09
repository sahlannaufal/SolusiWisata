'use client'
import CardGallery from '@/asset/card/CardGallery'
import { useGetArticle } from '@/hooks/ArticleHooks';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from 'react';

function Gallery() {
  const [articleData, isLoadingArticle] = useGetArticle();

  return (
    <div className=' grid px-4 md:px-20 lg:px-40 py-8 mb-10'>
      <div>
        <p className='font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-10'>Gallery</p>
      </div>
      <div className='flex flex-wrap space-x-4 space-y-4 justify-center'>
        {isLoadingArticle ? (
          <p>Loading...</p>
        ) : articleData ? (
          articleData.slice(0,6).map((item) => (
            <CardGallery key={item.id} item={item} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  )
}

export default Gallery;
