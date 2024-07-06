'use client'
import CardGallery from '@/asset/card/CardGallery'
import Navbar from '@/component/navbar/Navbar';
import { useGetArticle } from '@/hooks/ArticleHooks';
import { useEffect, useState } from 'react';

export default function Gallery() {
  const [articleData, isLoadingArticle] = useGetArticle();

  return (
    <div>
      <Navbar />
      <div className='container mx-auto pb-8 md:px-0 lg:px-40'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Gallery</h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
    </div>
  );
}
