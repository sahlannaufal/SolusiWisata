'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CardArticle from '@/asset/card/CardArticle'
import Navbar from '@/component/navbar/Navbar';
import { useGetArticle } from '@/hooks/ArticleHooks';

export default function Articles() {
  const [articleData, isLoadingArticle] = useGetArticle();

  return (
    <>
    <Navbar />
    <div className=' grid px-4 md:px-20 lg:px-40 py-8 mb-10'>
      <div>
        <p className='font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-10'>Article</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-4 justify-items-center'>
      {isLoadingArticle ? (
          <p>Loading...</p>
        ) : articleData ? (
          articleData.map((item) => (
            <CardArticle key={item.id} item={item} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
    </>
  );
}
