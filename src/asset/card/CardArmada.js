
import ButtonPesanSekarang from '../button/ButtonPesanSekarang'
import Image from 'next/image';
import Link from 'next/link';

function CardArmada({item}) {
  return (
          <div key={item.id} className=' w-80 rounded-3xl border-2'>
              <div className='relative h-80 overflow-hidden rounded-t-3xl'>
                <img className='absolute' src={`http://103.149.177.42:3333/${item.foto}`} alt="foto" />
              </div>
              <div className='space-y-4 mx-8 my-4'>
                <div className='space-y-1'>
                  <p className='font-bold text-xl leading-tight'>{item.merk} ({item.jenis})</p>
                      <ul class="list-disc text-base text-gray-600">
                          <li>{item.seat}</li>
                          <li>{item.fitur}</li>
                          <li>Tarif: {item.harga}</li>
                      </ul>
                </div>
                <div className='flex justify-end'>
                  <div className=''>
                  <ButtonPesanSekarang nama="Pesan Armada" url="https://wa.me/6282285639035"/>
                  </div>
                </div>
              </div>
            </div>

          // <Card key={item.id}
          //     className='max-w-xs max-h-28'
          //     renderImage={() => <Image width={200} height={250} src={`http://103.149.177.42:3333/${item.foto}`} alt="image 1" />}
          //   >
          //     <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
          //     {item.merk} ({item.jenis})
          //     </h5>
          //     <ul className='font-light text-sm text-gray-700 dark:text-gray-400'>
          //       <li>{item.seat}</li>
          //       <li>{item.fitur}</li>
          //       <li>Tarif: {item.harga}</li>
          //     </ul>
          //     <Button as={Link} color="dark" href="https://wa.me/6282285639035" className=''>
          //         Pesan Sekarang
          //       </Button>
          //   </Card>
  );
}

export default CardArmada