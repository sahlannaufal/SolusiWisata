'use client'
import CardArmada from '@/asset/card/CardArmada';
import Navbar from '@/component/navbar/Navbar';
import { useGetArmada } from '@/hooks/ArmadaHooks';

export default function Articles() {
  const [armadaData, isLoadingArmada] = useGetArmada();

  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center px-4 md:px-20 lg:px-40 py-8 bg-opacity-20'>
      <p className='font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-10'>Armada</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-28 gap-y-4 justify-items-center'>
      {isLoadingArmada ? (
          <p>Loading...</p>
        ) : armadaData ? (
          armadaData.map((item) => (
            <CardArmada key={item.id} item={item} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
    </>
  );
}
