'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

// const articles = [
//   { id: 1, title: 'First Article', content: 'Full content of the first article.' },
//   { id: 2, title: 'Second Article', content: 'Full content of the second article.' },
//   // Tambahkan artikel lainnya sesuai kebutuhan
// ];

export default function Article() {
  const [articles, setArticles] = useState([]);
  const { id } = useParams(); // Ambil ID artikel dari params navigasi
  const article = articles.find(article => article.id === Number(id));

  

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://103.149.177.42:3333/articles');
      console.log('response status:', response.status);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('data fetched from API:', data.data.article);

      if (data && Array.isArray(data.data.article)) {
        setArticles(data.data.article);
      } else {
        console.log('Expected an array but got:', data.data.article);
      }
    }
    
    fetchArticles();
  }, []);

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
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
  );
}
