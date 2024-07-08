'use client'
import CardGallery from '@/asset/card/CardGallery'
import { useGetArticle } from '@/hooks/ArticleHooks';
import React from 'react'
import { useEffect, useState } from 'react';

function Gallery() {
  const [articleData, isLoadingArticle] = useGetArticle();

  return (
    <div className='px-4 md:px-20 lg:px-40 py-8 mb-10'>
      <div>
        <p className='font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-10'>Gallery</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-28 lg:gap-y-10'>
        {isLoadingArticle ? (
          <p>Loading...</p>
        ) : articleData ? (
          articleData.map((item) => (
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
