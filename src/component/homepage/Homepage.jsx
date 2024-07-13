'use client'
import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function Homepage() {
  return (
    <div className='flex flex-col justify-center md:flex-row lg:flex-row items-center lg:px-28 place-content-center lg:space-x-4'>
      <div className='pt-2 space-y-8 h-fit'>
        <div className='space-y-4'>
          <div className='font-bold text-2xl'>
            <p>Nikmati liburanmu</p> 
            <p>bersama</p>
            <p className='text-blue-700'>Solusi Wisata</p>
          </div>
          <p className='text-justify leading-normal'>
            Travel agent yang telah berpengalaman dalam <br/> 
            melayani banyak wisatawan lokal maupun asing <br/> 
            dalam hal layanan tour di Sumatera Barat
          </p>
          <Link href="https://wa.me/6282285639035" className=''>
            <p className='inline-block px-4 py-2 bg-brown-600 text-white rounded-lg w-20 text-center'>
              Contact
            </p>
          </Link>
        </div>
      </div>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col items-end justify-end content-end'>
          <Image
            src="/home1.jpg"
            alt="home"
            height={200}
            width={300}
            className='rounded-lg'
          />
          <Image
            src="/home3.png"
            alt="home"
            height={250}
            width={250}
            className='rounded-lg'
          />
        </div>
        <div>
          <Image
            src="/home2.png"
            alt="home"
            height={350}
            width={250}
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
