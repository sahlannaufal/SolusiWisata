'use client'
import React from 'react'
import { Button } from "flowbite-react";
import Link from "next/link";
import Image from 'next/image';

function Homepage() {
  return (
    <div className=' flex flex-col justify-center md:flex-row lg:flex-row justify-center items-center pb-52 px-28 place-content-center m-20 space-x-4'>
      <div className='pt-24 space-y-8 h-fit'>
        <div className=' space-y-4'>
          <div className='font-bold text-2xl'>
            <p className=''>Nikmati liburanmu </p> 
            <p>bersama </p>
            <p className='text-blue-700'> Solusi Wisata</p>
          </div>
          <p className=' text-justify leading-normal'>Travel agent yang telah berpengalaman dalam <br/> melayani banyak wisatawan lokal maupun asing <br/> dalam hal layanan tour di Sumatera Barat</p>
        <Button as={Link} color="dark" href="https://wa.me/6282285639035" className='w-20'>
          Contact
        </Button>
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
      
      {/* <div className='pt-28 max-h-96'>
        <div className='max-h-fit relative -left-60 -top-16 rounded-2xl'>
          <div className='h-80 w-96 rounded-2xl overflow-hidden relative shadow-xl'>
            <img className='absolute top-10 scale-150' src="./home1.jpg" alt="logo" />
          </div>
        </div>
        <div className='relative left-40 -top-80 pt-6 rounded-2xl'>
          <div className='h-64 w-48 -top-2 rounded-2xl overflow-hidden relative shadow-xl'>
            <img className='scale-125 absolute' src="./home2.png" alt="logo" />
          </div>
        </div>
        <div className='relative -left-44 -top-80 pt-6 rounded-2xl'>
          <div className='h-56 w-80 rounded-2xl overflow-hidden relative shadow-xl -top-6 left-8'>
            <img className='-top-8 absolute scale-110' src="./home3.png" alt="logo" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Homepage