'use client'
import Card from '@/asset/card/Card'
import Navbar from '@/component/navbar/Navbar';
import { useGetPaket } from '@/hooks/PaketHooks';

export default function Pakets() {
  const [paketData, isLoadingPaket] = useGetPaket();

  return (
    <>
    <Navbar />
    <div className='md:px-0 lg:px-40 mb-16'>
      <h1 className='text-4xl text-center font-bold mb-8'>Paket Tour</h1>
      <div className='content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
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
