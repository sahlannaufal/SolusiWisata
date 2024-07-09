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
    <div className='container mx-auto pb-8 md:px-0 lg:px-40'>
      <h1 className='text-4xl font-bold mb-8'>Articles</h1>
      <div className='flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-6 mb-10'>
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
