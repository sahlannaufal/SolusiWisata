'use client'
import CardGallery from '@/asset/card/CardGallery'
import React from 'react'
import { useEffect, useState } from 'react';
function Gallery() {

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
    <div className='px-40 py-8 mb-10 '>
      <div>
      <p className='font-bold text-4xl text-center pb-10'>Gallery</p>
      </div>
      <div className='grid grid-cols-3 gap-x-28 gap-y-10'>
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
  )
}

export default Gallery