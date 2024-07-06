'use client';
import Navbar from '@/component/navbar/Navbar';
import { useGetArticle } from '@/hooks/ArticleHooks';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Article() {
  const [articleData, isLoadingArticle] = useGetArticle();
  const { id } = useParams(); // Ambil ID artikel dari params navigasi
  const article = articleData.find(article => article.id === Number(id));

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <>
    <Navbar />
    <div className='container mx-auto py-8 px-4 md:px-0'>
      <div className='max-w-3xl mx-auto'>
        <header className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>{article.judul}</h1>
          <p className='text-gray-600 text-sm'>By {article.penulis} | {article.created_at}</p>
        </header>
        <article className='prose prose-lg'>
          <img 
            src={`http://103.149.177.42:3333/${article.foto}`} 
            alt="Article Image" 
            className='mb-4 rounded-lg'
          />
          <p>{article.konten}</p>
        </article>
      </div>
    </div>
    </>
  );
}
