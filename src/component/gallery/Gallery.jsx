'use client'
import CardGallery from '@/asset/card/CardGallery'
import { useGetArticle } from '@/hooks/ArticleHooks';
import React from 'react'
import { useEffect, useState } from 'react';
function Gallery() {
  const [articleData, isLoadingArticle] = useGetArticle();
  
  return (
    <div className='px-40 py-8 mb-10 '>
      <div>
      <p className='font-bold text-4xl text-center pb-10'>Gallery</p>
      </div>
      <div className='grid grid-cols-3 gap-x-28 gap-y-10'>
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

export default Gallery