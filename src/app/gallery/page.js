'use client'
import CardGallery from '@/asset/card/CardGallery'
import { useEffect, useState } from 'react';
// const images = [
//   '/foto1.jpg',
//   '/foto2.jpg',
//   '/foto3.jpg',
//   // Tambahkan lebih banyak gambar sesuai kebutuhan
// ];

export default function Gallery() {

  const [articles, setArticles] = useState([]);

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


  return (
    <div>
      <div className='container mx-auto pb-8 md:px-0 lg:px-40'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Gallery</h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {articles.length > 0 ? (
          articles.map((item) => (
            // <div key={item.id} className='relative'>
            <CardGallery key={item.id} item={item} />
              
          ))
          ) :(
            <p>No available data</p>
          )
        }
        </div>
      </div>
    </div>
  );
}
