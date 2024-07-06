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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
