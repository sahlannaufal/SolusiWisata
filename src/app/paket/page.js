'use client'
import Card from '@/asset/card/Card'
import Navbar from '@/component/navbar/Navbar';
import { useGetPaket } from '@/hooks/PaketHooks';

export default function Pakets() {
  const [paketData, isLoadingPaket] = useGetPaket();

  return (
    <>
    <Navbar />
    <div className=' grid px-4 md:px-20 lg:px-40 py-8 mb-10'>
      <div>
        <p className='font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-10'>Paket Tour</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-4 justify-items-center'>
          { isLoadingPaket ? (
            <p>Loading...</p>
          ) : paketData ? (
            paketData.map((item) => (
              <Card key={item.id} item={item}/>
            ))
          ) : (
            <p>No data available</p>
          )}
      </div>
    </div>
    </>
  );
}
