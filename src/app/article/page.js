'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CardArticle from '@/asset/card/CardArticle'
import Navbar from '@/component/navbar/Navbar';

// const articles = [
//   { id: 1, title: 'First Article', summary: 'Summary of the first article.' },
//   { id: 2, title: 'Second Article', summary: 'Summary of the second article.' },
//   // Tambahkan artikel lainnya sesuai kebutuhan
// ];

export default function Articles() {

  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('http://103.149.177.42:3333/articles');
      console.log('response status:', response.status);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('data fetched from API:', data.data.article);

      if (data && Array.isArray(data.data.article)) {
        setArticle(data.data.article);
      } else {
        console.log('Expected an array but got:', data.data.article);
      }
    }
    
    fetchArticle();
  }, []);

  return (
    <>
    <Navbar />
    <div className='container mx-auto pb-8 md:px-0 lg:px-40'>
      <h1 className='text-4xl font-bold mb-8'>Articles</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* {article.map(article => (
          <div key={article.id} className='border rounded-lg p-4 shadow-md'>
            <h2 className='text-2xl font-bold mb-2'>{article.judul}</h2>
            <p className='text-gray-600 mb-4'>{article.konten}</p>
            <Link href={`/article/${article.id}`}>
            <div className='text-blue-600 hover:underline cursor-pointer'>Read More</div>
            </Link>
          </div>
        ))} */}
        {article.length > 0 ? (
          article.map((item) => (
            <CardArticle key={item.id} item={item}/>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
    </>
  );
}
