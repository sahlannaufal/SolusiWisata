import Link from 'next/link';
import React from 'react';
import { Button, Card as Cardd } from "flowbite-react";
import Image from 'next/image';

function Card({ item }) {
  return (
    <div className='w-96 rounded-3xl border-2'>
      <div className='relative h-80 overflow-hidden rounded-t-3xl'>
        <img className='absolute w-full h-full object-cover' src={`http://103.149.177.42:3333/${item.foto}`} alt="foto" />
      </div>
      <div className='space-y-4 mx-4 my-4'>
        <div className='space-y-1'>
          <p className='font-bold text-xl leading-tight'>{item.judul}</p>
          <p className='text-base text-gray-600 line-clamp-3'>{item.konten}</p>
          <Link href={`/article/${item.id}`} className='font-medium text-base text-blue-700'>Read More</Link>
        </div>
      </div>
    </div>

    // <Cardd key={item.id}
    //           className="max-w-xs"
    //           // imgSrc={`http://103.149.177.42:3333/${item.foto}`}
    //           renderImage={() => <Image width={500} height={200} src={`http://103.149.177.42:3333/${item.foto}`} alt="image 1"
    //           className="object-cover w-full h-full" />}
    //         >
    //           <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
    //             {item.judul}
    //           </h5>
    //           <p className="font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
    //             {item.konten}
    //           </p>
    //           <a href={`/article/${item.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
    //         </Cardd>
  );
}

export default Card;
