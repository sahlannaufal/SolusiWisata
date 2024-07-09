'use client'
import CardArmada from '@/asset/card/CardArmada';
import Navbar from '@/component/navbar/Navbar';
import { useGetArmada } from '@/hooks/ArmadaHooks';

export default function Articles() {
  const [armadaData, isLoadingArmada] = useGetArmada();

  return (
    <>
    <Navbar />
    <div className='container mx-auto pb-8 md:px-0 lg:px-40'>
      <h1 className='text-4xl text-center font-bold mb-8'>Armada</h1>
      <div className='flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-6 mb-10'>
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
